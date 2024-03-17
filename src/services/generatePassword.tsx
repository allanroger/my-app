export default function generatePassword() {
  let password: string = '';
  let passwordLenght: number = 8;
  let characters: string = 'ABC123#$%!?$';
  
  for (let index = 0; index < passwordLenght; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return password;
};