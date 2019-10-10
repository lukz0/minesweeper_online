import { ScriptOutput, ScriptOutputType } from './ScriptOutput';

class ScriptOutputLog {
    log: ScriptOutput[] = [];
    logOut: (data: string) => void;
    logErr: (data: string) => void;
    status: number;

    constructor() {
        this.logOut = ((data: string) => {
            this.log.push(new ScriptOutput(ScriptOutputType.STDOUT, data));
        }).bind(this);
        this.logErr = ((data: string) => {
            this.log.push(new ScriptOutput(ScriptOutputType.STDERR, data));
        }).bind(this);
    }

    toString(): string {
        let resultArr: string[] = ['---[SCRIPT BEGINNING]---'],
            mode: ScriptOutputType;
        this.log.forEach((v: ScriptOutput) => {
            if (v.t !== mode) {
                mode = v.t;
                resultArr.push(`[ON ${v.t}]:`);
            }
            resultArr.push(v.data);
        });
        resultArr.push('---[SCRIPT EXITED'.concat(typeof this.status === 'undefined' ? '' : ' WITH CODE: '.concat(this.status.toString()), ']---'));
        return resultArr.join('\n');
    }

    setStatus(status: number): ScriptOutputLog {
        this.status = status;
        return this;
    }
}

export default ScriptOutputLog;