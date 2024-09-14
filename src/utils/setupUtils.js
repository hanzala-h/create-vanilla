import { exec } from 'child_process';
import { promisify } from 'util';
import { errorMessage, infoMessage } from './messagesUtils.js';

const execPromise = promisify(exec);

export async function initializeGit(projectDir) {
  try {
    infoMessage('Initializing Git repository...');
    await execPromise('git init', { cwd: projectDir });
  } catch (error) {
    errorMessage('Failed to initialize Git repository:', error);
  }
}

export async function installDependencies(projectDir) {
  try {
    infoMessage('Installing dependencies...');
    await execPromise('npm install', { cwd: projectDir });
  } catch (error) {
    errorMessage('Failed to install dependencies:', error);
  }
}
