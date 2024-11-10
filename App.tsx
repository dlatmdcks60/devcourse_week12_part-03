import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const dispatch = useTypedIdspatch();

    const handleDeleteBoard = () => {
        if (boards.length > 1) {
            dispatch(
                deleteBoard({ boardId: getActiveBoard.boardId }),
            )

            displatch(
                addLog({
                    logId: V4(),
                    logMessage: `게시판 지우기: ${getActiveBoard.boardName}`,
                    logAuthor: "User",
                    logTimestamp: String(Date.now())
                })
            )

            const newIndexToSet = () => {
                const indexToBeDeleted = boards.findIndex(
                    board => board.boardId === activeBoardId
                )
                return indexToBeDeleted === 0
                    ? imdexTpBeDe;eted + 1
            }

            setActiveBoardId(boards[newIndexToSet()].boardId)
        } else {
            alert('최소 게시판 개수는 한 개입니다.');
        }
    }

    return (
        <div className={appContainer}>
            {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
            {modalActive ? <EditModal /> : null}

            <BoardList
                activeBoardId={activeBoardId}
                setActiveBoardId={setActiveBoardId}
            />

            <div className={board}>
                <ListContainer lists={lists} boardId={getActiveBoard.boardId} />
            </div>

            <div className={buttons}>
                <button className={deleteBoardButton} onClick={()=> handleDeleteBoard}>
                    이 게시판 삭제하기
                </button>
                <button className={loggerButton} onClick={() => setIsloggerOpen}>
                    {isLoggerOpen ? "활동 목록 숨기기" : "활동 목록 펼치기"}
                </button>
            </div>
        </div>
    );
}

export default App;
