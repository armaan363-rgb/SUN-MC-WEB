SUN MC website (static HTML, no build step)
Domain: store.sunmc.qzz.io   |   Build: 1007-957ce08f

Upload the WHOLE folder to your host. Delete old files on the host first (old style.css / app.js / assets) so nothing stale is served.
The footer of every page shows the build id (1007-957ce08f). If your site shows a different build, you are seeing an old upload or a cached page: hard refresh (Ctrl+Shift+R) or clear the browser cache.

Test locally: python3 -m http.server

Edit points (CSS and JS file names include a hash so browsers always fetch the latest):
- Server IP, port, Discord link, rank names/prices: the .html files and the constants at the top of assets/app.*.js
- Colours and fonts: variables at the top of assets/style.*.css
