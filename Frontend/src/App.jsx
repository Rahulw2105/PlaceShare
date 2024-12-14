import "./App.css";
import Users from "../src/users/pages/Users";
import MainNavigation from "./shared/Navigation/MainNavigation";
function App() {
  return (
    <>
      <main>
        <MainNavigation />
        <Users />
      </main>
    </>
  );
}

export default App;
