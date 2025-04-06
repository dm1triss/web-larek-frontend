# 🛍️ WEB-ларёк

## 📦 Описание проекта

**WEB-ларёк** — это одностраничное веб-приложение для демонстрации товаров и оформления онлайн-заказов. Пользователи могут просматривать карточки товаров, добавлять их в корзину, вводить контактные данные и отправлять заказ на сервер.

Приложение разработано на TypeScript с использованием архитектурного шаблона **MVP (Model-View-Presenter)**.

# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск

Перед установкой и запуском проекта необходимо проверить наличие файла .env с ключем `API_ORIGIN`, который указывает на адрес сервера API:

```
API_ORIGIN=https://larek-api.nomoreparties.co 
```

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## 📑 Типы данных

### Тип описывающий все возможные категории товара

type TCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

### Интерфейс, описывающий карточку товара в магазине

interface IProduct {
  ``` уникальный ID
  id: number;
```
  ``` название товара
  title: string;
```
  ``` описание товара
  description?: string
```
  ``` категория товара
  category: TCategory;
```
  ``` ссылка на картинку
  image: string;
```
  ``` цена товара, может быть бесценна.
  price: number | null;
```
}


### Данные формы оформления заказа

interface IOrderForm {
  // Адресс доставки
  address?: string;
  // Способ оплаты
  payment?: string;
  // Контактные данные
  phone?: string;
  // Почта
  email?: string;
  // Сумма
  total?: number;
}

### Полный заказ с товарами

interface IOrder extends IOrderForm {
  // Массив купленных товаров
  products: string[];
}

### Ответ при успешной отправке заказа

interface IOrderResult {
  // Успешно ли отправлен
  success: boolean;
  // ID заказа
  id: string;
  // Сумма
  total: number;
}
