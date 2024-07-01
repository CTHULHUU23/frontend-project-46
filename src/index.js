import parseData from './parsers.js';
import buildDiff from './buildDiff.js';

const genDiff = (filePath1, filePath2) => {
  const obj1 = parseData(filePath1);
  const obj2 = parseData(filePath2);
  const diff = buildDiff(obj1, obj2);

  return diff;
};

export default genDiff;
