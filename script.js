//selecting values
var nameval=""
var ageval=""
var genderval=""
var courseval=""
var mailval=""
let rowCount = 0;
//click function
function getvalues(){
    debugger

    var nameval=document.getElementById("name")
var ageval=document.getElementById("age");
var selectedGender = document.querySelector('input[name="gender"]:checked');
var courseval=document.getElementById("course");
var mailval=document.getElementById("email");
   
    var nameval=nameval.value;
    var ageval=ageval.value;
    var selectedGender=selectedGender.value;
    var courseval=courseval.value;
    var mailval=mailval.value
 var table=document.getElementById("right-table")
 
 let row = table.insertRow(-1)
 row.className = rowCount % 2 === 0 ? "even" : "odd";
 let c1 = row.insertCell(0);
 let c2 = row.insertCell(1);
 let c3 = row.insertCell(2);
 let c4 = row.insertCell(3);
 let c5= row.insertCell(4);
 let c6=row.insertCell(5)
 c1.innerText = nameval
 c2.innerText =ageval
 c3.innerText = selectedGender
 c4.innerText=courseval;
 c5.innerText=mailval;
 c6.innerHTML='<button class=delbtn onclick="deletebtn(this)">Delete</button>'
document.getElementById("name").value="";
document.getElementById("age").value="";

document.getElementById("course").value="JAVASCRIPT";
document.getElementById("email").value="";


}
function deletebtn(row){
    debugger
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('right-table').deleteRow(i);
}