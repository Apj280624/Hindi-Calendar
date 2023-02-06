import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useParams } from "react-router-dom";

// My components

// My css
import "./styles.css";

// My assets
import calendar from "../../assets/pdfs/Calendar.pdf";

const MonthlyCalPage = () => {
  const params = useParams();
  const monthNumber = Number(params.monthNumber);

  // console.log(props);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDocumentLoadError(err) {
    console.log(err);
  }

  return (
    <div className="monthly-cal-page-outer-div">
      <Document
        style={{ border: "2px solid blue", padding: 0 }}
        file={calendar}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
      >
        <Page className="" pageNumber={monthNumber} />
      </Document>
    </div>
  );
};

export default MonthlyCalPage;
