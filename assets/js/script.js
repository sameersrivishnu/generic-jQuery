$(document).ready(function() {
    $("#sub").click(function() {
        // Calling of all validations
        var a = textvalidation();
        var b = mailvalidation();
        var c = passwordvalidation();
        var d = combovalidation();
        var e = radiovalidation();
        var f = multivalidation();
        var g = mulcovalidation();
        var h = textareavalidation();
        var i = datevalidation();
        var j = boxvalidation();

        if (a & b & c & d & e & f & g & h & i & j == true) {
            alert("Successfully Submitted");
            $('#sub').reset();

        }

        return false;

    });
});


// validation for Name in jQuery
function textvalidation() {
    var fname = $('#name').val();

    var namereg = new RegExp(/^[A-Za-z]+$/);


    if (fname == "") {
        $('#nameerror').html("*Please enter name");
        $('#name').focus();
        $('#name').css("background-color", "#fff68f");
        $('#nameerror').css("color", "#cd0000");
        return false;
    } else if (!namereg.test(fname)) {
        $('#nameerror').html("*Name must be in characters only");
        $('#name').focus();
        $('#name').css("background-color", "#fff68f");
        $('#nameerror').css("color", "#cd0000");
        return false;
    } else if (fname.length < 5) {
        $('#nameerror').html("*Please enter at least 5 characters");
        $('#name').focus();
        $('#name').css("background-color", "#fff68f");
        $('#nameerror').css("color", "#cd0000");
        return false;
    } else {
        $('#name').css("background-color", "white");
        $('#nameerror').css("display", "none");
        return true;
    }
}
// validation for Email in jQuery
function mailvalidation() {
    var mail = $('#email').val();
    var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

    if (mail == "") {
        $('#emailerror').html("*Please enter email");
        $('#email').focus();
        $('#email').css("background-color", "#fff68f");
        $('#emailerror').css("color", "#cd0000");
        return false;
    } else if (!emailreg.test(mail)) {
        $('#emailerror').html("*Please enter valid email");
        $('#email').focus();
        $('#email').css("background-color", "#fff68f");
        $('#emailerror').css("color", "#cd0000");
        return false;
    } else {
        $('#email').css("background-color", "white");
        $('#emailerror').css("display", "none");
        return true;
    }
}
// validation for Password in jQuery
function passwordvalidation() {
    var pwdd = $('#pwd').val();
    var passwordreg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

    if (pwdd == "") {
        $('#pwderror').html("*Please enter password");
        $('#pwd').focus();
        $('#pwd').css("background-color", "#fff68f");
        $('#pwderror').css("color", "#cd0000");
        return false;
    } else if (!passwordreg.test(pwdd)) {
        $('#pwderror').html("*Please enter valid password");
        $('#pwd').focus();
        $('#pwd').css("background-color", "#fff68f");
        $('#pwderror').css("color", "#cd0000");
        return false;
    } else {
        $('#pwd').css("background-color", "white");
        $('#pwderror').css("display", "none");
        return true;
    }

}

// validation for Qualification in jQuery
function combovalidation()

{
    var qua = $('#qualification').val();



    if (qua == 0) {
        $('#qualificationerror').html("*Please select qualification");
        $('#qualificationerror').css("color", "#cd0000");
        return false;
    } else {
        $('#qualificationerror').css("display", "none");
        return true;
    }
}
// validation for Gender in jQuery
function radiovalidation() {
    var male = $('#maleid').val();
    var female = $('#femaleid').val();
    if (!$('input[name=gen]:checked').val())

    {
        $('#gendererror').html("*Please select gender");
        $('#maleid').focus();
        $('#gendererror').css("color", "#cd0000");
        return false;
    } else {
        $('#gendererror').css("display", "none");
        return true;

    }


}
// validation for Course in jQuery
function multivalidation() {
    var fe = $('#front').val();
    var be = $('#back').val();

    if (!$('input[type=checkbox]:checked').val()) {

        $('#courseerror').html("*Please choose atleast one course");
        $('#front').focus();
        $('#courseerror').css("color", "#cd0000");
        return false;
    } else {
        $('#courseerror').css("display", "none");
        return true;
    }
}
// validation for Technologies in jQuery
function mulcovalidation() {
    var tec = $('#tech').val();
    if (tec == "") {
        $('#techerror').html("*Please choose technology");
        $('#tech').focus();
        $('#techerror').css("color", "#cd0000");
        return false;
    } else {
        $('#techerror').css("display", "none");
        return true;
    }
}
// validation for Comments in jQuery
function textareavalidation() {
    var txt = $('#text').val();
    if (txt < 10) {
        $('#texterror').html("*Enter atleast 10 characters");
        $('#text').focus();
        $('#text').css("background-color", "#fff68f");
        $('#texterror').css("color", "#cd0000");
        return false;
    } else {
        $('#texterror').css("display", "none");
        $('#text').css("background-color", "white");
        return true;

    }

}

// validation for Date in jQuery

function datevalidation() {
    var date = $('#dateid').val();


    if (date == "") {
        $('#dateerror').html("*Enter valid date");
        $('#dateid').focus();
        $('#dateid').css("background-color", "#fff68f");
        $('#dateerror').css("color", "#cd0000");
        return false;
    } else {
        $('#dateid').css("background-color", "white");
        $('#dateerror').css("display", "none");
        return true;
    }
}

//validation for Privacy Policy in jQuery
function boxvalidation() {

    if (terms.checked == false)

    {
        $('#termserror').html("<b>*Please agree to the Terms and Conditions");
        $('#terms').focus();
        $('#termserror').css("color", "#cd0000");

        return false;
    } else {
        $('#termserror').css("display", "none");
        return true;
    }



}