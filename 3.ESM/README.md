# Домашнее задание «Import/Export — Native ESM»

## 📚 Описание

Задача — реализовать модульную структуру JavaScript-проекта, используя **нативную поддержку ES-модулей в браузерах** (без Webpack, Babel и ESLint).

Приложение разбито на три модуля:

- `domain.js` — логика предметной области (например, персонажи, атаки и т.д.)
- `game.js` — загрузка/сохранение игры
- `app.js` — запуск приложения

## 🧩 Структура проекта

```
3.ESM/
│
├── css/
│   └── style.css              # Стили приложения
│
├── js/
│   ├── app.js                 # Главный модуль — точка входа
│   ├── domain.js              # Модуль с классом Character
│   └── game.js                # Модуль с логикой Game и сохранением
│
├── index.html                 # HTML-страница с подключением app.js как модуля
├── package.json               # Настройки npm, скрипт запуска live-server
└── .gitignore
```

## 🚀 Как запустить

1. Установи зависимости:

```bash
npm install
```

2. Запусти проект:

```bash
npm run start
```

3. Откроется браузер по адресу: [http://127.0.0.1:8080](http://127.0.0.1:8080)  
В консоли должно появиться: `game started`.

## 🛠️ Используемые технологии

- ES-модули (native ESM)
- [live-server](https://www.npmjs.com/package/live-server) для локального запуска
- HTML, CSS, JS

## 🔍 Что реализовано

- `Character` экспортируется как `default` из `domain.js`
- `game.js` импортирует `Character`, экспортирует `Game` (по умолчанию), `GameSavingData`, `readGameSaving`, `writeGameSaving`
- `app.js` импортирует всё одним выражением:
  ```js
  import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame
  } from './game.js';
  ```
- `index.html` подключает только `app.js` через `<script type="module">`

## 📎 Ссылки

[GitHub репозиторий](https://github.com/dm-morozov/Netology_40_homework__modules_Webpack_ImportExport)