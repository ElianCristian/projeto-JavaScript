// Condições aninhadas
var data = new Date()
var hora = data.getHours()
console.log(`São exatamente ${hora}h`)
if (hora > 4 && hora <= 12) {
    console.log('Bom Dia!')
} 
else if(hora > 12 && hora <= 18) {
    console.log('Boa Tarde!')    
}
else if(hora >= 0 && hora <= 4){
    console.log('Boa Madrugada')
}
else {
    console.log('Boa Noite!')
}
