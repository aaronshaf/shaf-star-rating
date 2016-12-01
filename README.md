## It's easy peasy

<img src="https://d3vv6lp55qjaqc.cloudfront.net/items/330r191i0c2D1F0u3R34/Screen%20Recording%202016-11-30%20at%2009.50%20PM.gif?X-CloudApp-Visitor-Id=8c7c3ddb4f82754e00f6dac0eaa0cbfa&v=2bf38c50" width="130" height="35" />

Check out the [demo](https://aaronshaf.github.io/shaf-rate/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- Our custom element's source -->
<script src="https://unpkg.com/shaf-rate@0.0.5"></script>
```

### Usage

```html
<shaf-toggle>
  <input type="number" min="1" max="10" step="0.5" value="5" />
</shaf-toggle>
```

### Benefits

Because this wraps an existing `<input type="number" />`:

* It is form-friendly.
* It doesn't mess with your event handlers.
* Your checkbox still works if JavaScript is turned off or fails to load.
