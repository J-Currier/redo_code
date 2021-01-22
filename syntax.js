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
    },

    addToEnd: (myItem, myArray) => {
        myArray.push(myItem)
        return myArray
    },

    updateValues: (myItem, myPosition, myArray) => {
        myArray[myPosition] = myItem;
        return myArray
    },

    //loops
    forLoop: (reit) => {
        let start = 0
        for (let i = 0; i < reit; i++) {
            start += 2;
        }
        return start

    },

    forInLoop: (myObject) => {
        for (let myItem in myObject) {
            myObject[myItem] = (myObject[myItem] + 1);
        }
        return myObject
    },

    whileLoop: (myNum) => {
        let startNum = 0;
        let i = 0;
        while ( i < myNum) {
            startNum +=5;
            i++;
        }
        return startNum
    },

    doWhileLoop: (myNum) => {
        let startNum = 1;
        let i =0;
        do {
            i++;
            startNum = (startNum * i);
        } while (i < myNum);
        return startNum;
    },

    forEachArrayLoop: (myArray) => {
        myArray.forEach((myObj) => { 
            console.log(myObj)
            myObj = (myObj + '!');
        console.log(myArray[myObj])
        console.log(myArray);
        });
        return myArray;
    },





};


export default functions;