var someWork = function(age) {
    return new Promise(function(resolve, reject){
        if(age > 150) {
            reject(new Error('age ' + age + ' is bigger than 150'));
        } else {
            resolve(age);
        }
    });
};


var run_sequence_of_async_tasks = function(age) {
    someWork(age)
        .then(function(result) {
            console.log("Task 1: Age is " + result);
            return new someWork(result * 2);
        })
    .then(function(result) {
        console.log("Task 2: Age is " + result);
        return new someWork(result * 2);
    })
    .then(function(result) {
        console.log("Task 3: Age is " + result);
        return new someWork(result * 2);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });
}

run_sequence_of_async_tasks(30);

run_sequence_of_async_tasks(35);

run_sequence_of_async_tasks(80);
