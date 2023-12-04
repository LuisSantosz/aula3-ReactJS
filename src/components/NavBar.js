
import {Link} from 'react-router-dom'
import styles from './styles.css'
import Contanier from './Contanier'


function NavBar(){
return(

 <nav className={styles.navbar}>
<Contanier>

<link to="/">Home</link>
<link to="produtos">Produtos</link>
<link to="contatos">Contatos</link>

</Contanier>
</nav>


)




}

