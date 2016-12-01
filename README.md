## It's easy peasy

<img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2I0u3R253y2c00443m1T/Screen%20Recording%202016-12-01%20at%2008.39%20AM.gif?X-CloudApp-Visitor-Id=8c7c3ddb4f82754e00f6dac0eaa0cbfa&v=6f5f371b" width="128" height="31" />

Keyboard accessible. Check out the [demo](https://aaronshaf.github.io/shaf-star-rating/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- Our custom element's source -->
<script src="https://unpkg.com/shaf-star-rating@1.0.8"></script>
```

### Usage

```html
<shaf-toggle>
  <input type="number" min="1" max="5" step="1" value="3" />
</shaf-toggle>
```

### Benefits

Because this wraps an existing `<input type="number" />`:

* It is form-friendly.
* It doesn't mess with your event handlers.
* Your checkbox still works if JavaScript is turned off or fails to load.
