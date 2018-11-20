var characters = [
    {
        id: 0,
        name: 'Bowser',
        bioName: 'King Koopa',
        info: 'Leader of the turtle-like Koopa race.His ultimate goals are to kidnap Princess Peach, defeat Mario, and conquer the Mushroom Kingdom.',
        img: 'Bowser.jpg',
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('0')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 1,
        name: 'Mario',
        bioName: 'Super Mario',
        info: 'A short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowse.',
        img: 'Mario.jpg',
        winCount: 8
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('1')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 2,
        name: "Princess Peach",
        bioName: 'Toadstool',
        info: "Princess of the Mushroom Kingdom, which is constantly under attack by Bowser. She often plays the damsel in distress.",
        img: 'Peach.jpg',
        winCount: 5
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('2')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 3,
        name: "Princess Daisy",
        bioName: 'Daisy',
        info: " Princess of the fictional region of Sarasaland. It is often speculated that she is Luigi's love interest.",
        img: 'Daisy.jpg',
        winCount: 10
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('3')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 4,
        name: "Luigi",
        bioName: 'Ruīji',
        info: "The slightly younger but taller fraternal twin brother and sidekick to Mario.",
        img: 'Luigi.jpg',
        winCount: 2
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('4')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 5,
        name: "Yoshi",
        bioName: 'Dino',
        info: " Anthropomorphic dinosaur, companion to Mario and Luigi .",
        img: 'Yoshi.jpg',
        winCount: 11
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('5')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 6,
        name: "Wario",
        bioName: 'Bar Mario',
        info: "Childhood rival to Mario and Luigi who became jealous of their success.",
        img: 'Wario.jpg',
        winCount: 6
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('6')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 7,
        name: "Waluigi",
        bioName: 'Bad Luigi',
        info: "A mischievous, cunning man, feels that everything goes right for everyone but himself",
        img: 'Waluigi.jpg',
        winCount: 2
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('7')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 8,
        name: "Toad",
        bioName: 'Kinopio',
        info: "A citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal attendants; constantly working on her behalf.",
        img: 'Toad.jpg',
        winCount: 9 winCount: 7,
        winResponse: function () {
            var win = document.getElementById('8')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
    },
    {
        id: 9,
        name: "Rosalina",
        bioName: 'Rosetta',
        info: "resides in the Comet Observatory, is the adoptive mother of the star Lumas. Agrees to help Mario rescue Princess Peach after Observatory is attacked by Bowser.",
        img: 'Rosalina.jpg',
        winCount: 4
        winCount: 7,
        winResponse: function () {
            var win = document.getElementById('9')
            var integer = parseInt(win.innerHTML)
            integer = integer + 1
            win.innerHTML = integer
        }
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
    var winCount = document.createElement('p')
    winCount.id = characters[i].id
    winCount.innerHTML = characters[i].winCount

    card.appendChild(cardTitle)
    card.appendChild(cardText)
    card.appendChild(img)
    card.appendChild(winCount)
    players.appendChild(card)

    card.onclick = characters[i].winResponse
    // var cardTitle = document.createElement('div')
    //    cardTitle.classList = characters[i].bioName

}


