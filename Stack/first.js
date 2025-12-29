let stack = [];
const maxSize = 8;

const stackDiv = document.getElementById("stack");
const messageDiv = document.getElementById("message");
const sizeSpan = document.getElementById("size");
const input = document.getElementById("valueInput");

function showMessage(msg) {
  messageDiv.textContent = msg;
  setTimeout(() => messageDiv.textContent = "", 2000);
}

function renderStack(highlightTop = false) {
  stackDiv.innerHTML = "";

  stack.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "stack-item";
    div.textContent = item;

    if (highlightTop && index === stack.length - 1) {
      div.classList.add("top");
    }

    stackDiv.appendChild(div);
  });

  sizeSpan.textContent = stack.length;
}

function push() {
  const value = input.value.trim();

  if (!value) {
    showMessage("⚠️ Please enter a value");
    return;
  }

  if (stack.length >= maxSize) {
    showMessage("⚠️ Stack Overflow");
    return;
  }

  stack.push(value);
  input.value = "";
  showMessage(`✅ Pushed "${value}"`);
  renderStack();
}

function pop() {
  if (stack.length === 0) {
    showMessage("⚠️ Stack Underflow");
    return;
  }

  const popped = stack.pop();
  showMessage(`✅ Popped "${popped}"`);
  renderStack();
}

function peek() {
  if (stack.length === 0) {
    showMessage("⚠️ Stack is empty");
    return;
  }

  showMessage(`👁️ Top element is "${stack[stack.length - 1]}"`);
  renderStack(true);
}

function clearStack() {
  stack = [];
  showMessage("🔄 Stack cleared");
  renderStack();
}
