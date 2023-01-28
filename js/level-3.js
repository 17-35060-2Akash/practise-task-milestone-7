const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email-field');
const messageField = document.getElementById('message-field');

const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const message = localStorage.getItem('message');

if (!!name) {
    nameField.value = name;
}
if (!!email) {
    emailField.value = email;
}
if (!!message) {
    messageField.value = message;
}



const saveName = () => {
    const nameValue = nameField.value;
    localStorage.setItem('name', nameValue);
}

const saveEmail = () => {
    const emailValue = emailField.value;
    localStorage.setItem('email', emailValue);
}

const saveMessage = () => {
    const messageValue = messageField.value;
    localStorage.setItem('message', messageValue);
}

const deleteName = () => {
    localStorage.removeItem('name');
}
const deleteEmail = () => {
    localStorage.removeItem('email');
}
const deleteMessage = () => {
    localStorage.removeItem('message');
}

document.getElementById('btn-reset').addEventListener('click', () => {
    localStorage.clear();
});

const getSavedPersonFromLS = () => {
    let savedPersonInfo = localStorage.getItem('personInfo');
    let personInfo = {};
    if (savedPersonInfo) {
        personInfo = JSON.parse(savedPersonInfo);
    }
    return personInfo;
}

const saveAsObject = () => {
    const personInfo = getSavedPersonFromLS();
    personInfo['name'] = name;
    personInfo['email'] = email;
    personInfo['message'] = message;
    // console.log(personInfo);
    localStorage.setItem('personInfo', JSON.stringify(personInfo));

}