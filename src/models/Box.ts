const MAX_CAPACITY = 10;

export default class Box {
    private items: number[] = [];

    /**
     * Retourne si un article peut être ajouté dans le carton
     * @param item number
     * @returns boolean
     */
    canBeAdd = (item: number): boolean => {
        return this.getCapacity() + item <= MAX_CAPACITY;
    };

    /**
     * Retourne la capacité du carton
     * @returns number
     */
    getCapacity = (): number => {
        return this.items.reduce((sum, current) => sum + current, 0);
    };

    /**
     * Ajoute un article dans le carton
     * @param item number
     */
    addItem = (item: number): void => {
        this.items.push(item);
    };

    /**
     * Retourne si un carton est plein
     * @returns boolean
     */
    isFull = (): boolean => {
        return this.getCapacity() === MAX_CAPACITY;
    };

    /**
     * Retourne le carton formaté
     * @returns string
     */
    toString = (): string => {
        return this.items.join('');
    };
}
