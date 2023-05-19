import React, { useCallback, useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

const users = ['Eva', 'Aude', 'Anne', 'Marc', 'Sansom'];

function UserList() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const handleSearch = useCallback((event) => setSearchCriteria(event.target.value), []);

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.toLowerCase().includes(searchCriteria.toLowerCase())));
  }, [searchCriteria]);

  //   Ajout d'un nouvel utilisateur dans la liste
  const [newUser, setNewUser] = useState('');

  const handleAdd = useCallback((event) => setNewUser(event.target.value), []);

  const addUser = () => {
    users.push(newUser);
    setNewUser('');
    setFilteredUsers(users.filter((user) => user.toLowerCase().includes(searchCriteria.toLowerCase())));
  };

  return (
    <div>
        <h1 className="mb-4">Liste des utilisateurs</h1>
        <div className="col-xs-6 col-md-12">
            <input type="text" className="form-control" placeholder="Recherche" onChange={handleSearch} />
            <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Nouvel utilisateur" value={newUser} onChange={handleAdd} />
                <button className="btn btn-primary mt-2" onClick={addUser}>Créer</button>
            </div>
        </div>
        

        <div className="container mt-3">
            <div className="row">
                {filteredUsers.map((user, i) => (
                    <div  key={i} className="col-xs-6 col-sm-4 col-md-3 mb-3">
                        <UserProfile user={user} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default UserList;

