function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = "Agora são" + " " + hora + " horas" + " e" + " " + minutos  + " minutos." 

if(hora >=0 && hora < 12){
    //BOM DIA!
    img.src = 'Manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'Tarde.png'
    document.body.style.background = '#b9846f'
    
} else {
    //BOA NOITE!
    img.src = 'Noite.png'
    document.body.style.background = '#184b5d'
}
}

