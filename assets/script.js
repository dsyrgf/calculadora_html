const display = document.querySelector("input"); 

function digitar (valor) {
    // dispay. value += valor 
    display.value = display.value + valor 


}

function limpar(){
    display.value=" "

}

function calcular() {
    // eval ele transforma em string em algarismos js...
    display.value = eval(display.value)

}