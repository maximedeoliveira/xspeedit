import { createInterface, ReadLine } from 'readline';
import Chain from './models/Chain';

const rl: ReadLine = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

rl.setPrompt("Saisir la chaîne d'articles à emballer (exit pour quitter) > ");
rl.prompt();

rl.on('line', (userInput: string) => {
    if (/^[1-9]{1,}$/.test(userInput)) {
        const chain = new Chain();
        chain.setItems(userInput);

        console.log(`Articles       : ${userInput}`);
        console.log(`Robot actuel   : ${chain.run()} => ${chain.countBoxes()} cartons utilisés`);
        console.log(`Robot optimisé : ${chain.optimize()} => ${chain.countOptimizedBoxes()} cartons utilisés \n`);
    } else if (userInput.length === 0) {
        console.log('La chaîne doit contenir au moins un article.');
    } else if (userInput === 'exit') {
        rl.close();
    } else {
        console.log('Les articles ne peuvent être représentés uniquement par des entiers compris entre 1 et 9.');
    }

    rl.prompt();
}).on('close', () => {
    process.exit(0);
});
