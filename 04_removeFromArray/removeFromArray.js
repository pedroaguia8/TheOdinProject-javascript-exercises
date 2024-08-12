const removeFromArray = function(array, ...entriesToRemove) {
    for (const entry of entriesToRemove) {
        array = array.filter((n) => n !== entry);
        console.log(array);
    }

    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
