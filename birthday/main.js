function Post()
{
    $.ajax({
        url:"https://gitblock.cn/WebApi/Comment/Post"
        type:"post"
        data:"forType=Studio&forId=64161&content=祝寂寞酱破蛋日快乐~q&t=1621401586738&s=cb05d90e5755347a671bef81397f36dcb7a0e69a"
        success:function(data){
            console.log(data)
        }
    })
}