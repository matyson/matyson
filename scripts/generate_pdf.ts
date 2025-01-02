import path from "node:path";
import { mdToPdf } from "md-to-pdf";

const dir = import.meta.dir;
const src = path.join(dir, "../public/resume.md");
const output = path.join(dir, "../public/MatheusBernardi_resume.pdf");

async function generatePDF() {
  const pdf = await mdToPdf(
    { path: src },
    {
      dest: output,
      pdf_options: {
        format: "A4",
        margin: {
          top: "12mm",
          bottom: "12mm",
          right: "20mm",
          left: "20mm",
        },
        headerTemplate: `<style>
        section {
            margin: 0 auto;
            font-family: system-ui;
            font-size: 11px;
        }
        </style>
        <section>
        <span class="title"></span>
        <span>${new Date().toDateString()}</span>
        </section>`,
        footerTemplate: `<style>
        section {
            margin: 0 auto;
            font-family: system-ui;
            font-size: 11px;
            }
        </style>
        <section>
            <span class="pageNumber"></span> of <span class="totalPages"></span>
        </section>`,
      },
    },
  ).catch(console.error);

  if (pdf) {
    Bun.write(pdf.filename, pdf.content);
    console.log("PDF generated successfully!");
  }
}

if (import.meta.main) {
  generatePDF();
}
