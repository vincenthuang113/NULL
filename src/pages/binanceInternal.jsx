import React from "react";
import '../css/general.css'
import nullBinance from '../images/nullBinance.jpg';

function BIT(){
    
    return(
        <section>
            <div className="bitouter">
                <div className="internalT">
                    <h1>請掃描QR Code或是使用NULL支付ID: 505740324</h1>
                    <div className="bitimg">
                    <img src={nullBinance} width="500vw" height="auto" />
                    </div>
                    <h1>請掃描付款QR Code並且完成付款程序</h1>
                    <h1><span>請務必保留您的訂單ID</span></h1>
                </div>
            </div>

        </section>
    )
}

export default BIT;

