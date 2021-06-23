{
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera) 
            } 
        } 
    } 
}

console.log(sera) 
/*
   * em algumas linguagens as variaveis só são visiveis
   * em determinado bloco, em JS, são visíveis/declaradas
   * em qualquer lugar
*/

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // não é definida, exclusiva da função

/*
    * window é global, toda variável criada fora
    * de uma função irá para window
    * Ex: window.a
*/