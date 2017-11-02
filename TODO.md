TODO stuff
==========

- mobile: menu does not close after navigation(erin geslopen met commit: ce4ac4ebda61114ed397a3864474cae5024a1331)

- #about => wanneer op de about link geklikt wordt verdwijnd de header menu, op mobile. Werkt wel bij andere links
 => added branch for feature/static-menu-navbar-for-about-section which fixes this bug but introduces new one.

- ERROR /js/jquery.min.map' not found. Bij serve. Ik heb de min.map al toegevoegd maar hij wordt niet geserved door jekyll.

- Freelance wegdoen in naam & op linked in & StackOverflow. Owner at itenium doen. Itenium company page updaten.

- icoon maken(zie huidig browser tablad icoon)

- In Chrome, the splash screen displays some white background (other browsers always display the background image completely)
=> zit er al in van 1 vd eerste commits(8f20e51344d8b98b2aa37223fee9666d5ad3a7ed). In chrome worden de afbeeldingen meerdere keren geladen, en ik denk bij de knippering dat er dus een nieuwe afbeedling wordt geladen.
Bij andere browsers of de originele templ. niet.

- Responsiveness of site is not ok (can scroll horizontally on small devices)


Splash
- splash 3: de text is te klein (niet leesbaar) op mobile (6px)




Blog
====
- Pagination plugin (is supported by GH pages)
- Separate page for each category (same for tags?) --> Requires a code change every time a new category or tag is introduced
- Better code syntax highlighting
- Blog detail sidebar
-- delete cats, last posts, tags
-- show series info
-- render table of contents


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
