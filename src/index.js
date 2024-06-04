import parseData from './parser.js';

const genDiff = (filePath1, filePath2) => {
  const parsedFiles = {
    file1: parseData(filePath1),
    file2: parseData(filePath2),
  };

  return parsedFiles;
};

export default genDiff;
