## It's easy peasy

<img src="https://camo.githubusercontent.com/9fde11aaf68c86b075c7bb7db3324077a441c523/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f33333072313931693063324431463075335233342f53637265656e2532305265636f7264696e67253230323031362d31312d3330253230617425323030392e3530253230504d2e6769663f582d436c6f75644170702d56697369746f722d49643d386337633364646234663832373534653030663664616330656161306362666126763d3262663338633530" width="130" height="35" />

Keyboard accessible. Check out the [demo](https://aaronshaf.github.io/shaf-star-rating/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- Our custom element's source -->
<script src="https://unpkg.com/shaf-star-rating@1.0.2"></script>
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
