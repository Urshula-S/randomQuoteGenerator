console.log("the script is charging")

const newQuoteButton = document.querySelector("#newQuote")
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


newQuoteButton.addEventListener('click' , getQuote)


//specify a async function
async function getQuote() {

    try {
        const response = await fetch(endpoint) //pause the function while waiting for an operation to complete

        if(!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json()
        displayQuote(json.message)
    }

    catch(err) {
        console.log(err)
        alert('Failed to fetch a new random quote')
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#quoteText")

    quoteText.textContent = quote
}
