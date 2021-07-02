import React from 'react';

const Log = ({generateLogs}) => {
    return (
        <div className="chat">
            <div className="log">
                <div dangerouslySetInnerHTML={{__html: generateLogs()}}/>
            </div>
        </div>
    );
};

export default Log;
