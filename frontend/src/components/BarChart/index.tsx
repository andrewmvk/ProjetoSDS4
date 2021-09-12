import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { BASE_URL } from 'utils/requests';
import { round } from '../../utils/format'

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

function BarChart() {

    const[chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => { 
        axios.get(`${BASE_URL}/sales/success-by-seller`) 
        .then(response => {
            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName); 
            const mySeries = data.map(x => round(100 * x.deals / x.visited, 1)); 

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries                   
                    }
                ]
            });

        })
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <>
            <Chart 
                options = {{...options, xaxis: chartData.labels}}
                series = {chartData.series}
                type = "bar"
                height = "240"
            />
        {/*Precisamos colocar entre chaves para indicar que queremos o valor que está dentro do arquivo
        xaxis é o eixo X, no caso estamos usando para indicar nossos rótulos dentro do options, os rótulos neste caso
        são os labels do mockData
        Podemos adicionar mais coisas nesse "series", type é o tipo do gráfico e height é a altura*/}
        </>
    );
}

export default BarChart;