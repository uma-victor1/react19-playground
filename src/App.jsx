import Count, { CountWithCompiler } from "./components/Count";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <h1>React compiler</h1>
        <section>
          <Count />
          <CountWithCompiler />
        </section>
      </main>
    </>
  );
}

export default App;
