enum ScriptOutputType {
    STDOUT = "stdout",
    STDERR = "stderr"
}

class ScriptOutput {
    t: ScriptOutputType;
    data: string;
    constructor(t: ScriptOutputType, data: string) {
        this.t = t;
        this.data = data;
    }
}

export { ScriptOutput, ScriptOutputType };