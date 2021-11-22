import UserFinder from './components/UserFinder';
import UserContext from './store/User-Context';

const DUMMY_USERS = [
  { id: "u1", name: "shafiq" },
  { id: "u2", name: "shaikh" },
  { id: "u3", name: "shoaib" },
  { id: "u4", name: "nabeel" },
  { id: "u5", name: "afif" },
];

function App() {
  const userContext={
    users:DUMMY_USERS
  }
  return (
    <UserContext.Provider  value={userContext}>
      <UserFinder/>
    </UserContext.Provider>
  );
}

export default App;
