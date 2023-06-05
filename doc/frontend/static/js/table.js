/*設定屬性(預設功能)區塊*/
// "searching": false, // 預設為true 搜尋功能，若要開啟不用特別設定
// "paging": false, // 預設為true 分頁功能，若要開啟不用特別設定
// "ordering": false, // 預設為true 排序功能，若要開啟不用特別設定
// orderable: false, // 針對欄位 排序功能
// "sPaginationType": "full_numbers", // 分頁樣式 預設為"full_numbers"，若需其他樣式才需設定
// "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]], //顯示筆數設定 預設為[10, 25, 50, 100]
// "pageLength":'50'// 預設為'10'，若需更改初始每頁顯示筆數，才需設定
// "processing": true, // 預設為false 是否要顯示當前資料處理狀態資訊
// "serverSide": false, // 預設為false 是否透過Server端處理分頁…等
// "stateSave": true, // 預設為false 在頁面刷新時，是否要保存當前表格資料與狀態
// "destroy": true, // 預設為false 是否銷毀當前暫存資料
// "info": true, // 預設為true　是否要顯示"目前有 x  筆資料"
// "autoWidth": false, // 預設為true　設置是否要自動調整表格寬度(false代表不要自適應)　　　　
// "scrollCollapse": true, // 預設為false 是否開始滾軸功能控制X、Y軸
// "scrollY": "200px", // 若有設置為Y軸(垂直)最大高度
// "dom": 'lrtip',// 設置搜尋div、頁碼div...等基本位置/外觀..等，詳細可看官網
// 設定資料來源區塊(data or ajax….等),
// 設定資料欄位區塊(columns),
// 設定語言區塊(language),
// 設定欄位元素定義區塊(columnDefs),
// 設定列元素區塊(rowCallback)…等

$(document).ready(function() {
    // 後檯-廠商列表
    $('#backstage_company').dataTable( {
        "ajax": {
            "url": "static/json/backstage_company.json",
            "type": "POST",
            "deferRender": true
        },
        "responsive": {
            breakpoints: [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet',  width: 1280 },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 767 },//原本是768~1024不含768
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
            ]
        },
        "lengthMenu": [10, 50, 100, "全部"],
        "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
            { data: 'company',title: "廠商"},
            { data: 'name',title: "簡稱" },
            { data:  'acc',title: "帳號" },
            { data:'opendate' ,title:"開通日"},
            { data:'expirydate' ,title:"到期日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_company" class="edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_company" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 後檯-帳號列表
    $('#backstage_account').dataTable( {
        "ajax": {
            "url": "static/json/backstage_account.json",
            "type": "POST",
            "deferRender": true
        },
        "responsive": {
            breakpoints: [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet',  width: 1280 },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 767 },//原本是768~1024不含768
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
            ]
        },
        "lengthMenu": [10, 50, 100, "全部"],
        "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
            { data: 'acc',title: "帳號"},
            { data: 'company',title: "廠商名稱" },
            { data:'opendate' ,title:"開通日"},
            { data:'expirydate' ,title:"到期日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_account" class="edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_account" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 系統-人員列表
    $('#system_user').dataTable( {
        "ajax": {
            "url": "static/json/system_user.json",
            "type": "POST",
            "deferRender": true
        },
        "responsive": {
            breakpoints: [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet',  width: 1280 },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 767 },//原本是768~1024不含768
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
            ]
        },
        "lengthMenu": [10, 50, 100, "全部"],
        "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
            { data: 'name',title: "名稱" },
            { data:  'acc',title: "帳號" },
            { data:'permissions' ,title:"權限"},
            { data:'expirydate' ,title:"到期日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_user" class="edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_user" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

        // 系統-權限列表
        $('#system_permissions').dataTable( {
            "ajax": {
                "url": "static/json/system_permissions.json",
                "type": "POST",
                "deferRender": true
            },
            "responsive": {
                breakpoints: [
                { name: 'desktop',  width: Infinity },
                { name: 'tablet',  width: 1280 },
                { name: 'tablet-l', width: 1024 },
                { name: 'tablet-p', width: 767 },//原本是768~1024不含768
                { name: 'mobile-l', width: 480 },
                { name: 'mobile-p', width: 320 }
                ]
            },
            "lengthMenu": [10, 50, 100, "全部"],
            "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
                { data:'name',title: "名稱" },
                { data:'project',title: "專案" },
                { data:'meeting' ,title:"會議"},
                { data:'photo' ,title:"照片"},
                { data:'form' ,title:"表單"},
                { data:'schedule' ,title:"進度"},
                { data:'valuation' ,title:"計價"},
                { data:'check' ,title:"簽到"},
                { data:'system' ,title:"系統"},
                { data: null ,
                    title: "操作",
                    orderable: false,
                    "render": function (data, type, full, meta) {
                        return data = '<button type="button" data-id="edit_permissions" class="edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_permissions" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                        + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    },"className": "all"
                },
            ],
            "language": {url: "static/json/zh_Hant.json"},
        });

    // 用戶
    $('#UserTable').dataTable( {
        "ajax": {
            "url": "static/json/user.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "responsive": {
            breakpoints: [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet',  width: 1280 },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 767 },//原本是768~1024不含768
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
            ]
        },
        "lengthMenu": [10, 50, 100, "全部"],
        "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
            { data: 'Client_Id',title: "廠商ID"},
            { data: 'Permission_Group',title: "權限群組"},
            { data:'User_Name' ,title:"名稱"},
            { data:'User_Acc' ,title:"設備名稱"},
            { data:'User_Password' ,title:"密碼"},
            { data: 'Email',title: "信箱"},
            { data: null ,
                title: "操作",
                render: function (data, type, full, meta) {
                    return data = '<button type="button" data-id="Edit_User" class="btnedit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#Edit_User" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="btndel btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 裝置
    $('#DeviceTable').dataTable( {
        "ajax": {
            "url": "static/json/device.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "responsive": {
            breakpoints: [
            { name: 'desktop',  width: Infinity },
            { name: 'tablet',  width: 1280 },
            { name: 'tablet-l', width: 1024 },
            { name: 'tablet-p', width: 767 },//原本是768~1024不含768
            { name: 'mobile-l', width: 480 },
            { name: 'mobile-p', width: 320 }
            ]
        },
        "lengthMenu": [10, 50, 100, "全部"],
        "columns": [ //列的標題一般是從DOM中讀取（你還可以使用這個屬性為表格創建列標題)
            { data: 'Client_Id',title: "廠商ID"},
            { data: 'Device_Sim_Id',title: "SimID"},
            { data:'Device_Sn' ,title:"設備序號"},
            { data:'Device_Name' ,title:"設備名稱"},
            { data:'Device_Licenseplat' ,title:"設備車號"},
            { data: 'Device_Capture_Mode',
                title: "拍照模式",
                render: function (data, type, row) {
                    if (data == '1'){
                        return '距離(米)';
                    }
                    else 
                    {
                        return '時間(秒)'
                    }
                }
            },
            { data: 'Device_Capture_Interval',title: "拍照間隔"},
            { data: 'Device_Stream_Url',
                title: "串流網址",
                    render: function (data, type, row) {
                       return '<a href="" target="_blank">'+data+'</a>' // 這邊是加連結
                    }
            },
            { data: null ,
                title: "操作",
                render: function (data, type, full, meta) {
                    return data = '<button type="button" data-id="Edit_Device" class="btnedit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#Edit_Device" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="btndel btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
});

// function tableset(url, tableID){
//     $.ajax({
//         url: url,
//         type: 'POST',
//         deferRender: true,
//         data: { },
//         success: function(data) {
//         drawtable(
//             tableID, data.Number, data.Clientname,
//             data.Shortname, data.Acc,  data.Password,   data.City,
//             data.Dis, data.Permission
//             );
//         },
//         error : function() {
//         alert('伺服器異常！')
//         }
//     });
// }

// function drawtable(tableID, Number, Clientname, Shortname, Acc, Password, City, Dis, Permission){
//     var myTable =  $('#'+tableID).DataTable()
//     var options = {
//         responsive: {
//                         breakpoints: [
//                         { name: 'desktop',  width: Infinity },
//                         { name: 'tablet',  width: 1280 },
//                         { name: 'tablet-l', width: 1024 },
//                         { name: 'tablet-p', width: 767 },
//                         { name: 'mobile-l', width: 480 },
//                         { name: 'mobile-p', width: 320 }
//                         ]
//                     },
//         lengthMenu: [10, 50, 100, "全部"],
//         columns: [
//             { data: Number, title: "序號"},
//             { data: Clientname, title: "客戶名稱" },
//             { data: Shortname , title:"簡稱"},
//             { data: Acc , title:"帳號"},
//             { data: Password , title:"密碼"},
//             { data:  City, title: "縣市" },
//             { data:  Dis, title: "行政區"},
//             { data:  Permission, title: "權限設定" ,orderable: false,},
//             { data: null ,
//                 title: "操作",
//                 orderable: false,
//                 "render": function (data, type, full, meta) {
//                     return data = '<button class="btnedit btn-sm me-2" data-id="edit" data-bs-toggle="modal" data-bs-target="#Edit" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
//                     + '<button class="btndel btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
//                 },"className": "operate"
//             },
//         ],
//         "language": {url: "static/json/zh_Hant.json"},
//     };
//     $(document).ready(function () {
//         $(myTable).options();
//     });
// }

// tableset('static/json/client.json',  'clientTable')