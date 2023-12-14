(function() 
{
    function getSortedArray(array, key) {
        const sortedArray = array;
        
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j][key] > array[j + 1][key]) {
                    [
                        sortedArray[j],
                        sortedArray[j + 1]
                    ] = [
                        sortedArray[j + 1],
                        sortedArray[j]
                    ];
                }
            }
        }
        
        return sortedArray;
    }

    let array = [
        {name: 'Макар', age: 20},
        {name: 'Роберт', age: 32},
        {name: 'Екатерина', age: 50},
        {name: 'Оксана', age: 24},
        {name: 'Святослав', age: 43}
    ];
    array = getSortedArray(array, 'age');
    console.log(array);
    array = getSortedArray(array, 'name')
    console.log(array);
})();