$(function () {

  $('.header').stickyNavbar({
		activeClass: "active", // Class to be added to highlight nav elements
		sectionSelector: "scrollto", // Class of the section that is interconnected with nav links
		animDuration: 350, // Duration of jQuery animation as well as jQuery scrolling duration
		navOffset: 50,
		startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
		easing: "swing", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
		animateCSS: false, // AnimateCSS effect on/off
		animateCSSRepeat: false, // Repeat animation everytime user scrolls
		cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
		jqueryEffects: false, // jQuery animation on/off
		jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
		selector: "li", // Selector to which activeClass will be added, either "a" or "li"
		mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
		mobileWidth: 480, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
		zindex: 9999, // The zindex value to apply to the element: default 9999, other option is "auto"
	    stickyModeClass: "sticky", // Class that will be applied to 'this' in sticky mode
	    unstickyModeClass: "unsticky" // Class that will be applied to 'this' in non-sticky mode
  });
});

//SyntaxHighlighter.config.bloggerMode = true;
//SyntaxHighlighter.config.clipboardSwf = 'http://alexgorbatchev.com/pub/sh/current/scripts/clipboard.swf';
//SyntaxHighlighter.all();

// wow animate init
// new WOW().init();