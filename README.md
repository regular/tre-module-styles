module-styles
---

``` js
const styles = require('module-styles')('my-module')

styles('div { color: red; }') // adds style element to head
styles('div { color: blue; }') // updates same style element
```

Cares about pretty indentation

License: ISC
