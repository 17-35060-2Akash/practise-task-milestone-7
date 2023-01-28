const createLSItem = () => {
    // localStorage.clear();
    localStorage.setItem('name', 'Sakib Khan');
}

const createAge = () => {
    localStorage.setItem('age', 40);
}

const getAge = () => {
    alert(localStorage.getItem('age'));
}

const removeLSItem = () => {
    const removeItemField = document.getElementById('remove-item-field');
    const removeLSItem = removeItemField.value;
    localStorage.removeItem(removeLSItem);
    removeItemField.value = ``;
}

const addAnObjectInTheLS = () => {
    const name = {
        'firstName': 'Abraham',
        'lastName': 'Linkon'
    }
    const nameStringified = JSON.stringify(name);
    console.log(nameStringified);
    console.log(typeof nameStringified);
    localStorage.setItem('fullName', nameStringified);
}

addAnObjectInTheLS();

createLSItem();



