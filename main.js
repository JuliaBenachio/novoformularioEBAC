const form = document.getElementById('form-comparacao');
const salarioBase = document.getElementById('salario-base');
const salarioPretencao = document.getElementById ('salario-pretencao');
const mensagemValida = document.getElementById ('salario-valido');
const erro = document.getElementById ('erro');

function comparaSalario (salarioPretencao, salarioBase) {
    return salarioPretencao > salarioBase;
}

form.addEventListerner ('submit', function (e) {
    e.preventDefault();

    let formValido = comparaSalario(salarioPretencao.valueAsNumber, salarioBase.valueAsNumber);
    if (formValido) {
        mensagemValida.style.display = 'block';
        salarioBase.value = '';
        salarioPretencao.value = '';
    }
})

salarioBase.addEventListener('keyup', function (e) {
    let formValido = comparaSalario(salarioPretencao.valueAsNumber, salarioBase.valueAsNumber);
    if(!formValido){
        erro.style.display = 'block';
        mensagemValida.style.display = 'none';
    } else {
        erro.style.display = 'none';
    }
})
