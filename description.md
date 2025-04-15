# Домашняя работа к лекции «Модули»

## Описание

Репозиторий содержит выполненные задачи по теме «Модули» курса Нетологии по JavaScript.

## Структура проекта

Проект состоит из нескольких модулей, собранных с помощью Webpack:

```
├── src
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── app.js
│   ├── index.js
│   └── index.html
├── dist/ (создаётся после сборки)
├── webpack.config.js
├── package.json
├── .gitignore
└── README.md
```

## Установка

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/dm-morozov/Netology_40_homework_for_the_lecture_modules.git
   cd Netology_40_homework_for_the_lecture_modules
   ```

2. Установить зависимости:
   ```bash
   npm install
   ```

## Сборка

Для сборки проекта выполните:
```bash
npm run build
```

## Запуск сервера

Вы можете использовать любой HTTP-сервер, например:
```bash
npx serve dist
```

## Линтинг

Проверка ESLint:
```bash
npm run lint
```

Автоматическое исправление:
```bash
npm run lint:fix
```

## Задачи

### Задача 1: Webpack

Настроена сборка проекта с помощью Webpack:
- Подключены стили и JavaScript.
- Используются HtmlWebpackPlugin и MiniCssExtractPlugin.

### Задача 2: Import/Export

Код разделён на модули:
- `domain.js` — содержит бизнес-логику (персонажи)
- `game.js` — игровая логика и загрузка
- `app.js` — точка запуска приложения

### Задача 3 (*): ESM

Проект собран без Webpack, используя нативные ES-модули в браузере.

## Автор

- [dm-morozov](https://github.com/dm-morozov)