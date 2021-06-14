import Box from '../src/models/Box';

describe('Box', () => {
    it('Should add an item', () => {
        const box = new Box();
        box.addItem(4);

        expect(box.getCapacity()).toBe(4);
    });

    it('Should return true if an item can be add', () => {
        const box = new Box();
        box.addItem(6);

        expect(box.canBeAdd(4)).toBe(true);
    });

    it('Should return false if an item cannot be add', () => {
        const box = new Box();
        box.addItem(6);

        expect(box.canBeAdd(6)).toBe(false);
    });

    it('Should return true if the box is full', () => {
        const box = new Box();
        box.addItem(6);
        box.addItem(4);

        expect(box.isFull()).toBe(true);
    });

    it('Should return false if the box is not full', () => {
        const box = new Box();
        box.addItem(6);

        expect(box.isFull()).toBe(false);
    });

    it('Should return the current capacity', () => {
        const box = new Box();
        box.addItem(6);
        box.addItem(2);

        expect(box.getCapacity()).toBe(8);
    });

    it('Should return the correct string', () => {
        const box = new Box();
        box.addItem(6);
        box.addItem(2);
        box.addItem(1);

        expect(box.toString()).toBe('621');
    });
});
