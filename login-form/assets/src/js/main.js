let userData = [
    {
        Name: 'Ali',
        Email: 'alihaider.ah2783@gmail.com',
        Passwd: 123,
    },
    {
        Name: 'Bilal',
        Email: 'Dev.bilalsiddique@gmail.com',
        Passwd: 456,
    },
    {
        Name: 'Sagar',
        Email: 'sagarutwani@gmail.com',
        Passwd: 789,
    },
    {
        Name: 'Naveed',
        Email: 'naveedaziz@gmail.com',
        Passwd: 101,
    },
];

function myLogin(){
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('passwd').value;

    if(
       userName == userData[0].Name && userEmail == userData[0].Email && userPassword == userData[0].Passwd || 
       userName == userData[1].Name && userEmail == userData[1].Email && userPassword == userData[1].Passwd || 
       userName == userData[2].Name && userEmail == userData[2].Email && userPassword == userData[2].Passwd ||
       userName == userData[3].Name && userEmail == userData[3].Email && userPassword == userData[3].Passwd
       ){
        console.log(`Hi ${userName} You are Successfully Login`);
    }else {
        console.log('Error');
    }
};

function recoveryEmail(){
    let userName = document.getElementById('name').value;
    let userRecoveryEmail = document.getElementById('recovery-email').value;
    // let userPassword = userData[userRecoveryEmail].Passwd;

    //  if(userRecoveryEmail == userData[0].Email || userRecoveryEmail == userData[1].Email || userRecoveryEmail == userData[2].Email || userRecoveryEmail == userData[3].Email){
    //     console.log('Your Password is', userPassword);
    // }else {
    //         console.log('Email Is Incorrect');
    //       }
    if(userName == userData[0].Name && userRecoveryEmail == userData[0].Email){
        console.log(`Hi ${userData[0].Name} Your Password is ${userData[0].Passwd}`);
    }
    else if(userName == userData[1].Name && userRecoveryEmail == userData[1].Email){
        console.log(`Hi ${userData[1].Name} Your Password is ${userData[1].Passwd}`);
    }
    else if(userName == userData[2].Name && userRecoveryEmail == userData[2].Email){
        console.log(`Hi ${userData[2].Name} Your Password is ${userData[2].Passwd}`);
    }
    else if(userName == userData[3].Name && userRecoveryEmail == userData[3].Email){
        console.log(`Hi ${userData[3].Name} Your Password is ${userData[3].Passwd}`);
    }
    else {
        console.log('The User Name or Email Is Incorrect');
    }
};