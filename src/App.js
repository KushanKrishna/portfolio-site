import Navbar from "./component/navbar/Navbar.js"
import Intro  from "./component/intro/Intro.js";
import Skills from "./component/skillls/Skills.js";
import WhatIDo from "./component/about/WhatIDo.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <WhatIDo />
    </div>
  );
}

export default App;
