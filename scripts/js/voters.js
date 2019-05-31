
$(function () {
    $("form").submit(function (event) {
        event.preventDefault()
        const datas = {
            firstName: $("#FirstName").val(),
            lastName: $("#LastName").val(),
            VIN: $("#VIN").val(),
            password: $("#Password").val(),
            phonenumber: $("#PhoneNumber").val(),
        }
        $.post("http://localhost:3000/Voters", datas).done(function (data) {
            console.log("saved")
            console.log(data)
        })
        reset();
    })
})

//Reset input fields
function reset() {
    let firstName= document.querySelector('#FirstName');
    let lastName= document.querySelector('#LastName');
    let VIN= document.querySelector('#VIN');
    let password= document.querySelector('#Password');
    let phonenumber= document.querySelector('#PhoneNumber');

    let arrAll= [firstName, lastName, VIN, password, phonenumber];
    arrAll.forEach((input) => {
        return input.value = "";
    })
}