import { useState } from 'react';
import './App.css';
import AddUser from './components/add-user/AddUser';
import UserList from './components/users/UserList';

function App() {
    const [users, setUsers] = useState([]);
    const addUserHandler = (user) => {
        setUsers(prev => [...prev, user]);
    }

    return (
        <div>
            <AddUser addUser={addUserHandler} />
            <UserList users={users} />
        </div>
    );
}

export default App;