#stickyNavbar.js
stickyNavbar.js: Fancy sticky navigation jQuery plugin with smart anchor links highlighting

##1. Setup
Include reference to jQuery library, jQuery easing plugin (optional), animate.CSS (optional, not working in < IE9) and stickyNavbar itself at the bottom of the page before the closing `body` tag:

```html
<!-- this goes inside the header tag-->
<link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.0.0/animate.min.css" rel="stylesheet" type="text/css">
<!-- all these references goes before the closing body tag-->
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="//cdn.jsdelivr.net/stickynavbar.js/1.1.1/jquery.stickyNavbar.min.js"></script>
```

##2. HTML Markup

Navigation:
```html
<div id="header" class="header">
	 <nav id="nav">
			 <ul class="nav navbar-nav">
					 <li>
						 <a href="#home">Home</a>
					 </li>
					 <li>
						 <a href="#about">About</a>
					 </li>
					 <li>
						 <a href="#services">Services</a>
					 </li>
					 <li>
						 <a href="#contact">Contact</a>
					 </li>
			 </ul>
	 </nav>
</div>
```

Body markup:
```html
<div id="home" class="scrollto">
		<!-- Your content goes here -->
</div>
<div id="about" class="scrollto">
		<!-- Your content goes here -->
</div>
<div id="services" class="scrollto">
		<!-- Your content goes here -->
</div>
<div id="contact" class="scrollto">
		<!-- Your content goes here -->
</div>
```

##3. CSS:
Add `active` class into your `style.css` and style it as you like, eg.:
```css
.active {
		color: #fff !important;
		text-decoration: underline !important;
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		-o-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0); // hardware acceleration of CSS animation
}
```
*Note: You can change `active` class to anything you want and pass your own class into options object of stickyNavbar function *

##4. jQuery:
Call stickyNavbar function on the navigation wrapper (`.header`), nav tag or ul tag either without options object:
```javascript
$(function () {
	 $('.header').stickyNavbar();
});
```

or with the options object:
```javascript
$(function () {
	$('.header').stickyNavbar({
		activeClass: "active", // Class to be added to highlight nav elements
		sectionSelector: "scrollto", // Class of the section that is interconnected with nav links
		animDuration: 350, // Duration of jQuery animation as well as jQuery scrolling duration
		startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
		easing: "swing", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
		animateCSS: true, // AnimateCSS effect on/off
		animateCSSRepeat: false, // Repeat animation everytime user scrolls
		cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
		jqueryEffects: false, // jQuery animation on/off
		jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
		selector: "a", // Selector to which activeClass will be added, either "a" or "li"
		mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
		mobileWidth: 480, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
		zindex: 9999, // The zindex value to apply to the element: default 9999, other option is "auto"
		stickyModeClass: "sticky", // Class that will be applied to 'this' in sticky mode
		unstickyModeClass: "unsticky" // Class that will be applied to 'this' in non-sticky mode
	});
});
```

##5. Demo
http://www.jozefbutko.com/stickyNavbar/ or if you want to play with options: http://jsbin.com/wuluj/4/edit

##6. Credits
[jQuery](http://api.jquery.com/)<br>
[Animate.CSS](http://daneden.github.io/animate.css/)<br>
[jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/)

##Contact
Copyright (C) 2014 Jozef Butko<br>
[www.jozefbutko.com](http://www.jozefbutko.com/)<br>
[www.github.com/jbutko](http://www.github.com/jbutko)<br>
[@jozefbutko](http://www.twitter.com/jozefbutko)

##Changelog
###1.1.2
- ignore external links and just let them open fix - pull request #15 by Globegitter
25/07/2014

###1.1.1
- just a readme file update
23/07/2014

###1.1.0
- stickyMode/unstickyMode class added
- custom mobileWidth for turning off stickyNavbar
- window.outerWidth(true) changed to window.width() according to jQuery docs
- optional z-index setting
- added animation duration and easing for scrolling
- bottomAnimation option removed (unstable behaviour)
- navOffset option removed (unstable behaviour)
- credits for feature requests/points: @Phyxion, @oniric85, @coolboy4598
23/07/2014

###1.0.5
- animateCSSRepeat Fix<br>
- Inaccurate scrolling fix<br>
22.05.2014

###1.0.4
- Fix of the overlapped content by nav container after first click<br>
- Version number fix to 1.0.4<br>
10.04.2013

###1.0.3
- Flickering of CSS animation fix<br>
13.03.2014<br>

###1.0.2
- Manifest update<br>
09.03.2014

###1.0.1
- stickyNavbar.js.jquery.json update<br>
09.03.2014

###1.0.0
- stickyNavbar.js.jquery.json update<br>
09.03.2014
