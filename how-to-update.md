# How to update this website

This website is statically built to be hosted on github pages off the `gh-pages`
branch. As such, follow these steps when updating:


1. Checkout the `main` branch -- follow the README.md on the main branch for
   launching the npm local server.
2. Perform edits directly on main (checkin a push to main as you see fit)
3. Run `npm run predeploy` to build the static content
4. Checkout the `gh-pages` branch and copy the contents of the `build` folder
   created in the previous step to this directory.
5. Push the updates to `gh-pages` -- that's it!
