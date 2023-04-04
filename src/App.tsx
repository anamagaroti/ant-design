import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroCliente from './paginas/cadastroCliente';

function App (){
  return(
    <BrowserRouter>
      <Routes>
       <Route path="/cliente/inserir" element={<CadastroCliente/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;