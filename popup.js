var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('remove').addEventListener('click', () => sendMessage({ action: 'remove' }));
}
chrome.tabs.getSelected(null, getSelectedTab);