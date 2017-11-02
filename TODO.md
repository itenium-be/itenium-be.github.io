TODO stuff
==========

- #about => wanneer op de about link geklikt wordt verdwijnd de header menu, op mobile. Werkt wel bij andere links
 => added branch for feature/static-menu-navbar-for-about-section which fixes this bug but introduces new one.

- icoon maken(zie huidig browser tablad icoon)

- In Chrome, the splash screen displays some white background (other browsers always display the background image completely)
=> zit er al in van 1 vd eerste commits(8f20e51344d8b98b2aa37223fee9666d5ad3a7ed). In chrome worden de afbeeldingen meerdere keren geladen, en ik denk bij de knippering dat er dus een nieuwe afbeedling wordt geladen.
Bij andere browsers of de originele templ. niet.

- Responsiveness of site is not ok (can scroll horizontally on small devices)




Blog
====
- Pagination plugin (is supported by GH pages)
- Separate page for each category (same for tags?) --> Requires a code change every time a new category or tag is introduced
- Better code syntax highlighting
- Blog detail sidebar
-- show series info
-- at end of post: show category, tags
-- render table of contents like the other sidebar stuff
+ the toc links are no good because the header is displayed over where the user should be taken to...


Op termijn
==========

Jobs page:
- printable versie van jobs maken?
- Jobs: culture: Add something about team events?
- share this vacancy knoppen
- what others said about working for/with itenium
- Gericht naar de employee: Afstand tot bedrijf? Interessant, uitdagend project, nieuwe technologieën?

TECHNOLOGIES:
add jasmine icon?
RxJs icon?
webpack, vagrant, docker, gulp, yarn?

- smaller pages should load faster: don't need all the cruft on jobs/blog/...

- op jobs en blog page horizontal rule(met oranje icoontje) terug adden onder heading. Wel opletten bij jobs dat de subheading text er dan niet weer overkomt.

Splash
- splash 3: de text(Real communication gets the right product built) is te klein (niet leesbaar) op mobile (6px). Eigenlijk wel op een echte mobiles (bvb. iphone 6) maar niet op de emulator. Text op splash screen 3 is wel moeilijk leesbaar.

- anchor tags in addres bar worden niet upgedate nadat je er op klikt. Klik bvb op about us en dan op services => in address bar staat nog steeds about us. Waarschijnlijk omdat de navigatie met jquery gebeurt.
