---
layout: post
title:  "Looping with SASS"
date:   2015-11-18
categories: sass

---

I have recently worked on a site that has many different background colors for many different pages, and for several days have kept going back and refactoring down. I have finally ended up doing the same task that I accomplished initially in over 100 lines of code now in 5, or 13 if your being picky.

Having come across hash and key / value pairs in other languages. I had never actually used them in sass, so was really pleased at how easy they were to use and implement.

Anyway, I thought I'd share what I started with and what I ended up with.

To start, and this didn't change throughout my refactoring, was a `mixin` that contains all the elements that need to change color, and that color is passed in as the mixin argument. It goes something along the lines of this

{% highlight sass %}
@mixin zone-color($color) {
    // set background color of itself
    & {
        background: $color;
    }

    a {
        &,
        &:hover,
        &:focus,
        &:visited {
            color: $color;
        }
        &:hover {
            border-bottom: 1px solid $color;
        }
    }
}
{% endhighlight %}

Next I worked on integration this mixin with all the different possible color variations I would need, so I created placeholders for each of the different color zones that I needed consisting only of the mixin above and parsing it a color. I ended up having almost 100 lines similar to this but with different colors.

{% highlight sass %}
%zone-blue {
    @include zone-color($blue);
}
{% endhighlight %}


I then needed created a list of all of the placeholder names, which I then looped over and created a class with the same name as the placeholder that was being called

{% highlight sass %}
$zones: zone-black,
        zone-blue,
        zone-pink,
        zone-red;

@each $zone in $zones {
    .#{$zone} {
        @extend %#{$zone};
    }
}
{% endhighlight %}

This is all very long winded and very repetitive. Adding a new color would mean that I would need to do something in two different places – three if I was to use variables instead of color / hex-numbers.

My solution as it stands is to use an each loop again, but instead loop over key-value pairs as so:

{% highlight sass %}

$zones: blue            $black,
        green           $green,
        orange          $orange,
        pink            $pink,
        red             $red,
        yellow          $yellow,

@function kvp-key($kvp) {
    @return nth($kvp, 1);
}

@function kvp-value($kvp) {
    @if length($kvp) == 2 {
        @return nth($kvp, 2);
    }
}

@each $zone in $zones {
    .zone-#{kvp-key($zone)} {
        @include zone-color( kvp-value($zone) );
    }
}
{% endhighlight %}

In this case I am looping over a class name (the key) and a color (the value). To use each value I use `nth($variable-name, position-in-pairing)`, where `$varibale` is the singular in the loop and the `position-in-paring` is 1 for the key or 2 for the pair. I have also neatened this up slightly so the string interpolation is easy to ready by creating two functions.

By using this process I've eliminated having to create manual placeholders, and placeholders all together.
