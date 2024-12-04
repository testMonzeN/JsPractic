try {
    foo()
}
catch (err) {
    switch (err.name){
        case 'ZeroDivisionError':
            console.log('ZeroDivisionError')
            break
        case 'ArithmeticError':
            console.log('ArithmeticError')
            break
        case 'AssertionError':
            console.log('AssertionError')
            break
    }
}