function idCard() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = document.getElementById("phone").value;

    let numberArray = [];

    numberArray.push(age);
    numberArray.push(phone);

    for (i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age:" + age;
            
        }
    
        else if (numberArray[i] > 100)  {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:" + phoneNumber;
        }
    
    }}