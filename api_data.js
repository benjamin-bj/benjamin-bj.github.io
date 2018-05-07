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
    "filename": "./app/Http/Controllers/Common/Api/CommonController.php",
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
    "filename": "./app/Http/Controllers/Common/Api/CommonController.php",
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
    "filename": "./app/Http/Controllers/Common/Api/CommonController.php",
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
    "filename": "./app/Http/Controllers/Common/Api/CommonController.php",
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
    "filename": "./app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
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
    "filename": "./app/Http/Controllers/Auth/LoginController.php",
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
    "filename": "./app/Http/Controllers/Auth/LoginController.php",
    "groupTitle": "Login"
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
    "filename": "./app/Http/Controllers/Order/Api/OrderController.php",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     \"count\": 951,\n     \"status\": 0\n    1:\n     \"count\": 24,\n     \"status\": 1",
          "type": "yaml"
        }
      ]
    },
    "filename": "./app/Http/Controllers/Order/Api/OrderController.php",
    "groupTitle": "Order"
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
    "filename": "./app/Http/Controllers/TransEvent/Api/TransEventController.php",
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
    "filename": "./app/Http/Controllers/TransEvent/Api/TransEventController.php",
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
    "filename": "./app/Http/Controllers/Auth/LoginController.php",
    "group": "_Users_bihuijie_project_beeper_dms_web_app_Http_Controllers_Auth_LoginController_php",
    "groupTitle": "_Users_bihuijie_project_beeper_dms_web_app_Http_Controllers_Auth_LoginController_php"
  }
] });