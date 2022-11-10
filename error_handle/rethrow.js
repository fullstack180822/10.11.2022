function div(x, y) {
    if (x == undefined || y == undefined) {
        throw RangeError('div must get real numbers')
    }
    if (y == 0) {
        throw Error('cannot divide by zero')
    }
    return x / y
}

// rethrow
try {
    div(1, 0)
}
catch (err) { 
    console.log(` ================ ${err.message}`);
    switch (true) {
        case err instanceof RangeError:
            console.log('ok, happends sometimes ...');
            break;
        case err instanceof Error:
            // rethrow;
            throw err;
    }
}
finally {
    console.log('finished!');
}