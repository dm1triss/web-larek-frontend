/**
 * Категории товаров в магазине
 */

export type TCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

/**
 * Информация о товаре
 */

export interface IProduct {
    id: number;
    title: string;
    description?: string;
    category: TCategory;
    image: string;
    price: number | null; 
}
 
/**
 * Данные формы оформления заказа
 */

export interface IOrderForm {
    address?: string;
    payment?: string;
    phone?: string;
    email?: string;
    }

/**
 * Полный заказ с товарами
 */

    export interface IOrder extends IOrderForm {
        items: string[];
        total: number;
    }

/**
 * Ответ при успешном оформлении заказа
 */

    export interface IOrderResult {
        id:string; 
        total: number;
    }