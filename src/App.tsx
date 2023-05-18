import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroCliente from './paginas/cadastroCliente';
import Lista from './paginas/Lista';

function App (){
  return(
    <BrowserRouter>
      <Routes>
       <Route path="/cliente/inserir" element={<CadastroCliente />} />
       <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;