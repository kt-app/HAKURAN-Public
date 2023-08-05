import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { OtherLink } from "./pages/link";
import { Navbar } from "./pages/components/navbar.jsx";
import React, { Suspense } from "react"

const Loading = () => {


  <div>Loading...</div>
}










const C306 = React.lazy(() => import('./pages/class306.jsx'));

function App() {

  return (

    <BrowserRouter>
      <div className="App">

        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/class306" element={<Suspense fallback={<Loading />}>
            <C306 />
          </Suspense>} />
          <Route path="/link" element={<OtherLink />} />
        </Routes>

      </div>
    </BrowserRouter>


  );
}

export default App;