function addfun(){
    let a = document.getElementById('firstnum').value
    let b = document.getElementById('secondnum').value
    let result = document.getElementById('para')

    a = parseInt(a)
    b = parseInt(b)

    let sum = a+b

    result.innerHTML = sum

}

function subfun(){
    let a = document.getElementById('firstnum').value
    let b = document.getElementById('secondnum').value
    let result = document.getElementById('para')

    a = parseInt(a)
    b = parseInt(b)

    let sum = a-b

    result.innerHTML = sum

}

function multfun(){
    let a = document.getElementById('firstnum').value
    let b = document.getElementById('secondnum').value
    let result = document.getElementById('para')

    a = parseInt(a)
    b = parseInt(b)

    let sum = a*b

    result.innerHTML = sum

}

function divfun(){
    let a = document.getElementById('firstnum').value
    let b = document.getElementById('secondnum').value
    let result = document.getElementById('para')

    a = parseInt(a)
    b = parseInt(b)

    let sum = a/b

    result.innerHTML = sum

}