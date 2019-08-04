const faker = require('faker')

//make 50 fake lines
let fakeUsers = [];

for (let i = 0; i < 50; i++){
    fakeUsers.push({
      age:faker.random.number(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      eyeColor:faker.commerce.color(),
      hairColor:faker.commerce.color()
    });
}

module.exports = fakeUsers
