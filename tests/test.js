import { expect } from 'chai';
import { getDirname } from '../src/utils/filesUtils.js';

// Test suite for the getDirname function
describe('getDirname', () => {

  // Test case for validating the directory name extraction
  it('should return the directory name of a given file', () => {

    // Create a file URL to be used as input
    // This URL should represent a file location in the filesystem

    // Call the function to get the directory name
    // This function is expected to convert the file URL into a path and then get its directory name
    const result = getDirname(import.meta.url);

    // Define the expected result
    // The expected result is the directory part of the file URL
    const expected = 'C:\\Users\\hanzlah\\Desktop\\create-vanilla-kit\\tests'; // should be absokute path of the directory where the test file is located

    // Assert that the result matches the expected value
    // The test will pass if the result is equal to the expected value
    expect(result).to.equal(expected);

    // Add a debug statement to print the result in case of failure
    // This can help diagnose issues with the path conversion
    console.log(`Result Path: ${result}`);
  });

});
