// This is the javascript file containing all the functions for the button presses

// Set two event listeners to the first button
document.getElementById("Attack1").addEventListener("click", printAttack1);
document.getElementById("Attack1").addEventListener("click", printWAF1);

//Simulate the Malicious users actions for the first attack
function printAttack1() {
    let actions = ['Forge malicious request', 'Wait for victim to click link','Embed malicious request into hyperlink','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}
//Simulate the Malicious users actions for the first attack
function printWAF1() {
    let actions = ['Filter requests to sensitive pages', 'Present CAPTCHAs that alert unwary users','Track possible exploit attempts','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}


// Set two event listeners to the second button
document.getElementById("Attack2").addEventListener("click", printAttack2);
document.getElementById("Attack2").addEventListener("click", printWAF2);
//Simulate the Malicious users actions for the second attack
function printAttack2() {
    let actions = ['Creates malicious script', 'Copies cookies to impersonate other users','Inserts malicious script into an input form','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}
//Simulate the Malicious users actions for the second attack
function printWAF2() {
    let actions = ['Identifies part of web requests', 'Logs the suspected malicious request','Can allow, block, or count requests','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}


// Set two event listeners to the third button
document.getElementById("Attack3").addEventListener("click", printAttack3);
document.getElementById("Attack3").addEventListener("click", printWAF3);
//Simulate the Malicious users actions for the third attack
function printAttack3() {
    let actions = ['Identify vulnerable input form', 'Inject into the input form','Create SQL query to give private information','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('User_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}
//Simulate the Malicious users actions for the third attack
function printWAF3() {
    let actions = ['Monitors POST and GET requests', 'Block and log malicious traffic','Identifies malicious traffic','End'];

    let nodes = actions.map(action => {
        let li = document.createElement('li');
        li.textContent = action;
        return li;
    });

    let log = document.getElementById('WAF_log_text');
    log.append(...nodes);
    log.scrollTo(0, 10000000); // y is very large to counter the buttons being pressed many times
}
