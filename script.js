document.addEventListener('DOMContentLoaded', function() {


document.querySelector('form').onsubmit = function() {

    const input = document.querySelector('input[type="text"]');

    document.querySelector('h1').style.color = input.value;

    return false;
};
});