module.exports = (req, res, next) => {
    res.header('Content-Range', 'members 0-10/20')
    res.header('Access-Control-Expose-Headers', 'Content-Range')
    next()
}