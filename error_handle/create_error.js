

//
// create an error
var err 

try {
//throw TypeError('my error')
err =  new MediaError('my error')
}
catch (err2) {
    console.log('i caught the error!');
}
finally {
    err =  new MediaError('my error')
}
console.log('yeah!');
console.log(err);