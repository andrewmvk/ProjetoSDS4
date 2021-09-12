import axios from 'axios';
import Chart from 'react-apexcharts';
import {BASE_URL} from '../../utils/requests';
import {SaleSum} from '../../types/sale';

type ChartData = {
    labels: string[];
    series: number[];
    /*Aqui estamos definindo arrays que terão os dados calculados pelo backend,
    antes tinhamos os dados predefinidos (fixos) que eram dessa forma:
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']*/
}

function DonutChart() {

    let chartData : ChartData = { labels: [], series: []}; //Definido uma variável do tipo "ChartData", "let" é um dado que muda
    //const é um dado que não muda

    axios.get(`${BASE_URL}/sales/amount-by-seller`) //Aqui usamos o axios para requisitar (get) os dados do amount-by-seller
        .then(response => {
            const data = response.data as SaleSum[]; //A constante "data" passa a ter o valor do SaleSum
            const myLabels = data.map(x => x.sellerName) //Os valores de data são mapeados para separar os nomes e as somas
            const mySeries = data.map(x => x.sum) //O mapemanto fica: my... recebe para cada x x.sum

            chartData = { labels: myLabels, series: mySeries}

            console.log(chartData)
        })

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