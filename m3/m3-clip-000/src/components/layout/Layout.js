import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Layout = (props) => {
  const layoutVersion = "Version 2.0";
  // destrutres the ThemeContext objext gettign the darktheme
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
    >
      {/* <Header toggleTheme={props.toggleTheme} darkTheme={props.darkTheme} /> */}
      {/* Use the spread operator instead of above
       * You can also add local dat created in the component a well as the props passed in
       */}
      <Header layoutVersion={layoutVersion} />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
