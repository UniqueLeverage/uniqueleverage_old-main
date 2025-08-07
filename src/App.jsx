import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PrivateRouter, Home, AuthGuard} from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/*" element={
                        <AuthGuard>
                            <PrivateRouter/>
                        </AuthGuard>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App