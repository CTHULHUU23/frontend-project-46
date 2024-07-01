import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import getExtension from './getFileExtension.js';

const parseBasedOnExtension = (contentFile, fileExtension) => {
  switch (fileExtension) {
    case '.json':
      return JSON.parse(contentFile);
    case '.yaml':
    case '.yml':
      return yaml.load(contentFile);
    default:
      throw new Error(`Unsupported file extension: ${fileExtension}. Support only .yaml, .yml and .json files.`);
  }
};

const parseData = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const contentFile = readFileSync(absolutePath, 'utf8');
  const fileExtension = getExtension(filePath);
  const jsonDataFile = parseBasedOnExtension(contentFile, fileExtension);
  return jsonDataFile;
};

export default parseData;
