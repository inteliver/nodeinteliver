var http = require('http');
jsSHA = require("jssha");
jsi = require("./nodeinteliver")

//console.log(jsi.getConfig())
config = new jsi.InteliverConfig('amir', 'token')
resource_key = '000220973186370000000000000000000071.jpg'
rt = new jsi.InteliverRetrieve(config)
rt.print()
rt.select_face()
rt.select('height', 200)
rt.select('width', 150)
rt.image_crop(round_crop=true)
rt.image_change_format('PNG')
console.log(rt.build_url(resource_key))

config = new jsi.InteliverConfig('amir', 'your-token')
iu = new jsi.Uploader(config)
iu.upload('me.jpg')
