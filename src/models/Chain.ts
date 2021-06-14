import Box from './Box';

export default class Chain {
    private items: number[] = [];
    private boxes: Box[] = [];
    private optimizedBoxes: Box[] = [];

    /**
     * Ajoute les articles dans la chaîne
     * @param chain string
     */
    setItems = (chain: string): void => {
        this.items = chain.split('').map((char: string) => parseInt(char));
    };

    /**
     * Retourne le nombre de cartons nécaissaires pour le robot actuel
     * @returns number
     */
    countBoxes = (): number => {
        return this.boxes.length;
    };

    /**
     * Retourne le nombre de cartons nécessaires pour le robot optimisé
     * @returns number
     */
    countOptimizedBoxes = (): number => {
        return this.optimizedBoxes.length;
    };

    /**
     * Exécute la chaîne normale
     * @returns string
     */
    run = (): string => {
        this.items.map((item: number) => {
            const lastBox = this.boxes[this.boxes.length - 1];
            if (lastBox?.canBeAdd(item)) {
                lastBox.addItem(item);
            } else {
                const box = new Box();
                box.addItem(item);
                this.boxes.push(box);
            }
        });

        return this.toString(this.boxes);
    };

    /**
     * Exécute la chaîne optimisée
     * @returns string
     */
    optimize = (): string => {
        let boxes: Box[] = [];

        this.items.map((item: number) => {
            const boxFound = boxes.find((box: Box) => (box.canBeAdd(item) ? box : undefined));

            if (boxFound) {
                boxFound.addItem(item);

                if (boxFound.isFull()) {
                    this.optimizedBoxes.push(boxFound);
                    boxes = boxes.filter((box: Box) => JSON.stringify(box) !== JSON.stringify(boxFound));
                }
            } else {
                const newBox = new Box();
                newBox.addItem(item);
                boxes.push(newBox);
            }
        });

        this.optimizedBoxes = this.optimizedBoxes.concat(boxes);

        return this.toString(this.optimizedBoxes);
    };

    /**
     * Formate la chaîne pour séparer les cartons par des slashs
     * @param chain Box[]
     * @returns string
     */
    private toString = (chain: Box[]): string => {
        return chain.map((box) => box.toString()).join('/');
    };
}
