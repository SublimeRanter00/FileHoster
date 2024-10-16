# Changelog

### v1.0:
- Initial release

### v2.0:
- Added `Changelog.md` file
- Added `config.ini` to specify if timestamp should be included in the uploaded filename [Default = true]
- Added ability to change the desired port in `config.ini` [Default = 3000]
- Added redundancies to ensure that `timestamp` and `port` will not throw an error in case of incorrect values. It will switch back automatically to their respective default values
- Added start script to `package.json`. You can now use `npm start` to run the server
- Fixed bug where it would throw an error if upload directory is not presented and had to be created manually
- Fixed bug where an extra file extension was being added again to the file
- Set main file to `server.js`. You can now run `node .` instead of specifying `node server.js`
- Server shows your PC's local IP in the console when ran instead of "localhost"