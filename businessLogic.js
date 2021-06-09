const getPostWithMostHearts = (users) => {

  let heartCounter = 0
  let postWithMostHearts = null

  for (let user of users) {

    for (let post of user.posts) {

      let hearts = 0
      for (let reaction of post.reactions) {
        if (reaction.type === "heart") {
          hearts = hearts + 1
        }
      }

      if (postWithMostHearts === null) {
        heartCounter = hearts
        postWithMostHearts = post
      } else if (hearts >= heartCounter && post.date <= postWithMostHearts.date) {
        heartCounter = hearts
        postWithMostHearts = post
      }
    }

  }

  return postWithMostHearts
}

module.exports = getPostWithMostHearts
