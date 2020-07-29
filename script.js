//common function for all section start
var mismatchAlert = document.getElementById("mismatchAlert");
var matchAlert = document.getElementById("matchAlert");

var notify = document.getElementById("notify");
function alertRemover(){
    matchAlert.style.display = "none";
    mismatchAlert.style.display = "none";
    
}

//common function for all end



// Random pin generate and display to monitor start
var pinGeneratorBtn = document.getElementById("pinGeneratorBtn");
var generatedPinShow = document.getElementById("generatedPinShow");

pinGeneratorBtn.addEventListener("click", function(){
    var randomRange = [];
  for(var i=1000; i<9999; i++){
      randomRange.push(i);
  }
   var random = Math.ceil(Math.random()*8999);
   generatedPinShow.value = randomRange[random];

   alertRemover();
   fontAndColorFixer();
   confirmationPinShow.value="";
   confirmationPinSubmit.disabled=false;


   confirmationPinSubmit.style.backgroundColor="#495BC3";
    confirmationPinSubmit.style.color="white";
   
}
);

// Random pin generate and display to monitor start


// pin confirmation section start

var slicer = document.getElementById("slicer");

slicer.addEventListener("click", function(){
    
   confirmationPinShow.value = confirmationPinShow.value.slice(0,-1);
   if(confirmationPinShow.value.length<4){
       alertRemover();
       
   }
});


var clear = document.getElementById("clear");

clear.addEventListener("click",function(){
    confirmationPinShow.value="";
    alertRemover();
   
});


var confirmationPinShow = document.getElementById("confirmationPinShow");
var confirmationPinSubmit = document.getElementById("confirmationPinSubmit");

confirmationPinSubmit.addEventListener("click", function(){
    if(confirmationPinShow.value.length==4){
        if(confirmationPinShow.value==generatedPinShow.value){
             matchAlert.style.display = "block";
        }else{
             mismatchAlert.style.display = "block";
        }
    }else{
        confirmationPinShow.value="input 4 digit number";
        confirmationPinShow.style.color = "red";
        confirmationPinShow.style.fontSize="20px";
    }

});


confirmationPinShow.addEventListener("click",function(){
    confirmationPinShow.value = "";
    alertRemover();
});


// pin confirmation section end
