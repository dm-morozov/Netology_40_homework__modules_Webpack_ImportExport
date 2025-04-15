# 📦 Задание 2: Import/Export

## 📚 Описание

Это вторая задача из домашнего задания по лекции **«Модули»** в курсе **JavaScript от Нетологии**.  
Цель задачи — правильно структурировать проект, разделив его на отдельные **ES-модули**, и настроить сборку с помощью **Webpack**.

## 🎯 Задача

Разделить приложение на следующие модули:

- `domain.js` — содержит предметную область (класс `Character`)
- `game.js` — отвечает за работу игры (запуск, загрузка, сохранение)
- `app.js` — точка входа, запускает игру
- `index.js` — точка входа для Webpack
- `index.html` — шаблон страницы

## 🛠️ Используемые технологии

- JavaScript (ES-модули)
- Webpack 5
- HTML Webpack Plugin
- Mini CSS Extract Plugin
- CSS Loader / Style Loader

## 📁 Структура проекта

```
2.ImportExport/
├── dist/                        # Сборка
├── node_modules/
├── src/
│   ├── css/
│   ├── js/
│   │   ├── app.js              # Инициализация игры
│   │   ├── domain.js           # Модуль Character
│   │   └── game.js             # Модуль Game
│   ├── index.html              # HTML-шаблон
│   └── index.js                # Входная точка Webpack
├── .gitignore
├── package.json
├── package-lock.json
├── webpack.config.mjs
├── webpack.common.mjs
├── webpack.dev.mjs
├── webpack.prod.mjs
└── README.md
```

## 🔌 Скрипты

| Скрипт         | Описание                                 |
|----------------|------------------------------------------|
| `npm run dev`  | Запуск проекта в режиме разработки       |
| `npm run build`| Production-сборка в директорию `dist/`   |

## ⚙️ Основной код

### `domain.js`

```js
export default class Character {}
```

### `game.js`

```js
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
```

### `app.js`

```js
import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame,
} from "./game.js";

const game = new Game();
game.start();

loadGame();
saveGame();

console.log(GameSavingData);
```

### `index.js`

```js
import './css/style.css';
import './js/app.js';

console.log('index worked');
```

### `index.html`

Вёрстка страницы с легендой задания и описанием модулей.

## 🧪 Webpack

Проект использует **разделённую конфигурацию Webpack**:

- `webpack.common.mjs` — общая конфигурация
- `webpack.dev.mjs` — конфигурация для разработки (devServer)
- `webpack.prod.mjs` — конфигурация для продакшена (оптимизация, минификация)
- `webpack.config.mjs` — точка входа, объединяет конфигурации по флагу `--env`

## 📦 Установленные зависимости

```json
"devDependencies": {
  "css-loader": "^7.1.2",
  "html-webpack-plugin": "^5.6.3",
  "mini-css-extract-plugin": "^2.9.2",
  "style-loader": "^4.0.0",
  "webpack": "^5.99.5",
  "webpack-cli": "^6.0.1",
  "webpack-dev-server": "^5.2.1"
}
```

## 📝 Примечание

Проект настроен как ES-модуль через:

```json
"type": "module"
```

в `package.json`.

## 🔗 Ссылки

- [Репозиторий проекта на GitHub](https://github.com/dm-morozov/Netology_40_homework__modules_Webpack_ImportExport)