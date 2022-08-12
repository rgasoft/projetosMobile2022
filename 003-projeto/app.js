var salario = 2000.50;
var aumento = 0.15;  
var inflacao = 0.07;   
var novosalario = salario + (aumento * salario);
var novosalarioinflacao = novosalario - (inflacao * novosalario); 
console.log (novosalario);
console.log (novosalarioinflacao);  

// \n = quebrade linha - \t = TAB  
// "template literal" - `${var}` - mescla variável com texto com formatação e tabulação.
var strNovoSalario = `O novo salário é:\n R$\t\t ${novosalario}`;    
var strNovoSalarioInflacao = `O novo salário aplicada a inflacao é:\n R$ ${novosalarioinflacao} `;

console.log(strNovoSalario); // console.log(strNovoSalario+"\n"); - mesmo comando ao lado, pulando mais uma linha com \n .
console.log(strNovoSalarioInflacao);