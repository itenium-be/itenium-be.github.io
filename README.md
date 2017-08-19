itenium
=======

## Flow

```powershell
# setup:
gem install jekyll bundler

# run:
npm start
bundle exec jekyll serve --drafts

# Show theme path
bundle show minima

# New plugin
# Add to _config.yml and Gemfile
bundle install

# PRD flag
$env:JEKYLL_ENV = "production"
```

## Kramdown

Notices: {: .notice}, {: .notice--info}, {: .notice--danger}  
Are, for some reason, defined in _sass/vendor/notices.scss

Hide from excerpt: {: .hide-from-excerpt}

Table formatting: {: .table-code}, {: .table-margin}, {: .table-excel}

Styling: {: style="margin-top: 10"}

{% include kbd k="Win+E" l="" %}


{% include icon-github.html username=site.github_username %}
{% include icon-twitter.html username=site.twitter_username %}

## Jekyll TODO

Add an {: .aside}

Plugins that might be added later:  
- [jekyll-gist][jekyll-gist]
- [jemoji][jemoji]
- [jekyll-compose][jekyll-compose]
- https://github.com/bdesham/inline_highlight

**Keyboard Glyphs**:  
BUG: Shortcut containing a + or ,


Liquid
------
https://help.shopify.com/themes/liquid
https://github.com/Shopify/liquid/wiki/Liquid-for-Designers



Kramdown tutorial
-----------------

```md
# Images:
![My helpful screenshot]({{ site.url }}/assets/screenshot.jpg)


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
