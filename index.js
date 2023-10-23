let ladder = {
    floor:0,
    up() {
        this.floor++;
        return this;
    },
    down() {
        this.floor--;
        return this;
    },
    showStep() {
        console.log(this.floor);
        return this;
    }
};

console.log(ladder.up().up().down().showStep());// 1
ladder.up();
ladder.up();
ladder.up();
console.log(ladder.showStep()); // 4
ladder.down();
console.log(ladder.showStep()); // 3