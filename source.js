var findItem=$("#search");//search var CurrentMoney=0;
var monthSalary=0;
var currentMoney=0;
var com =0;
var buy =0;
$("#submiTheintialValue").click(function (){
 monthSalary=$("#month-salary").val();
 currentMoney=$('#current-money').val();
  currentMoney=parseInt(currentMoney )+ parseInt(monthSalary);

  $('#current-money').val(currentMoney);
//hend();
console.log(monthSalary); // the new value
console.log(currentMoney);
});
 
$("#submitTheItem").click(function(){

 var tabelRows=$("<tr></tr>");
  $("#tabel").append((tabelRows));
  var type=$("<td></td>");
  type.append(tabelRows);
  type.text("abd");
});
  var findItem=$("#search");//search var CurrentMoney=0;
var monthSalary=0;
var currentMoney=0;
var com =0;
var buy =0;
$("#submiTheintialValue").click(function (){
 monthSalary=$("#month-salary").val();
 currentMoney=$('#current-money').val();
  currentMoney=parseInt(currentMoney )+ parseInt(monthSalary);

  $('#current-money').val(currentMoney);
//hend();
console.log(monthSalary); // the new value
console.log(currentMoney);
});
 
$("#submitTheItem").click(function(){

 var tabelRows=$("<tr></tr>");
  $("#tabel").append((tabelRows));
  var type=$("<td></td>");
  type.append(tabelRows);
  type.text("abd");
});
  