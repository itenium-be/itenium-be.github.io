- Liquid Exception: Could not locate the included file 'toc' in any of ["C:/git/itenium/itenium-be.github.io/_includes", "C:/tools/ruby24/lib/ruby/gems/2.4.0/gems/minima-2.1.1/_includes"]. Ensure it exists in one of those directories and,
if it is a symlink, does not point outside your site source. in C:/git/itenium/itenium-be.github.io/_posts/productivity/2017-04-10-package-manager-console-ef-migrations.md
jekyll 3.4.3 | Error:  Could not locate the included file 'toc' in any of ["C:/git/itenium/itenium-be.github.io/_includes", "C:/tools/ruby24/lib/ruby/gems/2.4.0/gems/minima-2.1.1/_includes"]. Ensure it exists in one of those directories an
d, if it is a symlink, does not point outside your site source.

=> posts repo updaten. Check readme.md


--> Dit is een error die nooit meer gaat voorkomen:

De "toc" die gebruikt werd op pongit.be had een offline build step nodig (nu is het pushen = deployen, pongit.be moet de volledige gebuilde site op de gh-pages branch gepushed worden)
De "toc" die nu gebruikt wordt heeft dit niet nodig
Maar dat was wel een breaking change waardoor de _posts moesten geüpdate worden
