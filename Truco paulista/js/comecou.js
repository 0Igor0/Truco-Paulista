var cartasEscolhidas=[];
var cartasNaoRepetidas=[]
var numeroRodada=0
var pontos1=0
var pontos2=0
botaoTerminar.style.display="none"
function popularCartas(){


    for(let i=0;i<1000;i++){
        var resultadoGlobal = Math.floor(Math.random() * 20 + 1);
        cartasEscolhidas[i]=cartas[resultadoGlobal].img
    }
  
    
    
    cartasNaoRepetidas = cartasEscolhidas.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    
}

var cartasJogadas=[]

function exibirCartas(){
    popularCartas()
var c1p=0
    var ci=0

 for(var x=0;x<13 ;x++){
   // dadosTime[x]._nome=unico[x]
       maoJogador[x]._img=cartasNaoRepetidas[x]
       
    }
    maoJogador[0].src=maoJogador[0]._img
    maoJogador[1].src=maoJogador[1]._img
    maoJogador[2].src=maoJogador[2]._img
    maoJogador[9].src=maoJogador[9]._img
    var y=0
           for(let u=0;c1p<13;){

               //console.log("mao:"+maoJogador[u]._img,"            "+"carta:"+ cartas[y]._img)

            if(maoJogador[u]._img==cartas[y]._img){
                
                maoJogador[u]._img=cartas[y]._img
                maoJogador[u]._pontos=cartas[y]._pontos
                maoJogador[u]._id=cartas[y]._id
                maoJogador[u]._naipe=cartas[y]._naipe
                maoJogador[u]._usada=cartas[y]._usada
               
                c1p++
                u++
                y=0
            }
            else{
                y++
            }
         
           }
     var vira=maoJogador[9]._id
     var manilha=vira+1
    
     for(let i=0;i<13;i++){
        if(vira==7){
            manilha=1
        }
         if(maoJogador[i]._id==manilha){
            maoJogador[i]._manilha=true
            maoJogador[i]._pontos=8
            if(maoJogador[i]._pontos==8){
                if(maoJogador[i]._naipe==4){
                    maoJogador[i]._pontos=11
                   
}
if(maoJogador[i]._naipe==3){
    maoJogador[i]._pontos=10
    
}
if(maoJogador[i]._naipe==2){
    maoJogador[i]._pontos=9
    
}

            }
            if(i<3){
                maoJogador[i].style.border = "2px solid gold";
            }
           
         }
     }
}
botaoPassar.classList.add("fadeOut")
var vez=0
//tiem 1 na vetical e 2 na horizontal
function comecar(){
    vez=1
    botaoPassar.classList.remove("fadeOut")
    setTimeout(function(){
        botaoComecar.classList.add("fadeOut")
    },500)
    
    exibirCartas()

}

var cartaJogada1;
var cartaJogada2;
var cartaJogada3;
var cartaJogada4;
//td vez quando uma carta for selecionada o id dela sera armazenado, no final sera comprado a maoir carta do array 1 e 2 pra obter o vencedor

function carta1(){
    numeroRodada++
    
        proximaRodada()
       
    
   
        carta1Jogador.classList.remove("carta1-img-J");
        carta1Jogador.classList.add("carta1-img-Jogada")
        cartaJogada1=maoJogador[0]._pontos
        cartasJogadas.push(maoJogador[0])
        
        vez++
    
  
}

function carta2(){
   
        proximaRodada()
    
    numeroRodada++
   
        carta2Jogador.classList.remove("carta2-img-J");
        carta2Jogador.classList.add("carta1-img-Jogada")
        cartaJogada1=maoJogador[1]._pontos
        cartasJogadas.push(maoJogador[1])
        
        vez++
    
}
function carta3(){
    
        proximaRodada()
    
    numeroRodada++
    if(vez==1){
    carta3Jogador.classList.remove("carta3-img-J");
    carta3Jogador.classList.add("carta1-img-Jogada")
    cartaJogada1=maoJogador[2]._pontos
    cartasJogadas.push(maoJogador[2])
    
    vez++
    }
}
var rodadasVencidasTime1=0;
var rodadasVencidasTime2=0;
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;
function passar(){
if(contRodadas==1){
    numeroRodada=0
}
if(vez==2){
    c1=0
    c2=0
    c3=0
    for(let i=0;vez==2;i++){
        var cj = Math.floor(Math.random() * 3 + 1);
        if(cj==1 && c1==0){
           
            setTimeout(function(){
            maoJogador[3].src=maoJogador[3]._img
            maoJogador[3].classList.add("carta2-img-Jogada")
            },1000)            
            cartaJogada2=maoJogador[3]._pontos
            cartasJogadas.push(maoJogador[3])
            c1++
            vez++
        }
        if(cj==2  && c2==0){
            
            setTimeout(function(){
                maoJogador[4].src=maoJogador[4]._img
                maoJogador[4].classList.add("carta2-img-Jogada")
               
            },1000)
            c2++
            cartasJogadas.push(maoJogador[4])
            cartaJogada2=maoJogador[4]._pontos
            vez++
    
   
    }
    if(cj==3 && c3==0){
        setTimeout(function(){
            
            maoJogador[5].src=maoJogador[5]._img
            maoJogador[5].classList.add("carta2-img-Jogada")
        },1000)
        c3++
        cartasJogadas.push(maoJogador[5])
        cartaJogada2=maoJogador[5]._pontos
        vez++
    }
}
}
botaoComecar
if(vez==3){
  c4=0
  c5=0
  c6=0
    for(let i=0;vez==3;i++){
    var cj = Math.floor(Math.random() * 3 + 1);
        if(cj==1 && c4==0){
            setTimeout(function(){
                maoJogador[6].src=maoJogador[6]._img
                maoJogador[6].classList.add("carta3-img-Jogada")
                
            },2000)
            cartaJogada3=maoJogador[6]._pontos
            cartasJogadas.push(maoJogador[6])
            c4++
            vez++
        }
        if(cj==2 && c5==0){
            
            setTimeout(function(){
                maoJogador[7].src=maoJogador[7]._img
                maoJogador[7].classList.add("carta3-img-Jogada")
            },2000)
            cartasJogadas.push(maoJogador[7])
            cartaJogada3=maoJogador[7]._pontos
            vez++
            c5++
        }
        if(cj==3 && c6==0){
            
            setTimeout(function(){
                maoJogador[8].src=maoJogador[8]._img
                maoJogador[8].classList.add("carta3-img-Jogada")
            },2000)
            cartaJogada3=maoJogador[8]._pontos
            cartasJogadas.push(maoJogador[8])
            c6++
            vez++
        }
    }
}


if(vez==4){
    
    var cj = Math.floor(Math.random() * 3 + 1);
    if(cj==1){
        cartasJogadas.push(maoJogador[10])
        setTimeout(function(){
            maoJogador[10].src=maoJogador[10]._img
            maoJogador[10].classList.add("carta4-img-Jogada")
        },3000)
      
        cartaJogada4=maoJogador[10]._pontos
        vez++
    }
    if(cj==2){
        cartasJogadas.push(maoJogador[11])
        setTimeout(function(){
            maoJogador[11].src=maoJogador[11]._img
            maoJogador[11].classList.add("carta4-img-Jogada")
        },3000)
       
        cartaJogada4=maoJogador[11]._pontos
        vez++
    }
    if(cj==3){
        cartasJogadas.push(maoJogador[12])
        setTimeout(function(){
            maoJogador[12].src=maoJogador[12]._img
            maoJogador[12].classList.add("carta4-img-Jogada")
        },3000)
       
        cartaJogada4=maoJogador[12]._pontos
        vez++
    }


}

var maior2=0 
var maior1=0

for(let i=0;i<13;i++){
    if(maoJogador[i]._pontos==8){
        if(maoJogador[i]._naipe==4){
            maoJogador[i]._pontos=11
        }
    }
}

if(cartaJogada1>cartaJogada3){
    maior1=cartaJogada1
}
else{
    maior1=cartaJogada3
}
if(cartaJogada2>cartaJogada4){
    maior2=cartaJogada2
}
else{
    maior2=cartaJogada4
}
console.log("primeira:" +cartaJogada1)
console.log("segunda:" +cartaJogada2)
console.log("terceira:" +cartaJogada3)
console.log("quarta:" +cartaJogada4)

console.log(maior1)
console.log(maior2)

if(maior1>maior2){
    rodadasVencidasTime1++
}
if(maior2>maior1){
    rodadasVencidasTime2++
}
var pontos1=0
var pontos2=0
setTimeout(function(){
    rodadaTime1.innerHTML=rodadasVencidasTime1
    rodadaTime2.innerHTML=rodadasVencidasTime2  
if(rodadasVencidasTime1==2){
    pontos1++
    pontosTime1.innerHTML=pontos1
    rodadasVencidasTime1=0
    rodadasVencidasTime2=0
    botaoTerminar.style.display="block"
    limpar()
}
if(rodadasVencidasTime2==2){
    pontos2++
    pontosTime2.innerHTML=pontos2
    rodadasVencidasTime1=0
    rodadasVencidasTime2=0
    botaoTerminar.style.display="block"
limpar()
}  
},3000)
vez=1
}
function proximaRodada(){
     
for(let i=0;i<cartasJogadas.length;i++){
    cartasJogadas[i].classList.add("fadeOut")
}
}

//é ´ra usar o id pra identificar a manilha
//https://igluonline.com/como-remover-elementos-duplicados-de-uma-array-no-javascript-es6/#:~:text=Usando%20set,ele%2C%20acabamos%20sem%20os%20repetidos.

//o plano é o array cartas percorrer o arrray mao jogador quando a .img for igual vc atribui os cartas[i] para os players 


