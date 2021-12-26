import React from 'react';
import {Link} from 'react-router-dom'

function Allposts({data}) {
    
    return (
        <div>
            <p><Link to={`/postDetails/${data.id}`}>{data.title}</Link></p>
        </div>
    );
}

export default Allposts;