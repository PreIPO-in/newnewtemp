document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.getElementById('button1');
    const loading = document.getElementById('loading');
  
    button1.addEventListener('click', (event) => {
      event.preventDefault(); // 기본 동작 방지 (링크 이동을 막음)
      loading.style.display = 'flex'; // 로딩 화면 표시
      setTimeout(() => {
        window.location.href = 'myaccount.html'; // 2초 후 페이지 이동
      }, 2000);
    });
  });
  