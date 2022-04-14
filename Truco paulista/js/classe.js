
class carta{
    constructor(img, pontos,naipe,id,usada,manilha){
        this._img =img
        this._pontos =pontos
        this._naipe =naipe
        this._id =id
        this._usada=usada
        this._manilha=manilha
        }
    get img(){
        return this._img;
    }
    get pontos(){
        return this._pontos;
    }
    get id(){
        return this._id;
    }
    get usada(){
        return this._usada
}
get manilha(){
    return this._manilha
}
    
}

//na proxima voce vai colocar o tipo como atributo para identificar a manilha, pois nao tem como eles serem da mesma posicao se o resultado é diferente