// Enhance the Array prototype to include the last() method
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1;
};

// Example usage:
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

const nums2 = [];
console.log(nums2.last()); // Output: -1
