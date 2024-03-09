import useForm from "@jupri-lab/base/useForm";

function App() {
  const { bind, onSubmit } = useForm();

  return (
    <form onSubmit={onSubmit()}>
      <input {...bind("name")} />
      <input {...bind("email")} />
      <button>Submit</button>
    </form>
  );
}

export default App;
