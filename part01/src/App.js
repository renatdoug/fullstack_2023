
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExercises}</p>;
};


const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const parts = [
    { name: 'Fundamentos da biblioteca React', exercises: 10 },
    { name: 'Usando props para passar dados', exercises: 7 },
    { name: 'Estado de um componente', exercises: 14 }
  ];

  let totalExercises = 0;
  for (let i = 0; i < parts.length; i++) {
    totalExercises += parts[i].exercises;
  }

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </>
  );
};


export default App
