(function() {
  Babel.registerPlugin('inferno', [window['babel-plugin-inferno'], {imports: false}]);
  var tag = document.querySelector('script[type="application/javascript"]');
  if (!tag || tag.textContent.indexOf('window.onload=function(){') !== -1) {
    alert('Bad JSFiddle configuration, please fork the original Inferno JSFiddle');
  }
  tag.setAttribute('type', 'text/babel');
  tag.setAttribute('data-plugins', 'inferno');
  tag.textContent = tag.textContent.replace(/^\/\/<!\[CDATA\[/, '');
})();
