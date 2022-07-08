function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var nam = document.getElementById("nam_row" + no);
    var des = document.getElementById("des_row" + no);


    var nam_data = nam.innerHTML;
    var des_data = des.innerHTML;


    nam.innerHTML = "<input type='text' id='nam_text" + no + "' value='" + nam_data + "'>";
    des.innerHTML = "<input type='text' id='des_text" + no + "' value='" + des_data + "'>";


}

function save_row(no) {
    var nam_val = document.getElementById("nam_text" + no).value;
    var des_val = document.getElementById("des_text" + no).value;


    document.getElementById("nam_row" + no).innerHTML = nam_val;
    document.getElementById("des_row" + no).innerHTML = des_val;


    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_nam = document.getElementById("nombre").value;
    var new_des = document.getElementById("descripcion").value;


    var table = document.getElementById("data_table");
    var table_len = (table.rows.length);
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='nam_row" + table_len + "'>" + new_nam + "</td><td id='des_row" + table_len + "'>" + new_des + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
}

function doSearch() {
    const tableReg = document.getElementById('data_table');
    const searchText = document.getElementById('buscar').value.toLowerCase();
    let total = 0;

    for (let i = 1; i < tableReg.rows.length; i++) {
        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');

        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            tableReg.rows[i].style.display = 'none';
        }
    }
}