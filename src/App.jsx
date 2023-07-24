import "./App.css";
import Header from "./components/Header";
import Icons from "./icons";
import { useState } from "react"; // Asegúrate de importar useState

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#222" : "#ffffff",
    color: isDarkTheme ? "#ffffff" : "#000000",
    // Agrega otros estilos según sea necesario
  };
  return (
    <>
      <Header
        themeStyles={themeStyles}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <main style={themeStyles}>
        <section className="present">
          <img src="src/img/to4.png" alt="yo" />
          <div>
            <h1>
              Hi there, <br />
              i´m <span className="span-name">Nataniel</span>
            </h1>
            <p>I want to be a full stack programmer.</p>

            <button className="button">PROJECTS</button>

            <Icons />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
