// Import all plugins
import * as bootstrap from 'bootstrap';

document.getElementById("Attack1").addEventListener("click", printAttack1);
document.getElementById("Attack1").addEventListener("click", printWAF1);

function printAttack1() {
    let actions = ['End', 'Wait for victim to click link','Embed malicious request into hyperlink','Forge malicious request'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF1() {
    let actions = ['End', 'Present CAPTCHAs that alert unwary users','Track possible exploit attempts','Filter requests to sensitive pages'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
}
// Prints both logs for Attack 2: Cross-site Scripting
document.getElementById("Attack2").addEventListener("click", printAttack2);
document.getElementById("Attack2").addEventListener("click", printWAF2);

function printAttack2() {
    let actions = ['End', 'Copies cookies to impersonate other users','Inserts malicious script into an input form','Creates malicious script'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF2() {
    let actions = ['End', 'Logs the suspected malicious request','Can allow, block, or count requests','Identifies part of web requests'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
}

document.getElementById("Attack3").addEventListener("click", printAttack3);
document.getElementById("Attack3").addEventListener("click", printWAF3);

function printAttack3() {
    let actions = ['End', 'Inject into the input form','Create SQL query to give private information','Identify vulnerable input form'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF3() {
    let actions = ['End', 'Block and log malicious traffic','Identifies malicious traffic','Monitors POST and GET requests'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
}
