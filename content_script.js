const remove = () => {
  var body = document.querySelector('body.main');
  if (body) { body.setAttribute('style', 'overflow-y: auto; height: 100vh;'); }
  var halfBlock = document.querySelector('#ContentWallHardsell');
  if (halfBlock) { halfBlock.removeChild(halfBlock.firstChild); }
  var fullBlock = document.querySelector('#HardsellOverlay');
  if (fullBlock) { fullBlock.removeChild(fullBlock.firstChild); }
}

const onMessage = (message) => {
  if (message.action === 'remove') {
    remove();
  }
}

chrome.runtime.onMessage.addListener(onMessage);