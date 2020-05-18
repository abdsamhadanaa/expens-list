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
 
$('#submitTheItem').click(function () {
 com=$('#comment').val();

 buy=$('#amountOfpaying').val();
 

 if (currentMoney === 0 || currentMoney < buy ) {
    alert("Please add money ");
    }else{
    	currentMoney=currentMoney-buy;
 $('#current-money').val(currentMoney);
    }
     var task=$('<li></li>'); // var li=doc.createElement("li")
    task.text(taskvalue);
    $('ul').append(task); 
    $('input#comment').val('');

  function x(){
  $("#type-of-expenses").change(function(){
      var selectedCountry = $(this).children("option:selected").val();
     console.log(("#type-of-expenses").val());
 });



