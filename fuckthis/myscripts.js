'use strict';// why use a strict mode ??

function openForm() {
    //add Jquery to project to use (form.show() or form.hide())
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    //add Jquery to project to use (form.show() or form.hide())
    document.getElementById("myForm").style.display = "none";
}

function adding() {
    //less copy paste.. more learn and do 
    //https://code-boxx.com/create-table-from-array-javascript/
    var table = document.getElementById("youtubrs");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "new cell1";
    cell2.innerHTML = "new cell2";

}


//Save the data in the browser so it stays saved if we refreshed the page