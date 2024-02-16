class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;
        if (this.cache.has(key)) {
            const { expiration } = this.cache.get(key);
            if (expiration > currentTime) {
                this.cache.set(key, { value, expiration: expirationTime });
                return true;
            }
        }
        this.cache.set(key, { value, expiration: expirationTime });
        return false;
    }

    get(key) {
        if (this.cache.has(key)) {
            const { value, expiration } = this.cache.get(key);
            if (expiration > Date.now()) {
                return value;
            } else {
                this.cache.delete(key); // Remove expired key
            }
        }
        return -1;
    }

    count() {
        let count = 0;
        const currentTime = Date.now();
        for (const [key, { expiration }] of this.cache) {
            if (expiration > currentTime) {
                count++;
            } else {
                this.cache.delete(key); // Remove expired key
            }
        }
        return count;
    }
}
