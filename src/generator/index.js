function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* itarate(array) {
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Jesus', 'Gabriel', 'Perez', 'Siculaba'])
console.log(it.next())
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)