import { readFileSync } from 'fs';
import path from 'path';

const genDiff = (filePath1, filePath2) => {
  const absolutePath1 = path.resolve(process.cwd(), filePath1);
  const absolutePath2 = path.resolve(process.cwd(), filePath2);
  const contentFile1 = readFileSync(absolutePath1, 'utf8');
  const contentFile2 = readFileSync(absolutePath2, 'utf8');
  const jsonDataFile1 = JSON.parse(contentFile1);
  const jsonDataFile2 = JSON.parse(contentFile2);

  const parsedFiles = {
    file1: jsonDataFile1,
    file2: jsonDataFile2,
  };

  return parsedFiles;
};

export default genDiff;
