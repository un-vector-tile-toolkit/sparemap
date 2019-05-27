const fs = require('fs')

let style = JSON.parse(fs.readFileSync('../macrostyle/style.json'))
style.sources.v.attribution = 'United Nations and OpenStreetMap contributors'
style.sources.v.tiles[0] = 'https://casale.vectortiles.xyz:8888/zxy/{z}/{x}/{y}.pbf'
style.sources.v.maxzoom = 7
style.sprite = 'https://casale.vectortiles.xyz:8888/sprite'

console.log(JSON.stringify(style, null, 2))

