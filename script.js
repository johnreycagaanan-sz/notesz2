document.addEventListener("DOMContentLoaded", function () {
  const noteTextArea = document.getElementById("note");
  const fontSizeSelect = document.getElementById("fontSize");
  const textAlignSelect = document.getElementById("textAlign");

  // Fetch note content, font size, and text align from localStorage (if available)
  const savedNote = localStorage.getItem("note");
  const savedFontSize = localStorage.getItem("fontSize") || "16";
  const savedTextAlign = localStorage.getItem("textAlign") || "left";

  if (savedNote) {
    noteTextArea.value = savedNote;
  }
  noteTextArea.style.fontSize = savedFontSize + "px";
  noteTextArea.style.textAlign = savedTextAlign;

  // Set initial selected values for font size and text align
  fontSizeSelect.value = savedFontSize;
  textAlignSelect.value = savedTextAlign;

  // Save note, font size, and text align to localStorage on input/change
  noteTextArea.addEventListener("input", saveNote);
  fontSizeSelect.addEventListener("change", saveFontSize);
  textAlignSelect.addEventListener("change", saveTextAlign);
});

function saveNote() {
  const noteContent = document.getElementById("note").value;
  localStorage.setItem("note", noteContent);
}

function saveFontSize() {
  const fontSize = document.getElementById("fontSize").value;
  localStorage.setItem("fontSize", fontSize);
  document.getElementById("note").style.fontSize = fontSize + "px";
}

function saveTextAlign() {
  const textAlign = document.getElementById("textAlign").value;
  localStorage.setItem("textAlign", textAlign);
  document.getElementById("note").style.textAlign = textAlign;
}
