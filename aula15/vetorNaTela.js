let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)   
}
console.log('---------')
let pos = valores.indexOf(10)
console.log(`Valor encontrado na posicao ${pos}`)