let range = {
    from: 5,
    to: 19
}

range[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                }
            }

            return {
                done: true
            }
        }
    }
}

for (let item of range)
    console.log(item);
    
console.log(range);
console.log("done");