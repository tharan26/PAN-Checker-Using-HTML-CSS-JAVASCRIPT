function check() {
    const pan = document.getElementById("num").value;

    if (pan === "") {
        alert("Enter your PAN number");
    } else if (pan.length !== 10) {
        alert("Invalid PAN number");
    } else {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(pan)) {
            document.getElementById("result").innerHTML = "Invalid PAN Number";
        } else {
            document.getElementById("result").innerHTML = "Valid PAN Number";
        }
    }
}
