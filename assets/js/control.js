document.getElementById('signUp').addEventListener('click', function(){
    document.getElementById('signUp').className="xyz";
    document.getElementById('logIn').className="abc";
});

document.getElementById('logIn').addEventListener('click', function(){
    document.getElementById('logIn').className="new-active";
    document.getElementById('signUp').className="new-stop";
});
