Validation of Form by jQuery
============================

Every form must be validate. In this form we check fields and alert users about errors before they submit the form.

In this form we check:
- name field has been filled out;
- email field must be like an email address;
- textarea field has been filled out.

<strong>References</strong>

Create HTML page with form and add the id "form_<name field>" for fields.
Look like this:

<html>
<form method="post" action="" id="player">
    <div>
        <input type="text" name="name" placeholder="Name" size="30" id="form_name">
        <span class="name-false">Please enter name</span>
    </div>
    <div>
        <input type="text" name="email" placeholder="Email" size="30" id="form_email">
        <span class="email-false">Please enter an email address</span>
    </div>
    <div>
        <textarea name="field" placeholder="Lebron James" cols="22" id="form_field"></textarea>
        <span class="field-false">Please write a player</span>
    </div>
    <button type="submit" id="submit">Submit</button>
</form>
</html>
