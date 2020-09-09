const enhancer = require('./enhancer.js');
// test away!

describe("Repairs item", () => {
    it("Should set items durability to 100", () => {
        const item = {enhancement: 10, durability: 20};
        const repairedItem = enhancer.repair(item);
        expect(repairedItem.durability).toBe(100);
    });
});

describe("Enhances item", function () {
    // on success enhancement increases by one limiting at 20
    //on fail enhancement as e < 15 e-= 5 || e===15 e===16 e-=10 || e-=1\
    let item = {enhancement: 10, durability: 100};
    beforeAll(() =>{
        item = {enhancement: 10, durability: 100};
    });
    it("Should succeed in enhancement setting enhancement to 11", () =>{
        const newItem = enhancer.success(item);
        expect(newItem.enhancement).toBe(11);
    });

});