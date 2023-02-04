import React from 'react';
import DiscretePDF from '../Discrete.pdf'

function EmbedPDF(props) {
    return(
        <>
        <iframe src={DiscretePDF} className="pdf">
            
        </iframe>
        PDF Source: {props.pdfsource}
        </>
    );
}

export default EmbedPDF
