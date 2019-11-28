var choices = [
  {
    choices: [
      {
        routeBegins: "Yes",
        content: "Yes",
        nextIndex: 1
      },
      {
        routeBegins: "No",
        content: "No",
        nextIndex: 1
      },
    ]
  },
  {
    choices: [
      {
        store: "Yes",
        routeBegins: "Not really, isn’t Santa Claus a man?",
        content: "Not really, isn’t Santa Claus a man?",
        nextIndex: 2
      },
      {
        routeBegins: "Oh you’re right, she could be Santa!",
        content: "Oh you’re right, she could be Santa!",
        nextIndex: 2
      }
    ]
  },
  {
    choices: [
      {
        store: "Not really, isn’t Santa Claus a man?",
        routeBegins: "It’ll happen like it did with the woman",
        content: "It’ll happen like it did with the woman",
        nextIndex: 3
      },
      {
        routeBegins: "I think we got our man!",
        content: "I think we got our man!",
        nextIndex: 3
      }
    ]
  }
];

// choices sort of API

export default choices;
