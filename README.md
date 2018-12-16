itenium
=======

- freelance: "deel deze vacature"? --> zie ook email Kim


## Flow

```powershell
# setup:
# install chocolatey
cinst ruby ruby2.devkit /y
gem install jekyll bundler
bundle install

# run:
bundle exec jekyll serve --drafts

# New plugin
# Add to _config.yml and Gemfile
bundle install

# PRD flag
$env:JEKYLL_ENV = "production"
```

Using the [livereload app](http://livereload.com/) for automatic refresh
with the [Chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).  
As an alternative to the Chrome plugin, livereload is also injected in `default.html` with a script tag.

## Blog

```
# First fetch
git submodule update --init --recursive

# Update
git pull --recurse-submodules
```


## ContactForm

See `_contact` folder.

## Jekyll

Github pages supported plugins:  
https://pages.github.com/versions/

Plugins that might be added later:  
- [jekyll-gist][jekyll-gist]
- [jemoji][jemoji]
- [jekyll-compose][jekyll-compose]
- https://github.com/bdesham/inline_highlight

Liquid
------
https://help.shopify.com/themes/liquid
https://github.com/Shopify/liquid/wiki/Liquid-for-Designers


Kramdown
--------

```md
# Images:
![My helpful screenshot]({{ site.url }}/assets/blog-images/screenshot.jpg)


# Links:
```
[description][link-slug]
[link-slug]: https://github.com

{% highlight ruby linenos %}
{% endhighlight %}

{::options parse_block_html="true" /}
<pre># yaye</pre>
{::options parse_block_html="false" /}

{% for my_page in site.pages %}
	{% if my_page.title %}
		<a class="page-link" href="{{ my_page.url | relative_url }}">{{ my_page.title | escape }}</a>
	{% endif %}
{% endfor %}
```

[jekyll-gist]: https://github.com/jekyll/jekyll-gist
[jemoji]: https://github.com/jekyll/jemoji
[jekyll-compose]: https://github.com/jekyll/jekyll-compose
