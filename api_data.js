define({ "api": [
  {
    "type": "get",
    "url": "api/common/frequency/get",
    "title": "获取gps频率配置",
    "name": "frequency_get",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
          "content": "code: 0\nmsg: success\ninfo:\n   \"fast_speed\": 0, //快速的速度  （公里/小时）\n   \"fast_inv\": 0, //快速的速度  （公里/小时）\n   \"mid_speed\": 0, //中速的速度  (公里/小时)\n   \"mid_inv\": 0, //中速移动上传间隔（秒）\n   \"slow_speed\": 0, //慢速的速度  (公里/小时)'\n   \"slow_inv\": 0, //慢速移动上传间隔（秒）\n   \"upload_inv\": 0, //打包上传频率（秒）",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "api/common/frequency/update",
    "title": "设置gps频率配置",
    "name": "frequency_update",
    "version": "1.0.0",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response Example",
          "content": "code: 0\nmsg: success\ninfo:\n   \"fast_speed\": 0, //快速的速度  （公里/小时）\n   \"fast_inv\": 0, //快速的速度  （公里/小时）\n   \"mid_speed\": 0, //中速的速度  (公里/小时)\n   \"mid_inv\": 0, //中速移动上传间隔（秒）\n   \"slow_speed\": 0, //慢速的速度  (公里/小时)'\n   \"slow_inv\": 0, //慢速移动上传间隔（秒）\n   \"upload_inv\": 0, //打包上传频率（秒）",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Common/CommonController.php",
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
            "optional": true,
            "field": "driver_id",
            "description": "<p>司机id</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
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
    "title": "解除手表和司机绑定关系(手机端)",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
          "content": "code: 0\nmsg: success\ninfo:\n  0:\n    \"id\": 53223234872320,  //订单id\n    \"customer_name\": \"张大屯\", //客户名称\n    \"dp_contact_name\": \"张大屯\", //收货人\n    \"dp_contact_mobile\": \"13118051602\", //收货人电话\n    \"dp_address\": \"大屯路东地铁站\", //收货人地址\n    \"dp_longitude\": \"116.417377\", //交付点经度\n    \"dp_latitude\": \"40.003841\" //交付点维度\n  1:\n   .......................",
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
    "type": "get",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "field": "IMEI",
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
    "title": "获取评价选项列表",
    "name": "config_unsign_get",
    "version": "1.0.0",
    "group": "Driver",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "type": "String",
            "optional": false,
            "field": "gps_state",
            "description": "<p>是否开启GPS</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "loc_type",
            "description": "<p>坐标点的采集方式</p> "
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
            "type": "string",
            "optional": false,
            "field": "nlt",
            "description": "<p>坐标点采集方式</p> "
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
          "content": "code: 0\nmsg: success\ninfo:\n    \"driver_id\": \"11111111\", //司机id\n    \"longitude\": \"12.000001\", //经度\n    \"latitude\": \"13.000001\", //维度\n    \"content_type\": 1, //内容类型\n    \"ctime\": 1530618792,\n    \"voice_addres\": \"http://test-yn-static.oss-cn-beijing.aliyuncs.com/store/beeper_yunge_api/20180703/39d33cd56b629f10bf9fab78a2d435e8.png\",\n    \"id\": 2",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
            "type": "Integer",
            "optional": false,
            "field": "IMEI",
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
  }
] });