// 匯入dietmenu line的flex
import dietmenu from '../template/flexDietMenuBubble.js'
// 匯入dietmenu的api
import dietmenuApi from '../healthDietMenu.js'

// 匯出
export default (event) => {
  // 深層複製
  const dietmenuarr = JSON.parse(JSON.stringify(dietmenu))
  dietmenu.altText = '減脂菜單'
  const menu = event.message.text.replace('餐點 ', '')
  const arr = []
  console.log(menu)
  console.log(arr.length)

  // 如果文字輸入的是早餐

  console.log(menu)
  // 就跑0~12(早餐data)
  while (arr.length < 5) {
    let brrandom
    // 輸入早餐
    if (menu === '早餐') {
    // 早餐數量(12份 索引0~11)
      brrandom = Math.floor(Math.random() * 12)
      // 輸入早餐
    } else if (menu === '午餐') {
      // 午餐數量(10份 索引12~21)
      brrandom = Math.floor(Math.random() * 10 + 12)
      // 輸入晚餐
    } else if (menu === '晚餐') {
      // 晚餐數量(10份 索引23~31)
      brrandom = Math.floor(Math.random() * 10 + 22)
      // 輸入點心
    } else if (menu === '點心') {
      // 點心數量(5份 索引32~36)
      brrandom = Math.floor(Math.random() * 5 + 32)
    } else {
      break
    }
    // 不重複
    // 如果陣列包含此數字
    if (arr.includes(brrandom)) {
      console.log(brrandom + ' continue')
      // 略過以下動作，再跑下一輪迴圈
      continue
    } else {
      arr.push(brrandom)
    }
    dietmenuarr.contents.contents.push(
      {
        type: 'bubble',
        hero: {
          type: 'image',
          url: dietmenuApi[brrandom].picture,
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          action: {
            type: 'uri',
            uri: 'http://linecorp.com/'
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: dietmenuApi[brrandom].item,
              weight: 'bold',
              size: 'xl',
              color: '#009393'
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              spacing: 'sm',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '熱量',
                      size: 'sm',
                      flex: 1
                    },
                    {
                      type: 'text',
                      text: dietmenuApi[brrandom].calories,
                      wrap: true,
                      color: '#666666',
                      size: 'sm'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '碳水化合物',
                      size: 'sm',
                      flex: 1
                    },
                    {
                      type: 'text',
                      text: dietmenuApi[brrandom].carbohydrate,
                      wrap: true,
                      color: '#666666',
                      size: 'sm'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '脂肪',
                      size: 'sm'
                    },
                    {
                      type: 'text',
                      text: dietmenuApi[brrandom].fat,
                      size: 'sm'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '蛋白質',
                      size: 'sm'
                    },
                    {
                      type: 'text',
                      text: dietmenuApi[brrandom].protein,
                      size: 'sm'
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: '食材',
                      size: 'sm',
                      margin: 'md'
                    },
                    {
                      type: 'text',
                      text: dietmenuApi[brrandom].ingredients,
                      wrap: true,
                      size: 'xs',
                      margin: 'md',
                      color: '#9D9D9D'
                    }
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'spacer',
              size: 'sm'
            }
          ],
          flex: 0
        }
      }
    )
  }
  event.reply(dietmenuarr)
  console.log(dietmenuarr)
  console.log(arr)
}
