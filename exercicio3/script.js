const primeiraArray = [1976, 1978, 2004, 2009]
const segundaArray = ["Marcos", "Elida", "Maria", "Miguel", "Bento"]
const terceiraArray = ["Marcos", 1976, true, "Elida", 1978, true, "Maria", 2004, true]

const copiaPrimeiraArray = primeiraArray.slice()
const copiaSegundaArray = segundaArray.slice()
const copiaTerceiraArray = terceiraArray.slice()


copiaPrimeiraArray.push(2023)
//console.table (primeiraArray)
copiaSegundaArray.pop()
console.log (copiaSegundaArray)
copiaSegundaArray.splice(copiaSegundaArray.length-1)
console.log (copiaSegundaArray)

copiaTerceiraArray.splice(1,1)
console.log (copiaTerceiraArray)








// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;