

let hits = 0;

function shouldIncrement() {
    return hits >= 0;
}

function increment() {
    if (!shouldIncrement()) {
        throw Error('Could not increment');
    }
    hits++;
}

module.exports.hit = function hit() {
    try {
        increment();
    } catch (e) {
        return; 
    }
};

module.exports.hitCount = function hitCount() {
    return hits;
};