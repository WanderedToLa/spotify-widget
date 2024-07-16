chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ['contentscript.js'],
      },
      () => {
        if (tab.id)
          chrome.tabs.sendMessage(tab.id, { action: 'toggleSidebar' });
      }
    );
  }
});
