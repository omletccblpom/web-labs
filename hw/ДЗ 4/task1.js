"use strict";
function pow(x, n) {
    if (typeof x !== 'number' || typeof x !== 'number' || n < 1 ) {
      throw new Error('пашел вон');
    }    
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}

    console.log(pow(2, 3));
    /*console.log(pow(0, 0));
    console.log(pow(-4, 1/2));*/
