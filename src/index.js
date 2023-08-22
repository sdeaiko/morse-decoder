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

function morse_table_changer(morse_table) {
    const new_morse_table = {}
    for (const key in morse_table) {
      new_key = []
      for (let index = 0; index < key.length; index++) {
        if (key[index] == '.') {
          new_key.push('1')
          new_key.push('0')
        } else if (key[index] == '-') {
          new_key.push('1')
          new_key.push('1')
        }
      }
      while (new_key.length < 10) {
        new_key.unshift('0');
      }
      new_key_element = new_key.join('');
      new_morse_table[new_key_element] = morse_table[key];
    }
    new_morse_table['**********'] = ' ';
    return new_morse_table;
}

function expr_changer(expr) {
  const arr = [];
  let res = '';

  for (let i = 0; i < expr.length; i++) {
    res += expr[i];

    if ((i + 1) % 10 == 0 || i === expr.length - 1) {
      arr.push(res);
      res = '';
    }
  }

  return arr;
}

function decode(expr) {
  let res = '';
  new_expr = expr_changer(expr);
  const newMorseTable = morse_table_changer(MORSE_TABLE);
  for (let index = 0; index < new_expr.length; index++) {
      res += newMorseTable[new_expr[index]]
  }
  return res;
}

module.exports = {
    decode
}