import React from 'react'

import Game from './Game'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__inner">
                    <Game/>
                    {/* <Control/> */}
                </div>
            </div>
        </main>
    )
}

export default Main
