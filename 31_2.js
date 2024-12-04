let s = prompt()
let t = prompt()

let count = 0

for (let i = 0; i < s.length; i++) {
    if (s.slice(i, s.length).startsWith(t)) {count += 1}
}

console.log(count)