const List = (props) => {
  return (
    <div>
      <h1>List</h1>
      {props.contentList.map((list, i) => {
        return <li key={i}>{list}</li>;
      })}
    </div>
  );
};

export default List;
