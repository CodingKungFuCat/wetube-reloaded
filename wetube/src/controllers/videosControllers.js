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
        views: 12,
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
    res.render("home", { pageTitle: "home", videos })
}
export const see = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1]
    res.render("watch", { pageTitle: `watching ${video.title}` })
}
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" })
export const Search = (req, res) => res.send("Search Videos", { pageTitle: "search" })
export const Upload = (req, res) => res.send("Upload Video", { pageTitle: "upload" })
export const Delete = (req, res) => res.send("Delete Video", { pageTitle: "delete" })