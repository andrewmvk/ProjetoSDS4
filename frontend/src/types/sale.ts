import { Seller } from './seller'

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[]; //A interrogação é para dizer que este parâmetro é opcional
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}//Estamos aqui definindo um tipo que irá coletar os dados do nome do vendedor e da soma de suas vendas

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}