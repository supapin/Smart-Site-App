import { Treeselect } from '../dist/treeselectjs.mjs.js'

const options = [
  {
    name: '管理功能',
    value: '管理功能',
    children: [
      {
        name: '專案管理',
        value: '專案管理',
        children: [
          {
            name: '專案管理檢視',
            value: '專案管理檢視',
          },
          {
            name: '專案管理編輯',
            value: '專案管理編輯',
          },
        ]
      },
      {
        name: '會議管理',
        value: '會議管理',
        children: [
          {
            name: '會議管理檢視',
            value: '會議管理檢視',
          },
          {
            name: '會議管理編輯',
            value: '會議管理編輯',
          }
        ]
      },
      {
        name: '照片管理',
        value: '照片管理',
        children: [
          {
            name: '照片管理檢視',
            value: '照片管理檢視',
          },
          {
            name: '照片管理編輯',
            value: '照片管理編輯',
          }
        ]
      },
      {
        name: '表單管理',
        value: '表單管理',
        children: [
          {
            name: '表單管理檢視',
            value: '表單管理檢視',
          },
          {
            name: '表單管理編輯',
            value: '表單管理編輯',
          }
        ]
      },
      {
        name: '進度管理',
        value: '進度管理',
        children: [
          {
            name: '進度管理檢視',
            value: '進度管理檢視',
          },
          {
            name: '進度管理編輯',
            value: '進度管理編輯',
          }
        ]
      },
      {
        name: '計價管理',
        value: '計價管理',
        children: [
          {
            name: '計價管理檢視',
            value: '計價管理檢視',
          },
          {
            name: '計價管理編輯',
            value: '計價管理編輯',
          }
        ]
      },
      {
        name: '公文管理',
        value: '公文管理',
        children: [
          {
            name: '公文管理檢視',
            value: '公文管理檢視',
          },
          {
            name: '公文管理編輯',
            value: '公文管理編輯',
          }
        ]
      },
      {
        name: '簽到管理',
        value: '簽到管理',
        children: [
          {
            name: '簽到管理檢視',
            value: '簽到管理檢視',
          },
          {
            name: '簽到管理編輯',
            value: '簽到管理編輯',
          },
          {
            name: '管理簽核',
            value: '管理簽核',
          }
        ]
      },
    ]
  },
  {
    name: '專案功能',
    value: '專案功能',
    children: [
      {
        name: '專案',
        value: '專案',
        children: [
          {
            name: '專案檢視',
            value: '專案檢視',
          },
          {
            name: '專案編輯',
            value: '專案編輯',
          },
        ]
      },
      {
        name: '會議功能',
        value: '會議功能',
        children: [
          {
            name: '會議檢視',
            value: '會議檢視',
          },
          {
            name: '會議編輯',
            value: '會議編輯',
          }
        ]
      },
      {
        name: '照片功能',
        value: '照片功能',
        children: [
          {
            name: '照片檢視',
            value: '照片檢視',
          },
          {
            name: '照片編輯',
            value: '照片編輯',
          }
        ]
      },
      {
        name: '表單功能',
        value: '表單功能',
        children: [
          {
            name: '表單檢視',
            value: '表單檢視',
          },
          {
            name: '表單編輯',
            value: '表單編輯',
          }
        ]
      },
      {
        name: '進度功能',
        value: '進度功能',
        children: [
          {
            name: '進度檢視',
            value: '進度檢視',
          },
          {
            name: '進度編輯',
            value: '進度編輯',
          }
        ]
      },
      {
        name: '計價功能',
        value: '計價功能',
        children: [
          {
            name: '計價檢視',
            value: '計價檢視',
          },
          {
            name: '計價編輯',
            value: '計價編輯',
          }
        ]
      },
      {
        name: '公文功能',
        value: '公文功能',
        children: [
          {
            name: '公文檢視',
            value: '公文檢視',
          },
          {
            name: '公文編輯',
            value: '公文編輯',
          }
        ]
      },
      {
        name: '簽到功能',
        value: '簽到功能',
        children: [
          {
            name: '簽到檢視',
            value: '簽到檢視',
          },
          {
            name: '簽到編輯',
            value: '簽到編輯',
          }
        ]
      },
    ]
  }
]

const slot = document.createElement('div')
slot.innerHTML = '<a class="treeselect-demo__slot" href="">確定</a>'

const domElement = document.querySelector('.treeselect-demo')
const treeselect = new Treeselect({
  parentHtmlContainer: domElement,
  value: ['專案管理檢視', '專案管理編輯', '會議管理檢視', '會議管理編輯', '照片管理檢視', '照片管理編輯', '表單管理檢視', '表單管理編輯', '進度管理檢視', '進度管理編輯', '計價管理檢視', '計價管理編輯', '公文管理檢視', '公文管理編輯', '簽到管理檢視', '簽到管理編輯', '管理簽核', 
          '專案檢視', '專案編輯', '會議檢視', '會議編輯', '表單檢視', '表單編輯', '專案編輯', '進度檢視', '進度編輯', '公文檢視', '進度編輯', '公文編輯', '簽到檢視', '簽到編輯'
],
  options: options,
  // listSlotHtmlComponent: slot
})

treeselect.srcElement.addEventListener('input', (e) => {
  console.log('Selected value:', e.detail)
})

// slot.addEventListener('click', (e) => {
//   e.preventDefault()
//   alert('選取確認')
// })
