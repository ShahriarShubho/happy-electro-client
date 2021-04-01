import React from 'react';
import swal from 'sweetalert';

const NotFound = () => {
    swal("oopppss!", "something wrong", "error");
    return (
        <div>
            <h3>Not Found</h3>
            <strong className="text-danger">404 error!!!!!</strong>
        </div>
    );
};

export default NotFound;