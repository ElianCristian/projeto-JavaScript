function Fatorial(n) {
    let fat = 1
    for(let c=n; c>1; c--){
        fat *= c
    }
    return fat
}

let res = Fatorial(5)
console.log(`Fatorial de 5 é ${res}`)