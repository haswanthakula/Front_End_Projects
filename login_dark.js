function myfun(){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value 
    if (username=="admin" && password=="admin"){
        window.location="login_info_dark.html"
    }
    else{
        document.getElementById('para').innerHTML="Invalid Credientials"
    }
}