import runInBash from '../consoleUtils/runInBash';
import ScriptOutputLog from '../consoleUtils/ScriptOutputLog';

const startMWSS = (): Promise<ScriptOutputLog> => {
    const sol = new ScriptOutputLog();
    return runInBash(sol.logOut, sol.logErr, 'tmux start-server').then((status: number) => {
        return status === 0 ? runInBash(sol.logOut, sol.logErr, 'tmux new-session -d -s mwss') : status;
    }).then((status: number) => {
        return status === 0 ? runInBash(sol.logOut, sol.logErr, 'tmux new-window -t mwss:1') : status;
    }).then((status: number) => {
        return status === 0 ? runInBash(sol.logOut, sol.logErr, `tmux send-keys -t mwss:1 ~/minesweeperOnline/websocketserver${process.platform === 'win32' ? '.exe' : ''} C-m`) : status;
    }).then((status: number) => {
        return sol.setStatus(status);
    });
}

export default startMWSS;