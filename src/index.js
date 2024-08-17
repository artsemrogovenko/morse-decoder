const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrayData = [];
    let result = '';
    // нарезка на 10-кратные куски
    for (let i = 0, j = 0; i < expr.length; i += 10, j++) {
        arrayData[j] = expr.substring(i, i + 10);
    }
    // перевод из цифр в символы морзе
    for (let i = 0; i < arrayData.length; i++) {
        const translated = digitsToMorse(arrayData[i]);
        result += translated;
    }
    return result;
}

// формирование символа
function digitsToMorse(input) {
    let translated = '';
    if (input == '**********') {
        return ' ';
    }

    for (let i = input.length; i >= 2; i -= 2) {
        const code = input.substr(i - 2, 2);

        switch (code) {
            case '10': translated = '.' + translated; break;
            case '11': translated = '-' + translated; break;
        }
    }
    return MORSE_TABLE[translated];
}

module.exports = {
    decode
}