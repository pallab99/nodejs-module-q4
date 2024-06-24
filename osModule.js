const os = require("os");

// Get the operating system type
console.log("Operating System Type:", os.type());

// Get the operating system platform
console.log("Platform:", os.platform());

// Get the operating system architecture
console.log("Architecture:", os.arch());

// Get the operating system version
console.log("Version:", os.version());

// Get the operating system release
console.log("Release:", os.release());

// Get the hostname of the machine
console.log("Hostname:", os.hostname());

// Get the home directory path
console.log("Home Directory:", os.homedir());

// Get the endianness of the system
console.log("Endianness:", os.endianness());

// Get the total system memory in bytes
console.log("Total Memory:", os.totalmem());

// Get the free system memory in bytes
console.log("Free Memory:", os.freemem());

// Get the load average
console.log("Load Average:", os.loadavg());

// Get the network interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// Get the temporary directory path
console.log("Temporary Directory:", os.tmpdir());

// Get the user info
console.log("User Info:", os.userInfo());

// Get the uptime of the system in seconds
console.log("Uptime:", os.uptime());
