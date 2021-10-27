//importar dependenciaws para roteamento
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from './Pages/Blog';
import Contatos from './Pages/Contatos';
import Home from './Pages/Home';
import Servicos from './Pages/Servicos';
import SobreNos from './Pages/SobreNos';

/*BR: ajuda na parte de troca de telas
R: vai ser renderizado
S: troca da rota */

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/contatos" component={Contatos} />
                <Route exact path="/serviços" component={Servicos} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/sobre-nos" component={SobreNos} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;