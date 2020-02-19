const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

// to add an event listener to the button
sendBtn.addEventListener('click',sendMsg);

// callback function
function sendMsg() {
    let content = messageIn.value;
    // console.log(content)
    if (!content == '') {
        messageOut.innerHTML = content;
        messageIn.value = '';
    } else {
        alert ("please enter a valid message");
    }
}
