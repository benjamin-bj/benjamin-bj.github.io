define({ "api": [
  {
    "type": "get",
    "url": "api/common/device/info",
    "title": "获取设备信息",
    "name": "device_info",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sim",
            "description": "<p>号码</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>用户ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"driver_id\": 1, //用户ID\n   \"relation_ship_id\": 1, //司机和设备的关联ID\n   \"mobile\": 13805732549, //电话\n   \"name\": 测试, //用户姓名\n   \"imei\": 1231231, //设备imei\n   \"sim\": 13805732549, //SIM卡对应号码\n   \"version\": 1, //设备版本\n   \"device_status\": 1, //设备状态 1开机；2关机；3其他\n   \"sim_service_type\": '', //套餐类型\n   \"used_sim_flow\": '', //已用流量\n   \"used_voice\": '', //已用语音\n   \"sim_pay_status\": '', //缴费状态",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/device_setting/edit",
    "title": "修改获取控制台信息",
    "name": "device_setting_edit",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "fast_speed",
            "description": "<p>快速的速度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "fast_inv",
            "description": "<p>快速的速度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "mid_speed",
            "description": "<p>中速的速度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "mid_inv",
            "description": "<p>中速移动上传间隔</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "slow_speed",
            "description": "<p>慢速的速度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "slow_inv",
            "description": "<p>慢速移动上传间隔</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "upload_inv",
            "description": "<p>打包上传频率</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "influence_type",
            "description": "<p>影响范围类型 1全国；2管理区；3手表id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "influence_id",
            "description": "<p>影响id(当influence_type为2时，influence_id为区域ID，当influence_type为3时，influence_id为imei号)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_traffic_report",
            "description": "<p>路况上报 0关闭；1开启</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_receiver_report",
            "description": "<p>收货点消息推送 0关闭；1开启</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_weather_report",
            "description": "<p>天气消息推送 0关闭；1开启</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_repast_report",
            "description": "<p>餐饮消息推送 0关闭；1开启</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "is_offcar_report",
            "description": "<p>车后消息推送 0关闭；1开启</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "traffic_report_scope",
            "description": "<p>路况上报范围</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "refresh_list_interval",
            "description": "<p>手表短连接轮询间隔</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"fast_speed\": 0, //快速的速度  （公里/小时）\n   \"fast_inv\": 0, //快速的速度  （公里/小时）\n   \"mid_speed\": 0, //中速的速度  (公里/小时)\n   \"mid_inv\": 0, //中速移动上传间隔（秒）\n   \"slow_speed\": 0, //慢速的速度  (公里/小时)\n   \"slow_inv\": 0, //慢速移动上传间隔（秒）\n   \"upload_inv\": 0, //打包上传频率（秒）\n   \"influence_type\": 1, //影响范围类型 1全国；2管理区；3手表id\n   \"influence_id\": 0, //影响id\n   \"is_traffic_report\": 0, //路况上报 0关闭；1开启\n   \"is_receiver_report\": 0, //收货点消息推送 0关闭；1开启\n   \"is_weather_report\": 0, //天气消息推送 0关闭；1开启\n   \"is_repast_report\": 0, //餐饮消息推送 0关闭；1开启\n   \"is_offcar_report\": 0, //车后消息推送 0关闭；1开启\n   \"traffic_report_scope\": 100, //路况上报范围\n   \"refresh_list_interval\": 200, //手表短连接轮询间隔",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/device_setting/get",
    "title": "获取控制台设置信息",
    "name": "device_setting_get",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "adc_id",
            "description": "<p>管理区ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"fast_speed\": 0, //快速的速度  （公里/小时）\n   \"fast_inv\": 0, //快速移动上传间隔（秒）\n   \"mid_speed\": 0, //中速的速度  (公里/小时)\n   \"mid_inv\": 0, //中速移动上传间隔（秒）\n   \"slow_speed\": 0, //慢速的速度  (公里/小时)'\n   \"slow_inv\": 0, //慢速移动上传间隔（秒）\n   \"upload_inv\": 0, //打包上传频率（秒）\n   \"influence_type\": 1, //影响范围类型 1全国；2管理区；3手表id\n   \"influence_id\": 0, //影响id\n   \"is_traffic_report\": 0, //路况上报 0关闭；1开启\n   \"is_receiver_report\": 0, //收货点消息推送 0关闭；1开启\n   \"is_weather_report\": 0, //天气消息推送 0关闭；1开启\n   \"is_repast_report\": 0, //餐饮消息推送 0关闭；1开启\n   \"is_offcar_report\": 0, //车后消息推送 0关闭；1开启\n   \"traffic_report_scope\": 100, //路况上报范围\n   \"refresh_list_interval\": 200, //手表短连接轮询间隔",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/bind_device",
    "title": "绑定手表的消息推送",
    "name": "notice_bind_device",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>绑定结果</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/care",
    "title": "关怀的消息推送",
    "name": "notice_care",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "special",
            "description": "<p>特定消息区分，若关怀类别为天气 1：晴 2：多云；3：多雨；</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "care_type",
            "description": "<p>关怀类别</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main_content",
            "description": "<p>摘要信息</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>关怀详细信息</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dispatch",
            "description": "<p>要推送的设备</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/new_task",
    "title": "推送抢单任务或者竞价任务的消息",
    "name": "notice_new_task",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_info",
            "description": "<p>任务信息</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dispatch",
            "description": "<p>要推送的设备</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/task_result",
    "title": "推送抢单任务或者竞价任务结果的消息",
    "name": "notice_task_result",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_info",
            "description": "<p>任务信息</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dispatch",
            "description": "<p>要推送的设备</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/traffic_report",
    "title": "路况的消息推送",
    "name": "notice_traffic_report",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "report_type",
            "description": "<p>信息类别 1：文字，2：语音文件</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>路况内容(最多50个汉字，100个字节)</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dispatch",
            "description": "<p>要推送的设备</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/notice/unbind_device",
    "title": "解绑手表的消息推送",
    "name": "notice_unbind_device",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "unbind",
            "description": "<p>解除绑定</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dispatch",
            "description": "<p>要推送的设备</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n        \"发送成功\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/NoticeController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/relationship/binding",
    "title": "建立手机和司机的绑定关系(手机端)",
    "name": "relationship_binding",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "imei",
            "description": "<p>imei码</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: \"success\"\ninfo:\n    \"driver_id\": \"333333\", //司机id\n    \"imei\": \"111111\",  //设备id\n    \"token\": \"cAn32iKRVQIvUPSc3sw1A4NzCnQk1fAw\", //身份token\n    \"updated_at\": \"2018-07-04 07:19:25\", //更新时间\n    \"created_at\": \"2018-07-04 07:19:25\", //创建时间\n    \"id\": 4",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "api/common/relationship/get",
    "title": "获取司机手表绑定列表(web端)",
    "name": "relationship_get",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>id</p> "
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
            "field": "updated_at_start",
            "description": "<p>最新更新开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updated_at_end",
            "description": "<p>最新更新结束时间</p> "
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
          "content": "code: 0\ninfo:\n    count : 1\n    list :\n          0:\n            \"id\": 4,   //id\n            \"driver_id\": 333333, //司机id\n            \"imei\": \"111111\",   //设备id\n            \"token\": \"cAn32iKRVQIvUPSc3sw1A4NzCnQk1fAw\", //身份token\n            \"updated_at\": \"2018-07-04 07:19:25\", //更新时间\n            \"created_at\": \"2018-07-04 07:19:25\"  //创建时间\n          1:\n          ..................\n    perpage : 20\n    page  : 1\n    totalpage: 1",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/relationship/unbinding",
    "title": "解除手表和司机绑定关系(手机端或者云鸟管理员)",
    "name": "relationship_unbinding",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\ninfo:\n    count : 1\n    list :\n          \"id\": 4,   //id\n          \"driver_id\": 333333, //司机id\n          \"imei\": \"111111\",   //设备id\n          \"token\": \"cAn32iKRVQIvUPSc3sw1A4NzCnQk1fAw\", //身份token\n          \"updated_at\": \"2018-07-04 07:19:25\", //更新时间\n          \"created_at\": \"2018-07-04 07:19:25\"  //创建时间",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/delivery/check_in",
    "title": "到仓签到",
    "name": "delivery_check_in",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "operation_longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "operation_latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation_ip",
            "description": "<p>终端ip</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_info",
            "description": "<p>设备信息</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "post",
    "url": "api/delivery/deliver",
    "title": "交付点妥投/未妥投",
    "name": "delivery_deliver",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "itid",
            "description": "<p>派车单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dp_id",
            "description": "<p>交付点id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gps_state",
            "description": "<p>gps状态</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "reject_reason",
            "description": "<p>gps状态</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sign_status",
            "description": "<p>妥投状态 1:妥投,2:未妥投</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "post",
    "url": "api/delivery/departure",
    "title": "离仓",
    "name": "delivery_departure",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "operation_longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "operation_latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operation_ip",
            "description": "<p>终端ip</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_info",
            "description": "<p>设备信息</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "api/delivery/get_current_event",
    "title": "获取当前运力任务",
    "name": "delivery_get_current_event",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  \"trans_event_id\": 3859439, //运力id\n  \"task_id\": 122115, //任务id\n  \"line_name\": \"dms线路2\", //线路任务名称\n  \"event_status\": 800, //运力状态code\n  \"event_status_display\": \"配送中\", //运力状态名称\n  \"work_time\": \"2018-07-14 16:30:00\", //规定到仓时间\n  \"customer_id\": 228, //客户id\n  \"customer_name\": \"精武门\", //客户名称\n  \"warehouse_id\": 4690, //仓id\n  \"warehouse_name\": \"娜娜gps1仓\", //仓名称\n  \"price\": 95.51, //单趟价格\n  \"dp_list\":\n      0:\n        \"id\": 53532472402944, //订单id\n        \"dp_contact_name\": \"精武门\", //交付点联系人\n        \"dp_contact_mobile\": \"10000000000\", //交付点电话\n        \"dp_address\": \"中国工商银行(北京四元桥支行)望京中环南路9号望京大厦内B座首层(近花家地街)\", //交付点地址\n        \"dp_longitude\": \"116.469845\", //交付点经度\n        \"dp_latitude\": \"39.986096\", //交付点纬度\n        \"sign_status\": 1, //妥投状态\n        \"order_status\": 500, //订单状态\n        \"uarrive_time\": 1531550673, //签到时间\n        \"end_send_time\": 1531550727, //妥投时间\n        \"order_num\": 1 //配送顺序\n      1：\n       .........................\n  \"current_dp\":\n        \"id\": 53532472402944, //订单id\n        \"dp_contact_name\": \"精武门\", //交付点联系人\n        \"dp_contact_mobile\": \"10000000000\", //交付点电话\n        \"dp_address\": \"中国工商银行(北京四元桥支行)望京中环南路9号望京大厦内B座首层(近花家地街)\", //交付点地址\n        \"dp_longitude\": \"116.469845\", //交付点经度\n        \"dp_latitude\": \"39.986096\", //交付点纬度\n        \"sign_status\": 1, //妥投状态\n        \"order_status\": 500, //订单状态\n        \"uarrive_time\": 1531550673, //签到时间\n        \"end_send_time\": 1531550727, //妥投时间\n        \"order_num\": 1 //配送顺序",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "api/delivery/get_event_list",
    "title": "获取运力列表",
    "name": "delivery_get_event_list",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n 0:\n  \"id\": 3859439, //运力id\n  \"task_id\": 122115, //任务id\n  \"line_name\": \"dms线路2\", //线路任务名称\n  \"event_status\": 800, //运力状态code\n  \"event_status_display\": \"配送中\", //运力状态名称\n  \"work_time\": \"2018-07-14 16:30:00\", //规定到仓时间\n  \"customer_id\": 228, //客户id\n  \"customer_name\": \"精武门\", //客户名称\n  \"warehouse_id\": 4690, //仓id\n  \"warehouse_name\": \"娜娜gps1仓\", //仓名称\n\n1:\n   ..........................",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "/api/delivery/nextpath",
    "title": "获取下一站交付点列表",
    "name": "delivery_nextpath",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_event_id",
            "description": "<p>运力Id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  0:\n    \"id\": 53223234872320,  //订单id\n    \"it_id\": 1005705355, //派车单id\n    \"customer_name\": \"张大屯\", //客户名称\n    \"dp_contact_name\": \"张大屯\", //收货人\n    \"dp_contact_mobile\": \"13118051602\", //收货人电话\n    \"dp_address\": \"大屯路东地铁站\", //收货人地址\n    \"dp_longitude\": \"116.417377\", //交付点经度\n    \"dp_latitude\": \"40.003841\" //交付点维度\n  1:\n   .......................",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "post",
    "url": "api/delivery/sign",
    "title": "交付点签到",
    "name": "delivery_sign",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_event_id",
            "description": "<p>运力id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "itid",
            "description": "<p>派车单id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dp_id",
            "description": "<p>交付点id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gps_state",
            "description": "<p>gps状态</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "api/delivery/evaluate/get",
    "title": "获取交付评价列表(web端)",
    "name": "evaluate_get",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "driver_id",
            "description": "<p>司机id</p> "
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
            "field": "updated_at_start",
            "description": "<p>最新更新开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updated_at_end",
            "description": "<p>最新更新结束时间</p> "
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
          "content": "code: 0\nmsg: success\ninfo:\n  0:\n    \"id\": 1,\n    \"trans_event_id\": 0,  //运力id\n    \"driver_id\": 111111, //司机id\n    \"dp_id\": 222222,  //交付点id\n    \"evaluate\": \"收货快速\", //评价\n    \"score\": 5,  //分数\n    \"created_at\": \"2018-07-06 10:06:20\",\n    \"updated_at\": \"2018-07-06 10:06:20\"\n  1:\n   .......................",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "post",
    "url": "api/delivery/evaluate/set",
    "title": "设置交付评价",
    "name": "evaluate_set",
    "version": "1.0.0",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dp_id",
            "description": "<p>交付点id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "evaluate",
            "description": "<p>交付评价</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "score",
            "description": "<p>妥投分数</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n  \"dp_id\": \"34534223\", //交付点id\n  \"evaluate\": \"收货快速\", //评价\n  \"score\": \"5\", //分数\n  \"driver_id\": \"2067552\", 司机id\n  \"id\": 2",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Delivery/DeliveryController.php",
    "groupTitle": "Delivery"
  },
  {
    "type": "get",
    "url": "api/driver/config/evaluation/get",
    "title": "获取评价选项列表",
    "name": "config_evaluation_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n    \"fast\":\n       \"desc\": \"收货迅速\"\n    \"slow\":\n       \"desc\": \"收货慢\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/config/unsign/get",
    "title": "获取未妥投原因选项列表",
    "name": "config_unsign_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n    \"can_not_contact\": {\n         \"desc\": \"收货人不在／不接电话\"\n    \"hardship\":\n         \"desc\": \"收货人故意刁难\"\n    \"address_wrong\": {\n         \"desc\": \"地址有误\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/config/word/get",
    "title": "获取上报文字选项列表",
    "name": "config_word_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"accident\":\n        \"desc\": \"前方发生事故\"\n   \"check\": {\n        \"desc\": \"前方有交警检查\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/info",
    "title": "获取司机信息",
    "name": "driver_info",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n     \"driver_name\": \"爱先生\",\n     \"biding_time\": \"7天\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/phonelist",
    "title": "获取电话列表",
    "name": "driver_phonelist",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "trans_event_id",
            "description": "<p>运力Id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"400\":\n      \"display_name\": \"云鸟400\", //显示姓名\n      \"mobile\": 400800020,      //电话\n      \"desc\": \"400电话\"         //电话类别标识\n   \"dd\":\n      \"display_name\": \"拓展测试\",\n      \"mobile\": \"13811344123\",\n      \"desc\": \"拓展经理电话\"\n   \"warehouse\":  //仓负责人电话，当有运力时才有\n      \"display_name\": \"tester\",\n      \"mobile\": 18812221222,\n      \"desc\": \"仓库管理员电话\"\n   \"dp\":  //交付点电话，当运力为配送中才有\n      \"display_name\": \"张北新+北新桥地铁站\",\n      \"mobile\": \"13118051601\",\n      \"desc\": \"交付点收货人电话\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "api/driver/position",
    "title": "上传打点信息",
    "name": "driver_position",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度，小数点后6位</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>维度，小数点后6位</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gps_state",
            "description": "<p>是否开启GPS</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dir",
            "description": "<p>方向</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "speed",
            "description": "<p>当前速度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "stn",
            "description": "<p>卫星数</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "collect_time",
            "description": "<p>采集时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pt",
            "description": "<p>精准度 2000最高</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"result\": true",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/report/get",
    "title": "获取上报列表(web端)",
    "name": "driver_report_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>自增id</p> "
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
            "type": "String",
            "optional": true,
            "field": "content_type",
            "description": "<p>内容类型：0为文字，1为音频</p> "
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
            "field": "updated_at_start",
            "description": "<p>最新更新开始时间</p> "
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "updated_at_end",
            "description": "<p>最新更新结束时间</p> "
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
          "content": "code: 0\ninfo:\n    count : 1\n    list :\n          0:\n            \"id\": 1,\n            \"driver_id\": 10000,  //司机id\n            \"longitude\": 12.000001, //上报时终端经度\n            \"latitude\": 13.000001,  //上报时终端维度\n            \"ctime\": 1530606293,\n            \"created_at\": \"2018-07-03 16:24:53\", //创建时间\n            \"updated_at\": \"2018-07-03 16:24:53\", //更新时间\n            \"content_type\": 0, //内容类型：0为文字，1为音频\n            \"word\": \"sdfdssdfsdf\", //文字内容\n            \"voice_addres\": \"\", //音频地址\n          1:\n          ..................\n    perpage : 20\n    page  : 1\n    totalpage: 1",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/driver/config/reservation/get",
    "title": "获取明日预约时间选项",
    "name": "reservation_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   0：\n     \"code\": 0,\n     \"desc\": \"2018-08-09 全天\"\n   1：\n     \"code\": 1,\n     \"desc\": \"2018-08-09 00:00至06:00\"\n   2：\n     \"code\": 2,\n     \"desc\": \"2018-08-09 06:00至12:00\"\n   3：\n     \"code\": 3,\n     \"desc\": \"2018-08-09 12:00至18:00\"\n   4：\n     \"code\": 4,\n     \"desc\": \"2018-08-09 18:00至23:59:59\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "api/driver/reservation/set",
    "title": "明日预约",
    "name": "reservation_set",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "range",
            "description": "<p>时间段</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n    0:\n      \"driver_id\": \"2067552\", //司机ID\n      \"trans_type\": 100, //类型 100 同城配送 200 城际配送\n      \"wait_time_start\": \"2018-08-10 00:00\", //开始时间\n      \"wait_time_end\": \"2018-08-10 06:00\", //结束时间\n      \"city_id_start\": 1, //出发城市ID\n      \"city_id_end\": 1, //目的地城市ID\n      \"city_address_start\": \"北京市\", //出发地城市详细地址\n      \"city_address_end\": \"北京市\", //目的地城市详细地址\n      \"created_at\": \"2018-08-09 11:44:32\", //创建时间\n      \"updated_at\": \"2018-08-09 11:44:32\", //最后更新时间\n      \"id\": 2913\n    1:\n     ........................",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "api/driver/voice/report",
    "title": "上报音频信息",
    "name": "voice_report",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>维度</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "upload_voice",
            "description": "<p>音频附件</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n    \"driver_id\": \"11111111\", //司机id\n    \"longitude\": \"12.000001\", //经度\n    \"latitude\": \"13.000001\", //维度\n    \"content_type\": 1, //上报类型：0 文字；1 音频\n    \"ctime\": 1530618792,\n    \"voice_addres\": \"http://test-yn-static.oss-cn-beijing.aliyuncs.com/store/beeper_yunge_api/20180703/39d33cd56b629f10bf9fab78a2d435e8.png\",\n    \"id\": 2",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "api/driver/word/report",
    "title": "上报文字信息",
    "name": "word_report",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "word",
            "description": "<p>上报的文字</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "longitude",
            "description": "<p>经度，小数点后6位</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "latitude",
            "description": "<p>维度，小数点后6位</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"longitude\": \"116.234236\", //经度\n   \"latitude\": \"40.386263\", //维度\n   \"word\": \"哈佛是德弗里斯\", //上报的文字内容\n   \"driver_id\": \"2067552\", //司机id\n   \"content_type\": 0, // 上报类型：0 文字；1 音频\n   \"ctime\": 1533279911, //\n   \"id\": 3",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "api/task/bid/list",
    "title": "竞价列表",
    "name": "task_bid_list",
    "version": "1.0.0",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "     code: 0\n     msg: success\n     info:\n        \"list\":\n           0:\n             \"id\": 133330, //任务id\n             \"adc_id\": 1, //客户所在管理区id\n             \"customer_id\": 14369, //客户id\n             \"type\": 200, //\n             \"type_display\": \"主司机\",\n             \"scene\": 100, //场景code\n             \"match_type\": 100, //任务类型code\n             \"substatus\": 1000, //任务状态code\n             \"status_display\": \"司机报价中\", //任务状态描述\n             \"job_process_status\": 2000, //报价任务状态code\n             \"requirement_city_id\": 1, //要求司机所在城市id\n             \"requirement_car_type_id\": 1, //要求车型id\n             \"work_begin_time\": \"19:15\", //要求到仓时间\n             \"onboard_date\": \"2018-07-14\", //要求首次上岗日期\n             \"distribution_area\": 北京市昌平区 //配送区域\n             \"expected_price_min\": 6000 //期望报价最小值，单位：分\n             \"expected_price_max\": 7000 //期望报价最大值，单位：分\n             \"customer_invoice_tax_rate\": 0.03, //发票的税率\n             \"line_name\": \"新抢单有可派无人抢10m自动转竞价无人报\", //线路任务名称\n             \"customer_city_id\": 1, //客户所在城市id\n             \"warehouse_id\": 3850, //仓id\n             \"warehouse_city\": \"北京市\", //仓所在城市id\n             \"warehouse_city_id\": 1, //仓所在城市id\n             \"warehouse_region\": \"朝阳区\", //仓所在区域\n             \"valid_bid_count\": 1, //目前有效报价个数\n             \"open_task_time\": \"2018-07-14 15:40:14\", //任务发布时间\n             \"receiving_bid_end_time\": \"2018-07-14 16:45:00\", //司机报价截止时间\n             \"evaluating_bid_end_time\": \"2018-07-14 17:15:00\", //客户选司机截止时间\n             \"work_end_time\": \"19:30\", //预计配送完成时间\n             \"distribution_point_min\": 1, //预计最少交付点个数\n             \"distribution_point_max\": 1, //预计最多交付点个数\n             \"distance_min\": 9,  //预计最多交付点个数\n             \"distance_max\": 11, //预计最多交付点个数\n             \"is_back\": 0, //是否需要回仓\n             \"is_ignore_restrict\": 1, //是否要求限行必须配送\n             \"task_duration_days\": 0, //任务持续周期，单位：天\n             \"cargo_type\": \"食材\", // 货物类型\n             \"is_need_receipt\": 0, //是否需要回单\n             \"is_req_xiaogong\": 0, //是否需要小工\n             \"is_need_tuiche\": 0, //是否需要推车\n             \"is_limit_phone\": 0, //是否禁止使用手机\n             \"is_need_go_upstairs\": 0, //是否需要上楼搬运\n             \"distribution_point_count\": 0, //保底配送点个数\n             \"handling_type_display\": \"无需搬运\", //搬运程度文字\n             \"schedule_display\":  //需要配送的日期，数字代表周几\n                         1,\n                         2,\n             \"distribution_points\": //交付点信息\n                        0：\n                          \"id\": 29872, //id\n                          \"address\": \"西门子大厦\", //地址\n                        1：\n                          ...............\n             \"time_cost\": 900, //预计花费时间，单位：分钟\n             \"have_sop_display\": \"无SOP服务\", //是否有sop服务\n             \"have_temp_ctrl\": 0, //是否需要开启温控服务\n             \"pv\": 6, //查看次数\n             \"uv\": 2, //查看人数\n           1:\n            ................................................\n        \"count\": 40,\n        \"page\": \"1\",\n        \"perpage\": \"1\"\n}",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Task/TaskController.php",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "api/task/bidding",
    "title": "报价",
    "name": "task_bidding",
    "version": "1.0.0",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_task_id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "dprice",
            "description": "<p>报价(元)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Task/TaskController.php",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "api/task/grab",
    "title": "抢单",
    "name": "task_grab",
    "version": "1.0.0",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "trans_task_id",
            "description": "<p>任务id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "query_dispatch_id",
            "description": "<p>推送id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   []",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Task/TaskController.php",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "api/task/grab/list",
    "title": "抢单列表",
    "name": "task_grab_list",
    "version": "1.0.0",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imei",
            "description": "<p>imei号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>(没有绑定的设备直接使用driver_id参数)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"page\": \"1\",\n   \"per_page\": \"5\",\n   \"total_pages\": 1,\n   \"count\": 2,\n   \"list\":\n       0:\n          \"arrival_warehouse_time\": \"23:30\", //规定到仓时间\n          \"car_type_display\":  //符合任务的车型\n                \"小面\",\n                \"平顶金杯\"\n\n          \"customer\":\n                \"customer_id\": 228, //客户id\n                \"name\": \"精武门\", //客户名称\n                \"succeed_ratio\": 0.2, //成功概率\n                \"total_score\": 5 //客户评分\n         \"dispatch\": {\n                \"dprice_total_display\": \"193.01\", //单趟价格\n                \"driver_id\": 2006919, //司机ID\n                \"driver_price_display\": \"200.00\", //标书价格\n                \"id\": 176870,\n         \"distance_max\": 37, //预计最大配送距离，单位：千米\n         \"distance_min\": 30, //预计最小配送距离，单位：千米\n         \"distribution_area\": \"北京市昌平区,配送线路: 北新桥地铁站-大屯路东地铁站-天通苑北地铁站。备注: \", //配送区域\n         \"distribution_point_max\": 3, //最多配送交付点个数\n         \"distribution_point_min\": 3, //最少配送交付点个数\n         \"is_back\": 0, //是否反仓\n         \"match_type_display\": \"抢单\", //匹配司机模式\n         \"onboard_date\": \"2018-07-11\", //上岗时间\n         \"schedule\": \"每周一二三四五六日 配送\", //配送时间规划\n         \"status_display\": \"已发布\", //任务状态\n         \"task_id\": 131538, //任务id\n         \"time_cost\": \"5小时\", //预计配送时间\n         \"type_display\": \"长期任务\", //任务类型\n         \"warehouse\":\n                \"city\": \"北京市\", //仓所在城市\n                \"location\": \"五棵松体育馆\", //仓所在具体地址\n                \"name\": \"娜娜gps1仓\", //仓名称\n                \"region\": \"朝阳区\", //仓所在区\n                \"warehouse_id\": 4690 //仓ID\n\n         \"work_begin_time\": \"23:30,不返仓\", //规定开始配送时间\n      1:\n        .............................................",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Task/TaskController.php",
    "groupTitle": "Task"
  }
] });