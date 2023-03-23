const TelegramBot = require('node-telegram-bot-api');
const Evn = require('./.evn');
const texts = require('./text');
const keyboard = require('./button');
const helper = require('./helper');
const kb = require('./buttons-keybord');
const fs = require('fs');




const bot = new TelegramBot(Evn.TOKEN, {polling: true});

const webAppUrl = 'https://cliniceco.ru/';

bot.setMyCommands([
  {command: '/st', description: 'Наш сайт'},
  {command: '/instagramm', description: ' Полная программа очищения'},
  {command: '/tg', description: 'Телеграмм канал'},
  {command: '/online', description: 'Онлайн запись'},
  {command: '/progbot', description: 'Бот программы'},
])

bot.on('callback_query', msg =>{
  const chatId = msg.message.chat.id
  console.log(msg.data)
  switch(msg.data) {
    //Полная программа
    case 'full':
      bot.sendMessage(chatId,  `${texts.fpdl}`,{parse_mode:'Markdown',
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.fp
      })
    })
      break
      case 'fpk':
        bot.sendMessage(chatId,  `${texts.fpptext}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fp_b
          })
        })
         break
        case 'fpprox':
        bot.sendMessage(chatId,  `${texts.fpkptext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.fp_b
          })
        })
         break   
         case 'fpzapis':
          bot.sendMessage(chatId,  `${texts.fpztext}`,{ parse_mode:'Markdown' ,
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.fp_b
            })
          })
           break  
           case 'fpstoit':
            bot.sendMessage(chatId,  `${texts.fpstoit}`, {parse_mode:'Markdown',
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.fp_b
              })
            })
             break
             case 'fprezul':
              bot.sendMessage(chatId,  `${texts.fpresulttext}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.fp_b
                })
              })
               break
               case 'fpkakchasto':
                bot.sendMessage(chatId,  `${texts.fpkak}`, {
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.fp_b
                  })
                })
                 break
    //Короткая программа
    case 'light':
      bot.sendMessage(chatId,  `${texts.lpdl}`, {parse_mode:'Markdown',
        reply_markup:JSON.stringify({
          inline_keyboard:keyboard.lp
        })
      })
      break
      case 'lppr':
        bot.sendMessage(chatId,  `${texts.fpptext}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.lp_b
          })
        })
         break
         case 'lpprox':
          bot.sendMessage(chatId,  `${texts.lpkp}`, {parse_mode:'Markdown',
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.lp_b
            })
          })
           break
           case 'lpzapis':
            bot.sendMessage(chatId,  `${texts.fpztext}`,{parse_mode: 'Markdown',
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.lp_b
              })
            })
             break
             case 'lpstoit':
              bot.sendMessage(chatId,  `${texts.lpstoit}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.lp_b
                })
              })
               break
               case 'lprezul':
                bot.sendMessage(chatId,  `${texts.fpresulttext}`, {parse_mode:'Markdown',
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.lp_b
                  })
                })
                 break
                 case 'lpkakchasto':
                  bot.sendMessage(chatId,  `${texts.lpkak}`, {
                    reply_markup:JSON.stringify({
                      inline_keyboard:keyboard.lp_b
                    })
                  })
                   break
    // Коррекция желчеоотока
    case 'gelch':
      bot.sendMessage(chatId,  `${texts.gelchtext}`, {parse_mode:'Markdown',
        reply_markup:JSON.stringify({
          inline_keyboard:keyboard.gl
        })
      })
      break
      case 'glprox':
        bot.sendMessage(chatId,  `${texts.glprox}`,{parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.gl_b
          })
        })
         break
         case 'glpr':
          bot.sendMessage(chatId,  `${texts.glprotiv}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.gl_b
            })
          })
           break
           case 'glpodgotovka':
            bot.sendMessage(chatId,  `${texts.glpodgotovka}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.gl_b
              })
            })
             break
    // Дуоденальное зондирование
      case 'duodzond':
        bot.sendMessage(chatId,  `${texts.duodtext}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.duod
          })
        })
        break
        case 'duoudpopr':
          bot.sendMessage(chatId,  `${texts.duodpoptext}`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.duod_b
            })
          })
           break
           case 'duoudresult':
            bot.sendMessage(chatId,  `${texts.duodresult}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.duod_b
              })
            })
             break
             case 'duoudzapis':
              bot.sendMessage(chatId,  `${texts.duodzapis}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.duod_b
                })
              })
               break
               case 'duoudstoit':
                bot.sendMessage(chatId,  `${texts.duodstoit}`, {
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.duod_b
                  })
                })
                 break
                 case 'duoudmicro':
                  bot.sendMessage(chatId,  `${texts.duodmicrotext}`, {
                    reply_markup:JSON.stringify({
                      inline_keyboard:keyboard.duod_b
                    })
                  })
                   break
                   case 'duoudprotiv':
                    bot.sendMessage(chatId,  `${texts.duodprotiv}`, {
                      reply_markup:JSON.stringify({
                        inline_keyboard:keyboard.duod_b
                      })
                    })
                     break
      // ВРТ диогностика
      case 'vrt':
        bot.sendMessage(chatId,  `${texts.vrttext}`, {parse_mode:'Markdown',
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.vrt
          })
        })
        break
        case 'vrtprotiv':
          bot.sendMessage(chatId,  `${texts.vrtprotiv}`, {parse_mode:'Markdown',
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.vrt_b
            })
          })
          break
          case 'vrtprox':
            bot.sendMessage(chatId,  `${texts.vrtproxod}`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.vrt_b
              })
            })
            break
            case 'vrtzapis':
              bot.sendMessage(chatId,  `${texts.vrtzapis}`, {parse_mode:'Markdown',
                reply_markup:JSON.stringify({
                  inline_keyboard:keyboard.vrt_b
                })
              })
              break
              case 'vrtvid':
                bot.sendMessage(chatId,  `${texts.vrtvid}`, {
                  reply_markup:JSON.stringify({
                    inline_keyboard:keyboard.vrt_b
                  })
                })
                break
                case 'vrtlicen':
                  bot.sendMessage(chatId,  `${texts.vrtlicen}`)
                  bot.sendPhoto(chatId,fs.readFileSync(__dirname + '/img/license1.jpeg'))
                  bot.sendPhoto(chatId,fs.readFileSync(__dirname + '/img/license2.jpeg'))
                  bot.sendPhoto(chatId,fs.readFileSync(__dirname + '/img/license3.jpeg'))
                  bot.sendPhoto(chatId,fs.readFileSync(__dirname + '/img/license4.jpeg'), {
                    reply_markup:JSON.stringify({
                      inline_keyboard:keyboard.vrt_b
                    })
                  })
                  break
                  case 'vrtpered':
                    bot.sendMessage(chatId,  `${texts.vrtpered}`, {
                      reply_markup:JSON.stringify({
                        inline_keyboard:keyboard.vrt_b
                      })
                    })
                    break

 //Функции прочие
      case 'back_start':
        bot.sendMessage(chatId,  `${texts.vibor}`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.start
          })
        })
        break
       

  }
})
bot.on("polling_error", console.log);

bot.onText(/\/start/ ,msg =>{
  bot.sendMessage(helper.getChatId(msg),`${texts.hello}`,{
    reply_markup:JSON.stringify({
      inline_keyboard:keyboard.start
    })
  })

  })
  bot.onText(/\/site/ ,msg =>{
    bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
      reply_markup:JSON.stringify({
        inline_keyboard:keyboard.site
      })
    })
    })
    bot.onText(/\/instagramm/ ,msg =>{
      bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
        reply_markup:JSON.stringify({
          inline_keyboard:keyboard.instagramm
        })
      })
      })
      bot.onText(/\/tg/ ,msg =>{
        bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
          reply_markup:JSON.stringify({
            inline_keyboard:keyboard.tg
          })
        })
        })
        bot.onText(/\/online/ ,msg =>{
          bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
            reply_markup:JSON.stringify({
              inline_keyboard:keyboard.online
            })
          })
          })
          bot.onText(/\/progbot/ ,msg =>{
            bot.sendMessage(helper.getChatId(msg),`Нажмите на кнопку для подтверждения перехода`, {
              reply_markup:JSON.stringify({
                inline_keyboard:keyboard.progbot
              })
            })
            })

