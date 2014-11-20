imagescale
===========

Image thumb process module.Use for thumb calc imge width and height with specified Max-width and Max-height

## Usage
Copy the code to your project, and use as global Var, AMD/CMD and whatever your want .

### imagescale(image, maxWidth, maxHeight)

```js
var image = new Image();
image.src = 'xxx';
image.onload = function () {
    imagescale(this, 128, 64);
    // Limit width and use auto height
    imagescale(this, 128, "auto");
    // Limit height and use auto width
    imagescale(this, "auto", 64);
}
```
