export default (event) => {
  event.reply({
    type: 'text',
    text: '請點選按鈕',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            label: '早餐',
            text: '餐點 早餐'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '午餐',
            text: '餐點 午餐'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '晚餐',
            text: '餐點 晚餐'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            label: '點心',
            text: '餐點 點心'
          }
        }
      ]
    }
  })
}
