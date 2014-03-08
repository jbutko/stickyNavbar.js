$(function () {
  
  $('.header').stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    navOffset: 0,
    animDuration: 300,
    startAt: 0, // Stick the menu at XXXpx from the top
    easing: "easeInQuad",
    bottomAnimation: true,
    jqueryEffects: false,
    animateCSS: true,
    animateCSSRepeat: false,
    selector: "a",
    jqueryAnim: "fadeInDown", // jQuery effects: fadeIn, show, slideDown
    mobile: false
  });
});

//SyntaxHighlighter.config.bloggerMode = true;
SyntaxHighlighter.config.clipboardSwf = 'http://alexgorbatchev.com/pub/sh/current/scripts/clipboard.swf';
SyntaxHighlighter.all();

// wow animate init
new WOW().init();