export default function ehMenorDeIdade(campo) {
    const dataNacimento = new Date(campo.value)
    validaIdade(dataNacimento)

    console.log(validaIdade(dataNacimento));
}

function validaIdade(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18
}