import { child_process } from '../requires';

const runWithConsoleInherit = (command: string, args: string[]) => {
    child_process.spawn(command, args, { stdio: 'inherit' });
}

export default runWithConsoleInherit;