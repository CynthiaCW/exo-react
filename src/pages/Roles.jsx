import React, { useCallback, useEffect, useState } from 'react';

const roles = [
    'Utilisateurs', 
    'Administrateurs', 
    'Moderateurs', 
    'Comptable', 
    'Directeur', 
    'Secretaire'
];

function Roles(props) {
    const [criteria, setCriteria] = useState('');
    const handleChange = useCallback((event) => {
        setCriteria(event.target.value);
    }, []);
    
    // On passe par une variable réactive intermédiaire pour filtrer le resultat
    const [rolesFiltered,setRolesFiltered] = useState([])
    useEffect(() => {
        setRolesFiltered(roles.filter(role => role.toLowerCase().includes(criteria.toLowerCase())))
    }, [criteria]);


    return (
        <div>
            <input type="text" placeholder='Recherche' value={criteria} onChange={handleChange} className="form-control"/>
            <br />
            {/* Pour tous mes roles, je map et 1 par 1 je les gère 
                S'il il y a des éléments, on affiche la liste, sinon on affiche un message d'avertissement */}
            {rolesFiltered.length
            ? rolesFiltered.map((role,index) => <li key={index}>{role}</li>)
            : "Aucune correspondance avec la recherche"}
        </div>
    );
}

export default Roles;