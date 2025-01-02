import path from "node:path";
import { mdToPdf } from "md-to-pdf";

const dir = import.meta.dir;
const src = path.join(dir, "../public/resume.md");
const output = path.join(dir, "../public/MatheusBernardi_resume.pdf");

async function generatePDF() {
  const pdf = await mdToPdf({ path: src }, { dest: output }).catch(
    console.error,
  );

  if (pdf) {
    Bun.write(pdf.filename, pdf.content);
    console.log("PDF generated successfully!");
  }
}

if (import.meta.main) {
  generatePDF();
}
