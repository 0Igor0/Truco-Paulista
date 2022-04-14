var maoJogador=[]
maoJogador[0]=new carta("",0,0,0);
maoJogador[0]=document.querySelector("#m1-c1")
maoJogador[1]=new carta("",0,0,0);
maoJogador[1]=document.querySelector("#m1-c2")
maoJogador[2]=new carta("",0,0,0);
maoJogador[2]=document.querySelector("#m1-c3")
maoJogador[3]=new carta("",0,0,0);
maoJogador[3]=document.querySelector("#m2-c1")
maoJogador[4]=new carta("",0,0,0);
maoJogador[4]=document.querySelector("#m2-c2")
maoJogador[5]=new carta("",0,0,0);
maoJogador[5]=document.querySelector("#m2-c3")
maoJogador[6]=new carta("",0,0,0);
maoJogador[6]=document.querySelector("#m3-c1")
maoJogador[7]=new carta("",0,0,0);
maoJogador[7]=document.querySelector("#m3-c2")
maoJogador[8]=new carta("",0,0,0);
maoJogador[8]=document.querySelector("#m3-c3")
maoJogador[9]=new carta("",0,0,0);
maoJogador[9]=document.querySelector(".manilha-posicao")
maoJogador[10]=new carta("",0,0,0);
maoJogador[10]=document.querySelector("#m4-c1")
maoJogador[11]=new carta("",0,0,0);
maoJogador[11]=document.querySelector("#m4-c2")
maoJogador[12]=new carta("",0,0,0);
maoJogador[12]=document.querySelector("#m4-c3")
var cartas=[]


cartas[0] =new carta("img/1.jpg",5,4,1,false)
cartas[1] = new carta("img/2.jpg",6,4,2,false)
cartas[2] = new carta("img/3.jpg",7,4,3,false)
cartas[3] = new carta("img/4.jpg",1,4,4,false)
cartas[4] = new carta("img/j.jpg",3,4,6,false)
cartas[5] = new carta("img/k.jpg",4,4,7,false)
cartas[6] = new carta("img/q.jpg",2,4,5,false)
cartas[7] =new carta("img/asCopas.jpg",5,2,1,false)
cartas[8] =new carta("img/duqueCopas.jpg",6,2,2,false)
cartas[9] =new carta("img/ternoCopas.jpg",7,2,3,false)
cartas[10] =new carta("img/quatroCopas.jpg",1,2,4,false)
cartas[11] =new carta("img/jCopas.jpg",3,2,6,false)
cartas[12] =new carta("img/qCopas.jpg",2,2,5,false)
cartas[13] =new carta("img/kCopas.jpg",4,2,7,false)
cartas[14] =new carta("img/asEspadilha.jpg",5,3,1,false)
cartas[15] =new carta("img/duqueEspadilha.jpg",6,3,2,false)
cartas[16] =new carta("img/ternoEspadilha.jpg",7,3,3,false)
cartas[17] =new carta("img/quatroEspadilha.jpg",1,3,4,false)
cartas[18] =new carta("img/qEspadilha.jpg",2,3,5,false)
cartas[19] =new carta("img/jEspadilha.jpg",3,3,6,false)
cartas[20] =new carta("img/kEspadilha.jpg",4,3,7,false)

var C1FP =false; var C2FP =false; var C3FP =false;
var botao=document.querySelector(".comecar")
var botaoTerminar=document.querySelector(".Terminar")
var carta1Jogador=document.querySelector(".carta1-img-J")
var carta2Jogador=document.querySelector(".carta2-img-J")
var carta3Jogador=document.querySelector(".carta3-img-J")

var cartaDaManilha=document.querySelector(".manilha-posicao");
var posicoes=[]
var manilha1=document.querySelector(".manilha1")
var manilha2=document.querySelector(".manilha2")
var manilha3=document.querySelector(".manilha3")

var vezJogadorJogar=[]
var cartasRemovidas=[]
var jogoComecou=false;
var botaoPassar=document.querySelector(".passar")
var botaoComecar=document.querySelector(".comecar")
var jogoComecou=false

var contJogadas=0;

var arrayClone=[]

var rodadaTime1=document.querySelector("#rodadas1")
var rodadaTime2=document.querySelector("#rodadas2")

var pontosTime1=document.querySelector("#pontosTime1")
var pontosTime2=document.querySelector("#pontosTime2")

var contRodadas=0
/*variaveis com nome cartas:
1-"cartas"-é um array, cada elemento é uma instancia da classe carta, ela serve para guardar os dados das cartas
2-"carta1Jogador"serve para separar as cartas da propia mão, para disparar eventos com elas
3-"cartaDaManilha"é a carta da manilha
4-"cartasRemovidas"serve para resetar as cartas após uma rodada
*/