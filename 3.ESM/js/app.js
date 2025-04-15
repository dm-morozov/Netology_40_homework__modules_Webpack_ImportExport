// Модуль App - отвечающий за запуск приложения
import Game, {
    GameSavingData,
    readGameSaving as loudGame,
    writeGameSaving as saveGame,
} from "./game.js";

const game = new Game();
game.start();

loudGame();
saveGame();

console.log(GameSavingData);
