let tableContainer = document.getElementById('myTable');


let table = document.createElement('table');

// let thead = document.createElement('thead');
// table.append(thead);

// let thead = table.createElement('thead'); // Error

let thead = table.createTHead();

// add tr inside table head:

// let tr1 = document.createElement('tr');
// thead.append(tr1);

let tr1 = thead.insertRow();

let theadData = ['ID','Name', 'Age'];
for(let t of theadData){
     let th = document.createElement('th');
     th.innerHTML = t;
     tr1.append(th);

    // insertCell() method is used to insert a cell in the current row.
    // let th = tr1.insertCell();
    // th.innerHTML = t;
}


function addRow(rowData){
    //  let tbody  =  table.querySelector('tbody')
    //  if(!tbody){
    //     tbody = table.createTBody();
    //  }
    let  tbody = table.querySelector('tbody') || table.createTBody();
    
    let tr = tbody.insertRow();
    for(let t of rowData){
    //    insertCell() method is used to insert a cell in the current row.
       let td = tr.insertCell();
       td.innerHTML = t;
   }
        
}

addRow([1,'John', 25]);
addRow([2,'Doe', 30]);
addRow([3,'Smith', 35]);














tableContainer.append(table);


