function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/andrewmvk/" target="_blank" rel="noreferrer">Andrew Medeiros</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                {/*Da mesma forma que no NavBar, o código foi pego usando o site do Bootstrap*/}
            </div>
        </footer>
    );
}

export default Footer;