import {a001, a002, a003, a004, a005, a006, a007, a008, a009, a010, a011, a012, a013, a014, a015, a016, a017, a018, a019, a020, a021, a022, a023, a024, a025, a026, a027, a028, a029, a030, a031, a032, a033, a034, a035, a036, a037, a038, a039, a040, a041, a042, a043, a044, a045 } from '../lib/fancyText.js';


let handler = async (m, { conn, text }) => {
function convertText(inputText) {
  let fancyTextMessage = '';
  
  for (const style in fancyText) {
    const convertedText = apply(fancyText[style], inputText);
    fancyTextMessage += convertedText + '\n';
  }

  return `Here's your fancy text:\n${fancyTextMessage}`;
}

function apply(map, text) {
  let result = '';
  for (const character of text.split('')) {
    if (map[character] !== undefined) {
      result += map[character];
    } else if (map[character.toLowerCase()] !== undefined) {
      result += map[character.toLowerCase()];
    } else {
      result += character;
    }
  }
  return result;
}
}
handler.help = ['nnn <text>']
handler.tags = ['tool','maker']
handler.command = /^(nnn)$/i
export default handler