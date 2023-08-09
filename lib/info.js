import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Directory = path.join(process.cwd(), 'info');

export function getSortedData() {
  const fileNames = fs.readdirSync(Directory);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(Directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}