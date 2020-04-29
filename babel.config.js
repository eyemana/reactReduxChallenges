module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-class-properties",
  ];

  return {
    presets,
    plugins,
  };
};
