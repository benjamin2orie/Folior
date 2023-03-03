document.getElementById('btns').addEventListener('click', validate);
function validate() {
    let emailInput = document.getElementById('form').value;
    regex = /^([a-zA-Z0-9\. _]+)@([a-zA-Z]+).([a-zA-Z]{2,6}).([a-z]{2,6})?$/
    if((emailInput.trim() == "")) {
        console.log('Please enter valid email address');
        return false
    } else if((regex.test())) {
        console.log('Thank you for providing a valid email address')
        return true
    } else{
        console.log('This invalid email address');
        return false
    }
}