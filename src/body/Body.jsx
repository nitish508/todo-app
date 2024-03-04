function Body({ lists, removeListItem }) {
  console.log("Body render");
  return (
    <section className="w-1/3 py-2">
      <ul>
        {lists.map((item) => {
          return (
            <div
              key={item.id}
              className=" flex flex-row justify-between items-center border border-1 border-stone-700 my-1 p-2"
            >
              <li className="flex-1">{item.text}</li>
              <button
                className="bg-red-600 text-white rounded px-4 py-3"
                onClick={() => removeListItem(item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default Body;
