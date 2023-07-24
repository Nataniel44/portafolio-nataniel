// Header.jsx
import "./cssCoponents/header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ themeStyles, toggleTheme, isDarkTheme }) => {
  return (
    <>
      <header style={themeStyles}>
        <div className="header-text">
          <h2>BRIEFCASE</h2>
        </div>
        <div className="button-theme">
          <button onClick={toggleTheme}>
            {isDarkTheme ? "Theme Light" : "Theme Dark"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
