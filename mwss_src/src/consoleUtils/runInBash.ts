import { child_process } from '../requires';

const runInBash = (
    onOut: ((data: string) => void) | undefined,
    onErr: ((data: string) => void) | undefined,
    command: string
): Promise<number> => {
    const bash = child_process.spawn('bash');
    bash.stdin.write(command);
    bash.stdin.end();
    bash.stdout.on('data', typeof onOut === 'function' ?
        onOut : () => { });
    bash.stderr.on('data', typeof onErr === 'function' ?
        onErr : () => { });
    return new Promise<number>((resolve) => {
        bash.on('close', (status: number) => resolve(status));
    });
}

export default runInBash;