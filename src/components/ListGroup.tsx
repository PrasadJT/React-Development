function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  if (items.length === 0)
    return (
      <>
        <></>
        <h1>List</h1>
        <p>No item found</p>;
      </>
    );

  //const message = items.length === 0 ? <p>No item found</p> : null
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
