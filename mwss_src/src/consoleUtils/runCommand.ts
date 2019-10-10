import { child_process } from '../requires';

const runCommand = (
    onOut: ((data: string) => void) | undefined,
    onErr: ((data: string) => void) | undefined,
    command: string[]
) => {
    const handle = child_process.spawn(command[0], command.slice(1));
    handle.stdin.end();
    handle.stdout.on('data', typeof onOut === 'function' ?
        onOut : () => { });
    handle.stderr.on('data', typeof onErr === 'function' ?
        onErr : () => { });
    return new Promise<number>((resolve) => {
        handle.on('close', (status: number) => resolve(status));
    });
}

export default runCommand;