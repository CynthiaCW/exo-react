import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SimLogin from "./pages/SimLogin";
import UserList from "./pages/UserList";
import UserProfile from "./components/UserProfile";
import Roles from "./pages/Roles";

function App() {
  const [user, setUser] = useState('')
  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/login" element={<SimLogin setUser={setUser} />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
