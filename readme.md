Just A Quickie
==============

Need a small framework *(if you could call it that)* to try out a peace of code or an idea offline, or maybe just to show someone how to do something?

Sometimes I have the need to open Sublime and start testing a bit of code or experiment with a function I just read about.  So open Sublime, start coding..... shit, I need jQuery on this.......link to google CDN....back to playing around....you know what? This would look better if there was just a tad bit of css, but I want to be lazy and use scss....copy/paste config.rb to start compass......

So sometimes I spend more time adding libraries and linking css and getting compass going and I feel frustrated and just want something small easy and ready to go.  Oh and be able to use `PHP` as well.

I know what your saying, there's [codepen](http://codepen.io/), [jsfiddle](http://jsfiddle.net/) and many other sites that accomplish this and do it well.  I use [codepen](http://codepen.io/danferth/) all the time and love it!  So why create this?

offline use & `PHP`..... nuff said.

##What's Inside

- `index.html` is for fast `html` playground
- `index.php` is for fast `php` playground
- css folder holds base `css` file for styling
- js folder holds the base `script.js` file for interaction
- images hold any images you want to use in your playground
- `config.rb` for compass suport

###Assets Included

- [Open Sans](https://www.google.com/fonts) *added in 300,400,800 weights*
- [jquery v2.1.1](http://jquery.com/)
- [prefixfree](http://leaverou.github.io/prefixfree/) added as well

###Prerequisites

- text editor
- ruby & compass installed *(or just use the `.css` file and wright normal css)*
- Idea or test burning a hole in your brain ***required***

##What on earth would you use this for?

- test something stupid
- play with `php` idea
- offline and want a coding playground

##Workflow

1. open `index.html`, `css/css.scss` & `js/script.js`
2. open terminal cd to directory & type `compass watch`
3. start playing around....

###To use the index.php file

- have apache & PHP installed
- put quickie folder in localhost
- change `index.php.off` to `index.php`
- change `index.html` to `index.html.off`
- see 1-3 above

_______________________________________________

####To people who are thinking about voicing how dumb this is

**WARNING: I kinda rant here**

Dude, like I was board and thought is was a good idea so just leave it at that.  It's not like you don't have a bunch of stupid shit in your github account as well.  I mean I have seen freaking grocery lists on github and your going to give me a hard time for creating something you find useless? Go delete all of your failed useless projects, your half assed attempts at forking and improving on someone else’s masterpiece, go to stackoverflow and stare at the down votes you have on some dumb question you asked years before you knew what you were doing and then realize this is something that was created out of necessity by someone that just wanted something to open and could play with `php` or some other piece of a half assed idea then delete.

*my sincere apologies to the sensitive in nature to harsh words, my intent was to be humorous to the small sect of society that puts down everything they do not agree with is all. I mean nobody even looks at my github account so this really does just fall on nonexistent ears.*
