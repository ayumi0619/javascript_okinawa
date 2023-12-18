const items = document.querySelectorAll('.img-item');
console.log(items.length);
// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 50px', 0],
      filter: ['blur(10px)', 'blur(0)'],
    };
    
    const options = {
      duration: 600,
      fill: 'forwards',
      delay: i * 400,
    };
  
    items[i].animate(keyframes, options);
  }

  const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 6000 );
// });