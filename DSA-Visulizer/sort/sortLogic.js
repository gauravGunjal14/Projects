const input = document.getElementById('customInput').value.trim();
if (!/^\d+(,\s*\d+)*$/.test(input)) {
  alert('Please enter valid numbers separated by commas.');
  return;
}
