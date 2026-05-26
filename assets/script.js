const editor = document.querySelector(".wysiwyg-editor");
if (editor) {
  const contentEditable = editor.querySelector(".wysiwyg-content");
  const hiddenTextarea = editor.querySelector(".wysiwyg-textarea-hidden");
  const toolbarBtns = editor.querySelectorAll(".toolbar-btn[data-command]");

  toolbarBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const command = btn.getAttribute("data-command");

      if (command === "createLink") {
        const url = prompt("Enter the link URL:");
        if (url) document.execCommand(command, false, url);
      } else if (command === "insertImage") {
        const url = prompt("Enter the image URL:");
        if (url) document.execCommand(command, false, url);
      } else if (command === "formatBlock") {
        const value = btn.getAttribute("data-value");
        document.execCommand(command, false, value);
      } else {
        document.execCommand(command, false, null);
      }
    });
  });

  contentEditable.addEventListener("input", () => {
    hiddenTextarea.value = contentEditable.innerHTML;
  });
}

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

if (dropzone) {
  dropzone.addEventListener("click", () => fileInput.click());

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
  });

  function handleFiles(files) {
    Array.from(files).forEach((file) => {
      const fileItem = document.createElement("div");
      fileItem.className = "file-item";
      fileItem.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path></svg>
        <span>${file.name}</span>
        <button type="button" class="remove-file" aria-label="Remove file">✕</button>
      `;

      fileItem.querySelector(".remove-file").addEventListener("click", (e) => {
        e.stopPropagation();
        fileItem.remove();
      });

      fileList.appendChild(fileItem);
    });
  }
}