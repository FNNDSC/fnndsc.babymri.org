var util = require('util')
var exec = require('child_process').exec;

var targetImage = '/Users/nico/work/gitroot/fnndsc.babymri.org/old/app/images/images/logo_gray.png';
var destination = '/Users/nico/work/gitroot/fnndsc.babymri.org/app/images/touch';

var icons = [
  {
    name: 'apple-touch-icon.png',
    size: '152x152'
  },
    {
    name: 'chrome-splashscreen-icon-384x384.png',
    size: '384x384'
  },
    {
    name: 'icon-192x192.png',
    size: '192x192'
  },
  {
    name: 'icon-72x72.png',
    size: '72x72'
  },
  {
    name: 'icon-96x96.png',
    size: '96x96'
  },
  {
    name: 'icon-128x128.png',
    size: '128x128'
  },
  {
    name: 'icon-512x512.png',
    size: '512x512'
  },
  {
    name: 'ms-icon-144x144.png',
    size: '144x144'
  },
  {
    name: 'ms-touch-icon-144x144-precomposed.png',
    size: '144x144'
  },
  {
    name: 'favicon.ico',
    size: '16x16'
  }
];

function puts(error, stdout, stderr) {
  console.log(error);
  console.log(stdout);
  console.log(stderr);
};

for(var i=0; i<icons.length; i++){
  exec('convert ' + targetImage +
         ' -verbose' +
         ' -background none' +
         ' -resize ' + icons[i].size +
         ' -gravity center' +
         ' -extent ' + icons[i].size +
         ' ' + destination + '/' + icons[i].name, puts);
}
