class JogoDaMemoria{
    //se mandar um obj o construtor ou a função que recebe a chave o nome do objeto vai extrair a propriedade da tela
    constructor({tela}){
        this.tela = tela

        this.heroisIniciais = [
            {img:'./src/batman.png', nome:'batman'},
            {img:'./src/flash.png', nome:'flash'},
            {img:'./src/groot.png', nome:'groot'},
            {img:'./src/miranha.png', nome:'homem-aranha'},
        ]
        this.iconePadrao = './src/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    inicializar(){
        //vai pegar todas as funcoes da tela!
        //coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //Força a tela a usar o THIS de jogo da memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoConfigurarSelecao(this.verificarSelecao.bind(this))
        
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
    verificarSelecao(id,nome){
        const item = {id,nome}
        //Verificando a quantidade de heróis selecionados e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                //adiciona em uma lista
                this.heroisSelecionados.push(item)
                break;
            case 1:
                //se a quantidade for 1 significa que o usuario só pode escolher mais 1
                const [opcao1] = this.heroisSelecionados
                //zerar a lista anterior mais de dois
                this.heroisSelecionados = []
                //condicional para verificar se id é igual
                if(opcao1.nome === item.nome && opcao1 !== item.id){
                    alert('Combinação correta!'+ item.nome)
                    return;
                }
                alert('combinação incorreta!')
                break;
        }
    }
    jogar(){
        this.embaralhar()
    }
}