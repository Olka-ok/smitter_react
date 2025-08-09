import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";

function App() {

    return (
        <div className={'app'}>
            <Navigation/>
            <Body/>
        </div>
    )
}
// smittercontext компонент с обяз атрибутом value
export default App
