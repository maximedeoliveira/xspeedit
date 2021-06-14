import Chain from '../src/models/Chain';

describe('Chain', () => {
    const ITEMS = '163841689525773';

    it('Should return the current chain', () => {
        const chain = new Chain();
        chain.setItems(ITEMS);

        expect(chain.run()).toBe('163/8/41/6/8/9/52/5/7/73');
    });

    it('Should return correct number of boxes for the current chain', () => {
        const chain = new Chain();
        chain.setItems(ITEMS);
        chain.run();

        expect(chain.countBoxes()).toBe(10);
    });

    it('Should return the optimized chain', () => {
        const chain = new Chain();
        chain.setItems(ITEMS);

        expect(chain.optimize()).toBe('163/46/82/55/73/81/9/7');
    });

    it('Should return correct number of boxes for the optimized chain', () => {
        const chain = new Chain();
        chain.setItems(ITEMS);
        chain.optimize();

        expect(chain.countOptimizedBoxes()).toBe(8);
    });
});
