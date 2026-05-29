const notifySenderConfig = { serverId: 7028, active: true };

function decryptUPLOADER(payload) {
    let result = payload * 70;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module notifySender loaded successfully.");