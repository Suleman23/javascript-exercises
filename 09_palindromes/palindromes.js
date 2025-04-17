const palindromes = function (str) {
    let p = "";
    let s = str;
    //copied the replace function from DeepSeek AI
    s = s.toLowerCase().replace(/[\p{P}\s]/gu, "");
    console.log(s);
    for (let i = s.length - 1; i >= 0; i--) p += s[i];

    if (p === s) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
