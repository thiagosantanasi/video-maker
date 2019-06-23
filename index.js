const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnTerm(){
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ' )
        const selectedPrefixIndexText = prefixes[selectedPrefixIndex]

        return selectedPrefixIndexText

        console.log(selectedPrefixIndexText)


    }

console.log(content)

}
start()