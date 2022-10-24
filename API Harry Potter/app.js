const containerCard = document.getElementById("containerCard");
const URL = 'https://hp-api.onrender.com/api/characters'
window.addEventListener('DOMContentLoaded', api)




function api(){
fetch(URL)
    .then(response => response.json())
    .then(response => response.forEach(element => {


    const card = document.createElement('div');
    card.classList.add('card')

    const cardinfo = document.createElement('div')
    cardinfo.classList.add('cardinfo')

    const cardimg = document.createElement('div')
    cardimg.classList.add('cardimg')

    const namePerson = document.createElement('h1');
    namePerson.classList.add('personName')
    namePerson.textContent = element["name"]

    const agePerson = document.createElement('p')
    agePerson.textContent = element["yearOfBirth"]

    const age = document.createElement('p')
    age.classList.add('age')

    let año = (element["yearOfBirth"] - 2022) * -1;
    age.textContent = `Age: ${año}`

    

    const genderPerson = document.createElement('p')
    genderPerson.classList.add('genderPerson')
    genderPerson.textContent = element["gender"]

    const imgPerson = document.createElement('img')
    imgPerson.setAttribute('src', element["image"])
    imgPerson.classList.add('imgperson')



    containerCard.appendChild(card);
    
    card.appendChild(cardinfo)
    card.appendChild(cardimg)
    cardimg.appendChild(imgPerson)
    cardinfo.appendChild(namePerson);
    cardinfo.appendChild(genderPerson)
    // cardinfo.appendChild(agePerson)
    cardinfo.appendChild(age)
    
    }))
}
