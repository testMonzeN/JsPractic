function closest_mod_5(x) {
    let y = x
    while (y % 5 !== 0) {
        y += 1
    }

    return y
}