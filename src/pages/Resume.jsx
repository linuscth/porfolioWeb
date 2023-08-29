import React from 'react';
import resumeLinus from "../resources/Resume-Linus.pdf";

export default function Resume() {
    const resumeUrl = resumeLinus; // Use the imported file directly

    function downloadFile() {
        const a = document.createElement('a');
        a.href = resumeUrl;
        a.download = 'Resume-Linus.pdf'; // Set the desired filename
        a.click();
    }

    return (
        <div className='d-flex justify-content-center '>
            <button className='btn btn-primary btn-lg btn-block' onClick={downloadFile}>Download My Resume Here!</button>
        </div>
    );
}
