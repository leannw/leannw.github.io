---
layout: post
title:  "TensorFlow or Keras?"
date:   2018-04-16 11:00:00 -0700
categories: jekyll update
---

While working at Dr. Michael Alfaro's lab, I've been introduced to both TensorFlow and Keras. TensorFlow is a Google API that makes matrix calculations seem simple, and is a powerful tool for machine learning. Keras is an API built on top of TensorFlow that makes calculations much easier to track and manage.

You can already tell which I prefer.

My knowledge of both tools is still pretty limited, so please excuse me for any inaccuracies.

It'd probably be best to start off with some basics of TensorFlow. TensorFlow's computation speeds are superior because it doesn't calculate anything until you run a session. And even then, TensorFlow only calculates the necessary values and doesn't store them unless asked. It makes a lot more sense if you look at TensorFlow's graph system.

*enter graph explanation*

However, I have found it extremely difficult to debug simply because I could never view the values that Tensorflow was calculating in the session. Keras makes it much easier to output values.

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/



This will be my first post. Everything is still a work in progress! Hopefully will get to publish my first project here soon, stay tuned!

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
