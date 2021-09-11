const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express")
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else if (/^.+\/list/g.test(pathname)) {
      app.render(req, res, "/index", query);
    } else if (/^.+\/detail/g.test(pathname)) {
      app.render(
        req,
        res,
        pathname.substring(pathname.indexOf("/detail")),
        query
      );
    } else if (pathname === "/ads.txt") {
      const filePath = __dirname + '/public/ads.txt'
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});
