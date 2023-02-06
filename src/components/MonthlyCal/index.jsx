import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

// My css
import "./styles.css";

// My assets
import calendar from "../../assets/pdfs/Calendar.pdf";

const MonthlyCal = (props) => {
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
    <div>
      <Document
        style={{ border: "2px solid blue", padding: 0 }}
        file={calendar}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
      >
        <Page className="docu" pageNumber={props.pageNumber} />
      </Document>
      {/* <p style={{ border: "2px solid green" }}>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};

export default MonthlyCal;
