module.exports = {
    "devServer": {
        "proxy": {
            "/api": {
                "target": process.env["DEV_SERVER"] == "true" ? "http://localhost:51818" : "https://next.jx3box.com",
                "onProxyReq": function (request) {
                    request.setHeader("origin", "");
                }
            }
        }
    }
}