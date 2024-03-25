function InputName(props) {
    return (
        <div>
            <h3>名前</h3>
            <textarea className="name-textarea"></textarea>
        </div>
    );
}

function InputText(props) {
    // 要素にアクセスするための参照を取得
    // ref.currentのデフォルト値はnullにしておく
    // 参照したい要素にJSXの方でこのrefをセットする
    const textareaRef = React.useRef(null);

    // ボタンが押されたらクリップボードにテキストの内容をコピー
    function copyText() {
        // refのcurrentに入っている値がDOM
        if(textareaRef.current.value) {
            navigator.clipboard.writeText(textareaRef.current.value);
            alert("Copied:\n" + textareaRef.current.value);
        }
    };

    return (
        <div>
            <h3>本文</h3>
            <textarea className="tweet-textarea" ref={textareaRef}></textarea>
            <br></br>
            <button onClick={copyText} className="copy-text">Copy</button>
        </div>
    );
}

function InputArea(props) {
    return (
        <div>
            <InputName/>
            <InputText/>
        </div>
    )
}