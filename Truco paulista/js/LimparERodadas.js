function limpar(){
    cartasEscolhidas.splice(0,1000)
    cartasNaoRepetidas.splice(0,20)
    for(let i=0;i<maoJogador.length;i++){
        maoJogador[i].src="img/original.jpg"
        maoJogador[i].classList.remove("carta1-img-Jogada")
        maoJogador[i].classList.remove("carta2-img-Jogada")
        maoJogador[i].classList.remove("carta3-img-Jogada")
        maoJogador[i].classList.remove("carta4-img-Jogada")
        maoJogador[i].classList.remove("fadeOut")
        maoJogador[i].style.border = "";
    }
    cartasJogadas.splice(0,20)
    maoJogador[0].classList.add("carta1-img-J")
    maoJogador[1].classList.add("carta2-img-J")
    maoJogador[2].classList.add("carta3-img-J")
    rodadaTime1.innerHTML=rodadasVencidasTime1
    rodadaTime2.innerHTML=rodadasVencidasTime2  
    botaoComecar.classList.remove("fadeOut")
    contRodadas++
}
