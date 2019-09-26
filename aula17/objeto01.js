let amigo = {
    nome: 'Elian',
    idade: 25,
    peso: 65,
    sexo: 'M',
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)