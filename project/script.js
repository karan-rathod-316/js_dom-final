// Button Creation
//<li>
//       <button></button>
//</li>
let activeHouse = 'Starks'

let ul = document.querySelector('.main-tab'); //Selecting the UL in which buttons will be created in Step 2
let ulCard = document.querySelector('.sub-container') //Selecting the UL for card data after step 4
let cardContainer = document.querySelector('.div-container') //Selecting the UL for card data after step 4

//Step 1 - Access the names of the houses using map feature

let houseNames = got.houses.map(house => house.name);


// Step 2 - Create UI for the data extracted in step 1

function createButtons() {
    ul.innerHTML = "";
    houseNames.forEach(housename => {

        let li = document.createElement('li');
        let buttons = document.createElement('button');
        buttons.innerText = housename;
        if (housename === activeHouse) {
            buttons.classList.add("button-active");
        }

        buttons.addEventListener('click', function(event) {
            activeHouse = event.target.innerText;
            displayCards(activeHouse)
            createButtons()
        })

        li.append(buttons);
        ul.append(li);
    })

}

createButtons();


//Step 3 -  Extract data for the cards
function displayCards(activeHouse) {
    ulCard.innerHTML = '';

    let person = got.houses.find(person => person.name == activeHouse).people
    person.forEach(person => {
        // ulCard.innerHTML = '';

        let personImage = person.image;
        let personHeader = person.name;
        let personPara = person.description;
        //Step 4 - Create UI for cards displaying people info

        let img = document.createElement('img');
        // img.outerHTML = `<img src = ${personImage}>`;
        let header = document.createElement('h2');
        header.innerText = personHeader;
        let para = document.createElement('p');
        para.innerText = personPara;
        let div = document.createElement('div');
        div.append(img, header, para)
        ulCard.append(div);


        // ulCard.append(img, header, para);
        img.outerHTML = `<img src = "${personImage}">`;
        cardContainer.append(ulCard)
    })

}

displayCards(activeHouse);