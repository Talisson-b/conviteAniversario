AOS.init();

const dataDoEvento = new Date('Feb 01, 2024 20:00:00')

const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual
    const dias = Math.floor(distanciaAteOEvento / (1000 * 60 *60 * 24))
    const horas = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
    const minutos = Math.floor((distanciaAteOEvento % (1000 * 60 *60)) / (1000 * 60))
    const segundos = Math.floor((distanciaAteOEvento % (1000 * 60) ) / 1000)
    
    if(horas == 0) {
        document.getElementById('dataAniversario').innerHTML =  `${dias}d ${minutos}m ${segundos}s`;
    } else {
        document.getElementById('dataAniversario').innerHTML =  `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
    
},1000)