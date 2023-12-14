(function() 
{
    function cesar(str, shift, action = 'encode') {
        const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        
        if (action === 'encode') {
            return str.split('').map((char) => {
                const index = alphabet.indexOf(char);
                const newChar = alphabet[index + shift];
                return index == -1 ? char : newChar;
            }).join('');
        } else if (action === 'decode') {
            return str.split('').map((char) => {
                const index = alphabet.indexOf(char);
                const newChar = alphabet[index - shift];
                return index == -1 ? char : newChar;
            }).join('');
        }
    }

    console.log(cesar("привет мир!", 3, "encode")); //тулезх плу!
    console.log(cesar("тулезх плу!", 3, "decode")); //привет мир!
    console.log(cesar("эзтыхз фзъзъз", 8, "decode")); //хакуна матата
})();
