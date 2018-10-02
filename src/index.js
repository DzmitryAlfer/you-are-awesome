// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    return 'test';
};
const createNotEnumerableProperty = () => {
    return Symbol('Test');
};
const createProtoMagicObject = () => {
    const func = () => {
    };

    const result = new func();
    result.prototype.__proto__ = func;

    return func;
};

const incrementor = () => {
    if(!incrementor.counter) {
        incrementor.counter = 1;
    } else {
        incrementor.counter++;
    }
    

    const innerFunc = () => {
        incrementor.counter++; 
        return innerFunc
    };

    innerFunc.toString = () => {
        return incrementor.counter;
    }

    return innerFunc
};

const asyncIncrementor = () => {
    return new Promise((resolve) => {
        if(!asyncIncrementor.counter) {
            asyncIncrementor.counter = 1;
        } else {
            asyncIncrementor.counter++;
        }

        resolve(asyncIncrementor.counter)
    })
};

const createIncrementer = () => {
    function* incrementor() {
        let count = 0;

        while (true) {
            yield ++count;
        }
    }

    return incrementor();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;