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
