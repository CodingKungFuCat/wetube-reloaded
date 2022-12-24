

export const trending = (req, res) => {
    const videos = []
    res.render("home", { pageTitle: "home", videos })
}
export const see = (req, res) => res.render("watch", { pageTitle: "watch" })
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" })
export const Search = (req, res) => res.send("Search Videos", { pageTitle: "search" })
export const Upload = (req, res) => res.send("Upload Video", { pageTitle: "upload" })
export const Delete = (req, res) => res.send("Delete Video", { pageTitle: "delete" })