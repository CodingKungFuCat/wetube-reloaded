export const trending = (req, res) => res.render("home")
export const see = (req, res) => res.send(`watch video ${req.params.id}`)
export const edit = (req, res) => res.send("edit video")
export const Search = (req, res) => res.send("Search Videos")
export const Upload = (req, res) => res.send("Upload Video")
export const Delete = (req, res) => res.send("Delete Video")