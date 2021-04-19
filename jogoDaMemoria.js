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
        this.iconePadrao = './src/padrao.png'
        this.heroisEscondidos = []
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
        //esperar 1 segundo para atualizar a tela
        setTimeout(()=>{
            this.esconderHerois(copias)
        }, 1000)
    }
    esconderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone padrao
        const heroiOcultos = herois.map(( {nome, id}) =>({
            id,
            nome,
            img:this.iconePadrao
        }))
        //atualizamos a tela
        this.tela.atualizarImagens(heroiOcultos)
        this.heroisOcultos = heroisOcultos
    }
    jogar(){
        this.embaralhar()
    }
}