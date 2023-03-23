const texts = require('./text')
const kb = require('./buttons-keybord')

module.exports = {

start:[
  [kb.start.full],
  [kb.start.light],
  [kb.start.gelch],
  [kb.start.duodzond],
  [kb.start.vrt],
],

fp:[
  //[kb.fp.fpabout],
  [kb.fp.fpprotiv],
  [kb.fp.fpprox],
  [kb.fp.fpzapis],
  [kb.fp.fpstoit],
  [kb.fp.fprezult],
  [kb.fp.fpkakchasto],
  [kb.start.back_start],
],
fp_b:[
  [kb.fp_b.back_fp]
],
lp:[
  //[kb.lp.lpabout],
  [kb.lp.lpprotiv],
  [kb.lp.lpprox],
  [kb.lp.lpzapis],
  [kb.lp.lpstoit],
  [kb.lp.lprezult],
  [kb.lp.lpkakchasto],
  [kb.start.back_start]
],
lp_b:[
  [kb.lp_b.back_lp]
],
gl:[
  [kb.gl.glprox],
  [kb.gl.glprotiv],
  [kb.gl.glpodgotovka],
  [kb.start.back_start]
],
gl_b:[
 [kb.gl_b.back_gl],
],
duod:[
  [kb.duod.duodpopr],
  [kb.duod.duoudresult],
  [kb.duod.duodzapis],
  [kb.duod.duoudstoit],
  [kb.duod.duodprotiv],
  [kb.duod.duoudmicro],
  [kb.start.back_start],
],
duod_b:[
 [kb.duod_b.back_duod],
],
vrt:[
  [kb.vrt.vrtprotiv],
  [kb.vrt.vrtprox],
  [kb.vrt.vrtzapis],
  [kb.vrt.vrtvid],
  [kb.vrt.vrtlicen],
  [kb.vrt.vrtpered],
  [kb.start.back_start]
],
vrt_b:[
  [kb.vrt_b.back_vrt],
],
site:[
  [kb.commands.site],
],
instagramm:[
  [kb.commands.instagramm],
],
tg:[
  [kb.commands.tg]
],
online:[
  [kb.commands.online]
],
progbot:[
  [kb.commands.progbot]
],
}