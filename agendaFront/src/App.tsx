import { AuthProvider } from "./providers/authProvider";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
