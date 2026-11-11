function fnMedia (nome, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7 ) {
        console.log("Aluno(a): " + nome + " esta APROVADO!!!")
    }else {
        console.log("Aluno(a): " + nome + " esta REPROVADO!!!")
    }
}

function fnDiferenca (n1, n2) {
    let diferenca = n1- n2

    console.log(diferenca)
}

function fnTabuada (n1) {
    for (var i = 1; i <= 10; i++) {
        let resultado = n1 * i
        console.log(n1 + " x " + i + " : " + resultado )
    }
}

function fnIdade (idade) {
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

function fnRetangulo (largura, altura) {
    let area = largura * altura

    console.log("Resultado: " +  area + "cm²")
}

function fnSalario (salario) {
    if (salario < 1000) {
        let salarioAtual = salario * 0.2
        console.log("Salario: " + salario)
        console.log("Desconto: 20%")
        console.log("Salario Atual: " + salarioAtual)
    }else if (salario >= 1000 && salario <= 2000) {
        salarioAtual = salario * 0.15
        console.log("Salario: " + salario)
        console.log("Desconto: 15%")
        console.log("Salario Atual: " + salarioAtual)
    }else {
        alarioAtual = salario * 0.1
        console.log("Salario: " + salario)
        console.log("Desconto: 10%")
        console.log("Salario Atual: " + salarioAtual)
    }
}


