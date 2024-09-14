import path from 'path';
import inquirer from 'inquirer';
import { program } from 'commander';
import { exitIfPathExists, copyFiles, getDirname } from './utils/filesUtils.js';
import { errorMessage, infoMessage, successMessage } from './utils/messagesUtils.js';
import { initializeGit, installDependencies } from './utils/setupUtils.js';

export default function createVanillaKit() {
  program
    .version('1.0.0')
    .description('A simple CLI for creating new projects')
    .argument('<project-name>', 'Name of the project')
    .option('-t, --template <template>', 'Specify a template', 'default')
    .action(async (projectName, options) => {
      const projectDir = path.join(process.cwd(), projectName);
      const __dirname = getDirname(import.meta.url);

      exitIfPathExists(projectDir, 'Directory already exists. Please choose a different name.');

      infoMessage(`Creating a new project in ${projectDir}...`);

      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'template',
          message: 'Which template would you like to use?',
          choices: ['STATIC', 'EXPRESS'],
          default: 'STATIC',
        },
        {
          type: 'confirm',
          name: 'useGit',
          message: 'Would you like to initialize a Git repository?',
          default: true,
        },
        {
          type: 'confirm',
          name: 'installDependencies',
          message: 'Would you like to install dependencies?',
          default: true,
        }
      ]);

      const template = answers.template.toLowerCase();
      const templateDir = path.join(__dirname, '../templates', template);

      try {
        await copyFiles(templateDir, projectDir, async () => {
          if (answers.useGit) {
            await initializeGit(projectDir);
            successMessage('Initialized a Git repository.');
          }

          if (answers.installDependencies) {
            await installDependencies(projectDir);
            successMessage('Installed dependencies.');
          }

          infoMessage('Project created successfully!');
          successMessage('Happy Coding!!');
        });
      } catch (error) {
        errorMessage('An error occurred:', error.message);
      }
    });

  program.parse(process.argv);
}
