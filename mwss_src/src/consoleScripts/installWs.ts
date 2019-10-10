import runCommand from '../consoleUtils/runCommand';

const installWs = (): Promise<number> => {
    return runCommand(undefined, undefined, ['npm', 'i', 'ws']);
}

export default installWs;