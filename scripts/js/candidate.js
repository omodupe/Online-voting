
$(function () {
    $("form").submit(function (event) {
        event.preventDefault()
        const datas = {
            firstName: $("#FirstName").val(),
            lastName: $("#LastName").val(),
            party: $("#Party").val(),
            password: $("#Password").val(),
            phonenumber: $("#PhoneNumber").val(),
        }
        $.post("http://localhost:3000/Candidates", datas).done(function (data) {
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
    let party= document.querySelector('#Party');
    let password= document.querySelector('#Password');
    let phonenumber= document.querySelector('#PhoneNumber');

    let arrAll= [firstName, lastName, party, password, phonenumber];
    arrAll.forEach((input) => {
        return input.value = "";
    })
}