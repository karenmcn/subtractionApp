
var firstNum;
var secondNum;

  function getNumbers(){
    firstNum=Math.floor(Math.random()*10000);
    secondNum=Math.floor(Math.random()*10000);
    if(firstNum>secondNum){
    document.getElementById("biggerNum").innerHTML=firstNum;
    document.getElementById("smallerNum").innerHTML=secondNum;
    document.getElementById("answer").innerHTML=firstNum-secondNum;

    }
    else{
    document.getElementById("biggerNum").innerHTML=secondNum;
    document.getElementById("smallerNum").innerHTML=firstNum;
    document.getElementById("answer").innerHTML=secondNum-firstNum;
    }
  $(document).ready(function(){


  $("#answer").hide();
  });


      }
  getNumbers();



  var pawPrint=document.getElementById("pawPrint");
  pawPrint.onclick = getNumbers;




$(document).ready(function(){
  var kitten = $("#kitten");
  $("#kitten").click(function(){

  $("#answer").show();
  });
});
