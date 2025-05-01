const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function searchJsFiles(dirPath) {
  try {
    const entries = await readdir(dirPath);

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        await searchJsFiles(fullPath); // 재귀 호출
      } else if (path.extname(entry) === '.js') {
        console.log(fullPath); // .js 파일만 출력
      }
    }
  } catch (err) {
    console.error(`Error reading ${dirPath}:`, err.message);
  }
}

searchJsFiles('C:/Users/jun01/Desktop/고려대/개발/KWEB/node_modules');