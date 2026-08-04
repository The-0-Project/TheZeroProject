# VAST Cyber Security — Demo Page

Simple static landing page showcasing a modern cyber security style.

Preview locally:

```bash
# from the workspace root
open vast-cyberpage/index.html

# or serve with a simple static server
python3 -m http.server --directory vast-cyberpage 8000
# then open http://localhost:8000
```

Files added:
- `index.html` — page markup
- `css/styles.css` — styles
- `js/main.js` — animated background

VAST
----

I added a VAST 4.2 inline ad that exposes the page as companion creatives: `vast.xml`.

How to test
-----------
- Host the `vast-cyberpage` folder on a public URL (or your test server). Replace the placeholder URLs in `vast.xml` (https://example.com/...) with the real hosted path to `index.html`.
- Use any VAST-enabled player or debugger (e.g., JW Player, Google IMA SDK, or online VAST debuggers) and point it at the hosted `vast.xml` URL.

Quick local preview steps:

```bash
# serve the page directory locally
python3 -m http.server --directory vast-cyberpage 8000
# upload or expose the directory (ngrok, localtunnel) and note the public URL
```

Example: after exposing `http://your-host/vast-cyberpage/`, update `vast.xml` IFrameResource to `http://your-host/vast-cyberpage/index.html` then load `http://your-host/vast-cyberpage/vast.xml` in your VAST tester.

React (Vite) version
--------------------

I scaffolded a minimal Vite + React app under `vast-cyberpage/react-app`.

To run locally:

```bash
cd vast-cyberpage/react-app
npm install
npm run dev
```

Open the dev URL printed by Vite (usually `http://localhost:5173`).

If you want the VAST file to reference the React app, build and host the `dist/` output and update `vast.xml` IFrameResource values to point to `https://your-host/vast-cyberpage/index.html` (or the built `index.html` path).

