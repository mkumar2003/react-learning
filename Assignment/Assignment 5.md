## Namaste React Course by Akshay Saini
# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:
```
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```
import MyComponent, {MyComponent2} from "./MyComponent";
```


## Q: What is the importance of `config.js` file?
A: The `config.js` file plays a crucial role in many JavaScript and Node.js applications. It serves as a central place for defining configuration settings that your application needs to operate correctly. Here are some of the main reasons why a config.js file is important:

1. Centralized Configuration Management
Single Source of Truth: By centralizing configuration settings in one file, you ensure there is a single source of truth for configuration values. This makes the application easier to manage and reduces the risk of inconsistencies.
Easier Maintenance: All configuration-related settings are in one place, making it easier to update and manage as the application evolves.
2. Environment Management
Environment-Specific Configurations: It allows you to define different settings for different environments (development, testing, production). This helps in ensuring that environment-specific configurations do not mix up.
Dynamic Configuration: Depending on the environment, the config.js can dynamically load the appropriate settings.
3. Security
Sensitive Information Handling: Configuration files can securely handle sensitive information like API keys, database connection strings, etc., keeping them out of your source code. This is often paired with environment variables for added security.
Access Control: By centralizing sensitive information, you can more easily control access and ensure that only authorized parts of your application can access these settings.
4. Consistency
Consistent Configuration: Using a config.js file ensures that the configuration is consistent across different parts of the application. This consistency helps in avoiding bugs and makes debugging easier.
5. Modularity
Separation of Concerns: By keeping configuration settings separate from your business logic, you adhere to the principle of separation of concerns, making your code cleaner and more modular.
6. Scalability
Easier Scaling: As your application grows, managing configuration settings through a central file makes it easier to scale. You can add new settings or change existing ones without having to hunt through your codebase.

```
// config.js
const config = {
    development: {
        db: 'mongodb://localhost:27017/devdb',
        port: 3000,
        secretKey: 'dev_secret_key'
    },
    production: {
        db: 'mongodb://prodhost:27017/proddb',
        port: 8000,
        secretKey: 'prod_secret_key'
    },
    test: {
        db: 'mongodb://localhost:27017/testdb',
        port: 4000,
        secretKey: 'test_secret_key'
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];
```
```
// app.js
const config = require('./config.js');

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

```
```

## Q: What are `React Hooks`?
A: React Hooks are functions that allow you to use state and other React features in functional components. Before Hooks were introduced in React 16.8, state and lifecycle methods were only available in class components. Hooks enable functional components to manage state, perform side effects, and handle other complex functionality, making your code more readable and easier to manage.
-State Hook (useState): This Hook allows you to add state to functional components. It returns an array containing the current state value and a function to update it. You can use multiple useState calls to manage multiple pieces of state.

-Effect Hook (useEffect): This Hook lets you perform side effects in your components, such as fetching data, directly updating the DOM, or setting up subscriptions. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.


## Q: Why do we need `useState Hook`?
A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.
#### Syntax for useState hook
```
const [state, setState] = useState(initialstate);
```
#### Importing: To use useState you need to import useState from react as shown below:
```
import React, { useState } from "react";
```
we can use Hooks in Functional Components
