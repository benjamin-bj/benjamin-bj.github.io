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
    "url": "/api/common/export/download_file",
    "title": "下载导出文件",
    "name": "export_download_file",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/api/common/export/get_status",
    "title": "获取导出状态",
    "name": "export_get_status",
    "version": "1.0.0",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n   status: // 定义: -1 该用户没有导出任务；0 该用户导出任务正在进行中； 1 该用户的导出任务已经完成，并返回filename\n   filename: // 生成的导出文件名",
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
    "url": "/api/common/task/get_config",
    "title": "获取任务类型",
    "name": "task_get_config",
    "version": "1.0.0",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     id: 200\n     desc: 主司机\n    1:\n     id: 100\n     desc : 临时司机\n    2:\n     id: 300\n     desc : 签约司机",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/Api/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/api/common/task/get_project_type",
    "title": "获取项目类型",
    "name": "task_get_project_type",
    "version": "1.0.0",
    "group": "Common",
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     id: 1\n     desc: 封装\n    1:\n     id: 2\n     desc : 自助\n    2:\n     id: 3\n     desc : 加盟商",
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
    "url": "/api/delivery/type/group_by",
    "title": "获取项目类型分组数据",
    "name": "_type_group_by",
    "version": "1.0.0",
    "group": "DeliveryData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "dimension",
            "description": "<p>统计纬度，1-出车时间，2-签到时间，3-完成时间。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "granularity",
            "description": "<p>统计颗粒度，1-日，2-周，3-月。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>品质（岗控）经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n     code: 0\n     info:\n       0：\n        id: 0\n        desc: 全部\n        count：100\n       1：\n        id: 1\n        desc: 封装项目\n        count：50\n       2：\n        id: 2\n        desc: 自助项目\n        count：50",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/DeliveryData/Api/DeliveryController.php",
    "groupTitle": "DeliveryData"
  },
  {
    "type": "get",
    "url": "/api/delivery/dashboard",
    "title": "交付相关数据展示",
    "name": "dashboard_data",
    "version": "1.0.0",
    "group": "DeliveryData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "dimension",
            "description": "<p>统计纬度，1-出车时间，2-签到时间，3-完成时间。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "granularity",
            "description": "<p>统计颗粒度，1-日，2-周，3-月。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>品质（岗控）经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型，1-封装，2-自助。不传默认全部</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "index_type",
            "description": "<p>指标类型，1-出车总数，2-交付订单总数，3-整体交付时长，4-订单妥投率，5-交付满意率，6-异常数，7-客户投诉</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "date",
            "description": "<p>时间日期, 2018-05-28</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n     code: 0\n     info:\n             current_page: 北京管理区, //当前页面\n             crumbs: //面包屑，页面位置\n                 0:\n                     全国,\n                 1:\n                     北京管理区,\n                 ...\n             overview: //概览\n                 trans_event: //出车总数相关\n                     summary: 500,   //总数\n                     type: -1,       //变化类型，1-上浮，0-持平，-1-下降\n                     ratio: 15.6%,   //变化比率\n                 order: //交付订单总数相关\n                     summary: 800,\n                     type: 1,\n                     ratio: 6.6%\n                 delivery_duration: //整体交付时长相关\n                     summary: 8009, //单位分\n                     type: 1,\n                     ratio: 5.6%\n                 sign_ratio: //订单妥投率\n                     summary: 99%,\n                     type: -1,\n                     ratio: 6.6%\n                 delivery_satisfaction: //交付满意率\n                     summary: 8.5,\n                     type: -1,\n                     ratio: 14.6%\n                 exception: //异常数\n                     summary: 6,\n                     type: -1,\n                     ratio: 8.6%\n                 customer_complain: //客户投诉\n                     summary: 99%,\n                     type: -1,\n                     ratio: 6.6%\n             line_chart: //线性表\n                 title: 0313-0319全国交付时长数据统计\n                 list:\n                     0:\n                         date: 2018-03-20,\n                         summary: 8009, //单位分\n                     ...\n             histogram: //柱状图（直方图）\n                 title: 0319环比最差5个管理区交付时长统计\n                 type: 1, //1-管理区，2-品质经理，3-客户，4-仓，5-线路\n                 list:\n                     0:\n                         entity_id: 123,\n                         entity_name: 青岛,\n                         summary: 8009, //单位分\n                         type: //变化类型，1-上浮，0-持平，-1-下降\n                         ratio: 6.6%\n                     ... //至多5个",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/DeliveryData/Api/DeliveryController.php",
    "groupTitle": "DeliveryData"
  },
  {
    "type": "get",
    "url": "/api/delivery/export",
    "title": "导出指标展示列表数据",
    "name": "delivery_export",
    "version": "1.0.0",
    "group": "DeliveryData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "dimension",
            "description": "<p>统计纬度，1-出车时间，2-签到时间，3-完成时间。默认3</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "granularity",
            "description": "<p>统计颗粒度，1-日，2-周，3-月。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>品质（岗控）经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型，1-封装，2-自助。不传默认全部</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "filter_stage",
            "description": "<p>指标粒度，0-全国，1-管理区，2-品控经理，3-客户，4-仓</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "perpage",
            "description": "<p>每页显示条数</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n     code: 0\n     info:\n       msg: success",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/DeliveryData/Api/DeliveryController.php",
    "groupTitle": "DeliveryData"
  },
  {
    "type": "get",
    "url": "/api/delivery/list_data",
    "title": "指标展示相关列表数据",
    "name": "list_data",
    "version": "1.0.0",
    "group": "DeliveryData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "dimension",
            "description": "<p>统计纬度，1-出车时间，2-签到时间，3-完成时间。默认3</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "granularity",
            "description": "<p>统计颗粒度，1-日，2-周，3-月。默认1</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "bid_mgr_id",
            "description": "<p>品质（岗控）经理id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "customer_id",
            "description": "<p>客户id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "warehouse_id",
            "description": "<p>仓id</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "project_type",
            "description": "<p>项目类型，1-封装，2-自助。不传默认全部</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "filter_stage",
            "description": "<p>指标粒度，0-全国，1-管理区，2-品控经理，3-客户，4-仓</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "description": "<p>当前页</p> "
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "perpage",
            "description": "<p>每页显示条数</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "{\n     code: 0\n     info:\n             count: 34,\n             page: 1,\n             perpage: 20,\n             list:\n                 0:\n                     date: 2018-03-20,\n                     adc_id: 3,\n                     adc_name: \"广州管理区\",\n                     bid_mgr_id: 1002424,\n                     bid_mgr_name: \"张东阳\",\n                     customer_id: 13791,\n                     customer_name: \"广州跨越\",\n                     warehouse_id: 65385,\n                     warehouse_name: \"花都芙蓉干线\",\n                     trans_event: //出车数相关\n                         summary: 500,   //总数\n                         type: -1,       //变化类型，1-上浮，0-持平，-1-下降\n                         ratio: 15.6%,   //变化比率\n                     order: //交付订单总数相关\n                         summary: 800,\n                         type: 1,\n                         ratio: 6.6%\n                     delivery_duration: //交付时长相关\n                         summary: 8009, //单位分\n                         type: 1,\n                         ratio: 5.6%\n                     sign: //订单妥投率\n                         summary: 99%,\n                         type: -1,\n                         ratio: 6.6%\n                 ...",
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
    "url": "api/monitor/points/get_list",
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
          "content": "code: 0\ninfo:\n  event_info:\n     \"customer_name\": \"精武门\", 客户名称\n     \"driver_name\": \"爱先生\", 司机名称\n     \"warehouse_name\": \"娜娜gps1仓\"，仓名称\n  list:\n    0：\n      \"node\": \"20\", 节点\n      \"node_display\": \"到仓\", 节点描述\n      \"planing_time\": \"10:00\", 规划时间\n      \"planing_address\": \"西门子大厦\", 规划地点\n      \"real_time\": \"10:10\", 实际实际\n      \"real_address\": \"西门子大厦\", 实际地点\n      \"excepted_time\": \"\", 预计实际\n      \"excepted_address\": \"西门子大厦\"，预计地点\n      \"id\": 3784758, 运力id\n    1：\n      \"node\": \"30\",\n      \"node_display\": \"离仓\",\n      \"planing_time\": \"10:30\",\n      \"planing_address\": \"西门子大厦\",\n      \"real_time\": \"10:40\",\n      \"real_address\": \"西门子大厦\",\n      \"excepted_time\": \"\",\n      \"excepted_address\": \"西门子大厦\"\n      \"id\": 3784758 运力id\n     2：\n      \"node\": \"100\",\n      \"node_display\": \"第1交付点签到\",\n      \"planing_time\": \"12:00\",\n      \"planing_address\": \"望京西地铁站\",\n      \"real_time\": \"12:10\",\n      \"real_address\": \"望京西地铁站\",\n      \"excepted_time\": \"\",\n      \"excepted_address\": \"望京西地铁站\"\n      \"id\": 52553219842048 订单id\n     3：\n      \"node\": 150,\n      \"node_display\": \"第1交付点离开\",\n      \"planing_time\": \"2018-05-22 20:15:00\",\n      \"planing_address\": \"北新桥地铁站\",\n      \"real_time\": \"17:28\",\n      \"real_address\": \"116.41688439.940782\",\n      \"excepted_time\": \"\",\n      \"excepted_address\": \"\",\n      \"id\": 52553219842048 ,订单id",
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
    "url": "/api/order/export",
    "title": "导出订单",
    "name": "order_export",
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
            "field": "origin_id",
            "description": "<p>第三方订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>出车编号</p> "
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
            "field": "order_status",
            "description": "<p>订单状态</p> "
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
          "content": "code: 0\ninfo:\n   msg: success",
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
            "field": "origin_id",
            "description": "<p>第三方订单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>出车编号</p> "
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
            "field": "order_status",
            "description": "<p>订单状态</p> "
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
          "content": "code: 0\ninfo:\n    list : [\n       0:\n        \"id\": 112, 订单号\n        \"dp_contact_name\": \"yf02\", 收货人名称\n        \"dp_contact_mobile\": 11217689090, 收货人电话\n        \"dp_address\":北京市朝阳区慧忠北路慧忠里小区别墅17 收货地址\n        \"order_status_desc\": 配送中,  订单状态\n        \"trans_event_id\": 1213, 出车记录编号\n        \"order_num\": 1, 配送顺序\n        \"plan_delivery_start_time\": \"\", 规划开始配送时间\n        \"plan_delivery_check_in_time\": \"\", 规划交付点签到时间\n        \"plan_delivery_complete_time\": \"\", 规划配送完成时间\n        \"expected_delivery_start_time\": \"\", 预计开始配送时间\n        \"expected_delivery_check_in_time\": \"\", 预计交付点签到时间\n        \"expected_delivery_complete_time\": \"\", 预计配送完成时间\n        \"warning_status\": \"\", 预警状态\n        \"abnormal_status\": \"\" 异常状态\n        \"progress\": 100% 订单百分比\n       1:\n        ...............\n    ]\n   delivery_list : [\n       0:\n        \"dp_contact_name\": \"yf02\", 收货人名称\n        \"dp_contact_mobile\": 11217689090, 收货\n        \"dp_address\":北京市朝阳区慧忠北路慧忠里小区别墅17 收货地址\n       1:\n        ...............\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 3\n    count : 3097",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Order/Api/OrderController.php",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/order/get_order_trace",
    "title": "订单跟踪",
    "name": "order_get_order_trace",
    "version": "1.0.0",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>出车编号</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>订单id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": " code: 0\n info:\n     0:\n        \"id\": 52759378307072,                        订单id\n        \"trans_event_id\": 3784799,                   运力id\n        \"dp_contact_name\": \"出处\",                   收货人姓名\n        \"dp_contact_mobile\": \"18500000010\",          收货人手机号\n        \"dp_address\": \"北京市朝阳区望京医院\",         收货人地址\n        \"order_send_day\": \"2018-05-29\",              订单配送日期\n        \"order_send_seq\": [\n           {\n              \"time\": \"2018-05-30 05:10\",\n              \"type\": \"create_time\",\n              \"display\": \"订单创建待揽收\"\n           },\n           {\n              \"time\": \"\",\n              \"display\": \"排入线路，排线中\",\n              \"type\": \"line_time\"\n          },\n          {\n              \"time\": \"\",\n              \"display\": \"开始分拣，拣货中\",\n              \"type\": \"pickup_time\"\n          },\n          {\n              \"time\": \"\",\n              \"display\": \"开始装货，发货中\",\n              \"type\": \"harrive_time\"\n        },\n        {\n             \"time\": \"2018-05-30 13:09:49\",\n            \"display\": \"司机离仓，等待配送\",\n            \"type\": \"departure_time\"\n       },\n       {\n           \"time\": \"\",\n           \"type\": \"start_send_time\",\n           \"display\": \"开始配送\"\n      },\n      {\n           \"time\": \"2018-05-30 06:10\",\n           \"type\": \"sing_time\",\n           \"display\": \"签单时间\"\n      },\n      {\n           \"time\": \"\",\n           \"type\": \"predict_time\",\n           \"display\": \"预计到达时间\"\n      }\n],\n        \"order_seq\": 0,                              排线顺序\n        \"driver_name\": \"零六亿\",                     司机姓名\n        \"driver_mobile\": \"\",                         司机手机号\n        \"order_status_display\": \"待揽收\"             订单状态\n        \"current_time\"                               当前进行节点",
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
            "optional": false,
            "field": "group_by",
            "description": "<p>需要分组的字段, 这里指定为 order_status</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    0:\n     \"count\": 951,\n     \"order_status\": 20\n     \"status_display\":'待揽收'\n    1:\n     \"count\": 24,\n     \"order_status\": 51\n     \"status_display\":'待处理'\n   2\n      \"count\": 24,\n     \"status_display\":'全部'",
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
    "url": "/api/trans_event/export",
    "title": "导出运力列表",
    "name": "trans_event_export",
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
            "description": "<p>任务类型</p> "
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
            "type": "Integer",
            "optional": true,
            "field": "trans_task_id",
            "description": "<p>任务编号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人联系电话</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址</p> "
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
          "content": "code: 0\ninfo:\n   msg: success",
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
            "description": "<p>任务类型</p> "
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
            "type": "Integer",
            "optional": true,
            "field": "trans_task_id",
            "description": "<p>任务编号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_name",
            "description": "<p>收货人</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_contact_mobile",
            "description": "<p>收货人联系电话</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dp_address",
            "description": "<p>收货人地址</p> "
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
          "content": "code: 0\ninfo:\n    count : 3097\n    list : [\n       0:\n         \"id\": 3448244, 运力id\n         \"trans_task_id\": 95171, 任务id\n         \"customer_id\": 171, 客户id\n         \"customer_name\": \"柴倩怡北京客户1\", 客户名称\n         \"warehouse_id\": 2634, 仓id\n         \"warehouse_name\": \"优化任务仓库1-无SOP\", 仓名称\n         \"driver_id\": 2006688, 司机id\n         \"driver_name\": \"柴司机五六\", 司机名称\n         \"sales_id\": 1000116, 销售id\n         \"sales_name\": \"\", 销售名称\n         \"bid_mgr_id\": 1000265, 品质经理\n         \"bid_mgr_name\": \"\", 品质经理名称\n         \"car_id\": 1, 车id\n         \"car_num\": \"京A00056\", 车牌号\n         \"status\": 100, 运力状态代码\n         \"status_display\": 未签到, 运力状态代码\n         \"type\": 100, 运力类型代码\n         \"type_display\": 普通运力, 运力类型\n         \"work_time\": \"2018-06-02 19:00:00\", 规定签到日期和时间\n         \"work_begin_time\": \"19:00:00\", 规定签到时间\n         \"time_cost\": 900, 标书中预计总耗时\n         \"task_type\": 200, 任务类型代码\n         \"task_type_display\": 200, 任务类型\n         \"task_line_name\": \"主司机优化任务\", 线路名称\n         \"task_is_back\": 0, 是否需要回单\n         \"adc_id\": 1, 管理区id\n         \"adc_name\": \"北京管理区\", 管理区名称\n         \"complete_time\": null, 完成时间\n         \"project_type\": 0, 客户项目类型代码\n         \"project_type_display\": 0, 客户项目类型\n         \"check_in_time\": null, 签到时间\n         \"departure_time\": null, 离仓时间\n         \"spec_time\": \"\", 规划完成时间\n         \"progress\": 0, 运力进度（百分比）\n         \"fraction\": 1/5, 运力进度分数\n         \"expected_time\": \"\", 当前预计完成时间\n         \"warning_state\": \"\", 预警状态\n         \"abnormal_state\": \"\", 异常状态\n         \"is_set_day_off\": 1  是否可以设置不配送\n         \"created_at\": \"2018-05-04 01:00:07\", 创建时间\n         \"updated_at\": \"2018-05-04 01:00:07\", 更新时间\n       1:\n         ................\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 310",
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
            "type": "String",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id,逗号隔开</p> "
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
            "description": "<p>需要进行分组的字段，前端传入 status</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "     code: 0\n     info:\n         0：\n          \"count\": 11677,\n          \"status\": 100\n          \"status_display\": \"未签到\"\n         1：\n          \"count\": 153,\n          \"status\": 700\n          \"status_display\": \"设置不配送\"\n         2：\n          \"count\": 1,\n          \"status\": 800\n          \"status_display\": \"配送中\"\n         3：\n          \"count\": 2,\n          \"status\": 900\n          \"status_display\": \"配送完成\"\n*        4\n           \"count\": 24,\n          \"status_display\":'全部'",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransEvent/Api/TransEventController.php",
    "groupTitle": "TransEvent"
  },
  {
    "type": "post",
    "url": "/api/trans_event/set_day_off",
    "title": "设置不配送",
    "name": "trans_event_set_day_off",
    "version": "1.0.0",
    "group": "TransEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
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
          "content": "code: 0\ninfo:",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransEvent/Api/TransEventController.php",
    "groupTitle": "TransEvent"
  },
  {
    "type": "get",
    "url": "/api/trans_task/fire_for_driver_fault",
    "title": "开除司机",
    "name": "trans_task_fire_for_driver_fault",
    "version": "1.0.0",
    "group": "TransTask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_task_id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "end_date",
            "description": "<p>开除时间 （2018-04-12）</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>开除时间 （2018-04-12）</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransTask/Api/TransTaskController.php",
    "groupTitle": "TransTask"
  },
  {
    "type": "post",
    "url": "/api/trans_task/set_check_in_time",
    "title": "设置签到时间",
    "name": "trans_task_set_check_in_time",
    "version": "1.0.0",
    "group": "TransTask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "work_begin_time",
            "description": "<p>时间 （10:00）</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/TransTask/Api/TransTaskController.php",
    "groupTitle": "TransTask"
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