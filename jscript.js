function calcu()
{
var interest;
var total;
var monthly;
var principal=document.getElementById("principal").value;
var time=document.getElementById("time").value;
var rate=document.getElementById("rate").value;
interest = (principal*time*rate)/100;

document.getElementById("tinterest").value="Rs."+interest;
// document.getElementById("demo").innerHTML=interest;
total = parseInt(interest) + parseInt(principal);
document.getElementById("total").value="Rs."+total;
monthly=(total/12);
document.getElementById("monthly").value= "Rs."+monthly;
return false;            

}
document.getElementById("myform").onsubmit=calcu;





