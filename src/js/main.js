import html2canvas from "html2canvas";
import FileSaver from "file-saver";

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector(".container");
  const downloadBtn = document.getElementById("download-button");

  downloadBtn.addEventListener("click", (e) => {
    html2canvas(container, { scrollY: -window.scrollY }).then((canvas) => {
      canvas.toBlob((blob) => FileSaver.saveAs(blob, "Facebook-Factcheck.png"));
    });
  });
});
