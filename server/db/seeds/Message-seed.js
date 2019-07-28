const faker = require('faker')

//make 50 fake lines
let fakeMessages = [];

for (let i = 0; i < 50; i++){
    fakeMessages.push(faker.lorem.sentence());
}


module.exports = fakeMessages
