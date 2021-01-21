const functions = {
    //define attributes or variables
    variableType: (myNum) => {
        return (typeof myNum);
    },

    //if/else function
    ifElse: (myNum) => {
        if (myNum <= 10) {
            return 'low';
        } else {
            return 'high';
        }
    },

    //arrays
    addToFront: (myItem, myArray) => {
        myArray.unshift(myItem)
        return myArray;
    }



};


export default functions;