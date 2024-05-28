import React from 'react'
import { Pagination } from '@mui/material'



const CustomPagination = ({ setPage, numOfPages }) => {

    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}>
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                color="primary"
                count={numOfPages}
                sx={{ bgcolor: "#fff", borderRadius:"10px", padding:'5px' }}
                hideNextButton
                hidePrevButton
            />
        </div>
    )
}

export default CustomPagination;