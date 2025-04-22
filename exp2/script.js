function calculate(a){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if(a === '+'){
        result = num1+num2;
    }
    else if(a === '-'){
        result = num1-num2;
    }
    else if(a === '*'){
        result = num1*num2;
    }
    else if(a === '/'){
        result = num1/num2;
    }
    document.getElementById("result").value = result;
}


document.getElementById('personalDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const namePattern = /^[A-Za-z\s]+$/;
    const usernamePattern = /^[a-zA-Z0-9._-]{3,16}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!namePattern.test(name)) {
        alert('Name can only contain letters and spaces.');
        return;
    }

    if (!usernamePattern.test(username)) {
        alert('Username must be 3-16 characters long and can contain letters, numbers, dots, underscores, and hyphens.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one letter and one number.');
        return;
    }

    alert('Form submitted successfully!');
});
