export type SaleSum = {
    sellerName: string;
    sum: number;
}//Estamos aqui definindo um tipo que irá coletar os dados do nome do vendedor e da soma de suas vendas

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}