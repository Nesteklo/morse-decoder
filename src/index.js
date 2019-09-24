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
    var result = '';
    for(var i=0; i<expr.length;){
        var letter_code = '';
        var letter = expr.slice(0+i, 10+i);
        i=i+10;
        if (letter=='**********'){
            result = result + ' '; 
        }
        else{
            letter = Number(letter).toString();
            for(var j=0; j<letter.length;){
                if (letter.slice(0+j,2+j)=='10'){
                    letter_code = letter_code + '.';
                }
                if (letter.slice(0+j,2+j)=='11'){
                    letter_code = letter_code + '-';
                }
                j=j+2;
            }
        result = result + MORSE_TABLE[letter_code];
        }    
    }     
    return result;
}

module.exports = {
    decode
}