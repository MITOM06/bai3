const register = () => {
    var sName = document.getElementById("txtName").value;
    var reName = /^[A-Za-z0-9 ]{6,20}$/;
    if (!reName.test(sName)) {
        alert("plese enter loginname !");
        document.getElementById("txtName").focus();
        return false;

    }

    var sMail = document.getElementById("txtMail").value;
    var reMail = /^\w{4}[@]\w{3}[.][com]+$/;
    if (!reMail.test(sMail)) {
        alert("email is incorrect!");
        document.getElementById("txtMail").focus();
        return false;
    }
    var sPhonenumber = document.getElementById("txtPhonenumber").value;
    var rePhonenumber = /^[0-9]{2}[-][0-9]{3}[-][0-9]{7}$/;
    if (!rePhonenumber.test(sPhonenumber)) {
        alert("your Phone number in not correct ");
        document.getElementById("txtPhonenumber").focus();
        return false;
    }

    alert(`This site say...\nThanks you Mr/Ms.${sName}\nyour reservation has been recorded\nwe'll contact you soon at the telephone no 12-123-1234567`);
    return true;
}

