import runInBash from '../consoleUtils/runInBash';
import ScriptOutputLog from '../consoleUtils/ScriptOutputLog';

const stopMWSS = (): Promise<ScriptOutputLog> => {
    const sol = new ScriptOutputLog();
    return runInBash(sol.logOut, sol.logErr, 'tmux kill-session -t mwss').then((status: number) => {
        return sol.setStatus(status);
    });
}

export default stopMWSS;