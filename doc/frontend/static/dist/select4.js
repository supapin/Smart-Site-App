import { Treeselect } from '../dist/treeselectjs.mjs.js'

const options = [
    {
        name: '數據分析',
        value: '數據分析',
        children: [
            {
                name: '道路分析',
                value: '道路分析',
                children: []
            },
            {
                name: '指標分析',
                value: '指標分析',
                children: []
            },
        ]
    },
    {
        name: '數據驗證',
        value: '數據驗證',
        children: [
            {
                name: '文件管理',
                value: '文件管理',
                children: []
            },
            {
                name: 'PCI驗證',
                value: 'PCI驗證',
                children: []
            },
            {
                name: '驗證結果',
                value: '驗證結果',
                children: []
            }
        ]
    },
    {
        name: '帳號管理',
        value: '帳號管理',
        children: [
            {
                name: '廠商管理',
                value: '廠商管理',
                children: [
                    {
                        name: '廠商檢視',
                        value: '廠商檢視',
                        children: []
                    },
                    {
                        name: '廠商編輯',
                        value: '廠商編輯',
                        children: []
                    },
                ]
            },
            {
                name: '用戶管理',
                value: '用戶管理',
                children: [
                    {
                        name: '用戶檢視',
                        value: '用戶檢視',
                        children: []
                    },
                    {
                        name: '用戶編輯',
                        value: '用戶編輯',
                        children: []
                    },
                ]
            },
            {
                name: '裝置管理',
                value: '裝置管理',
                children: [
                    {
                        name: '裝置檢視',
                        value: '裝置檢視',
                        children: []
                    },
                    {
                        name: '裝置編輯',
                        value: '裝置編輯',
                        children: []
                    },
                    {
                        name: '新增SIM',
                        value: '新增SIM',
                        children: []
                    },
                ]
            },
            {
                name: '權限管理',
                value: '權限管理',
                children: [
                    {
                    name: '權限檢視',
                    value: '權限檢視',
                    children: []
                    },
                    {
                        name: '權限編輯',
                        value: '權限編輯',
                        children: []
                    },
                ]
            },
        ]
    },
]

const slot = document.createElement('div')
slot.innerHTML = '<a class="treeselect-demo__slot" href="">確定</a>'

const domElement = document.querySelector('.treeselect-demo2')
const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: ['數據分析', 'PCI驗證','文件編輯'],
    options: options,
    listSlotHtmlComponent: slot
})

treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
})

slot.addEventListener('click', (e) => {
  e.preventDefault()
  alert('選取確認')
})
