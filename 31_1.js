let s = prompt();
let a = prompt();
let b = prompt();

let count = 0;

while (true) {
    if (count < 1000) {
        if (s.includes(a)) {
            s = s.replace(a, b);
            count += 1;
        } else {
            console.log(count);
            break;
        }
    } else {
        console.log('Impossible');
        break;
    }
}
