const fs = require('fs');
const path = require('path');

// Reading files
function readFile(filePath) {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

// Writing files
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`File written successfully`);
    });
}

// Updating files
function updateFile(filePath, content) {
    fs.appendFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`Content appended to file.`);
    });
}

// Deleting files
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`File deleted successfully`);
    });
}

// Creating directories
function createDirectory(dirPath) {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`Directory created successfully`);
    });
}

// Listing directory contents
function listDirectoryContents(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        console.log(files.map(file => path.basename(file)).join('\n'));
    });
}

// Main function to demonstrate usage
function main() {
    const filePath = './example.txt';
    const dirPath = './exampleDir';

    // Example usage
    readFile(filePath); // Read file
    writeFile('./newExample.txt', 'Hello, World'); // Write new file
    updateFile(filePath, '\nThis is an update.'); // Append to existing file
    deleteFile('./newExample.txt'); // Delete file
    createDirectory(dirPath); // Create directory
    listDirectoryContents(dirPath); // List directory contents

    // Cleanup
    deleteFile(filePath);
    fs.rmdirSync(dirPath, { recursive: true }); // Remove directory and its contents
}

main();
