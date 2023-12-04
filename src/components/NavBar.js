
import {Link} from 'react-router-dom'
import styles from './styles.css'
import Contanier from './Contanier'


function NavBar(){
return(

 <nav class={styles.navbar}>
<Contanier>

<ul>
  
<li>
<link to="/">Home</link>
</li>

<li>
<link to="/produtos">Produtos</link>
</li>

<li>
<link to="/contatos">Contatos</link>
</li>

</ul>

</Contanier>
</nav>


)




}

export default NavBar

