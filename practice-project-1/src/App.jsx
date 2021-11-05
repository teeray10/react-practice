import { useState } from 'react';
import './App.css';
import AddUser from './components/add-user/AddUser';
import UserList from './components/users/UserList';

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (user) => {
        setUserList(prev => [...prev, user]);
    }

    return (
        <div>
            <AddUser addUser={addUserHandler} />
            <UserList />
        </div>
    );
}

export default App;