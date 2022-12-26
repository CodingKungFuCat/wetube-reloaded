const videos = [
    {
        title: "first Video",
        rating: 5,
        comments: 2,
        createAt: "2minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "second Video",
        rating: 3.2,
        comments: 4,
        createAt: "2minutes ago",
        views: 1,
        id: 2
    },
    {
        title: "third Video",
        rating: 4.5,
        comments: 10,
        createAt: "2minutes ago",
        views: 32,
        id: 3
    }
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "home", videos })
}
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    return res.render("watch", { pageTitle: `watching: ${video.title}`, video })
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    return res.render("edit", { pageTitle: `Editing: ${video.title}`, video })
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    return res.redirect(`/videos/${id}`)
}

