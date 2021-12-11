import Nutrition from '../template/flexNutritionBubble.js'
import APIdata from '../API.js'

export default (event) => {
  // 深層複製
  const nutritionarr = JSON.parse(JSON.stringify(Nutrition))
  const dataGet = false
  Nutrition.altText = '哈囉'
  const food = event.message.text.replace('查詢 ', '')
  for (let i = 0; i < APIdata.length; i++) {
    if (food === APIdata[i].name) {
      // dataGet = true
      nutritionarr.contents.body.contents.push(
        {
          type: 'text',
          text: '營養成分表',
          weight: 'bold',
          color: '#1DB446',
          size: 'md'
        },
        {
          type: 'text',
          text: APIdata[i].name,
          weight: 'bold',
          size: 'xxl',
          margin: 'md',
          color: '#003060'
        },
        {
          type: 'separator',
          margin: 'xxl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'xxl',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '重量(g)',
                  size: 'sm',
                  color: '#555555',
                  flex: 0
                },
                {
                  type: 'text',
                  text: APIdata[i].weight.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '卡路里',
                  size: 'sm',
                  color: '#555555',
                  flex: 0
                },
                {
                  type: 'text',
                  text: APIdata[i].calories.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '蛋白質',
                  size: 'sm',
                  color: '#555555',
                  flex: 0
                },
                {
                  type: 'text',
                  text: APIdata[i].protein.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'separator',
              margin: 'xxl'
            },
            {
              type: 'box',
              layout: 'horizontal',
              margin: 'xxl',
              contents: [
                {
                  type: 'text',
                  text: '膳食纖維',
                  size: 'sm',
                  color: '#555555'
                },
                {
                  type: 'text',
                  text: APIdata[i].dietaryFiber.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '脂肪',
                  size: 'sm',
                  color: '#555555'
                },
                {
                  type: 'text',
                  text: APIdata[i].fat.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: '碳水化合物',
                  size: 'sm',
                  color: '#555555'
                },
                {
                  type: 'text',
                  text: APIdata[i].carbohydrate.toString(),
                  size: 'sm',
                  color: '#111111',
                  align: 'end'
                }
              ]
            }
          ]
        }
      )
      event.reply(nutritionarr)
    }
  }

  // 如果有資料就console有資料，沒有就回傳
  dataGet ? console.log('有資料') : event.reply('抱歉!尚未建立此資料')
}
