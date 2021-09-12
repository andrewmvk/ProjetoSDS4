import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";
import Pagination from "../Pagination"

function DataTable() {

    const [activePage, setActivePage] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(response => { // O .then pega a resposta e realiza algumas atribuições apenas se o axios.get der certo
                setPage(response.data); // Pega o corpo da resposta e joga no page
            }) /*O valor de activePage foi passado através de um índice (index) que veio do parâmetro da função changePage que é usada como parâmetro
            para a função onPageChange que está sendo usada na pasta "Pagination" e que modifica o valor da página somando (próxima) ou subtraindo
            (anterior) 1 ao seu valor (page.number, no caso da pasta em questão)*/
    }, [activePage])

    const changePage = (index: number) => { //É uma função que recebe um índice (index) e passa como argumento para o setActivePage
        setActivePage(index);
    }

    return (
        <>
            <Pagination page={page} onPageChange={changePage}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                                {/*A interrogação é para verificar se realmente existe um conteúdo dentro de "content", se existir, vai ser realizado
                            um mapemanto do objeto "item". toFixed(2) é para imprimir com 2 casas decimais e o formatLocalDate é uma função que criamos
                            para imprimir uma data (primeiro parâmetro) e um formato (segundo parâmetro)*/}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;