var characters = [
    {
        name: 'Bowser',
        bioName: 'King Koopa',
        info: 'Leader of the turtle-like Koopa race.His ultimate goals are to kidnap Princess Peach, defeat Mario, and conquer the Mushroom Kingdom.',
        img: 'Bowser.jpg'
    },
    {
        name: 'Mario',
        bioName: 'Super Mario',
        info: 'A short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowse.',
        img: 'Mario.jpg'
    },
    {
        name: "Princess Peach",
        bioName: 'Toadstool',
        info: "Princess of the Mushroom Kingdom, which is constantly under attack by Bowser. She often plays the damsel in distress.",
        img: 'Peach.jpg'
    },
    {
        name: "Princess Daisy",
        bioName: 'Daisy',
        info: " Princess of the fictional region of Sarasaland. It is often speculated that she is Luigi's love interest.",
        img: 'Daisy.jpg'
    },
    {
        name: "Luigi",
        bioName: 'Ruīji',
        info: "The slightly younger but taller fraternal twin brother and sidekick to Mario.",
        img: 'Luigi.jpg'
    },
    {
        name: "Yoshi",
        bioName: 'Dino',
        info: " Anthropomorphic dinosaur, companion to Mario and Luigi .",
        img: 'Yoshi.jpg'
    },
    {
        name: "Wario",
        bioName: 'Bar Mario',
        info: "Childhood rival to Mario and Luigi who became jealous of their success.",
        img: 'Wario.jpg'
    },
    {
        name: "Waluigi",
        bioName: 'Bad Luigi',
        info: "A mischievous, cunning man, feels that everything goes right for everyone but himself",
        img: 'Waluigi.jpg'
    },
    {
        name: "Toad",
        bioName: 'Kinopio',
        info: "A citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal attendants; constantly working on her behalf.",
        img: 'Toad.jpg'
    },
    {
        name: "Rosalina",
        bioName: 'Rosetta',
        info: "resides in the Comet Observatory, is the adoptive mother of the star Lumas. Agrees to help Mario rescue Princess Peach after Observatory is attacked by Bowser.",
        img: 'Rosalina.jpg'
    }
]

var players = document.getElementById('players')
var row = document.createElement('div')
for (let i = 0; i < characters.length; i++) {
    var card = document.createElement('div')
    card.classList.add('card')
    var cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    var cardTitle = document.createElement('h5')
    cardTitle.innerHTML = characters[i].name
    var cardText = document.createElement('p')
    cardText.innerHTML = characters[i].info
    var img = document.createElement('img')
    img.src = characters[i].img

    card.appendChild(cardTitle)
    card.appendChild(cardText)
    card.appendChild(img)
    players.appendChild(card)
    // var cardTitle = document.createElement('div')
    //    cardTitle.classList = characters[i].bioName

}


