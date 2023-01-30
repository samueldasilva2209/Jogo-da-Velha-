
let jogador = 1; 

let quadrantesJ1 = ['jogador 1'];
let quadrantesJ2 = ['jogador 2']; 

const elementos = document.querySelectorAll('#jogo>button');
const mudaCor = (jogador) => { 
    if(jogador == 1){
        document.querySelector('.play-1').style.color = 'white'
        document.querySelector('.play-2').style.color = 'blue'
    }else{
        document.querySelector('.play-2').style.color = 'white'
        document.querySelector('.play-1').style.color = 'red'
    }
}

function clique(elemento){
    
    elemento.disabled = true ;
    const quadrante  = elemento.attributes.quadrante.value ;
    
    if(jogador == 1){
        elemento.innerHTML = 'x'
        elemento.style.color = 'red'
        quadrantesJ1.push(quadrante)
        vencedor(quadrantesJ1) 
        mudaCor(jogador) 

    }
    
    if(jogador == 2){
        elemento.innerHTML = 'o'
        elemento.style.color = 'blue'
        quadrantesJ2.push(quadrante)
        vencedor(quadrantesJ2) 
        mudaCor(jogador)      
    }
    jogador == 1 ? jogador = 2: jogador = 1   
    
};


function desativarBt(){
    const botoes = document.querySelectorAll("button"); 
    const btJoogarNovamente = document.querySelector('#again')

    botoes.forEach(function(elemento){
        elemento.disabled = true ;
    })

    btJoogarNovamente.style.display = 'block';
}

function vencedor(arr){

    const win = document.querySelector('#win'); 
  
    if(arr.includes('1') && arr.includes('2') && arr.includes('3')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    }
    else if(arr.includes('4') && arr.includes('5') && arr.includes('6')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(arr.includes('7') && arr.includes('8') && arr.includes('9')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(arr.includes('1') && arr.includes('5') && arr.includes('9')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(arr.includes('3') && arr.includes('5') && arr.includes('7')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    }
    else if(arr.includes('1') && arr.includes('4') && arr.includes('7')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(arr.includes('2') && arr.includes('5') && arr.includes('8')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(arr.includes('3') && arr.includes('6') && arr.includes('9')){
        win.innerHTML = `vitória do ${arr[0]}`
        desativarBt()
    } 
    else if(quadrantesJ1.length == 6){
        win.innerHTML = `Deu velha`
        desativarBt()
    }

    
}

const jogarNovamente = () => {
    location.reload()
}