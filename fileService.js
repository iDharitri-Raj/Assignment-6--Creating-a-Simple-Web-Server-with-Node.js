const fs = require("fs");
const path = require("path");

function readPublicFile(fileName) {
  const filePath = path.join(__dirname, "public", fileName);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = { readPublicFile };
