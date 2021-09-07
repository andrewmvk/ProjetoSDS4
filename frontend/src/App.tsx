import NavBar from "components/NavBar"
import Footer from "components/Footer"
import DataTable from "components/DataTable"

function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
        <h1 className="text-primary">Olá mundo!</h1>
        {/*O text-primary é que foi definido em "styles.css"
        É necessário o '<>' e o '</>' antes e depois do div para podermos retornar mais de um elemento
        O "container" delimita uma área para que tudo que esteja dentro do div não fique colado nas bordas do site*/}
      
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;