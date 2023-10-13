const yargs = require('yargs');
const usage = 'Usage: scrap <document url> <css selector> ';
const options = yargs
  .usage(usage)
  .check((argv) => {
    // Check for the right numbers of arguments

    if (argv._.length < 2) {
      throw new Error('Missing arguments');
    } else if (argv._.length > 2) {
      throw new Error('Too many arguments');
    } else {
      return true;
    }
  })
  .help(true).argv;
const args = yargs.argv._; // Get the list of arguments ( list of strings )

module.exports = { args, usage };
