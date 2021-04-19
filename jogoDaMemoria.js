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
    }
}