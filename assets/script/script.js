
let jogador = 1; 

let quadrantesJ1 = ['jogador 1'];
let quadrantesJ2 = ['jogador 2']; 

const elementos = document.querySelectorAll('#jogo>button');


elementos.forEach(function(elemento , id){
    if(id % 2 == 1){
   elemento.style.backgroundColor = 'gray'
    }
    
})



function clique(elemento){
    
    elemento.disabled = true ;
    const quadrante  = elemento.attributes.quadrante.value ;
    
    if(jogador == 1){
        
        elemento.innerHTML = 'x'
        elemento.style.color = 'red'
        quadrantesJ1.push(quadrante)
        vencedor(quadrantesJ1)
        
        
        
    }
    
    if(jogador == 2){
       
        elemento.innerHTML = 'o'
        elemento.style.color = 'blue'
        quadrantesJ2.push(quadrante)
        vencedor(quadrantesJ2)
        
       
        
    }

    
    jogador == 1 ? jogador = 2: jogador = 1   
    
   
    
    

};


function desativarBt(){
    const botoes = document.querySelectorAll("button"); 

    botoes.forEach(function(elemento){
        elemento.disabled = true ;
    })
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

    
}


