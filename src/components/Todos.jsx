import TodoItem from "./TodosItem"; // Lakukan import

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
