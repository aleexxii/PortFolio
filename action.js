// const form = document.querySelector("form");
// function emailSent() {
//     console.log(gudfdshdfiui);
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "estherlopzoffical@gmail.com",
//         Password : "4A50E7512FFB500DB61A82DB2BCAB9A206E4",
//         To : 'estherlopzoffical@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Costumer",
//         Body : "Name :"+document.getElementById("firstName")
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener("submit",(e) => {
//     e.preventDefualt();

//     sendEmail();
// });

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const subject = document.getElementById('subject');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

// const submit = document.getElementsByClassName('contactForm')[0];

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("clicked");

    let ebody =`
    <b>Name :</b>${firstName.value}&nbsp${lastName.value}
    <br>
    <b>Subject :</b>${subject.value}
    <br>
    <b>Phone no :</b>${phone.value}
    <br>
    <b>Email :</b>${email.value}
    `

    Email.send({
        SecureToken : "b30ab18e-1b95-47d5-a25b-1303fc022597",
        To : 'ytwizard29@gmail.com',
        From : "ytwizard29@gmail.com",
        Subject : "New Costumer",
        Body : ebody
    }).then(
      message => alert(message)
    );
    
});
FAD167762A6CACB3B2AAD89EC7A4F1C4876D