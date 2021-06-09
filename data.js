const facebookUser1 = {
  id: 1,
  firstName: "Béla",
  lastName: "Kovács",
  password: "password",
  birthDay: "1991.01.01",
  posts: [
    {
      id: 1,
      text: "Ma jo napom volt",
      date: "2021.06.09.",
      reactions: [
        { type: "like", userId: 12, date: "2021.06.09." },
        { type: "heart", userId: 13, date: "2021.06.09." },
        { type: "heart", userId: 13, date: "2021.06.09." },
      ]
    },
    { id: 2, text: "Ma jo napom volt", date: "2021.06.09.", reactions: []  },
    { id: 3, text: "Ma jo napom volt", date: "2021.06.09.", reactions: []  },
    { id: 4, text: "Ma jo napom volt", date: "2021.06.09.", reactions: []  },
    { id: 5, text: "Ma jo napom volt", date: "2021.06.09.", reactions: []  }
  ]
}

module.exports = facebookUser1
