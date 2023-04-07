import { Treeselect } from '../dist/treeselectjs.mjs.js'

const options = [
    {
        name: '台北市',
        value: '台北市',
        children: [
            {
                name: '台北中正區',
                value: '台北中正區',
                children: []
            },
            {
                name: '台北大同區',
                value: '台北大同區',
                children: []
            },
            {
                name: '台北中山區',
                value: '台北中山區',
                children: []
            }
        ]
    },
    {
        name: '新北市',
        value: '新北市',
        children: [
            {
                name: '新北市萬里區',
                value: '新北市萬里區',
                children: []
            },
            {
                name: '新北市金山區',
                value: '新北市金山區',
                children: []
            },
            {
                name: '新北市板橋區',
                value: '新北市板橋區',
                children: []
            }
        ]
    }
]

const slot = document.createElement('div')
slot.innerHTML = '<a class="treeselect-demo__slot" href="">確定</a>'

const domElement = document.querySelector('.treeselect-demo2')
const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: ['台北大同區', '新北市萬里區', '新北市金山區', '新北市板橋區'],
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
