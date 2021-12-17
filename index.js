// Import all plugins
import * as bootstrap from 'bootstrap';

document.getElementById("Attack1").addEventListener("click", printAttack1);

function printAttack1() {
    let tag = document.createElement("p");
    let text = document.createTextNode(">Test");
    tag.appendChild(text);
    let log = document.getElementById('log_text');
    log.appendChild(tag);
}




function printAttack1() {
    let langs = ['Hacking into Mainframe','HTML','CSS'];

    let nodes = langs.map(lang => {
        let li = document.createElement('li');
        li.textContent = lang;
        return li;
    });

    //let text = document.createTextNode(">Test");
    // tag.appendChild(text);
    let log = document.getElementById('log_text');
    log.append(...nodes);
}