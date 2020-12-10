import html2canvas from "html2canvas";
import FileSaver from "file-saver";

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector(".container");
  const downloadBtn = document.getElementById("download-button");
  const defaultBtn = document.querySelector(".options input[name=width][value=s]");
  const toggleBtns = document.querySelectorAll(".options input[name=width]");

  downloadBtn.addEventListener("click", (e) => {
    html2canvas(container, { scrollY: -window.scrollY }).then((canvas) => {
      canvas.toBlob((blob) => FileSaver.saveAs(blob, "Facebook-Factcheck.png"));
    });
  });
  [...toggleBtns].forEach((btn) => btn.addEventListener("click", (e) => {
    if (e.target.value === "s") {
      const classes = container.className.split(" ").filter((c) => !!c && c !== "small");
      container.className = classes.concat("small").join(" ");
    }
    if (e.target.value === "m") {
      const classes = container.className.split(" ").filter((c) => !!c && c !== "small");
      container.className = classes.join(" ");
    }
  }));

  defaultBtn.click();
});
