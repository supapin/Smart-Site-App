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
            { data: 'company',title: "廠商名稱"},
            { data: 'name',title: "名稱"},
            { data: 'acc',title: "帳號"},
            { data: 'permissions',title: "權限群組"},
            {data: 'superuser',title: "超級使用者"},
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

    // 登入紀錄
    $('#log').dataTable( {
        "ajax": {
            "url": "static/json/log.json",
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
            { data: 'time',title: "時間"},
            { data: 'ip',title: "IP"},
            { data: 'state',title: "狀態"}
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
            { data:  'email',title: "電子信箱" },
            { data:'permissions' ,title:"權限"},
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
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    
                    return data = '<a class="view btn-sm me-2" href="editpermissions.html" role="button" data-id="view_details" title="檢視編輯"><i class="fa-solid fa-eye me-2"></i>檢視編輯</a>'
                    + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 簽到-人員列表
    $('#punch_history').dataTable( {
        "ajax": {
            "url": "static/json/punch_history.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'username',title: "名稱" },
            { data:'useracc',title: "帳號" },
            { data:'department' ,title:"負責崗位"},
            { data: null
                ,title:"簽到記錄",
                render: function (data, type, row) {
                    return '<button type="button" data-id="userhistory" class="btn-sm me-2 userhistory" data-bs-toggle="modal" data-bs-target="#userhistory" title="簽到記錄"><i class="fa-solid fa-user-clock me-2"></i>簽到記錄</button>'
                }
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
        "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall").prop("checked", true);
            } else {
                $("#checkall").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
            if ($(this).is(":checked") == false) {
                $('#checkall').prop("checked", false);
            }
        }

    // 人員記錄
    $('#punchrecordtable').dataTable( {
        "ajax": {
            "url": "static/json/punchrecordtable.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'date',title: "日期" },
            { data:'punchin',title: "上班" },
            { data:'punchout' ,title:"下班"},
            { data:'leave', title: "假單"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="amend btn-sm me-2" data-id="amend" title="補卡"><i class="fa-solid fa-stopwatch"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
        "drawCallback": function( settings ) {
        //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
            if ($(this).is(":checked") == false) {
                $('#checkall2').prop("checked", false);
            }
        }

    // 簽到紀錄
    $('#userpunch_history').dataTable( {
        "ajax": {
            "url": "static/json/userpunch_history.json",
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
            { data:'date',title: "日期" },
            { data:'punchin',title: "上班" },
            { data:'punchout',title:"下班"},
            { data: 'leave', title:"假單"}
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
    
    // 專案檢視-受文列表
    $('#officialdocument').dataTable( {
        "ajax": {
            "url": "static/json/officialdocument.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'number',title: "字號" },
            { data:'recipient',title: "受文者" },
            { data:'subject',title:"主旨"},
            { data: 'date', title:"日期"},
            { data: null ,
                title: "檢視編輯",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a class="view btn-sm" href="editofficial.html" role="button" data-id="view_details" title="檢視編輯"><i class="fa-solid fa-eye me-2"></i>檢視編輯</a>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 受文列表
    $('#allofficialdocument').dataTable( {
        "ajax": {
            "url": "static/json/allofficialdocument.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'number',title: "字號" },
            { data:'recipient',title: "受文者" },
            { data:'subject',title:"主旨"},
            { data: 'date', title:"日期"},
            { data: 'project', title:"專案"},
            { data: null ,
                title: "檢視編輯",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a class="view btn-sm" href="editofficial.html" role="button" data-id="view_details" title="檢視編輯"><i class="fa-solid fa-eye me-2"></i>檢視編輯</a>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 收文列表
    $('#receiveofficial').dataTable( {
        "ajax": {
            "url": "static/json/receiveofficial.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'number',title: "字號" },
            { data:'poster',title: "發文者" },
            { data:'subject',title:"主旨"},
            { data: 'date', title:"日期"},
            { data: 'project', title:"專案"},
            { data: null ,
                title: "檢視",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a class="view btn-sm" href="viewofficial.html" role="button" data-id="view_details" title="檢視"><i class="fa-solid fa-eye me-2"></i>檢視</a>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 專案檢視-收文列表
    $('#projectreceiveofficial').dataTable( {
        "ajax": {
            "url": "static/json/projectreceiveofficial.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'number',title: "字號" },
            { data:'poster',title: "發文者" },
            { data:'subject',title:"主旨"},
            { data: 'date', title:"日期"},
            { data: null ,
                title: "檢視",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a class="view btn-sm" href="viewofficial.html" role="button" data-id="view_details" title="檢視"><i class="fa-solid fa-eye me-2"></i>檢視</a>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }


    // 表單列表
    $('#formtable').dataTable( {
        "ajax": {
            "url": "static/json/formtable.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'formname',title: "表單名稱" },
            { data:'formtype',title: "類型",
                "render": function (data, type, full, meta) {
                    if (data == '日誌表'){
                        return data = '<span class="p-1 bg-light-info text-info border-0">日誌表</span>';
                            
                    }
                    if (data == '檢查表'){
                        return data = '<span class="p-1 bg-light-success text-success border-0">檢查表</span>';
                            
                    }
                    else{
                        return data = '<span class="p-1 bg-light-warning text-warning border-0">其他</span>';
                    }   
                },
            },
            { data:'date',title:"日期"},
            { data: null ,
                title: "查看詳情",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="view_details" class="view btn-sm" title="查看詳情"><i class="fa-solid fa-eye me-2"></i>查看詳情</button>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a type="button" class="edit editmeeting btn-sm me-2" href="editform.html" role="button" data-id="edit_meeting" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 照片管理
    $('#phototable').dataTable( {
        "ajax": {
            "url": "static/json/phototable.json",
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
            { data:'project',title: "專案" },
            { data:'photoname',
                title: "照片",
                render: function (data, type, row) {
                    return '<a href="static/image/DJI_0085.jpg" class="photourl" target="_blank"><img src="static/image/DJI_0085.jpg" alt="" class="photo"></img> '+'</a>' // 這邊是加連結
                    
                }
            },
            { data:'update',title: "上傳日期" },
            { data: null ,
                title: "歸檔",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="view_details" class="view btn-sm" title="歸檔"><i class="fa-solid fa-file-import me-2"></i>歸檔</button>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
    
    // 會議列表
    $('#meeting').dataTable( {
        "ajax": {
            "url": "static/json/meeting.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'subject',title: "主旨" },
            { data:'state',
                title: "狀態",
                "render": function (data, type, full, meta) {
                    if (data == '結束'){
                        return data = '<span class="p-1 bg-light border-0">結束</span>';
                            
                    }
                    if (data == '待確認'){
                        return data = '<span class="p-1 bg-light-info text-info border-0">待確認</span>';
                            
                    }
                    if (data == '進行中'){
                        return data = '<span class="p-1 bg-light-success text-success border-0">進行中</span>';
                            
                    }
                    else{
                        return data = '<span class="p-1 bg-light-warning text-warning border-0">未決事項</span>';
                    }   
                },
            },
            { data:'date',title:"日期"},
            { data: null ,
                title: "查看詳情",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="view_details" class="view btn-sm" title="查看詳情"><i class="fa-solid fa-eye me-2"></i>查看詳情</button>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    
                    return data = '<a type="button" class="edit editmeeting btn-sm me-2" href="project-editmeeting.html" role="button" data-id="edit_meeting" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 新增公文(行內編輯)
    function createCombox(data) {
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var setting = {
            columns: [
                { "data": "item"},
                { "data": "content"}
            ],
            columnDefs: [
                { "width": "10%", "targets": 0 },
                {
                "targets": [1],
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
            ],
            data: [{
                "item": "一、",
                "content": "配合捷運綠線工程，台水公司12日至14日辦理桃園區介壽路管線臨遷等3工程",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#myGrid").DataTable(setting);

    });

    // 新增表單(工作日誌)
    function createCombox(data) {
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var setting = {
            columns: [
                { "data": "project"},
                { "data": "unit"},
                { "data": "contract_quantity"},
                { "data": "finish_count"},
                { "data": "total_count"},
                { "data": "remark"}
            ],
            columnDefs: [
                { "width": "10%", "targets": 0 },
                {
                "targets": [0,1,2,3,4,5],
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
            ],
            data: [{
                "project": "xxxxxxx",
                "unit": "",
                "contract_quantity": "",
                "finish_count":"",
                "total_count":"",
                "remark":"",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#newform").DataTable(setting);

    });

    // 新增表單(工作日誌-特定施工項目)
    function createCombox(data) {
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var setting = {
            columns: [
                { "data": "project"},
                { "data": "unit"},
                { "data": "contract_quantity"},
                { "data": "finish_count"},
                { "data": "total_count"},
                { "data": "remark"}
            ],
            columnDefs: [
                { "width": "10%", "targets": 0 },
                {
                "targets": [0,1,2,3,4,5],
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
            ],
            data: [{
                "project": "xxxxxxx",
                "unit": "",
                "contract_quantity": "",
                "finish_count":"",
                "total_count":"",
                "remark":"",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#specificform").DataTable(setting);

    });

    // 新增表單(工作日誌-材料管理)
    function createCombox(data) {
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var setting = {
            columns: [
                { "data": "material"},
                { "data": "unit"},
                { "data": "contract_quantity"},
                { "data": "use_count"},
                { "data": "total_count"},
                { "data": "remark"}
            ],
            columnDefs: [
                { "width": "10%", "targets": 0 },
                {
                "targets": [0,1,2,3,4,5],
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
            ],
            data: [{
                "material": "xxxxxxx",
                "unit": "",
                "contract_quantity": "",
                "use_count":"",
                "total_count":"",
                "remark":"",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#material").DataTable(setting);

    });

    // 新增表單(工作日誌-人員機具管理)
    function createCombox(data) {
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        return _html;
        
    }
    $(function () {
        var editTableObj;
        var setting = {
            columns: [
                { "data": "category"},
                { "data": "daynumber"},
                { "data": "totalnumber"},
                { "data": "machinename"},
                { "data": "use_count"},
                { "data": "total_count"}
            ],
            columnDefs: [
                { "width": "10%", "targets": 0 },
                {
                "targets": [0,1,2,3,4,5],
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
            ],
            data: [{
                "category": "xxxxxxx",
                "daynumber": "",
                "totalnumber": "",
                "machinename":"",
                "use_count":"",
                "total_count":"",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#Personnel").DataTable(setting);

    });

    // 新增表單(檢查表)
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
                { "data":"ImageColumn"}
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
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#checkporject").DataTable(setting);
    });

    // 專案列表(已完成)
    $('#finishproject').dataTable( {
        "ajax": {
            "url": "static/json/finishproject.json",
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
            { data: 'number',title: "序號"},
            { data: 'name',title: "專案名稱" },
            { data:'type' ,title:"專案類型"},
            { data:'constructiondate' ,title:"工期"},
            { data:'budget' ,title:"預算"},
            { data:'budgetused',title:"已使用預算"},
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

    // 專案會議記錄
    $('#project-meeting').dataTable( {
        "ajax": {
            "url": "static/json/project-meeting.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'date',title: "日期" },
            { data:'subject',title: "主旨" },
            { data:'sponsor',title: "發起人" },
            { data:'participant',title: "參與者" },
            { data:'content',title: "內容" },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a type="button" class="projectedit edit btn-sm me-2" href="project-editmeeting.html" role="button" data-id="project-editmeeting" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="projecteye eye btn-sm me-2" data-id="del" title="檢視"><i class="fa-solid fa-eye"></i></button>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 印章列表
    $('#signature').dataTable( {
        "ajax": {
            "url": "static/json/signature.json",
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
            { data: 'name',title: "印章名稱"},
            { data: null,
                title: "印章圖樣",
                render: function (data, type, row) {
                    return '<a href="static/image/DJI_0085.jpg" class="photourl" target="_blank"><img src="static/image/DJI_0085.jpg" alt="" class="photo"></img> '+'</a>' // 這邊是加連結
                    
                }
            },
            { data: 'creatdate',title: "創建日期" },
            { data:'update' ,title:"修改日期"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_signature" class="edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_signature" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-公文列表
    $('#project-official').dataTable( {
        "ajax": {
            "url": "static/json/project-official.json",
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
            { data: null,  //表頭第一列, checkbox 
                title: "<input type='checkbox' id='checkall2' value=''/>",
                width: "35px",
                orderable: false  //進用排序否則其他分頁點擊拳選會跳到分頁1.
            },
            { data:'number',title: "字號" },
            { data:'recipient',title: "受文者" },
            { data:'subject',title:"主旨"},
            { data: 'date', title:"日期"},
            { data: 'project', title:"專案"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a type="button" class="projectedit edit btn-sm me-2" href="project-editofficial.html" role="button" data-id="edit_projectofficial" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="projecteye eye btn-sm me-2" data-id="view" title="檢視" data-bs-toggle="modal" data-bs-target="#eye_projectofficial"><i class="fa-solid fa-eye"></i></button>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        columnDefs: [{
            targets: 0,
            render: function (data, type, row, meta) {
            //每一行第一列都是複選框, 要有name屬性 方便查找
            //並且要加一個onclick 事件, 保證單選的時候也檢查表頭複選框狀態.
                return '<input type="checkbox" name="checklist" οnclick="checkCheck()" value="' + row.id + '" />'
            }
        }],
        "sInfoEmpty": "暫無數據",
            "drawCallback": function( settings ) {
            //此為加載完表格的回調函數, 可判斷一些加載完的表格之後的判斷狀態.
        },
        "fnDrawCallback": function () {
            //判斷換頁時表頭複選框的狀態

            //去表格中tr的總數 表頭和所有行的數量
            var trs = document.getElementById("example1").getElementsByTagName("tr");
            var ifChe = 0;
            $("input[name='checklist']").each(function () { 
            //取所有name 為checklist的input並計算選取的
                if (this.checked) {
                    ifChe++;
                }
            });
            //比較計算 總數去表頭 和計算的是否一至 如一直表頭複選框保值選中, 否則不選中
            if (ifChe == (trs.length - 1)) {
                $("#checkall2").prop("checked", true);
            } else {
                $("#checkall2").prop("checked", false);
            }
        },
        "initComplete": function( settings, json ) {
            //表格完成時回調函數
            	//全選邏輯放在此處
                $("#checkall2").click(function () {
                    if (this.checked) {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = true;
                        });
                    } else {
                        $(this).attr('checked', 'checked');
                        $("input[name='checklist']").each(function () {
                            this.checked = false;
                        });
                    }
                });
        },
        "language": {url: "static/json/zh_Hant.json"},
    });
    /**
     * 檢查表頭是否check
     * 點擊每一行的時候
     */
    function checkCheck() {
        if ($(this).is(":checked") == false) {
            $('#checkall').prop("checked", false);
        }
    }

    // 專案-人員列表
    $('#project-personnel').dataTable( {
        "ajax": {
            "url": "static/json/project-personnel.json",
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
            { data: 'username',title: "名稱"},
            { data: 'useracc',title: "帳號" },
            { data:'department' ,title:"負責崗位"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_company" class="projectedit edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_personnel" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<button class="projectdel btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-日誌列表
    $('#project-loglist').dataTable( {
        "ajax": {
            "url": "static/json/project-loglist.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "searching": false,
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
            { data: 'date',title: "創建日期"},
            { data: 'formname',title: "表單名稱" },
            { data:'update' ,title:"最後修改日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_project_form" class="projectedit edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_project_logform" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<a type="button" class="projectformhistory history btn-sm me-2" href="project-logrecord.html" role="button" data-id="history" title="歷史紀錄"><i class="fa-solid fa-clock-rotate-left"></i></a>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-日誌表列表
    $('#project-logrecord').dataTable( {
        "ajax": {
            "url": "static/json/project-logrecord.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "searching": false,
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
            { data: 'adddate',title: "填表日期"},
            { data: 'user',title: "填表人"},
            { data:'update' ,title:"修改日期"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a type="button" class="projectedit edit btn-sm me-2" href="editlogrecord.html" role="button" data-id="edit_logrecord" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="projectdel btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-檢查表
    $('#project-checklist').dataTable( {
        "ajax": {
            "url": "static/json/project-checklist.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "searching": false,
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
            { data: 'date',title: "創建日期"},
            { data: 'formname',title: "表單名稱" },
            { data:'update' ,title:"最後修改日"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="edit_project_form" class="projectedit edit btn-sm me-2" data-bs-toggle="modal" data-bs-target="#edit_project_form" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    + '<a type="button" class="projectformhistory history btn-sm me-2" href="project-checkrecord.html" role="button" data-id="history" title="歷史紀錄"><i class="fa-solid fa-clock-rotate-left"></i></a>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-檢查表列表
    $('#project-checkrecord').dataTable( {
        "ajax": {
            "url": "static/json/project-checkrecord.json",
            "type": "POST",
            "deferRender": true
        },
        "ordering": false,
        "searching": false,
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
            { data: 'adddate',title: "填表日期"},
            { data: 'location',title: "檢查位置"},
            { data: 'user',title: "填表人"},
            { data: 'detection',
                title: "檢查時機",
                "render": function (data, type, full, meta) {
                    if (data == "1"){
                        return data = '<div class="me-2"><i class="fa-solid fa-circle-check me-1"></i>施工前</div>'
                        + '<div class="me-2"><i class="fa-solid fa-circle-check me-1"></i>施工中</div>'
                        + '<div class="me-2"><i class="fa-solid fa-circle-check me-1"></i>施工完成</div>'
                    }
                    else {
                        return data = '<div class="me-2"><i class="fa-solid fa-circle-check me-1"></i>施工中</div>'
                    }  
                },
            },
            { data:'update' ,title:"修改日期"},
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<a type="button" class="projectedit edit btn-sm me-2" href="editcheckrecord.html" role="button" data-id="edit_logrecord" title="編輯"><i class="fas fa-pencil-alt"></i></a>'
                    + '<button class="projectdel btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                    + '<button class="projectdownload download btn-sm" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-附件列表
    $('#project-meetingfile').dataTable( {
        "ajax": {
            "url": "static/json/project-meetingfile.json",
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
            { data: 'name',title: "附件名稱" },
            { data: 'downloadcount',title: "下載次數" },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="projectdownload download btn-sm me-2" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                    + '<button class="projectdel btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 專案-施工照片
    $('#project-photos').dataTable( {
        "ajax": {
            "url": "static/json/project-photos.json",
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
            { data:'project',title: "專案" },
            { data:'photoname',
                title: "照片",
                render: function (data, type, row) {
                    return '<a href="static/image/DJI_0085.jpg" class="photourl" target="_blank"><img src="static/image/DJI_0085.jpg" alt="" class="photo"></img> '+'</a>' // 這邊是加連結
                    
                }
            },
            { data:'update',title: "上傳日期" },
            { data: null ,
                title: "歸檔",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button type="button" data-id="view_details" class="view btn-sm" title="歸檔"><i class="fa-solid fa-file-import me-2"></i>歸檔</button>'
                },"className": "all"
            },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="del btn-sm" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 進度管理-項目列表
    function createCombox(data) {
        var _html = '<select style="width:100%;">';
        data.forEach(function (ele, index) {
            _html += '<option>' + ele + '</option>';
        });
        _html += '</select>';
        return _html;
        
    }
    function image(data, type, row){
        url = "http"
        if (data.includes(url)){return '<a href="https://www.google.com/" data-id="editimage" data-bs-toggle="modal" data-bs-target="#editimage" title="照片">'}
        else if(data.includes('')){return '<button class="btn p-0" data-id="editimage" data-bs-toggle="modal" data-bs-target="#editimage" title="照片"><img src="static/image/8.jpg" alt="" class="damageimage"></img></button>'}
        
    }
    $(function () {
        var editTableObj;
        var comboData = {
            "2": ["代辦", "施工中","完工","暫停"],
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
                { "data": "task"},
                { "data": "expdate" },
                { "data": "state" },
                { data: null ,
                    title: "操作",
                    render: function (data, type, full, meta) {
                        return data = '<button class="helmet-safety btn-sm me-2" data-bs-toggle="modal" data-bs-target="#participant" title="參與者"><i class="fa-solid fa-helmet-safety"></i></button>'
                        + '<button class="del btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash m-0"></i></button>'
                        + '<button class="edit btn-sm" data-id="edittaskall" data-bs-toggle="modal" data-bs-target="#edittaskall" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                    },"className": "all"
                },
            ],
            columnDefs: [
                {
                    "className": ["task","expdate"],
                    "targets": [0,1],
                    createdCell: function (cell, cellData, rowData, rowIndex, colIndex) {
                        $(cell).click(function () {
                            $(this).html('<input type="text" size="16" style="width: 100%"/>');
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
                {   "className": "state",
                    "targets": [2],
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
                {
                    "className": "null",
                    "targets": [3],
                    
                },
            ],
            data: [{
                "task": "既有路⾯設施:標線、標記",
                "expdate": "111/05-10",
                "state": "待辦",
                "participant": "",
                null: null,
            }],
            ordering: false,
            paging: false,
            info: false,
            searching: false,
        };
        editTableObj = $("#project-listtable").DataTable(setting);

        // var ts = document.getElementsByClassName('Destroy_group');
        // var td = ts[1]
        // console.log(td.innerHTML)
    });

    // 進度管理-已完成
    $('#success_task').dataTable( {
        "ajax": {
            "url": "static/json/success_task.json",
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
            { data: 'creationdate',title: "建立日期" },
            { data: 'task',title: "項目名稱"},
            { data: 'completiondate',title: "完成日期" },
            // { data: null ,
            //     title: "操作",
            //     orderable: false,
            //     "render": function (data, type, full, meta) {
            //         return data = '<button class="projecteye eye btn-sm me-2" data-id="view_completion_task" title="檢視" data-bs-toggle="modal" data-bs-target="#view_completion_task"><i class="fa-solid fa-eye"></i></button>'
            //     },"className": "all"
            // },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 進度管理-未完成
    $('#undone_task').dataTable( {
        "ajax": {
            "url": "static/json/undone_task.json",
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
            { data: 'creationdate',title: "建立日期" },
            { data: 'task',title: "項目名稱"},
            { data: 'expdate',title: "截止日期"},
            { data: 'describe',title: "說明" },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="edit btn-sm" data-id="editdescribe" data-bs-toggle="modal" data-bs-target="#editdescribe" title="編輯"><i class="fas fa-pencil-alt"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 進度管理-最近新增
    $('#recent_tasks').dataTable( {
        "ajax": {
            "url": "static/json/recent_tasks.json",
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
            { data: 'creationdate',title: "建立日期" },
            { data: 'task',title: "項目名稱"},
            { data: 'participant',title: "參與者"},
            { data: 'expdate',title: "截止日期"}
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 進度管理-即將截止
    $('#expiring_tasks').dataTable( {
        "ajax": {
            "url": "static/json/expiring_tasks.json",
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
            { data: 'creationdate',title: "建立日期" },
            { data: 'task',title: "項目名稱"},
            { data: 'participant',title: "參與者"},
            { data: "state",title: "狀態"},
            { data: 'expdate',title: "截止日期"}
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });

    // 我的下載
    $('#downloads').dataTable( {
        "ajax": {
            "url": "static/json/downloads.json",
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
            { data: 'name',title: "檔案名稱" },
            { data: 'downloadtime',title: "下載時間" },
            { data: null ,
                title: "操作",
                orderable: false,
                "render": function (data, type, full, meta) {
                    return data = '<button class="projectdownload download btn-sm me-2" data-id="download" title="下載"><i class="fa-solid fa-file-arrow-down"></i></button>'
                    + '<button class="projectdel btn-sm me-2" data-id="del" title="刪除"><i class="fas fa-trash"></i></button>'
                },"className": "all"
            },
        ],
        "language": {url: "static/json/zh_Hant.json"},
    });
});