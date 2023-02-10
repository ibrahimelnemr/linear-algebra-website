import React from 'react';
import DiscretePDF from '../Discrete Syllabus.pdf'

function EmbedPDF(props) {
    return(
        <>
        <iframe src={DiscretePDF} className="pdf">
            
        </iframe>
        </>
    );
}

export default EmbedPDF
