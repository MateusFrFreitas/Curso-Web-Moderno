function teste1(num) {
    if(num > 7)
        console.log(num)
        //console.log('Final')
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com ';', não usar com as estruturas
        console.log(num)
    }
}

console.log(6)
console.log(8)