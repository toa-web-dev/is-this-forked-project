function App() {
    return (
        <>
            <div>
                <h1>fork한 저장소를 보고 있는지 알려드립니다.</h1>
                <label htmlFor="colorPicker">색상 설정</label>
                <input type="color" id="colorPicker" name="colorPicker" />
                {/* 색약 색맹을 위한 색이 아닌 다른 요소로 구별 가능하게 하기
                예를 들면 밑줄, 테두리 등의 효과  */}
            </div>
        </>
    );
}

export default App;
