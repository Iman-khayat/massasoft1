import './App.css';
import {Container} from "./components/index";
import {Header,Footer,Hero,MostPopular,ourcustomers} from "./sections/index";


const App = () =>{
  return (
<>
<Header/>
<Container>
<Hero/>
<MostPopular/>
<ourcustomers/>
</Container>
<Footer/>
</>
    );
}

export default App;
