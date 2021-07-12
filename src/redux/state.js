let dialogsData = [
  { id: 1, name: "Body1" },
  { id: 2, name: "Body2" },
  { id: 3, name: "Body3" },
  { id: 4, name: "Body4" },
  { id: 5, name: "Body5" },
  { id: 6, name: "Body6" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Fine" },
  { id: 4, message: "Thank you" },
  { id: 5, message: "Ok" },
  { id: 6, message: "Bye" },
];

let posts = [
  { likes: 7, message: "Hi, how are you?" },
  { likes: 23, message: "It's, my first post" },
];

let addPost = function () {
  let newPost = {likes: 0, message: "Maybe Yes, maybe No"}
  posts.push(newPost)
}

let state = {
  dialogsData,
  messages,
  posts,
  addPost
};

export default state