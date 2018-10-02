// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    return 'test';
};
const createNotEnumerableProperty = () => {
    return Symbol('Test');
};
const createProtoMagicObject = () => {
    const func = new Function();
    func.__proto__ = func.prototype;
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
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1200)
    });
};

const getDeepPropertiesCount = (obj) => {
    const keys = Object.keys(obj);
    let count = keys.length;

    keys.forEach(key => {
        count += getDeepPropertiesCount(obj[key]);
    });

    return count;
};
const createSerializedObject = () => {
    return new String('Hello World');
};
const toBuffer = () => {};
const sortByProto = (array) => {
    return array.sort();
};

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