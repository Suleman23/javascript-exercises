const repeatString = function(str, num) {
    let h = '';
    if(num >= 0)
    {
        for (let i = 1; i <= num; i++) h += str;
        return h;
    }else{
        return 'ERROR';
    }
    
    
    
};

// Do not edit below this line
module.exports = repeatString;
