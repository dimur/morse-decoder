const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const words = expr.split('**********')

    convertBitsIntoDashesAndDots = (bits) => {
      let result = ''
      let index = -2
      let letterCode = bits.slice(index)
      while (letterCode !== '00' && letterCode !== '') {
        switch (letterCode) {
          case '10': { result = `.${result}`; break }
          case '11': { result = `-${result}`; break }
        }
        letterCode = bits.slice(index - 2 , index)
        index = index - 2
      }
      return result
    }

    morseOneWordDecode = (code) => {
      let result = ''
      for (let index = 0; index < code.length; index += 10) {
        const letterCode = code.slice(index, index + 10)
        result = `${result}${MORSE_TABLE[convertBitsIntoDashesAndDots(letterCode)]}`
      }
      return result
    }

    let result = ''
    words.forEach(element => {
      result = `${result} ${morseOneWordDecode(element)}`
    });
    return result.trim()
}

module.exports = {
    decode
}