
export type TCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

export interface IProduct {
    id: number;
    title: string;
    description?: string;
    category: TCategory;
    image: string;
    price: number | null; 
}
 

export interface IOrderForm {
    address?: string;
    payment?: string;
    phone?: string;
    email?: string;
    }


    export interface IOrder extends IOrderForm {
        items: string[];
        total: number;
    }

    export interface IOrderResult {
        id:string; 
        total: number;
    }
    