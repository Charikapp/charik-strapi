const { mergeConfig } = require("vite");

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      port: 1337,
      allowedHosts: ["strapi.charik.app"],
    },
  });
};
