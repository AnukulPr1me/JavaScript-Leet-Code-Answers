/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn.apply(this, args);
            return result;
        } else {
            return undefined;
        }
    };
};

