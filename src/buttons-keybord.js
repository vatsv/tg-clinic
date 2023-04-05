const texts = require('./text')

module.exports = {
start:{
    full: {text:`${texts.fp}`,callback_data:'full'},
    light: {text:`${texts.lp}`,callback_data:'light'},
    gelch: {text:`${texts.gelch}`,callback_data:'gelch'},
    duodzond:{text:`${texts.duodzond}`,callback_data:'duodzond'},
    vrt: {text:`${texts.vrt}`,callback_data:'vrt'},
    massag: {text:`${texts.massag}`,callback_data:'massag'},
    spa: {text:`${texts.spa}`,callback_data:'spa'},
    back_start:{text:`${texts.back}`,callback_data:'back_start'}
},
fp:{
    //fpabout :{text:`${texts.fpk}`,callback_data:'fpk'},
    fpprotiv :{text:`${texts.pr}`,callback_data:'fpk'},
    fpprox :{text:`${texts.prox}`,callback_data:'fpprox'},
    fpzapis :{text:`${texts.zapis}`,callback_data:'fpzapis'},
    fpstoit :{text:`${texts.stoit}`,callback_data:'fpstoit'},
    fprezult :{text:`${texts.rezult}`,callback_data:'fprezul'},
    fpkakchasto :{text:`${texts.kakchasto}`,callback_data:'fpkakchasto'},
    },
fp_b:{
    back_fp: {text:`${texts.back}`,callback_data:'full'},
},
lp:{
    lpabout :{text:`${texts.fpk}`,callback_data:'lpk'},
    lpprotiv :{text:`${texts.pr}`,callback_data:'lppr'},
    lpprox :{text:`${texts.prox}`,callback_data:'lpprox'},
    lpzapis :{text:`${texts.zapis}`,callback_data:'lpzapis'},
    lpstoit :{text:`${texts.stoit}`,callback_data:'lpstoit'},
    lprezult :{text:`${texts.rezult}`,callback_data:'lprezul'},
    lpkakchasto :{text:`${texts.kakchasto}`,callback_data:'lpkakchasto'},
},
lp_b:{
    back_lp: {text:`${texts.back}`,callback_data:'light'},
},
gl:{
    glprox :{text:`${texts.prox}`,callback_data:'glprox'},
    glprotiv :{text:`${texts.pr}`,callback_data:'glpr'},
    glpodgotovka :{text:`${texts.podgotovka}`,callback_data:'glpodgotovka'},
},
gl_b:{
    back_gl: {text:`${texts.back}`,callback_data:'gelch'},
},
duod:{
    duodpopr :{text:`${texts.duodpop}`,callback_data:'duoudpopr'},
    duoudresult:{text:`${texts.rezult}`,callback_data:'duoudresult'},
    duodzapis :{text:`${texts.zapis}`,callback_data:'duoudzapis'},
    duoudstoit:{text:`${texts.stoit}`,callback_data:'duoudstoit'},
    duodprotiv :{text:`${texts.pr}`,callback_data:'duoudprotiv'},
    duoudmicro:{text:`${texts.duodmicro}`,callback_data:'duoudmicro'},
},
duod_b:{
    back_duod: {text:`${texts.back}`,callback_data:'duodzond'},
},
vrt:{
    vrtprotiv :{text:`${texts.pr}`,callback_data:'vrtprotiv'},
    vrtprox :{text:`${texts.prox}`,callback_data:'vrtprox'},
    vrtzapis :{text:`${texts.zapis}`,callback_data:'vrtzapis'},
    vrtvid :{text:`${texts.vid}`,callback_data:'vrtvid'},
    vrtlicen :{text:`${texts.licen}`,callback_data:'vrtlicen'},
    vrtpered :{text:`${texts.podgotovka}`,callback_data:'vrtpered'},
},
vrt_b:{
    back_vrt: {text:`${texts.back}`,callback_data:'vrt'},
},
commands:{
    site: {text:`${texts.site}`,url:'https://cliniceco.ru/'},
    instagramm: {text:`${texts.instagramm}`,url:'https://www.instagram.com/eco.clinic/'},
    tg:{text:`${texts.tg}`,url:'https://t.me/ecoclinic'},
    online:{text:`${texts.online}`,url:'https://cliniceco.ru/online-zapis/'},
    progbot:{text:`${texts.progbot}`,url:'https://t.me/cliniceco_bot'},
},
}