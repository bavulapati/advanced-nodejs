const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'folder', 'global');
console.log(folderPath);

const files = fs.readdirSync(folderPath);

files.forEach(file => console.log(file));

