//your JS code here. If required.
console.log("hello");
const first_name=document.getElementById("first_name");
const Last_Name=document.getElementById("Last_Name");
const Phone_Number=document.getElementById("Phone_Number");
const Email_ID =document.getElementById("Email_ID");

function Formsubmit(event) {
    event.preventDefault();

    console.log("hello 2times");
    const f_name=first_name.value;
    const L_name=Last_Name.value;
    const phone=Phone_Number.value;
    const Email=Email_ID.value;
     alert(
        "First Name: " + f_name +
        "\nLast Name: " + L_name +
        "\nPhone Number: " + phone +
        "\nEmail: " + Email
    );

}
