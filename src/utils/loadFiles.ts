//
type handleReaderType = (reader: FileReader) => void;
type handleReaderFilesType = ({
    reader,
    index
}: {
    reader: FileReader;
    index: number;
}) => void;
type ReaderResult = string | ArrayBuffer | null;

//
export function loadFile({
    file,
    handleReaderFile = () => {}
}: {
    file: File;
    handleReaderFile?: handleReaderType;
}) {
    const reader = new FileReader();
    handleReaderFile(reader);
    reader.readAsDataURL(file);
}

//
export function loadFiles({
    files,
    url_key = 'urls',
    handleReaderFiles = () => {}
}: {
    files: FileList;
    url_key?: string;
    handleReaderFiles?: handleReaderFilesType;
}) {
    return new Promise((res) => {
        const file_count = files.length;
        const reader_result_arr: ReaderResult[] = [];
        let c_index = 0;

        //
        const handleReaderFile: handleReaderType = (reader) => {
            reader.onload = () => {
                reader_result_arr.push(reader.result);
            };
            reader.onloadend = () => {
                c_index += 1;

                if (c_index == file_count) {
                    res({ files: files, [url_key]: reader_result_arr });
                }
            };
        };

        //
        for (let i = 0; i < file_count; i++) {
            loadFile({
                file: files[i],
                handleReaderFile: (reader) => {
                    handleReaderFile(reader);
                    handleReaderFiles({ reader: reader, index: i });
                }
            });
        }
    });
}
