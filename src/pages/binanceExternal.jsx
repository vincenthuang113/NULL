import React from "react";
import '../css/general.css'
import nullBinanceEx from '../images/nullBinanceEx.jpg';
import bingx from '../images/bingx.jpg';
import txhash1 from '../images/txhash1.jpg';
import txhash2 from '../images/txhash2.jpg';

function BET(){
    
    return(
        <section>
            <div className="bitouter">
                <div className="internalT">
                    <h1>請掃描QR Code並使用TRC20轉帳 <br/><span>*若使用非TRC20網路轉帳交易失敗，NULL Investing LLC保有免責權利*</span></h1>
                    <br /><h1>USDT儲值地址：TVAfzc6RxWCQWLLZbtzXP496gafAmhdTfY <br /><span>扣除手續費後 420 USDT</span></h1>
                    <div className="bitimg">
                    <img src={nullBinanceEx} width="500vw" height="auto" />
                    </div>
                    <h1><span>請務必保留您的交易ID (Hash Code)，以下為交易ID範例</span></h1>
                    <div className="screenshotsbet">
                        <div>
                            <h1>Tx hash BingX 範例</h1>
                            <img src={bingx}  width="300vw" height="auto" alt="" />
                        </div>
                        <div>
                            <h1>Tx hash 派網範例 </h1>
                            <img src={txhash1} width="700vw" height="auto"  alt="" />
                        </div>
                        <div>
                            <h1>Tx hash bybit範例</h1>
                            <img src={txhash2}  width="300vw" height="auto" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BET;