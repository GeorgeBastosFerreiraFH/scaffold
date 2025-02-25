import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <header>
                <h1>Meu Portfólio</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Início</Link>
                        </li>
                        <li>
                            <Link to={"/sobre"}>Sobre</Link>
                        </li>
                        <li>
                            <Link to={"/cursos"}>Cursos</Link>
                        </li>
                        <li>
                            <Link to={"/linguagens"}>Linguagens</Link>
                        </li>
                        <li>
                            <Link to={"/projetos"}>Projetos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
                <main>
                    <Outlet />
                </main>
            <footer>
                <p>Portfólio de Desenvolvimento Front-End</p>
                <p>Todos os direitos reservados ©</p>
                <p>Desenvolvido por George Bastos</p>
            </footer>
        </>
    )
}