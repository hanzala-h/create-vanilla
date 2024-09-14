import chalk from 'chalk';

/**
 * Display error message.
 * @param {string} message
 * @returns {void}
 * @example
 * errorMessage('Error message');
 */
function errorMessage(message) {
  console.error(chalk.red(message));
}

/**
 * Display info message.
 * @param {string} message
 * @returns {void}
 * @example
 * infoMessage('Info message');
 */
function infoMessage(message) {
  console.log(chalk.blue(message));
}


/**
 * Display success message.
 * @param {string} message
 * @returns {void}
 * @example
 * successMessage('Success message');
 */
function successMessage(message) {
  console.log(chalk.green(message));
}


/**
 * Display warning message.
 * @param {string} message
 * @returns {void}
 * @example
 * warningMessage('Warning message');
 */
function warningMessage(message) {
  console.log(chalk.yellow(message));
}

export { errorMessage, infoMessage, successMessage, warningMessage };
