function Fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * Fatorial(n-1)
    }
}

let res = Fatorial(4)
console.log(`O fatorial de 4 é ${res}`)