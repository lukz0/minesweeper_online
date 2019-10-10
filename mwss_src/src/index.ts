import mainChoices from './mainChoices';
import printUsage from './printUsage';

mainChoices.hasOwnProperty(process.argv[2]) ? mainChoices[process.argv[2]]() : printUsage();
