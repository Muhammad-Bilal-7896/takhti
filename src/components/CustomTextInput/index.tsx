import React from "react";

import TextField from "@mui/material/TextField";

const CustomTextInput = ({
    label,
    placeholder,
    type,
    multiline,
    rows
}: any) => {

    return (
        <div style={{ height: 90, boxSizing: "border-box" }}>
            <label htmlFor="name" className="text-sm">{label}</label>
            <br />
            {(multiline) ? (
                <TextField
                    label=""
                    variant="outlined"
                    placeholder={placeholder}
                    fullWidth
                    type={type}
                    inputProps={{
                        style: {
                            fontSize: '14px',
                            borderRadius: '0px',
                            lineHeight: '24px',
                            // height: '44px',
                            // height: '30px',
                            width: '100%',
                            color: "#A2A2A2"
                        }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '1px solid #A2A2A2',
                                borderRadius: '0px',
                            }
                        },
                        mt: "8px",
                        fontSize: "14px",
                        // height: '25px'
                    }}
                    className="h-[48px]"
                    multiline={true}
                    rows={rows}
                />
            ) : (
                <TextField
                    label=""
                    variant="outlined"
                    placeholder={placeholder}
                    fullWidth
                    type={type}
                    inputProps={{
                        style: {
                            border: '1px solid #A2A2A2',
                            fontSize: '14px',
                            borderRadius: '0px',
                            lineHeight: '24px',
                            // height: '44px',
                            // height: '30px',
                            width: '100%',
                            color: "#A2A2A2"
                        }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: '1px solid #A2A2A2',
                                borderRadius: '0px',
                            }
                        },
                        mt: "8px",
                        fontSize: "14px",
                        // height: '25px'
                    }}
                    className="h-[48px]"
                />
            )}
        </div>
    );
};
export default CustomTextInput;
