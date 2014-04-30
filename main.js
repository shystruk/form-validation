/**
 * Created by v.stokolosa on 4/28/14.
 */
$(document).ready(function(){
    <!-- Form variables -->
    var playerForm = $('#player'),
        button = $('#submit');

    <!-- Name variables -->
    var name = $('#form_name'),
        nameFalse = $('.name-false');

    <!-- Checking the name field -->
    name.on('input', function() {
        var input = $(this);
        var nameValid = input.val();
        if (nameValid) {
            input.addClass('valid');
            nameFalse.hide();
        } else {
            input.removeClass('valid');
            nameFalse.show();
        }
    });

    <!-- Email variables -->
    var email = $('#form_email'),
        emailFalse = $('.email-false');

    <!-- Checking the email field -->
    email.on('input', function() {
        var input = $(this);
        var symbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var emailValid = symbols.test(input.val());
        if (emailValid) {
            input.addClass('valid').removeClass('invalid');
            emailFalse.hide();
        } else {
            input.addClass('invalid');
        }
    });

    <!-- Textarea variables -->
    var field = $('#form_field'),
        fieldFalse = $('.field-false');

    <!-- Checking the textarea field -->
    field.keyup(function(event){
        var input = $(this);
        var fieldPlayer = input.val();
        if (fieldPlayer) {
            field.addClass('valid');
            fieldFalse.hide();
        } else {
            field.removeClass('valid');
            fieldFalse.show();
        }
    });

    <!-- Submitted Validation -->
    button.on('click', function(event){
        var form = playerForm.serializeArray();
        var error = true;
        for (var input in form) {
            var inputs = $('#form_' + form[input]['name']);
            var inputsFalse = $('span', inputs.parent());
            var valid = inputs.hasClass('valid');
            if (!valid) {
                inputsFalse.addClass('error');
                error = false;
            } else {
                inputsFalse.hide();
            }
        }
        if (!error) {
            event.preventDefault();
        } else {
            alert('Form is validate');
        }
    });
});
