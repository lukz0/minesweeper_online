import runWithConsoleInherit from '../consoleUtils/runWithConsoleInherit';

const attachToTMUX: () => void = runWithConsoleInherit.bind(null, 'tmux', ['a', '-t', 'mwss']);

export default attachToTMUX;