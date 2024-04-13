# Video 3 Laying out the Foundation

## BrowserList and what does that means

browserlist specifiy that our code will work for older versions as well for one that we have specifed but we are not sure about other browsers and their versions

### then what's the solution

we use a pollyfill so whenever we are in a older version of browser our code is converted into older code with the help of BABEL.

BABEL is just a JS package or Node module which takes newer code and converts them into older versions.

>npx is equivalent to saying npm run

> there is a catch parcel does not remove console.logs automatically we need to use babel-plugin-transform-remove-console

>command to install
>npm install babel-plugin-transform-remove-console --save-dev or -D.
>installing the script doesn't do all work we need to use it as well 
>create file .bablerc and just paste
>{
  "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
}