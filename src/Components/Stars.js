import React from "react";
import Star from "./Star";
import PropTypes from 'prop-types';


export default function Stars({ count }) {
    
    let newCount = Array.from({length: count}, (_, i) => i + 1);

    return <ul className="card-body-stars u-clearfix">
        {
           count >= 0 && count <= 5 && newCount.map((item, index) => <Star key={index} value={item} />)
        }
    </ul>
}

Stars.propTypes = {
    count: PropTypes.number
}

// try catch на левый тип данных не делал. 