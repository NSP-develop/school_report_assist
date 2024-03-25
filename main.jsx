function App() {
    return (
        <div>
            <h1>レポート補助用下書きアプリ</h1>
            <InputArea/>
        </div>
    )
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);