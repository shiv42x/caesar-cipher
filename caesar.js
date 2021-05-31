const caesar = function(str, shift) {
    let cipher = "";
    let shift_overflow = Math.abs(shift) % 26;
    for (let i = 0; i < str.length; i++)  {
        let unicode = str.charCodeAt(i); 
        if (unicode >= 65 && unicode <= 90) { 
            if (shift < 0) {
                unicode -= shift_overflow;
            }
            if (shift > 0) {
                unicode += shift_overflow; 
            }
            if (unicode < 65) { 
                unicode = 90 + 1 - (65 - unicode); 
            }
            if (unicode > 90) { 
                unicode = 65 - 1 + (unicode - 90); 
            }
        }
        if (unicode >= 97 && unicode <= 122) { 
            if (shift < 0) {
                unicode -= shift_overflow;
            }
            if (shift > 0) {
                unicode += shift_overflow; 
            }
            if (unicode < 97) { 
                unicode = 122 + 1 - (97 - unicode); 
            }
            if (unicode > 122) { 
                unicode = 97 - 1 + (unicode - 122); 
            }
        }
        cipher += String.fromCharCode(unicode);
    }
    return cipher;
}

module.exports = caesar;