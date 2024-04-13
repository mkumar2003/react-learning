// Parcel Feature ***
 //Created A Server
 //HMR - Hot Module Replacement
 //File Watcher algorithm - C++ (Execute File when changes occur)

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

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(container);
