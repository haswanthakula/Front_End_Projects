function myfun(){
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value 
    if (username=="admin" && password=="admin"){
        window.location="login_info_light.html"
    }
    else{
        document.getElementById('para').innerHTML="Invalid Credientials"
    }
}