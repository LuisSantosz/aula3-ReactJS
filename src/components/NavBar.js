import logo from './logo.svg';
import './NavBar.css';

function App() {
  return (
    <div className="NavBar">
      <header className="App-header">


      <div class="menu">
        <ul class="opcoes">
<li class="home">Home</li>


<div class="dropdown">
  <button class="produtos">Produtos</button>
  <div class="dropdown-content">


    <a href="#">Eletronicos</a>
    <a href="#">Acessorios</a>
    <a href="#">Cosmeticos</a>
    <a href="#">Casa</a>
  </div>
</div>


<li class="contatos">Contato</li>
<li class="sobre">Sobre</li>

        </ul>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Tiricica Shop - Menu E-Commerce</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/LuisSantosz/aula3-ReactJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </header>
    </div>
  );
}

export default App;
