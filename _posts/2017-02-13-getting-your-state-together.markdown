---
layout: default

layout: post
title:  "Getting your state together"
date:   2017-02-13
---

I have recently been working with a large stateful React web application, where individual components have their own differing states as well as the application as a whole. Moving to a process where React UI components - buttons, inputs, tabs etc - are stateless so that the "logic" remains in containers was not uncommon to me. However, a piece of unexplored work for me was splitting out my Redux store into "UI" and "data" objects.

Take for an example this relatively simple mock store:

{% highlight js %}
{
  profile: {
    data: {
      user: {
        name: 'Alex',
        age: 25,
        gender: 'male',
      },
      related_contacts: {
        {
          name: "Sam",
          email: "sam@foo.com",
        }, {
          name: "Tom",
          email: "tom@bar.com"
        }, {
          name: "Bob",
          email: "bob@baz.com"
        },
      },
    },
    ui: {
      profile_nav_toggled: false,
      nav_menu_options: [
        "My profile",
        "Settings",
        "Log Out",
      ],
    },
  }
}
{% endhighlight %}

In this store, there is a mixture of key-value pairs for the application to render - most likely coming from a database - and key-values that will change depending on the user's interaction with the application. Take for example `profile_nav_toggled`. This will be toggled with an `onClick` event in a React component which will then pass through to the redux store and return false, prompting the React relevant component to re-render with the updated Redux store.

There are two key points that I have taken from moving all data / state management to the Redux store. Firstly it has made my React components more concise, cleaner to read and used for the sole use of only call `render()` - no state stored, no messy logic happening. Secondly, it also provides for a cleaner, better organised Redux store. Create nested objects (that sounds horrible - I know) actually makes for a more logical debugging. The above example takes only the profile section of an application, but this principle can be easily replicated. My current project has at least 5 of these "object modules" containing both a UI object to manage each of these "object modules" interaction's, and a data object to take care of information from databases.

{% highlight js %}
{
  "account": {
    "data": {
      name: 'Alex',
      age: 25,
      gender: 'male',
    },,
    "ui": {
      dark_ui_theme: true,
    }
  },
  "projects": {
    "data": {
      {
        id: 1,
        name: "project1"
      }, {
        id: 2,
        name: "project2"
      },
    },
    "ui": {
      selected_ids: [
        1,
      ]
    }
  },
  "members": {
    "data": {
      {
        id: 1
        name: "Sam",
        email: "sam@foo.com",
      }, {
        id: 2,
        name: "Tom",
        email: "tom@bar.com"
      }, {
        id: 3,
        name: "Bob",
        email: "bob@baz.com"
      }
    },
    "ui": {
      selected: [
        1,  
        3,
      ]
    }
  }
}
{% endhighlight %}
