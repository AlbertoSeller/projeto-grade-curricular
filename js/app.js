const select = document.getElementById('semesterSelect');
// Exibir mensagem caso não existam disciplinas
const rows = document.querySelectorAll('[data-semester]');

function filterTable() {
  const value = select.value;
  rows.forEach(row => {
    row.style.display = (row.dataset.semester === value) ? '' : 'none';
  });
}

select.addEventListener('change', filterTable);
filterTable();