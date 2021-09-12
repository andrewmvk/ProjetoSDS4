import axios from 'axios';
import Chart from 'react-apexcharts';
import {BASE_URL} from '../../utils/requests';
import {SaleSum} from '../../types/sale';
import { useEffect, useState } from 'react';

type ChartData = {
    labels: string[];
    series: number[];
    /*Aqui estamos definindo arrays que terão os dados calculados pelo backend,
    antes tinhamos os dados predefinidos (fixos) que eram dessa forma:
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']*/
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
    //setChartData atualiza os valores da variável chartData
    //useState foi usado para definir o tipo genérico do "chartData" que no caso é "ChartData"
    //Por fim ele retorna o valor no formato de labels: [], series: []

    //let chartData : ChartData = { labels: [], series: [] }; //Definido uma variável do tipo "ChartData", "let" é um dado que muda
    //no caso essa é a forma errada, por isso está comentada

    useEffect(() => { //Esse useEffect é para que seja executado apenas uma vez
        axios.get(`${BASE_URL}/sales/amount-by-seller`) //Aqui usamos o axios para requisitar (get) os dados do amount-by-seller
        .then(response => {
            const data = response.data as SaleSum[]; //A constante "data" passa a ter o valor do SaleSum
            const myLabels = data.map(x => x.sellerName); //Os valores de data são mapeados para separar os nomes e as somas
            const mySeries = data.map(x => x.sum); //O mapemanto fica: my... recebe para cada x x.sum

            setChartData({ labels: myLabels, series: mySeries});

            //console.log(chartData) isso imprime os valores no console do inspecionar da página
        })
    }, [])//O segundo argumento do useEffect é uma lista de objetos que ele irá observar, quando essa lista mudar o mesmo vai executar novamente

    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <>
            <Chart 
                options = {{...options, labels: chartData.labels}}
                series = {chartData.series}
                type = "donut"
                height = "240"
            />
        </>
    );
}

export default DonutChart;