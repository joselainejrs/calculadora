function botao( valor ){
    // opção 1
//  var salvo = document.calculator.visor.value;
//  document.calculator.visor.value = salvo + btn;
    
    // opção 2
    document.getElementById('visor').value += valor;

}

function reset( C ){
    //opção 1
    // document.calculator.value.reset();
    
    //opção 2
    document.getElementById('visor').value = '';
}


function calcular( ){

    //pegando o valor do visor
    var resultado = 0;
    resultado = document.getElementById('visor').value;

    //limpa o visor
    document.getElementById('visor').value = '';
    
    //calcular
    document.getElementById('visor').value = eval(resultado);

       
}

function back( ){

    //pegando o valor do visor
    var resultado = document.getElementById('visor').value;

    //limpa o visor 1 por vez
    document.getElementById('visor').value = resultado.substring(0,resultado.length-1);
        
}


function percentage(porcento) {
    

    //mostrar no visor e incrementar    
    document.getElementById('visor').value += porcento;

   
    var porcentagem = parseFloat(document.calculator.visor.value);
    var valor = parseFloat(document.calculator.visor.value) ;
         porcento = porcentagem / 100;
    var resultado = porcento * valor;
     
     document.calculator.visor.value = resultado;


    //console.log(resultado)

}