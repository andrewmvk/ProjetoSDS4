function DataTable() {
    return (
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
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Brayan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>João</td>
                        <td>23</td>
                        <td>21</td>
                        <td>13070.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Maria</td>
                        <td>50</td>
                        <td>35</td>
                        <td>20450.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;