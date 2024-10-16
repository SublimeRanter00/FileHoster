# Local File Hoster

- This code was created as a simple project to quickly transfer files from my phone to my PC via the local network before **Link to Windows** became a thing.
- It is an extremely WIP project with basically zero stress testing or bug testing as it is intended only for personal use in a local network.
- It is also very useful to transfer things from Apple environment to your PC

### Requirements:
- Node JS
- All files required by Node JS
- All devices connected to the same local network

### Usage:
- Clone the repo using `git clone` or download the source code as a `.zip` file and extract it
- Open the project folder and run `npm install` in a command line. It will install all the necessary dependencies.
- Run `node .`
- You will be able to access the server in **\<Host  IP\>:3000** (**Note**: Your IP will be displayed in the command prompt or powershell window when you run the program!)

**Configuration File Usage:**
There is a `config.ini` present in the directory (if it is not present, run the program once and it will be created) inside which you can modify two values, `timestamp` and `port`.
- Default value for `timestamp` is `true`. It controls if the uploaded file should have a timestamp attached in front of its original name. Setting it to `false` will retain the original filename
- Default value for `port` is `3000`. Change it to any port you wish if port 3000 is occupied
- **Note:** The value of `port` should always be between 0 and 65535!

> This is a one-off project, no updates or bug fixes will be done.