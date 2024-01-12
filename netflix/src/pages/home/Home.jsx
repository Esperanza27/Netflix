import MySectionCarrosel from "./components/MySectionCarrosel";

import Toolbar from "./components/Toolbar";

const Home =()=>{
    return (
    <div>
<Toolbar/>
<MySectionCarrosel saga={"harry potter"}/>
<MySectionCarrosel saga={"lord of the rings"}/> 
<MySectionCarrosel saga={"Matrix"}/>
    </div>
    )
}; export default Home;