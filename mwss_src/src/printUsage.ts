const usage: string = `Usage:
\tmwss MODE

Modes:
\t[s, start]:  start the minesweeper websocket server session
\t[ls, list]:  list current tmux sessions
\t[a, attach]: attach to the minesweeper websocket server session ([Ctrl-b d] to detach)
\t[ut, unit-test]: unit test the server
\t[stop]: stop the minesweeper websocket server session
\t[r, restart]: stop and start the minesweeper websocket server session`;

const printUsage: () => void = console.log.bind(console, usage);

export default printUsage;