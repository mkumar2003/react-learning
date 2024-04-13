//uses HMR - Hot Module Replacement for automatically refreshing the changes when you change anything in file in entire module.
//File Watcher algorithm - c++

//on running npm parcel build index.html
//dist folder is created by parcel which contains minified versions of our files for production it does BUNDLING , MINIFY , CLEANING OF OUR CODE(i.e clearing all console.logs)

//Image optimization is also done by parcel as media and most heavy things to load on an website.
//caching while development 
//it compresses the file i.e renaming variables in files etc
//comptaible with older versions of browsers 
//we can run website on https as well instead of http using npx parcel index.html --https
//consistent Hasing Algorithm


import React from "react";
import ReactDOM from "react-dom/client";

//jsx is similar to HTML but it is not HTML
//behind the scene it uses babel
//JSX => react.createElement => Object => HTML(DOM).

//now heading is an react element
const heading = <h1 id="title" key="h2">
  Namaste React using JSX
</h1>

const Title = ()=> {
  return <h1>this is title</h1>
}

//functional component
//a functional component is an javascript function that returns some piece of JSX or react element or another component

//name of components starts with capital letter not mandatory but good practice
//in case of multiple lines wrap them inside round brackets
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {Title()}       {/* <Title /> using one component inside another is called component composition */}
    <h1>This is</h1>
    <h2>Written inside a component</h2>
    </div>
    )

  
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer

  root.render(<HeaderComponent />)