const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/react-app-backend",
    createProxyMiddleware({
      target: "http://localhost:80",
      changeOrigin: true,
    })
  );
};
