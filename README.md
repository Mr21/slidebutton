# slidebutton

``` html
<script src="//code.jquery.com/jquery-3.0.0-alpha1.min.js"></script>
<script src="//jquery-element.github.io/dist/jquery-element-1.7.0.js"></script>
<script src="//jquery-element.github.io/dist/slidebutton-1.0.0.js"></script>

<!-- slidedutton OFF -->
<input
	type="checkbox"
	data-jquery-element="slidebutton"
/>

<!-- slidedutton ON -->
<input
	type="checkbox"
	checked
	data-jquery-element="slidebutton"
/>
```

These `input:checkbox` will be automatically converted into:

``` html
<div class="slidebutton">
	<input type="checkbox"/> <!-- This is the original checkbox (with display:none) -->
	<div class="slidebutton-track">
		<div class="slidebutton-on"></div>
	</div>
	<span class="slidebutton-thumb"></span>
</div>
```

To toggle the status directly in JavaScript you have to do:

``` javascript
jqCheckbox.attr( "checked", "" );   // Put the toggle ON (the value doesn't matter).

jqCheckbox.attr( "checked", null ); // Put the toggle OFF.
jqCheckbox.removeAttr( "checked" ); // Put the toggle OFF.

// jqCheckbox, represents your original <input type="checkbox" data-jquery-element="slidebutton"/>.
```
