/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
    const ob = {};
    // Merge elements from arr1 into the object
    for (let i = 0; i < arr1.length; i++) {
        const item = arr1[i];
        ob[item.id] = item;
    }
    // Merge elements from arr2 into the object
    for (let i = 0; i < arr2.length; i++) {
        const item = arr2[i];
        // If there's already an item with the same id, merge them
        if (ob[item.id]) {
            for (const key in item) {
                ob[item.id][key] = item[key];
            }
        } else {
            ob[item.id] = item;
        }
    }
    // Convert the object values back to an array
    return Object.values(ob);
};
