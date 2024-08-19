/**
 * @ Modern Tab JS
 */


function openTab(evt, tabName) {

  document.querySelectorAll('.tabcontent').forEach((tab) => {
    tab.style.display = 'none';
  });

  document.querySelectorAll('.tablinks').forEach((link) => {
    link.classList.remove('active');
  });

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("defaultOpen").click();
})