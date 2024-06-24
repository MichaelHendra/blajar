import React from "react";
function Embeded() {
function getMayor(){
    return "Full-Stack";
}
const companyName = "Mboh";

    return(
        <div>
            <p>
                {/*Include expression in a variable*/}
                Welcome to {companyName} Class
                {/*Include expression in a variable*/}
                {getMayor()}
            </p>
        </div>
    );
}
export default Embeded