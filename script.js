let stepCounter = {
    counter: 0,
    increase: function () {
        this.counter++;
        return this;
    },
    decrease: function () {
        this.counter--;
        return this;
    },
    reset: function () {
        this.counter = 0;
        return this;
    },
    read: function () {
        console.log(this.counter);
        return this;
    },
};