
let jogador = 1; 

function clique(elemento){

    const quadrante  = elemento.attributes.quadrante.value ;
    elemento.attributes.mark.value = jogador 
    

    console.log( 'quadrante ' , quadrante)
    console.log( 'jogador ', jogador)
    

    if(jogador == 1){
        elemento.innerHTML = 'X'
    }else{
        elemento.innerHTML = 'O'
    }
    jogador == 1 ? jogador = 2: jogador = 1
    
    
}


