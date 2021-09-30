import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')
    let result = message.toUpperCase().split('');
    let keyIndex = 0;
    key = key.toUpperCase();
    result.forEach((element, index, arr) => {
      if (element.match(/[A-Z]/)) {
        let newCode = ((element.charCodeAt(0) - 65) + (key.charCodeAt(keyIndex) - 65)) % 26
        arr[index] = String.fromCharCode(newCode + 65);
        keyIndex = ( keyIndex + 1 ) % key.length;
      }
    });

    return this.isDirect ? result.join('') : result.reverse().join('')
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!')
    let result = encryptedMessage.toUpperCase().split('');
    let keyIndex = 0;
    key = key.toUpperCase();
    result.forEach((element, index, arr) => {
      if (element.match(/[A-Z]/)) {
        let newCode = ((element.charCodeAt(0) - 65) + 26 - (key.charCodeAt(keyIndex) - 65)) % 26
        arr[index] = String.fromCharCode(newCode + 65);
        keyIndex = ( keyIndex + 1 ) % key.length;
      }
    });

    return this.isDirect ? result.join('') : result.reverse().join('')
  }
}
