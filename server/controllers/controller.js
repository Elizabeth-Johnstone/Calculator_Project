// const users = [
//     {
//       username: "Sammy532",
//       password: "p123",
//     },
//     {
//         username: "fsdj",
//         password: "fjdsklaf",
//       },
//   ];

//   const dropDownItems = [
//     "black",
//     "blue",
//     "red",
//     "purp",
//     "flesh",
//     "orange",
//     "robin's egg blue",
//   ];
  
//   module.exports = {
//     login: (req, res) => {
//       const { username, password } = req.query;
  
//       const foundUser = users.find((user) => {
//         return username === user.username;
//       });
  
//       if (!foundUser) {
//         res.status(409).send("User or password is incorrect!");
//       }
//       console.log(foundUser);
//       res.status(200).send(foundUser);
//     },
//     getColors: (req, res) => {
//       res.status(200).send(dropDownItems);
//     },
//   };