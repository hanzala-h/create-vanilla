import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorMessage } from './messagesUtils.js';

/**
 * Exits the process if the path specified exists.
 * @param {string} path - The path to check.
 * @param {string} [message] - The message to display if the path exists.
 * @returns {void}
 *
 * @example
 * exitIfPathExists('path/to/file', 'File already exists.');
 */
function exitIfPathExists(path, message = `Path ${path} already exists.`) {
  if (fs.existsSync(path)) {
    errorMessage(message);
    process.exit(1);
  }
}

/**
 * Copies files from the source to the destination.
 * Throws an error if the copying fails.
 * @param {string} source - The source path.
 * @param {string} destination - The destination path.
 * @param {Function} [callback=() => {}] - Optional callback function to execute after copying the files.
 * @returns {Promise<void>} A promise that resolves when the files are successfully copied.
 *
 * @example
 * copyFiles('path/to/source', 'path/to/destination', () => console.log('Files copied successfully!'));
 */
async function copyFiles(source, destination, callback = () => { }) {
  try {
    await fs.copy(source, destination);
    callback();
  } catch (err) {
    errorMessage(`Error copying files from ${source} to ${destination}: ${err.message}`);
    throw err;
  }
}

/**
 * Gets the directory name of the current module.
 * @param {string} importMetaUrl - The import.meta.url object.
 * @returns {string} The directory name.
 * @example
 * getDirname(import.meta.url);
 */
function getDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  return dirname(__filename);
}

export { exitIfPathExists, copyFiles, getDirname };
