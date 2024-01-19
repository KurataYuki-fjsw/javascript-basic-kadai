const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', ()=>{
  const msg = document.getElementById('text');
    setTimeout(() =>{
      msg.innerText = 'ボタンをクリックしました';
     },2000)
})