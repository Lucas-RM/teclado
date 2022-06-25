document.querySelector('body').addEventListener('keydown', function(event) {

    document.querySelector('.a').innerHTML = "O código da tecla pressionada é : <br> <span>" + event.keyCode + "</span>"

})