
## Strings:

+ Multi line strings can be create by using the `+` or `/` or template literal ` `(ES6)

+ Methods to get the URL

    + window.location.href;
    + document.URL;

Higher Order Components:
========================

+ To use same counter logic in Hover component we have to pass state and event handler as props to parent component and pass from parent to hover component(This is not a great solution)

+ To share comman functionality between components(code reusability)
+ A pattern where a function takes component as argument and returns new component

+ `const newComponent = HigherOrderComponent(OriginalComponent)`