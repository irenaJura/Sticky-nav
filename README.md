### Sticky nav with JS

An example of how to make a stikcy nav with plain JavaScript and CSS.

I added an event listener to window for scroll event, which calls the fixNav function.

This function checks if the scrollY is bigger or equal than nav offsetTop value.

When that's true, we add a class of fixed-nav to the body and we also add padding-top to the body in the amount of nav.offsetHeight. This way, if the actual height of nav gets changed, the function and the conditions will still work.

We also play with the logo in the nav. As nav gets position fixed, the logo transitions from the left side to become a part of navigation.

This is achieved with max-width being 0 as default and then as the nav gets class of fixed-nav, max-width becomes 500px and it takes up as much space as it can since nav li has a flex grow property.