const sideBar = document.querySelector('.sidebar');
const menu  = document.querySelector('.menu-icon');
menu.addEventListener('click',function(){
        sideBar.classList.remove('close-sidebar');
        sideBar.classList.add('open-sidebar');
});

const close = document.querySelector('.close-icon');

close.addEventListener('click',function(){
        sideBar.classList.remove('open-sidebar');
        sideBar.classList.add('close-sidebar');
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzZw8em59fL2n5GaeqZeVAfNHMJSt5NzMjJXj7MU1gflf4o18g_sLQFcHlXFsahK16hnQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });