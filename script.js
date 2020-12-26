// Variables
const listBtnSelector = document.querySelector('.big-five-list');
const removeFirstBtn = document.getElementById('remove-first-item-button');
const removeAllBtn = document.getElementById('remove-all-button');
const spottedAnimals = document.querySelector('#spotted-animals-list'); 
const listClass = spottedAnimals.getElementsByTagName('li')[0].className; //store the class for add function


// Functions

// Create new list item
const addAnimal = which => {
    let animalToAdd = document.createElement('li');
    animalToAdd.classList.add(listClass);
    animalToAdd.textContent = which;
    spottedAnimals.appendChild(animalToAdd);
};

// Remove items
const removeAnimals = which => {
    let listItems = Array.from(spottedAnimals.getElementsByTagName('li'));
    if (which == 0){
        which = listItems.length;
    }
    for (i=0; i<which; i++){
        spottedAnimals.removeChild(listItems[i]);
    }
};


// Event listeners
listBtnSelector.addEventListener('click', e => addAnimal(e.target.textContent));
removeFirstBtn.addEventListener('click', () => removeAnimals(1));
removeAllBtn.addEventListener('click', () => removeAnimals(0));