# Canvas Experiments

Some experiments with Canvas / js

# Primer

We will be using `SVG` to draw on a `canvas` element.

## Size and ratio

Firstly, the canvas should retain the same dimension ratio - if it resizes to fit a window and does not maintain the original ratio, any drawings will be distorted.

## Rendering context

When the canvas element is rendered it produces a drawing surface - fixed-size as noted above - that provides rendering contexts. We'll be using the `2d` context, but others are available - 3d for WebGL etc.

```js
const canvas = document.getElementById("demo");
const ctx = canvas.getContext("2d");
```

# Simple shapes

We need to select the `fillStyle` before we draw a shape. The colours can't use CSS style at all it seems, so

```js
// select a pink-ish, see-through fill-style
this.ctx.fillStyle = "rgb(255,0,100, 0.2)";
```

Then we can create a filled rectangle

```js
this.ctx.fillRect(left, top, width, height);
```

We can also draw a stroke around the border of the rectangle - note the different method to set style.

```js
this.ctx.strokeStyle = "rgb(0,0,180, 0.3)";
this.ctx.lineWidth = 30;
this.ctx.strokeRect(left, top, width, height);
```

Lastly, we can clear a rectangular area

```js
this.ctx.clearRect(90, 10, 60, 200);
```
