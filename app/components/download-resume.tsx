"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument, type ResumeProps } from "./resume";

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

const DownloadResume = (props: ResumeProps) => {
  const name = "MatheusBernardi_Resume.pdf";
  return (
    <PDFDownloadLink document={<MyDocument {...props} />} fileName={name}>
      {({ loading }) =>
        loading ? (
          "Loading document..."
        ) : (
          <div className="flex gap-2 hover:text-neutral-100">
            <DownloadIcon />
            my resume
          </div>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadResume;
