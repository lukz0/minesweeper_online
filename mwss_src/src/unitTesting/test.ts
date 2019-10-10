import { wsPromise } from '../requires';

enum wsConnectResult {
    success,
    failure
}

const webSocketURL = 'wss://localhost/api/v0/ws';

const unitTest = async () => {
    // TODO: unit test the http server

    let WebSocket = await wsPromise;
    let ws = new WebSocket(webSocketURL, { rejectUnauthorized: false });
    let result;
    switch (await new Promise((resolve: (status: wsConnectResult) => void) => {
        ws.onopen = (open: any) => {
            result = open;
            resolve(wsConnectResult.success)
        };
        ws.onerror = (err: any) => {
            result = err;
            resolve(wsConnectResult.failure);
        }
    })) {
        case wsConnectResult.success:
            if (ws.readyState === WebSocket.OPEN) {
                console.log('\x1b[32m', `connection to "${webSocketURL}" successful`, '\x1b[0m');
            } else {
                console.log('\x1b[31m', `connection to ${webSocketURL} opened but readystate is: ${ws.readyState}`, '\x1b[0m');
            }
            break;
        case wsConnectResult.failure:
            console.error('\x1b[31m', `ERROR: COULD NOT CONNECT TO "${webSocketURL}:`, '\x1b[0m');
            console.dir(result);
            console.log('\x1b[31m', `Is the minesweeper websocket server session started?`, '\x1b[0m');
            return;
    }

    // TODO: add more tests after the websocketserver is implemented

    ws.close();
}

export default unitTest;