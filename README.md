[![Build Status](https://travis-ci.org/varunpal/react-scroll-context.svg?branch=master)](https://travis-ci.org/varunpal/react-scroll-context) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# react-scroll-context
A component to disable scroll on document body when its children are scrolled.

## Install
```node
yarn add react-scroll-context
```
or
```node
npm install react-scroll-context --save
```

### Props
1. ```enable: boolean``` set this to true if you want to manually disable scroll.
Eg:
- ```enable: true``` Enables scroll context and prevents scroll on document body.
- ```enable: false``` Disables scrolls context and allows scroll on document body.
2. ```styles: string ``` String of classNames to be added to the parent container.

### Help
1. Uses mouse listeners for desktop / laptop browsers.
2. For mobile devices set ```enabled``` prop for enabling / disabling scroll context.
3. Takes care of jumps due to scrollbars on windows, linux etc. 

### Example
```javascript
import ScrollContext from 'react-scroll-context';

function Component(props) {
  return (
    <ScollContext>
        {// your awesome jsx}
    </ScrollContext>
  );
}
```

## License

MIT
