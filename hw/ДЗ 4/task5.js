
(function () 
{
    "use strict";
    function fibb(n) {

        if (n > 1000) 
        {
            throw new Error("Ну сказано же, меньше тысячи. А ты что сделал?")        
        }
        
        let a = 0;
        let b = 1;
        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    console.log('fibb(' + [3] + ') = ' + fibb(3));
    console.log('fibb(' + [5] + ') = ' + fibb(5)); 
    console.log('fibb(' + [8] + ') = ' + fibb(8)); 
    console.log('fibb(' + [21] + ') = ' + fibb(21)); 
    
})();