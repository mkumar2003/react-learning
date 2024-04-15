Q1) What is JSX?
Q2) Superpowers of JSX
Q3) Role of type attribute in script tag? What options can I use there?
Q4) {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX


# What is `JSX`
1. JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
2. Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children)
3 .JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
4. Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.
5. Rules of JSX : - Return a single root element(JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array) , Close all the tags , use camelCase.

# Behind the scene of `JSX`
Behind the scenes, JSX code needs to be transformed into regular JavaScript before it can be executed in the browser. This process is typically done using a tool called a transpiler, such as Babel.

Here's a simplified overview of how JSX works behind the scenes:
1. Parsing: When your JavaScript code containing JSX is processed, the JSX syntax is parsed by a parser. This parser recognizes JSX syntax and converts it into an abstract syntax tree (AST).
2. Transformation: The AST generated from the parsing step is then transformed into equivalent JavaScript code. This transformation involves converting JSX elements into regular JavaScript function calls.

For example, ```const element = <h1>Hello, world!</h1>;``` is converted into ```const element = React.createElement('h1', null, 'Hello, world!');```


3. Execution: The transformed JavaScript code is then executed by the JavaScript engine, just like any other JavaScript code.

This transformation process allows you to write JSX code that looks like HTML but gets converted into regular JavaScript function calls that create and manipulate DOM elements at runtime.

# Babel & parcel role in JSX
`Babel` is a popular JavaScript compiler that is often used as a toolchain for transforming next-generation JavaScript (ES6+), including JSX, into a backward-compatible version of JavaScript that can run in older browsers or in environments that do not support these features natively.
Specifically for JSX, Babel is responsible for transforming JSX syntax into regular JavaScript code, typically using React.createElement() calls. Babel provides a preset called @babel/preset-react that includes the necessary plugins for transforming JSX.

`parcel` When you use Parcel to bundle your React application, it automatically detects JSX files and uses Babel (along with the @babel/preset-react preset) to transform JSX syntax into plain JavaScript during the bundling process. This allows you to write JSX code without worrying about setting up Babel configurations manually.

#  Superpowers of `JSX`
1. Declarative Syntax: JSX allows you to write UI code in a declarative manner, similar to writing HTML. This makes it easier to visualize and understand the structure of your UI components.
2. Embedding JavaScript Expressions: JSX allows you to embed JavaScript expressions directly within your UI code using curly braces {}. This enables dynamic content rendering, conditional rendering, and other dynamic behaviors within your UI components.
3. Component Composition: JSX enables component composition, allowing you to create complex UIs by composing smaller, reusable components together. This promotes code reusability and maintainability.
4. Readability: JSX code is often more readable and intuitive compared to equivalent code written using React.createElement() calls or other templating languages. 
5. Easy debugging

##  `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX ?

`{TitleComponent}`:This syntax is used to render the TitleComponent without any additional markup.
It's suitable for simple cases where you only need to render the component itself without any surrounding elements.

`{<TitleComponent/>}`:This syntax is used to render the TitleComponent with self-closing tags <TitleComponent/>.
It's suitable for cases where you want to render the component with minimal surrounding markup.
It's a concise and common way to render components in JSX.

`{<TitleComponent></TitleComponent>}`:This syntax is used to render the TitleComponent with opening and closing tags <TitleComponent></TitleComponent>.
It's suitable for cases where you want to include additional content or props within the component, or when you need to apply JSX syntax within the component.
It provides more flexibility compared to the self-closing syntax, as it allows you to pass children, props, or apply other JSX syntax within the component.





