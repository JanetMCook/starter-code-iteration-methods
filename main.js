// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


// Kata 1
const isActive = users.filter(user => user.isActive === true)

printKata(1, isActive)


// Kata 2
const userEmail = users.map(user => user.email)
printKata(2, userEmail)


// Kata 3

const ovationCompany = users.some(user => user.company === "OVATION")
printKata(3, ovationCompany)

// Kata 4

const firstOver38 = users.find(user => user.age > 38)
printKata(4, firstOver38)


// Kata 5

const activeOver38 = users.filter(user => user.age > 38).find(user => user.isActive === true)
printKata(5, activeOver38)


// Kata 6

const zencoUserBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, zencoUserBalance)


// Kata 7

const fugiatUserAges = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printKata(7, fugiatUserAges)
