document.getElementById('signUp').addEventListener('click', function(){
    document.getElementById('signUp').className="xyz";
    document.getElementById('logIn').className="abc";
});

document.getElementById('logIn').addEventListener('click', function(){
    document.getElementById('logIn').className="new-active";
    document.getElementById('signUp').className="new-stop";
});


document.getElementById('btm-line1').addEventListener('click', function(){
   document.getElementById('div-border').className="div-border";
});
document.getElementById('btm-line2').addEventListener('click', function(){
    document.getElementById('div-border2').className="div-border";
 });

 document.getElementById('btm-line1').addEventListener('keyup', function(){
    document.getElementById('div-border').className="div-border-edit";
 });
 document.getElementById('btm-line2').addEventListener('keyup', function(){
     document.getElementById('div-border2').className="div-border-edit";
  });
       function blurColor() {
           var emailName = document.getElementById('btm-line1').nodeValue;
       }
 document.getElementById('btm-line2').addEventListener('blur', function(){
    var emailName = document.getElementById('btm-line2').nodeValue;
    alert(emailName);
     document.getElementById('div-border2').className="div-border-edit-blur";
  });
  
 