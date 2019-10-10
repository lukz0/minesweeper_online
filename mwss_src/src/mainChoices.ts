import startMWSS from './consoleScripts/start';
import listTmux from './consoleScripts/list';
import unitTest from './unitTesting/test';
import attachToTMUX from './consoleScripts/attach';
import stopMWSS from './consoleScripts/stop';
import ScriptOutputLog from './consoleUtils/ScriptOutputLog';


const s = async () => {
    console.log('starting mwss:');
    let scriptOutput: ScriptOutputLog = await startMWSS();
    console.log(scriptOutput.toString());
    if (scriptOutput.status === 0) console.log('mwss started');
}

const ls = async () => {
    console.log('List of started tmux sessions:');
    let scriptOutput: ScriptOutputLog = await listTmux();
    console.log(scriptOutput.toString());
}

const ut = unitTest;

const a = async () => {
    attachToTMUX();
}

const stop = async () => {
    console.log('stopping mwss:');
    let scriptOutput: ScriptOutputLog = await stopMWSS();
    console.log(scriptOutput.toString());
    if (scriptOutput.status === 0) console.log('mwss stopped');
}

const r = async () => {
    await stop();
    await s();
}

const choices: { [s: string]: () => Promise<void> } = {
    's': s, 'start': s,
    'ls': ls, 'list': ls,
    'a': a, 'attach': a,
    'ut': ut, 'unit-test': ut,
    'stop': stop,
    'r': r, 'restart': r
};

export default choices;