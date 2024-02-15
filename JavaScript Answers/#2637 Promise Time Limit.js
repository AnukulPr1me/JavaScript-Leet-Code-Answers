/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        try {
            const resultPromise = fn(...args);
            return await Promise.race([resultPromise, timeoutPromise]);
        } catch (error) {
            return Promise.reject(error); // Propagate any errors from the original function
        }
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */