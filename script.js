const stylePicker = document.getElementById('style-picker');
stylePicker.addEventListener("change", function () {
    const value = this.value
// tar bort färger
  document.body.classList.remove('theme-blue', 'theme-red', 'theme-green');
    if (value === 'blue') {
    document.body.classList.add('theme-blue');
  } else if (value === 'red') {
    document.body.classList.add('theme-red');
  } else if (value === 'green') {
    document.body.classList.add('theme-green');
  }
  });

const menuBtn = document.getElementById('menu-btn');
menuBtn.classList.remove('open'); // säkerställer startläge
menuBtn.addEventListener('click', function () {
  const navList = menuBtn.nextElementSibling;
  navList.classList.toggle('show');
  menuBtn.classList.toggle('open');
});

window.addEventListener('resize', function () {
  const navList = menuBtn.nextElementSibling;
  navList.classList.remove('show');
  menuBtn.classList.remove('open');
})
