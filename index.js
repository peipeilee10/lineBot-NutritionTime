import 'dotenv/config'
import linebot from 'linebot'
import flexNutrition from './files/flex_nutrition.js'
import flexDietMenu from './files/flex_dietMenu.js'

// console.log(APIdata)

// 設定機器人
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 監聽路徑
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

// 拿取資料
// const nutrition = [];
bot.on('message', (event) => {
  // console.log(event.message)
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('查詢 ')) {
      flexNutrition(event)
    } else if (event.message.text.startsWith('餐點 ')) {
      flexDietMenu(event)
    } else if (event.message.text === '如何使用') {
      event.reply('Hi✌歡迎使用營養好食光\r\r本機器人提供以下服務:\r\r✦營養成分查詢\n✦減脂餐推薦\n✦TDEE計算\r請點選以下表單即可享受各項服務\r\r ❣貼心建議❣\r\r✿建議您可以先計算TDEE計算，計算您一整天的所需熱量 \r\r✿再使用我們的減脂餐推薦，好吃又不爆卡的餐點\r\r✿出門在外也可以使用營養成分查詢，查詢食物的熱量精準控制!\r\r人生不是在減肥就是在減肥的路上，共勉之☺☺')
    } else if (event.message.text === '營養成分查詢') {
      event.reply('請輸入 查詢+半形空格+您要查的項目')
    } else if (event.message.text === '減脂餐推薦') {
      event.reply('請輸入 餐點+半形空格+早餐/午餐/晚餐/點心')
    }
  }
}
)
