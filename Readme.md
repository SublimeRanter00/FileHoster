# Local File Hoster

- **Latest version:** `v2.2.1`
- This code was created as a simple project to quickly transfer files from my phone to my PC via the local network before **Link to Windows** became a thing
- It is an extremely WIP project with basically zero stress testing or bug testing as it is intended only for personal use in a local network
- It is also very useful to transfer files from Apple environment to your PC

![](https://i.imgur.com/sFcWx7j.png)

### Requirements:
- NodeJS and all the necessary files
- Git (Optional but recommended)
- All devices connected to the **same local network**

### Usage:
**Using git:**
- Clone the repo by running `git clone https://github.com/SublimeRanter00/FileHoster`
- Navigate inside the folder and run `npm install`
- Now run `node .` or `npm start` to start the server

**Note:** If you have already cloned the repo, you can just run `git pull origin main` to update it!

**Without git:**
- Go to [releases](https://github.com/SublimeRanter00/FileHoster/releases) tab
- Download "Source Code (zip)"
- Extract it
- Go inside the extracted folder and run `npm install`
- Now run `node .` or `npm start` to start the server

**Configuration File Usage:**

There is a `config.ini` present in the directory (if it is not present, run the program once and it will be created) inside which you can modify two values, `timestamp` and `port`.
- Default value for `timestamp` is `false`. It controls if the uploaded file should have a timestamp attached in front of its original name. Setting it to `true` will add a timestamp infront of the original filename
- Default value for `port` is `3000`. Change it to any port you wish if port 3000 is occupied
- **Note:** The value of `port` should always be between 0 and 65535!

### Known Bugs:
- None :)
> Please create a [new issue](https://github.com/SublimeRanter00/FileHoster/issues) if you find any!
