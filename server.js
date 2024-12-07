const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ini = require("ini");
const app = express();
const os = require("os");

// Define the config file path
const configFilePath = path.join(__dirname, "config.ini");

// Check if config.ini exists, if not create it with default value (true)
if (!fs.existsSync(configFilePath)) {
  const defaultConfig = `[settings]\ntimestamp=false\nport=3000\n`;
  fs.writeFileSync(configFilePath, defaultConfig, "utf-8");
  console.log("config.ini created with default values.");
}

// Load configuration from config.ini
const config = ini.parse(fs.readFileSync(configFilePath, "utf-8"));
var useTimestamp = config.settings.timestamp;
var portValue = parseInt(config.settings.port, 10);

// To prevent user error and sets defaults for core functions
if (typeof useTimestamp !== "boolean") {
  console.error(
    `${useTimestamp} is an invalid value. Switching to default: false`
  );
  useTimestamp = false;
}
if (isNaN(portValue) || portValue < 0 || portValue >= 65536) {
  console.error(
    `${config.settings.port} is invalid. Switching to default port value: 3000`
  );
  portValue = 3000;
}

console.log(`Timestamp: ${useTimestamp}`);
console.log(`Port: ${portValue}`);

// Define the uploads directory path
const uploadDir = path.join(__dirname, "uploads");

// Check if the uploads directory exists, create if it doesn't
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("Uploads folder created.");
}

// Define the storage location and filename format for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Set the destination to the uploads directory
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname); // Get the original file extension
    const baseFilename = file.originalname;

    // Add timestamp only if useTimestamp is true
    const timestampedFilename = useTimestamp
      ? `${Date.now()}-${baseFilename}`
      : baseFilename;
    cb(null, timestampedFilename);

    console.log(`File uploaded to ${uploadDir}\\${timestampedFilename}`);
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

// This function gets the active connection and fixes the bug due to multiple network adapters. Haven't tested it yet but this should work. Hopefully.
// If this doesn't fix it, then I dont think it can be fixed -_-
function getActiveIPAddress() {
  const networkInt = os.networkInterfaces();

  for (const iface of Object.values(networkInt)) {
    for (const details of iface) {
      if (details.family === "IPv4" && !details.internal && details.address) {
        // Check if the address is within common private ranges
        if (
          details.address.startsWith("192.") ||
          details.address.startsWith("10.") ||
          (details.address.startsWith("172.") &&
            parseInt(details.address.split(".")[1], 10) >= 16 &&
            parseInt(details.address.split(".")[1], 10) <= 31)
        ) {
          return details.address;
        }
      }
    }
  }
  return "127.0.0.1";
}

const localIP = getActiveIPAddress();

app.listen(portValue, () => {
  console.log(`Server is running at http://${localIP}:${portValue}`);
});
