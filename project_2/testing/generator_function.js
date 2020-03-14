function foo(x) {
    while (true) {
        x = x * 2;
        yield x;
    }
}


let g = foo(2);

g.next();

