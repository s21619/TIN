const table = document.querySelector('#main-table');
const button = document.querySelector('#sub-button');
const fname_input = document.querySelector('#fname');
const lname_input = document.querySelector('#lname');
const email_input = document.querySelector('#email');
function addtable() {
    const fname = fname_input.value;
    const lname = lname_input.value;
    const email = email_input.value;
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
}
button.addEventListener('click', addtable);