const display = document.getElementById('display');
let current = '';
function append(char) {
  if (current.length > 20) return;
  current += char;
  display.value = current;
}
function clearDisplay() {
  current = '';
  display.value = '';
}
function calculate() {
  try {
    // Replace division and multiplication symbols for eval
    const result = eval(current.replace(/÷/g, '/').replace(/×/g, '*'));
    display.value = result;
    current = result.toString();
  } catch {
    display.value = 'Error';
    current = '';
  }
} 