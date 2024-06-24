import React from "react";
function Event(){
    function Greeding(){
        return alert("Good day Mate");
    }

    return (
        <div>
            <p>
                If you Press this button then an alert will appear
            </p>
            <button onClick={() => alert("AMERIKAYAAAA")}>Click Blyat</button>

            <p>
                If you Press this button then alert will appear from function
            </p>
            <button onClick={Greeding}>Click Cyka</button>
        </div>
    );
}
export default Event;