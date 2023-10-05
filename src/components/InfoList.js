
export const InfoList = ({allTodos, allComplete, clearTodos})=> {

    return (
      <>
        <div className="info">
            <span className="title-color">All todos: {allTodos}</span>
            <span className="title-color">Complete: {allComplete}</span>
        </div>
        <button className="btn btn-outline-info w-100 mb-2" onClick={clearTodos}>Clear All</button>
      </>
    )
}