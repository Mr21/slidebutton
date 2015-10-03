/*
	slidebutton - 1.0.0
	https://github.com/jquery-element/slidebutton
*/

function lg(s) {console.log(s)}

$.element( {
	name: "slidebutton",
	htmlReplace:
		'<div class="slidebutton">'+
			'{{html}}'+
			'<div class="slidebutton-track">'+
				'<div class="slidebutton-on"></div>'+
			'</div>'+
			'<span class="slidebutton-thumb"></span>'+
		'</div>'
	,
	css: '\
		.slidebutton input {\
			display: none;\
		}\
		.slidebutton {\
			display: inline-block;\
			position: relative;\
			min-width: 20px;\
			min-height: 10px;\
			cursor: pointer;\
			-webkit-touch-callout: none;\
			-webkit-user-select: none;\
			   -moz-user-select: none;\
			    -ms-user-select: none;\
			        user-select: none;\
		}\
		.slidebutton-track {\
			overflow: hidden;\
			height: 100%;\
			border-radius: 9999px;\
			background-color: rgba( 0, 0, 0, .5 );\
		}\
		.slidebutton-on {\
			width: 0;\
			height: 100%;\
			background: #f33;\
		}\
		.slidebutton-thumb {\
			position: absolute;\
			height: 100%;\
			top: 0;\
			left: 0;\
			margin-left: -1px;\
			border-radius: 50%;\
			background: #fff;\
		}\
		.slidebutton-active .slidebutton-thumb {\
			margin-left: 1px;\
		}\
		.slidebutton-on,\
		.slidebutton-thumb {\
			transition: all .2s;\
		}\
	',
	init: function() {
		var
			jqElement = this.jqElement,
			jqThumb = jqElement.children( ".slidebutton-thumb" ),
			jqOn = jqElement.find( ".slidebutton-on" ),
			elCheckbox = jqElement.children( "input" )[ 0 ],
			thumbH = jqThumb.height(),
			active = false,
			elemW
		;

		jqThumb.css( "width", thumbH );
		jqOn.css( "width", thumbH / 2 );

		function click() {
			thumbH = jqThumb.height();
			if ( active = !active ) {
				elCheckbox.setAttribute( "checked", "checked" );
				elemW = jqElement.width();
				jqOn.css( "width", elemW - thumbH / 2 );
				jqThumb.css( "left", elemW - thumbH );
			} else {
				elCheckbox.removeAttribute( "checked" );
				jqOn.css( "width", thumbH / 2 );
				jqThumb.css( "left", 0 );
			}
			jqElement.toggleClass( "slidebutton-active", active );
		}

		jqElement.click( click );
		if ( elCheckbox.checked ) {
			click();
		}
	}
});
