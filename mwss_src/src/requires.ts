import installWs from './consoleScripts/installWs';

const child_process = require('child_process');

let wsPromise: Promise<any>;
try {
    wsPromise = Promise.resolve(require('ws'));
} catch (e) {
    wsPromise = installWs().then(() => require('ws'));
}

export { child_process, wsPromise };