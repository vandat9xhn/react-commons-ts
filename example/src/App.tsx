import React, { ChangeEvent, useState } from 'react';

import { unitNumber, loadFiles } from 'react-commons-ts';

//
const App = () => {
    //
    const [file_loading, setFileLoading] = useState(false);

    // -----

    //
    async function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (files?.length) {
            setFileLoading(true);
            const data = await loadFiles({ files: files });

            setFileLoading(false);
            console.log(data);
        }
    }

    //
    return (
        <div>
            <div>{unitNumber({ num: 1500 })}</div>

            <div
                style={{
                    pointerEvents: file_loading ? 'none' : undefined,
                    opacity: file_loading ? 0.5 : 1
                }}
            >
                <input
                    type='file'
                    multiple
                    accept='image/*, video/*'
                    onChange={handleChange}
                />
            </div>

            {file_loading && <div>Uploading...</div>}
        </div>
    );
};

export default App;
