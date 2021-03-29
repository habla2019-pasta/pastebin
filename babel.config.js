const presets = [
  '@babel/preset-env',
  '@babel/preset-flow',
  '@babel/preset-react',
];
// @emotion must be first
const plugins = [ '@emotion' ];

module.exports = {
  plugins,
  presets,
};