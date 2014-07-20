

# eventdebugger

Simple lib to analyse events. First verison is silly simple. I made it because haven't found anything similar and I would like to understand events driving my app.

## Usage
Simply run
```javascript
require('eventdebugger')();
```

You can pass ignore hash like
```
require('eventdebugger')({
    Socket : "*",
    process : ["end"]
});
```

## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
