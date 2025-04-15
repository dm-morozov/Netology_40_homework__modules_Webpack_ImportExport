// Модуль Game - отвечающий за работу приложения (загрузку и сохранение)

import Character from "./domain.js";

export default class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export { GameSavingData, readGameSaving, writeGameSaving };

const character = new Character();
