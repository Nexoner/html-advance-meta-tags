const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", () => {
  charCount.textContent = `${textarea.value.length} / ${maxLength}`;
  if(textarea.value.length > 240) {
    textarea.style.borderColor = 'red';
  } else {
    textarea.style.borderColor = 'black';
  }
});