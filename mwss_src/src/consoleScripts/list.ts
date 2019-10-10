import runInBash from '../consoleUtils/runInBash';
import ScriptOutputLog from '../consoleUtils/ScriptOutputLog';

const listTmux = (): Promise<ScriptOutputLog> => {
    const sol = new ScriptOutputLog();
    return runInBash(sol.logOut, sol.logErr, 'tmux ls').then((status: number) => {
        return sol.setStatus(status);
    });
}

export default listTmux;