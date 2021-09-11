import NavBar from "../../components/NavBar"
import BarChart from "../../components/BarChart"
import DonutChart from "../../components/DonutChart"
import DataTable from "../../components/DataTable"
import Footer from "../../components/Footer"


function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                {/*O text-primary é que foi definido em "styles.css"
        É necessário o '<>' e o '</>' antes e depois do div para podermos retornar mais de um elemento
        O "container" delimita uma área para que tudo que esteja dentro do div não fique colado nas bordas do site*/}

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                {/*O row vai organizar os componentes da div em uma linha, px-3 é a distância (padding), no eixo x, de 3 unidades, o py
        faz a mesma coisa mas na vertical
        "col" é uma coluna, sm-6 é o tamanho dessa coluna
        text-center centraliza o texto, text-secondary deixa o texto com a cor que definimos para o text-secondary*/}

                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>
                <DataTable />

            </div>
            <Footer />
        </>
    );
}

export default Dashboard;