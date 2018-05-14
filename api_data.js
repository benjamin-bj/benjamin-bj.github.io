define({ "api": [
  {
    "type": "get",
    "url": "api/common/adc/get_list",
    "title": "获取管理区列表",
    "name": "adc_get_list",
    "version": "1.0.0",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     value: 1\n     name: 北京管理区\n    1:\n     value: 2\n     name : 上海管理区\n    ..............",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/admin_user/suggest",
    "title": "获取用户suggest",
    "name": "admin_user_suggest",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "suggest",
            "description": "<p>suggest</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     id: 1000132\n     name: 代越北京岗位经理组长\n     nick: dy北京岗位经理组长\n    1:\n     id: 1000239\n     name : wyf_bid_mgr_bj1\n     nick: 王燕芳-岗经-北京1\n    ..............",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/dim/get_list",
    "title": "获取统计维度下拉框",
    "name": "dim_get_list",
    "version": "1.0.0",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     id: 1\n     desc: 出车时间\n     fields: work_time\n    1:\n     id: 2\n     desc : 签到时间\n     fields: check_in_time\n    2:\n     id: 3\n     desc : 完成时间\n     fields: complete_time",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/customer/suggest",
    "title": "获取客户suggest",
    "name": "resume_get_list",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "suggest",
            "description": "<p>suggest</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     id: 319\n     name: 香满园集团\n    1:\n     id: 320\n     name : 京东\n    ..............",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/warehouse/suggest",
    "title": "获取仓suggest",
    "name": "warehouse_suggest",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "suggest",
            "description": "<p>suggest</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     warehouse_id: 405\n     name: 北京仓更新\n    1:\n     id: 647\n     name : 北京仓青岛市济南市\n    ..............",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/api/delivery/get_delivery_data",
    "title": "统计出车和订单数据",
    "name": "delivery_get_delivery_data",
    "version": "1.0.0",
    "group": "DeliveryData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "stat_dim",
            "description": "<p>统计纬度   work_time 出车时间  check_in_time签到时间  complete_time 完成时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "days",
            "description": "<p>按日查询</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "weeks",
            "description": "<p>按周查询</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "months",
            "description": "<p>按月查询</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n  code:0\n  info:\n      \"trans_event_count\": 15,               出车总数\n      \"trans_event_ratio\": \"30%\",            出车总数环比数\n      \"delivery_duration\": \"35h59min\",       整体交付时长\n      \"delivery_duration_ratio\": \"20%\",      整体交付时长环比\n      \"order_count\": 2,                      订单交付总数\n      \"order_count_ratio\": \"10%\",            订单交付总数环比数\n      \"sign_count\": 213,                     订单妥投率\n      \"sign_ratio\": \"90%\",                   订单妥投率环比数\n      \"delivery_satisfaction_point\": '5',    交付满意度分数\n      \"delivery_satisfaction_ratio\": \"50%\",  交付满意度分数环比\n      \"abnormal_count\": \"185\",               异常数\n      \"abnorma_ratio\" : \"80%\",              异常数环比\n      \"customer_complain_count\":\"45\",        客户投诉数\n      \"customer_complain_count\": \"45%\"       客户投诉数环比\n}",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/DeliveryData/Api/DeliveryController.php",
    "groupTitle": "DeliveryData"
  },
  {
    "type": "post",
    "url": "/api/do_login",
    "title": "登录",
    "name": "login",
    "version": "1.0.0",
    "description": "<p>登录;</p> ",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    csrfToken: xxxxxxxx\n    userInfo:\n         userInfo:\n             .........\n         login_id:\nmsg:''\n#code=0表示初始化成功，code!=0表示其它错误，请直接展示msg",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/api/init_check",
    "title": "登录初始化参数",
    "name": "paramInit",
    "version": "1.0.0",
    "description": "<p>登录初始化参数;</p> ",
    "group": "Login",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "     code: 0\n     info:\n         isLogin: true\n         user_info:\n                  name:\n                  nick:\n                  is_admin:\n                  role:\n\n#code=0表示初始化成功，code!=0表示其它错误，请直接展示msg",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/api/monitor/points",
    "title": "获取关键节点位置",
    "name": "monitor_points",
    "version": "1.0.0",
    "group": "Monitor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    \"driver_id\": 2006416, 司机id\n    \"is_auto_departure\": 0, 是否自动离仓\n    \"trans_task_id\": 95998, 任务id\n    \"task_type\": 200, 任务类型\n    \"task_line_name\": \"啊啊大\", 线路任务\n    \"is_addition\": 0, 是否加跑\n    \"status_display\": \"配送中\", 运力状态\n    \"task_work_time\": \"11:15\", 到仓时间\n    \"task_work_date\": \"2018-04-12\", 到仓日期\n    \"dp_list\":  交付点列表\n            0:\n             \"id\": 51934744587264, ID\n             \"dp_contact_name\": \"包子\", 收货人姓名\n             \"dp_contact_mobile\": \"18500000002\", 收货人手机\n             \"dp_address\": \"卧龙小区卧龙小区卧龙小区卧龙小区卧龙小区卧龙小区219219219\", 收货人地址\n             \"dp_longitude\": \"0\", 经度\n             \"dp_latitude\": \"0\", 维度\n             \"dp_coord_sys\": 0, 坐标系\n             \"order_status\": 500, 订单状态\n             \"customer_name\": \"包子\", 客户名称\n             \"sign_status\": 1, 妥投状态\n             \"reject_reason\": \"\", 拒收原因\n             \"images\": [\"http://yn-tms.oss-cn-beijing\"], 交付点图片\n             \"order_status_display\": \"已完成\", 订单状态名称\n             \"uarrive_time_display\": \"11:09\", 到交付点时间\n             \"end_send_time_display\": \"11:09\", 交付点完成配送时间\n            1:\n             ...................\n    \"itinerary_summary_msg\": \"配送中0,已妥投1,未妥投0\", 派车单名称\n    \"coordinate_detail\": 运力关键位置\n          \"check_in\":  签到\n                \"id\": 1659162,\n                \"trans_event_id\": 3633376, 运力id\n                \"type\": 400, 运力签到状态\n                \"longitude\": 116.46096, 经度\n                \"latitude\": 39.852043,  维度\n                \"coord_sys\": 2, 坐标系\n                \"client_ip\": \"\", 司机端ip\n                \"created_at\": \"2018-04-12 11:07:45\", 创建时间\n                \"updated_at\": \"2018-04-12 11:07:45\", 更新时间\n                \"picture_url\": \"http://yn-tms.oss-cn-beijing.3686114.jpg\", 到仓照片\n                \"operation_source\": 0, 操作端\n                \"created_at_display\": \"04-12 11:07\", 创建时间\n                \"comment\": \"\" 备注\n          \"departure\": 离仓\n                \"id\": 1659163,\n                \"trans_event_id\": 3633376, 运力id\n                \"type\": 800, 运力离仓状态\n                \"longitude\": 116.46096, 经度\n                \"latitude\": 39.852043, 维度\n                \"coord_sys\": 2, 坐标系\n                \"client_ip\": \"172.17.54.179\", 司机端ip\n                \"created_at\": \"2018-04-12 11:07:49\", 创建时间\n                \"updated_at\": \"2018-04-12 11:07:49\", 更新时间\n                \"picture_url\": \"\", 离仓照片\n                \"operation_source\": 0, 操作端\n                \"created_at_display\": \"04-12 11:07\" 创建时间\n\n          \"complete\": null\n\n    \"driver_name\": \"吃兔兔呢\", 司机名称\n    \"driver_telephones\": [\"18500000002\",\"18500000006\"], 司机手机号\n    \"warehouse_name\": \"上海仓库\", 仓名称\n    \"warehouse_longitude\": 121.439013, 仓位置经度\n    \"warehouse_latitude\": 31.191916, 仓位置维度\n    \"warehouse_coord_sys\": 2, 仓坐标系\n    \"car_name\": \"小面\" 车型",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Monitor/Api/TrackController.php",
    "groupTitle": "Monitor"
  },
  {
    "type": "get",
    "url": "/api/monitor/time_line",
    "title": "获取运力交付时间线信息",
    "name": "monitor_time_line",
    "version": "1.0.0",
    "group": "Monitor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n   0：\n     \"node\": \"20\",\n     \"node_display\": \"到仓\",\n     \"planing_time\": \"10:00\",\n     \"planing_address\": \"西门子大厦\",\n     \"real_time\": \"10:10\",\n     \"real_address\": \"西门子大厦\",\n     \"excepted_time\": \"\",\n     \"excepted_address\": \"西门子大厦\"\n   1：\n     \"node\": \"30\",\n     \"node_display\": \"离仓\",\n     \"planing_time\": \"10:30\",\n     \"planing_address\": \"西门子大厦\",\n     \"real_time\": \"10:40\",\n     \"real_address\": \"西门子大厦\",\n     \"excepted_time\": \"\",\n     \"excepted_address\": \"西门子大厦\"\n    2：\n     \"node\": \"100\",\n     \"node_display\": \"交付点1\",\n     \"planing_time\": \"12:00\",\n     \"planing_address\": \"望京西地铁站\",\n     \"real_time\": \"12:10\",\n     \"real_address\": \"望京西地铁站\",\n     \"excepted_time\": \"\",\n     \"excepted_address\": \"望京西地铁站\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Monitor/Api/MonitorController.php",
    "groupTitle": "Monitor"
  },
  {
    "type": "get",
    "url": "/api/monitor/track/get_list",
    "title": "获取轨迹信息",
    "name": "monitor_track_get_list",
    "version": "1.0.0",
    "group": "Monitor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    count : 55\n    list : [\n       0:\n         \"did\": 2006416, 司机id\n         \"collect_time\": 1523502430, 定位采集时间\n         \"insert_time\": 1523502433, 定位信息进库时间\n         \"coord_sys\": 1, 坐标系\n         \"longitude\": \"116.467591\", 经度\n         \"latitude\": \"39.857698\",  维度\n         \"collect_time_display\": \"2018-04-12 11:07:10\", 采集时间\n       1:\n         ................\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 310",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Monitor/Api/TrackController.php",
    "groupTitle": "Monitor"
  },
  {
    "type": "get",
    "url": "/api/order/consignee/get_list",
    "title": "获取收货人列表",
    "name": "order_consignee_get_list",
    "version": "1.0.0",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key_word",
            "description": "<p>关键字（收货人姓名、收货人电话、收货人地址） *</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "perpage",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    count : 3097\n    list : [\n       0:\n         \"dp_contact_name\": \"qqq\", 收货人姓名\n         \"dp_contact_mobile\": \"12312311111\", 收货人手机号\n         \"dp_address\": 北京市积水潭医院 收货人地址\n       1:\n         ................\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 310",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Order/Api/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/order/get_list",
    "title": "获取订单列表",
    "name": "order_get_list",
    "version": "1.0.0",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人电话</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "perpage",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    list : [\n       0:\n        \"id\": 112, 订单号\n        \"dp_contact_name\": \"yf02\", 收货人名称\n        \"dp_contact_mobile\": 11217689090, 收货人电话\n        \"dp_address\":北京市朝阳区慧忠北路慧忠里小区别墅17 收货地址\n        \"order_status_desc\": 配送中,  订单状态\n        \"trans_event_id\": 1213, 出车记录编号\n        \"order_num\": 1, 配送顺序\n        \"plan_delivery_start_time\": \"\", 规划开始配送时间\n        \"plan_delivery_check_in_time\": \"\", 规划交付点签到时间\n        \"plan_delivery_complete_time\": \"\", 规划配送完成时间\n        \"expected_delivery_start_time\": \"\", 预计开始配送时间\n        \"expected_delivery_check_in_time\": \"\", 预计交付点签到时间\n        \"expected_delivery_complete_time\": \"\", 预计配送完成时间\n        \"warning_status\": \"\", 预警状态\n        \"abnormal_status\": \"\" 异常状态\n       1:\n        ...............\n    ]\n   delivery_list : [\n       0:\n        \"dp_contact_name\": \"yf02\", 收货人名称\n        \"dp_contact_mobile\": 11217689090, 收货\n        \"dp_address\":北京市朝阳区慧忠北路慧忠里小区别墅17 收货地址\n       1:\n        ...............\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 3\n    count : 3097",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Order/Api/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/order/group_by",
    "title": "获取订单分组信息",
    "name": "order_group_by",
    "version": "1.0.0",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人电话</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "group_by",
            "description": "<p>需要分组的字段</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     \"count\": 951,\n     \"order_status\": 0  订单状态：未执行 20,51,52,100,200，，发货中 250，配送中 300，等待配送 400，配送完成 500，已取消 600\n    1:\n     \"count\": 24,\n     \"order_status\": 1",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Order/Api/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/trans_event/driver/get_list",
    "title": "获取司机列表",
    "name": "driver_trans_event_get_list",
    "version": "1.0.0",
    "group": "TransEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "status",
            "description": "<p>运力状态</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "task_type",
            "description": "<p>任务类型 *</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人联系电话 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key_word",
            "description": "<p>关键字（司机姓名、司机手机号、车牌号） *</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_start",
            "description": "<p>创建开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_end",
            "description": "<p>创建结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "perpage",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    count : 3097\n    list : [\n       0:\n         \"driver_id\": 2006688, 司机id\n         \"driver_name\": \"柴司机五六\", 司机名称\n         \"car_num\": \"京A00056\", 车牌号\n         \"driver_mobile\": 13100110101 司机手机号\n       1:\n         ................\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 310",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransEvent/Api/TransEventController.php",
    "groupTitle": "TransEvent"
  },
  {
    "type": "get",
    "url": "/api/trans_event/get_list",
    "title": "获取运力列表",
    "name": "trans_event_get_list",
    "version": "1.0.0",
    "group": "TransEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "status",
            "description": "<p>运力状态</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "task_type",
            "description": "<p>任务类型 *</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人联系电话 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址 *</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_start",
            "description": "<p>创建开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_end",
            "description": "<p>创建结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "page",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "perpage",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    count : 3097\n    list : [\n       0:\n         \"id\": 3448244, 运力id\n         \"trans_task_id\": 95171, 任务id\n         \"customer_id\": 171, 客户id\n         \"customer_name\": \"柴倩怡北京客户1\", 客户名称\n         \"warehouse_id\": 2634, 仓id\n         \"warehouse_name\": \"优化任务仓库1-无SOP\", 仓名称\n         \"driver_id\": 2006688, 司机id\n         \"driver_name\": \"柴司机五六\", 司机名称\n         \"sales_id\": 1000116, 销售id\n         \"sales_name\": \"\", 销售名称\n         \"bid_mgr_id\": 1000265, 品质经理\n         \"bid_mgr_name\": \"\", 品质经理名称\n         \"car_id\": 1, 车id\n         \"car_num\": \"京A00056\", 车牌号\n         \"status\": 100, 运力状态代码\n         \"status_display\": 未签到, 运力状态代码\n         \"type\": 100, 运力类型代码\n         \"type_display\": 普通运力, 运力类型\n         \"work_time\": \"2018-06-02 19:00:00\", 规定签到日期和时间\n         \"work_begin_time\": \"19:00:00\", 规定签到时间\n         \"time_cost\": 900, 标书中预计总耗时\n         \"task_type\": 200, 任务类型代码\n         \"task_type_display\": 200, 任务类型\n         \"task_line_name\": \"主司机优化任务\", 线路任务类型\n         \"task_is_back\": 0, 是否需要回单\n         \"adc_id\": 1, 管理区id\n         \"adc_name\": \"北京管理区\", 管理区名称\n         \"complete_time\": null, 完成时间\n         \"project_type\": 0, 客户项目类型代码\n         \"project_type_display\": 0, 客户项目类型\n         \"check_in_time\": null, 签到时间\n         \"departure_time\": null, 离仓时间\n         \"spec_time\": \"\", 规划完成时间\n         \"progress\": 0, 运力进度（百分比）\n         \"expected_time\": \"\", 当前预计完成时间\n         \"warning_state\": \"\", 预警状态\n         \"abnormal_state\": \"\", 异常状态\n         \"created_at\": \"2018-05-04 01:00:07\", 创建时间\n         \"updated_at\": \"2018-05-04 01:00:07\", 更新时间\n       1:\n         ................\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 310",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransEvent/Api/TransEventController.php",
    "groupTitle": "TransEvent"
  },
  {
    "type": "get",
    "url": "/api/trans_event/group_by",
    "title": "获取运力状态分组",
    "name": "trans_event_group_by",
    "version": "1.0.0",
    "group": "TransEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>岗控经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "status",
            "description": "<p>运力状态  100为未签到 400为签到 500为旷工  600为请假 700为不设置配送 800 为配送中  900为配送完成  950取消配送完成</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "task_type",
            "description": "<p>任务类型 *</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型  code 1为封装项目 2为自主项目</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人联系电话 *</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址 *</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_start",
            "description": "<p>创建开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "created_at_end",
            "description": "<p>创建结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_start",
            "description": "<p>出车开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "work_time_end",
            "description": "<p>出车结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_start",
            "description": "<p>签到开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "check_in_time_end",
            "description": "<p>签到结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_start",
            "description": "<p>完成开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "complete_time_end",
            "description": "<p>完成结束时间</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "group_by",
            "description": "<p>需要进行分组的字段</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0：\n     \"count\": 11677,\n     \"status\": 100\n    1：\n     \"count\": 153,\n     \"status\": 700\n    2：\n     \"count\": 1,\n     \"status\": 800\n    3：\n     \"count\": 2,\n     \"status\": 900",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransEvent/Api/TransEventController.php",
    "groupTitle": "TransEvent"
  },
  {
    "type": "get",
    "url": "/api/do_logout",
    "title": "注销",
    "name": "logout",
    "version": "1.0.0",
    "description": "<p>退出登录;</p> ",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg:''\n#code=0表示初始化成功，code=2表示其它错误，请直接展示msg",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Auth/LoginController.php",
    "group": "_Users_bihuijie_project_beeper_dms_web_app_Http_Controllers_Auth_LoginController_php",
    "groupTitle": "_Users_bihuijie_project_beeper_dms_web_app_Http_Controllers_Auth_LoginController_php"
  }
] });