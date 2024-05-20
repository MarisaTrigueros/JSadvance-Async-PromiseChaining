const isLogged = true;

let promise = new Promise ((resolve, reject) => {
    let log = isLogged;
    if (log){
        resolve(Math.random());
    } else {
        reject('Error: Usuario no registrado')
    }
});

let promise2 = (number) => {
    return new Promise ((resolve, reject) => {
    if (number > 0.5){
        resolve({name: 'John', age: 24});
    } else {
        reject('Error tipo: Error en el registro');
    }
});

};

promise
    .then((mathRandom) => {
        return promise2(mathRandom);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err)
    });
