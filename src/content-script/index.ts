async function createSidebar() {
  // 사이드바가 이미 존재하는지 확인
  if (document.getElementById('mySidebar')) {
    return;
  }

  // 사이드바 요소 생성
  const sidebar = document.createElement('div');
  sidebar.id = 'mySidebar';
  sidebar.style.width = '350px';
  sidebar.style.height = '100vh';
  sidebar.style.position = 'fixed';
  sidebar.style.top = '0';
  sidebar.style.right = '0';
  sidebar.style.backgroundColor = 'white';
  sidebar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  sidebar.style.zIndex = '10000';
  sidebar.style.overflow = 'auto';

  // HTML 파일의 내용을 가져와서 삽입
  const response = await fetch(chrome.runtime.getURL('dist/sidepanel.html'));
  const html = await response.text();
  sidebar.innerHTML = html;

  // 닫기 버튼 추가
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.left = '10px';
  closeButton.style.zIndex = '10001'; // 다른 내용 위에 표시되도록 설정
  closeButton.addEventListener('click', () => {
    document.body.removeChild(sidebar);
  });
  sidebar.appendChild(closeButton);

  // 사이드바를 body에 추가
  document.body.appendChild(sidebar);
}

// 메시지를 수신하여 사이드바를 생성
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleSidebar') {
    createSidebar();
  }
});
