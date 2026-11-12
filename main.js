function fnMediaEscolar (nome, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7 ) {
        console.log("Aluno(a): " + nome + " esta APROVADO!!!")
    }else {
        console.log("Aluno(a): " + nome + " esta REPROVADO!!!")
    }
}

function fnDiferencaNumeros (n1, n2) {
    let diferenca = n1- n2

    console.log("a diferença é de:" + diferenca)
}

function fnTabuada (n1) {
    for (var i = 1; i <= 10; i++) {
        let resultado = n1 * i
        console.log(n1 + " x " + i + " : " + resultado )
    }
}

function fnValidarFaixaEtaria (idade) {
    if (idade < 12 && idade >=1 ) {
        console.log("Sua faixa de etária é: Criança")
    }else if (idade >= 12 && idade <= 17) {
        console.log("Sua faixa de etária é: Adolescente")
    }else if (idade >= 18 && idade <= 59 ) {
        console.log("Sua faixa de etária é: Adulto(a)")
    } else if (idade >= 60){
        console.log("Sua faixa de etária é: Idoso(a)")
    }else {
        console.log("Idade inválida!!")
    }
}

function fnCalcularRetangulo (largura, altura) {
    let area = largura * altura

    console.log("Resultado: " +  area + "cm²")
}

function fnAumentoSalario (salario) {
    if (salario < 1000) {
        let salarioAtual = (salario * 0.20) + salario
        console.log("O aumento é de 20%, resultando em: " + "R$"+salarioAtual)
        
    }else if (salario >= 1000 && salario <= 2000) {
        salarioAtual = (salario * 0.15) + salario
        console.log("O aumento é de 15%, resultando em: " + "R$"+ salarioAtual)
        
    }else {
        salarioAtual = (salario * 0.10) + salario
        console.log("O aumento é de 10%, resultando em: " + "R$"+salarioAtual)
    }
}

function fnValidarParImpar (numero) {
    if (numero % 2 == 0) {
        console.log("O número " + numero + " é PAR!!!")
    }else {
        console.log("O número " + numero + " IMPAR!!!")
    }
}


function fnConverterCelsiusPraFahrenheit (temperatura, tipoTemperatura) {

    if (tipoTemperatura == "C") {
        let formula = (temperatura * 1,8) + 32
        console.log("Voce escolheu Celsius! O resultado convertido para Fahrenheit é:" + formula +"°")
    }else {
        formula = (temperatura - 32) / 1.8
         console.log("Voce escolheu Fahrenheit! O resultado convertido para Celsius é:" + formula +"°")
    }
}





