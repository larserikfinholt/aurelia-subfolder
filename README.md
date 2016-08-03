# aurelia-subfolder
Aurelia apps loaded from subfolder, and arranged each app as a feature

I'm using Aurelia in an existing asp.net mvc 5 website. We plan to develop new pages as small aurelia apps (one aurelia app per mvc view).
We plan on reusing the same bundles on all views (just setting "aurelia.setRoot('nameofapp')" to launch the correct app). 

The App1/index.html and App2/index.html would mirror your controller / view, thus you could reuse the same aurelia setup on all pages
