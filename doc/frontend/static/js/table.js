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
    // 專案列表
    $('#projectTable').dataTable( {
        "ajax": {
            "url": "static/json/project.json",
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
            { data: 'Number',title: "序號"},
            { data: 'Year',title: "年度"},
            { data: 'Company',title: "廠商" },
            { data:'Project_Name' ,title:"專案名稱"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a href="checkitem.html" data-id="checkitem" class="btn btn-info btn-sm me-2 text-white" title="檢查項目">檢查項目</a>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
    
    // 項目列表
    $('#checkitemTable').dataTable( {
        "ajax": {
            "url": "static/json/checkitem.json",
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
            { data: 'Number',title: "序號"},
            { data: 'Checkitemname',title: "檢查表名稱" },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a href="addrecord.html" data-id="addrecord" class="btn btn-info btn-sm me-2 text-white" title="檢查表"><i class="far fa-list-alt"></i>檢查表</a>'
                    + '<a href="record.html" data-id="checkitem" class="btn btn-brown btn-sm me-2 text-white" title="查看紀錄"><i class="fas fa-history"></i>紀錄</a>'
                    + '<a href="checkitem.html" data-id="checkitem" class="btn btn-success btn-sm me-2 text-white" data-bs-toggle="modal" data-bs-target="#Edit_checkitem" title="編輯">編輯</a>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 檢查表列表
    $('#checkformTable').dataTable( {
        "ajax": {
            "url": "static/json/checkform.json",
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
            { data: 'Number',title: "序號"},
            { data: 'Year',title: "年度"},
            { data:'Project_Name' ,title:"專案名稱"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a href="editcheckform.html" data-id="checkform" class="btn btn-success btn-sm me-2 text-white" title="編輯">編輯</a>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 檢查表(行內編輯)
    function createCombox(data) {
        var _html = '<select style="width:100%;">';
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        _html += '</select>';
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var comboData = {
            "3": ["需要照片", "不需要照片"],
        };
        var setting = {
            responsive: {
            breakpoints: [
                { name: 'desktop',  width: Infinity },
                { name: 'tablet',  width: 1280 },
                { name: 'tablet-l', width: 1024 },
                { name: 'tablet-p', width: 767 },//原本是768~1024不含768
                { name: 'mobile-l', width: 480 },
                { name: 'mobile-p', width: 320 }
            ]
            },
            columns: [
                { "data": "Testitems"},
                { "data": "Roadstandard"},
                { "data": "Answer"},
                { "data":"ImageColumn"},
                { data: null ,
                    title: "操作",
                    render: function (data, type, full, meta) {
                        return data = '<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">編輯全部</button>'
                    },"className": "all"
                },
            ],
            columnDefs: [{
                "targets": [0, 1, 2],
                    createdCell: function (cell, cellData, rowData, rowIndex, colIndex) {
                        $(cell).click(function () {
                            $(this).html('<input type="text" style="width: 100%;height: 35px;font-size:1rem"/>');
                            var aInput = $(this).find(":input");
                            aInput.focus().val(cellData);
                        });
                        $(cell).on("blur", ":input", function () {
                            var text = $(this).val();
                            $(cell).html(text);
                            editTableObj.cell(cell).data(text)
                        })
                    }
                },
                {   "className": "ImageColumn",
                    "targets": [3],
                    createdCell: function (cell, cellData, rowData, rowIndex, colIndex) {
                        var aInput;
                        $(cell).click(function () {
                            $(this).html(createCombox(comboData[colIndex]));
                            var aInput = $(this).find(":input");
                            aInput.focus().val("");
                        });
                        $(cell).on("click", ":input", function (e) {
                            e.stopPropagation();
                        });
                        $(cell).on("change", ":input", function () {
                            $(this).blur();
                        });
                        $(cell).on("blur", ":input", function () {
                            var text = $(this).find("option:selected").text();
                            editTableObj.cell(cell).data(text)
                        });
                    }
                },
            ],
            data: [{
                "Testitems": "既有路面設施:標線、標記",
                "Roadstandard": "現況照片、紀錄",
                "Answer": "已錄影存檔,依照片記錄",
                "ImageColumn": "需要照片",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#myGrid").DataTable(setting);

        // var ts = document.getElementsByClassName('Destroy_group');
        // var td = ts[1]
        // console.log(td.innerHTML)
    });
    
    // 權限管理列表
    $('#permissionsTable').dataTable( {
        "ajax": {
            "url": "static/json/permissions.json",
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
            { data: 'Permissions_Name',title: "權限名稱"},
            { data: 'Project',title: "專案管理"},
            { data:'Tasklist' ,title:"代辦事項"},
            { data:'Device' ,title:"設備日曆"},
            { data:'Clock' ,title:"打卡系統"},
            { data:'Sys' ,title:"系統設定"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="Edit_Permissions" class="btnedit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#Edit_Permissions" title="編輯">編輯</button>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 帳號設定列表
    $('#accountTable').dataTable( {
        "ajax": {
            "url": "static/json/account.json",
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
            { data: 'User_Name',title: "權限名稱"},
            { data: 'User_Acc',title: "帳號"},
            { data:'Permission_Group' ,title:"權限群組"},
            { data:'Expiry_Date' ,title:"到期日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="Edit_Account" class="btnedit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#Edit_Account" title="編輯">編輯</button>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
    
    // 檢查表紀錄列
    $('#recordTable').dataTable( {
        "ajax": {
            "url": "static/json/record.json",
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
            { data: 'Number',title: "序號"},
            { data: 'Date',title: "更新日期"},
            { data:'Examine' ,title:"檢查位置"},
            { data:'Dtime' ,title:"檢查時機"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a href="#.html" data-id="edit_record" class="btn btn-success btn-sm me-2 text-white" title="編輯">編輯</a>'
                    + '<a href="#" data-id="PDF" class="btn btn-danger btn-sm me-2 text-white" title="PDF"><i class="fas fa-file-pdf me-2"></i>匯出</a>'
                    + '<a href="#" data-id="word" class="btn btn-primary btn-sm me-2 text-white" title="word"><i class="fas fa-file-word me-2"></i>匯出</a>'
                    + '<button class="btndel btn-sm text-white" data-id="del" title="刪除">刪除</button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
});