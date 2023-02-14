import Mock from "mockjs";

Mock.setup({
    timeout: 4000
})

Mock.mock('/userlist',{
    "ret": 0,
    "data":
    {
        "mtime": "@datetime",
        "score|1-800": 1,
        "rank|1-100": 1,
        "stars|1-5": 1,
        "nickname": "@cname"
    }
});