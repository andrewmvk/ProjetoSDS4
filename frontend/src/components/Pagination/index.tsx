import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

function Pagination( { page, onPageChange } : Props) {
    return (
        //Para mudar o estado dos botões colocou-se parâmetros na função
        //Layout pego no bootstrap
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}> 
                    {/*Verificação para saber é a primeira página ('disabled') ou não ('')*/}
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                        {/*O valor da página começa com 0, mas para o usuário é 1*/}
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;