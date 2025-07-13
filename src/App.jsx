import './App.css'
import Body from "./components/Body.jsx";
import Navigation from "./components/Navigation.jsx";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 42,
        following: 10,
    });

    const changeAvatar = url => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    } // если вычисляем стейт на основе предыдущего, то используется такая схема

  return (
    <div className={'app'}>
        <Navigation changeAvatar = {changeAvatar} user={user}/>
        <Body changeAvatar = {changeAvatar} user={user} stats={stats}/>
    </div>

  )
}

export default App
