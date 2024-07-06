import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const layoutVersion = "Version 2.0"
  return (
    <div className="container" data-theme={props.darkTheme ? "dark" : "light"}>
      {/* <Header toggleTheme={props.toggleTheme} darkTheme={props.darkTheme} /> */}
      {/* Use the spread operator instead of above 
      * You can also add local dat created in the component a well as the props passed in
      */}
      <Header {...props} layoutVersion={layoutVersion} />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
