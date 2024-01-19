const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', ()=>{
  const msg = document.getElementById('text');
  msg.innerText = 'ボタンをクリックしました';
})