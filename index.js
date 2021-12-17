// Import all plugins
import * as bootstrap from 'bootstrap';

document.getElementById("Attack1").addEventListener("click", printAttack1);
document.getElementById("Attack1").addEventListener("click", printWAF1);

function printAttack1() {
    let actions = ['', 'Wait for victim to click link','Embed malicious request into hyperlink','Forge malicious request'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF1() {
    let actions = ['', 'Present CAPTCHAs that alert unwary users','Track possible exploit attempts','Filter requests to sensitive pages'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
}

document.getElementById("Attack2").addEventListener("click", printAttack2);
document.getElementById("Attack2").addEventListener("click", printWAF2);

function printAttack2() {
    let actions = ['', 'Wait for victim to click link','Embed malicious request into hyperlink','Forge malicious request'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF2() {
    let actions = ['', 'Present CAPTCHAs that alert unwary users','Track possible exploit attempts','Filter requests to sensitive pages'];

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
    let actions = ['', 'Wait for victim to click link','Embed malicious request into hyperlink','Forge malicious request'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);

}

function printWAF3() {
    let actions = ['', 'Present CAPTCHAs that alert unwary users','Track possible exploit attempts','Filter requests to sensitive pages'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
}
