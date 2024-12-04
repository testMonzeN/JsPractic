let summ = 0;
let n = Number(prompt('введи кол-во чисел ', 0));

for(let i=1; i <= n; i++) {
    let number = prompt('введи число ', 0);
    summ = summ + Number(number)
}
console.log(summ)