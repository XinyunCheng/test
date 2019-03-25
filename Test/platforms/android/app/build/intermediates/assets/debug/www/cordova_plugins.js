cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-flashlight.Flashlight",
    "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
    "pluginId": "cordova-plugin-flashlight",
    "clobbers": [
      "window.plugins.flashlight"
    ]
  },
  {
    "id": "cordova-plugin-ezar-flashlight.flashlight",
    "file": "plugins/cordova-plugin-ezar-flashlight/www/flashlight.js",
    "pluginId": "cordova-plugin-ezar-flashlight",
    "merges": [
      "ezar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-flashlight": "3.2.0",
  "cordova-plugin-ezar-flashlight": "1.0.0"
};
// BOTTOM OF METADATA
});