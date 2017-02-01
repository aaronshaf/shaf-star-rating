## It's easy peasy

<img src="https://camo.githubusercontent.com/af7823d13ed4789cc1e8cb9f5861f103bfed6907/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f32493075335232353379326330303434336d31542f53637265656e2532305265636f7264696e67253230323031362d31322d3031253230617425323030382e3339253230414d2e6769663f582d436c6f75644170702d56697369746f722d49643d386337633364646234663832373534653030663664616330656161306362666126763d3666356633373162" width="128" height="31" />

Keyboard accessible. Check out the [demo](https://aaronshaf.github.io/shaf-star-rating/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (19.8KB, 2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- Our custom element's source (6.5KB gzipped) -->
<script src="https://unpkg.com/shaf-star-rating@1.0.13"></script>
```

### Usage

```html
<shaf-star-rating>
  <input type="number" min="1" max="5" step="1" value="3" />
</shaf-star-rating>
```

### Benefits

Because this wraps an existing `<input type="number" />`:

* It is form-friendly.
* It doesn't mess with your event handlers.
