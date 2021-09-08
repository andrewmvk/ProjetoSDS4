import Chart from 'react-apexcharts';

function BarChart() {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <>
            <Chart 
                options = {{...options, xaxis: mockData.labels}}
                series = {mockData.series}
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