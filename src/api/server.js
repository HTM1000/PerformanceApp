module.exports = () => {
    const data = {
        friends: [],
    }

    for (let index = 0; index < 500; index++) {
        data.friends.push({
            id: index + 1,
            name: `Friend ${index + 1}`,
            likes: 5
        })
    }

    return data;
}