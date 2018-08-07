const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Alexey',
      age: 20
    });
    // reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promis');
    }, 5000);
  });
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');