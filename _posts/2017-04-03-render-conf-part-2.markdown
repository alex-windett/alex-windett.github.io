---
layout: post
title:  "Render Conf 2017: Part 2"
date:   2017-04-10
category: "Render Conf"
---

Illness and a heavy crash racing has delayed the writing of this - hopefully my 
memory won't fail and give credit to the speakers almost two weeks ago.

Evaluating Technology
--
[Jeremy Keith](https://github.com/adactio) opened up the conference by discussing the *Nature of Technology*
and what, as humans, our relationship is to it. He started off exploring how 
technology is inherently a domain of 
co-operation where working closely with other devs and the open source nature of modern 
web development is clear. If you haven't experienced this first hand I would be 
very surprised as our industry is one of the most inclusive.

Later he moved us on to the changing demand for software vs. hardware. Although hardware is the basis for which software can run, the availability of 
hardware is now almost in surplus and it is software that is now become more 
important. At the dawn of the home computer back in the 70s it was a scramble to 
get that extra bit of CPU or memory , now with the same power coming from a mobile phone, it is the availability of software and its performance which is in the 
spotlight.
 
The talked moved away from this shifting technological paradigms to the usability of current
software and its design principles. I think the most relatable and easy to grasp 
example of this are service workers. Jeremy argues that while we should be 
aiming to provide the best experience for all, we should also be able to provide
the best experience for when technology "fails". Service workers for example, 
should be able to enhance a users interaction (as they do), but if they "fail" 
they should not effect the user or give them a similar experience (as they do, well, sorta) - if a 
browser doesn't support service workers, then nothing changes to that of a first visit 
with a compatible browser.

Another interesting point that was raised is that while code is not intrinsically opinionated, 
it is still bias. Developers all have their way of doing things - hence the emergence of 
linting. There are different libraries, languages, code styles etc that all 
lend themselves towards providing a "better" solution. However, these choices
should not comprise the following, in order:

* - The users
* - The authors / developers
* - The applications the software runs on
* - The theorists or market leaders (i.e the "...but Facebook use it" syndrome).

In one form or another I have been following these points through progressive enhancement, even if it is being made to use legacy frameworks. 
 
React with node alongside a legacy backend
--
This all sounded a bit confusing to me, but ended up not only understanding it, but 
also seeing a very well implement example by [Ben Ilegbodu](https://github.com/benmvp).

One of the downsides fo using React with modern web apps is the need for SEO 
optimisation and Open Graph tags. However, Google a reducing this annoyance are 
have started allowing JS to be indexed.

Past projects gave me first hand frustration with dealing with either 
uncompromising legacy backends or the lack of time needed to learn a new language / 
framework - something apparently Eventbrite went though as well, but overcame. The 
dev ops and front end team compromised by using their current Django backend and a
small Node server. The Node server acted purely to render React components 
while the Django server posted to a URL that would return HTML.


example request and response:
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
As you may have picked up on, or hopefully not, my spelling and grammar can sometimes 
be a little, well, unique. According to the very talented [Seren Davies](https://github.com/ninjanails)
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

### Speaker Videos

* [Jeremy Keith](https://www.youtube.com/watch?v=wAekLOUpMB4&list=PLBzScQzZ83I_n5kvxmUaRNZvc_vsCuEQD)
* [Ben Ilegbodu](https://www.youtube.com/watch?v=zxtcr8Zuvfs&list=PLBzScQzZ83I_n5kvxmUaRNZvc_vsCuEQD&index=4)
* [Seren Davies](https://www.youtube.com/watch?v=oG_cYElSZwM&list=PLBzScQzZ83I_n5kvxmUaRNZvc_vsCuEQD&index=3)
