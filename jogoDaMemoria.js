class JogoDaMemoria{
    //se mandar um obj o construtor ou a função que recebe a chave o nome do objeto vai extrair a propriedade da tela
    constructor({tela}){
        this.tela = tela

        this.heroisIniciais = [
            {img:'./src/batman.png', name:'batman'},
            {img:'./src/flash.png', name:'flash'},
            {img:'./src/groot.png', name:'groot'},
            {img:'./src/miranha.png', name:'homem-aranha'},
        ]
    }
    inicializar(){
        //vai pegar todas as funcoes da tela!
        //coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //Força a tela a usar o THIS de jogo da memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        
    }
    embaralhar(){
        const copias = this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatório
        .map(item =>{
            return Object.assign({},item,{id:Math.random() / 0.5})
        })
        // ordenar aleatoriamente
        .sort(()=>Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }

    jogar(){
        this.embaralhar()
    }
}