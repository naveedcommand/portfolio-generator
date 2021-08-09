/*
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileitem => console.log(profileitem));
//    for (let i=0; i < profileDataArr.length; i++) {
//        console.log(profileDataArr[i]);
//    }
};

printProfileData(profileDataArgs);
*/

//console.log(name, github);
//console.log(generatePage(name, github));

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});