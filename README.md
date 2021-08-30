# Widget

Widget project build to use like library. This code is designed to large projects with modules and business rules.

**Framework:** Vue.js

**Why html?**

Widget hmtl is more easy to work, you don't have to setup a iframe and pass parameters with postMessage, the code will load inside the client website (this can cause conflicts with variables and ecoding)

**How it works?**

Widget will instantiate by the script library in user website /widget.umd.min.js (eg: www.widget-test.com/widget.umd.min.js)
After call the script, in html head or javascript, the user will instantiate a new instance of the widget passing some parameters, like the widget key and customer details

```
 <script>
    const t = new Widget();
    t.create({
    key: "RedWZ63M",
    customer: {
        name: "teste",
        email: "teste@teste.com"
    }
    });
</script>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Folder content

**public**  
Public exported files

**assets**  
Folder to hold image, css, fonts contents

**components**  
Designed to store all widget components that you can share with multiple screens

**consts**  
Project consts  
Mode: widget mode (embebed or fixed)  
Time: Constants of time, like, recurrence time rule, widget delay and reactivation time

**services**  
Requests endpoints urls

**store**  
Widget state store separated by modules with specific context

**utils**  
Code shared in project  
http - client that will do the requests

**views**  
The widget pages and content

**try-widget**  
Sample for test the widget
