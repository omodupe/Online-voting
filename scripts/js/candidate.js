const api = "http://localhost:3000/Candidates";
const datas = {
    firstName: $("#FirstName").val(),
    lastName: $("#LastName").val(),
    party: $("#Party").val(),
    password: $("#Password").val(),
    phonenumber: $("#PhoneNumber").val(),
}

$(function () {
    $("form").submit(function (event) {
        event.preventDefault()
        $.post(api, datas).done(function (data) {
            console.log("saved")
            console.log(data)
        })
        reset();
    })
})

// function displayCandidates(data) {
//     if(!data) return;

//     var obj= JSON.parse(data);

//     obj.forEach((dat) => {
//         let getFirstName= dat.firstName;
//         let body= document.querySelector('display');
//         body.innerText= getFirstName;
//     })

// }

// function getCandidates() {

//     fetch(api)
//         .then(function (response) { return response.json(); })
//         .then(function (data) {
//             displayCandidates(data);
//             console.log(data);
//         })
// }






//Reset input fields
function reset() {
    let firstName = document.querySelector('#FirstName');
    let lastName = document.querySelector('#LastName');
    let party = document.querySelector('#Party');
    let password = document.querySelector('#Password');
    let phonenumber = document.querySelector('#PhoneNumber');

    let arrAll = [firstName, lastName, party, password, phonenumber];
    arrAll.forEach((input) => {
        return input.value = "";
    })
}