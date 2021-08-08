const profileDataArgs = process.argv.slice(2,process.argv.length);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileitem => console.log(profileitem));

//    for (let i=0; i < profileDataArr.length; i++) {
//        console.log(profileDataArr[i]);
//    }
};

printProfileData(profileDataArgs);