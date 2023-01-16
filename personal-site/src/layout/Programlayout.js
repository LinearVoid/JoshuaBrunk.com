import React from 'react'
function Programlayout ({children}){

    return(
        <div className ="About">
        <div className = "white">
                <div></div>
                <div id = "yellowbutton"></div>
                <div id = "greenbutton"></div>

        </div>
        <div className = "program">
            
            <div className = "text-holder">
                {children}

            </div>
        </div>

    </div>
    

    )
}
export default Programlayout