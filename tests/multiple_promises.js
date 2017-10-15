
function getRandomNumber() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const randomValue = Math.random();
      const error = randomValue > .6 ? true : false;
      if (error) {
        reject(new Error('Ooops, something broke!'));
      } else {
        resolve(randomValue);
      }
    }, 2000);
  }); 
}
getRandomNumber()
  .then(function(value) {
    console.log('Value 1:', value);
    return getRandomNumber();
  })
  .then(function(value) {
    console.log('Value 2:', value);
    return getRandomNumber();
  })
  .then(function(value) {
    console.log('Value 3:', value);
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
