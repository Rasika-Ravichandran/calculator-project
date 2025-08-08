function display1(val){
    document.getElementById("display").value = document.getElementById("display").value+val
    
}
function clear1(){
   document.getElementById("display").value="";
}
function displayresult(){
   var us=document.getElementById("display").value;
   var result=eval(us);
   document.getElementById("display").value=result;
}