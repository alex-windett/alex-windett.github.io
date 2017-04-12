---
layout: post
title:  "Render Conf 2017 Part 2"
date:   2017-04-10
category: "Render Conf"
---

Illness and a heavy crash racing has delayed the writing of this - hopefully my 
memory won't fail and give crrdit to the speakers wlmost two weeks ago.

Evaluating Technology
--
[Jeremy Keith]() opened up the conference by discussing the *Nature of Technology*
and what, as humans, our relationship is to it. Starting of with how technology is inherently a domain of 
co-opperation and working closely with other devs and the open source nature of modern 
web development is clear, and if you haven't experienced this first hand I would be 
very surprised as our industry is one of the most inclusive. This is shown first
hand by Apple and Samsung, two market leading competing brands, share the similar 
hardware in their manufacturing. 

this moves us on to another point that was made. Although hardware is the basis for which software can run, the availability of 
hardware is now almost in surplus and it is software that is now become more 
important. At the dawn of the home computer back in the 70s it was a scramble to 
get the latest device, now with the same power coming from a mobile phone, ii is the availability of software and its performance which is in the 
spotlight.
 
The talked moved away from this shifting techniological paradigms to the usability of current
software and its design principles. I think the most relatable and easy to grasp 
example of this are service workers. Jeremy argues that while we should be 
aiming to provide the best experience for all, we should also be able to provide
the best experience for when technology "fails". Service workers for example, 
should be able to enhance a users interaction (as they do), but if they "fail" 
they should not effect the user or give them a similar expirience (as they do, well, sorta) - if a 
browser doesn't support service workers, then nothing changes to that of a first visit 
with a compatible browser.

Another interesting point that was raised is that while code is not intrinsically opinionated, 
it is still bias. Developers all have their way of doing things - hence the emergence of 
linting. There are different libraries, languages, code styles etc that all 
lend themselves towards providing a "better" solution. However, these choices
should not comprise the following, in order:
1. The users
2. The authors / developers
3. The applications the software runs on
4. The theorists or market leaders (i.e the "...but Facebook use it" syndrome).
 
React with node alongside a legacy backend
--
This all sounded a bit confusing to me, but ended to only understanding it, but 
also very well implement by [Ben Ilegbodu]().

One of the downsides fo using React with modern web apps is the need for SEO 
optimisation and Open Graph tags. However, Google a reducing this annoyance are 
have started allowing JS to be indexed.

Past projects have gave me first hand frustration with dealing with either 
compromising with legacy backends or the time needed to learn a new language / 
framework - something apparently Eventbrite wen though as well, but overcame. The 
dev ops and front end team compromised by using their current Django backend and a
small Node server. The Node server acted purely to render React components 
while the Django server posted to a URL that would return HTML.
  
{% highlight shell %}
  REQUEST:
  - URL endpoint
      ex. http://localhost:9009/render
  - Path to React component
      ex. /www/js/react/HelloWorld.jsx
  - Component props
      ex. {name: 'Alex'}
  
  RESPONSE:
  - Rendered markup
      ex. <div data-reactid="1">Hello Alex!</div>
 {% endhighlight %}
 
Accessibility, what about us Dyslexic lot?
--
As you may have found out, hopefully not, my spelling and grammar can sometimes 
be a little, well, unique. According to the very talented [Sarah Davies]()
the cause of my sometimes poor english is something that is often forgotten when creating accessible web pages. Screen
readers are often taken into account, but what about other disabilities like 
dyslexia? Shapes, patterns and fonts all have implications on the usability of
pages - more specifically, the readability. Very interestingly and something I
had never taken point of, instead of using capitals as headings why not 
considering using sentence case? The similar letter structure in capitals 
removes some of the brains recognition of the shape of a letters therefore reading words.
    
 It is something so key, that the British Dyslexia Association has written a style guide on
 [style guide](http://www.bdadyslexia.org.uk/common/ckeditor/filemanager/userfiles/About_Us/policies/Dyslexia_Style_Guide.pdf) - not that they conform to it on [their own site](http://www.bdadyslexia
 .org.uk), note the capitals everywhere.
