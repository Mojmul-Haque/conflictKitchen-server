const users = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
const posts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const todos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const first = () => {
  console.log("i am first");
  // todos

  setTimeout(() => {
    todos();
  }, 10000);

  // post

  setTimeout(() => {
    posts();
  }, 7000);

  // users

  setTimeout(() => {
    users();
  }, 5000);
};

first();
