const validator = require("validator");

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
validator.isEmail("shoobert@dylan");

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
validator.isMobilePhone("786-329-9958", "en-US");

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
validator.blacklist(text, blacklist);

const { faker } = require("@faker-js/faker");

const makeHuman = function (num) {
  for (let i = 0; i < num; i++) {
    let user = {
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      companyName: faker.company.companyName(),
    };
    console.log(`${user.username}, ${user.image}, ${user.companyName}`);
  }
};

makeHuman(2);
