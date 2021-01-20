const functions = {
    //define attributes or variables
    variableType: (myNum) => {
        return (typeof myNum);
    },
    ifElse: (myNum) => {
        if (myNum <= 10) {
            return 'low';
        } else {
            return 'high';
        }
    }



};


export default functions;