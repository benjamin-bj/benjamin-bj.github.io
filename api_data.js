define({ "api": [
  {
    "type": "get",
    "url": "/api/delivery/nextpath",
    "title": "获取下一站交付点列表",
    "name": "delivery_nextpath",
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
            "type": "Integer",
            "optional": false,
            "field": "timestamp",
            "description": "<p>客户端时间戳</p> "
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
            "optional": true,
            "field": "sign",
            "description": "<p>加密串</p> "
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
    "groupTitle": "Driver"
  },
  {
    "type": "get",
    "url": "/api/driver/phonelist",
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
            "type": "Integer",
            "optional": false,
            "field": "timestamp",
            "description": "<p>客户端时间戳</p> "
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
            "optional": true,
            "field": "sign",
            "description": "<p>加密串</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>终端token</p> "
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
          "content": "code: 0\nmsg: success\ninfo:\n  \"400\": 400800020, //400电话\n  \"dd\": \"13811344123\", //司机拓展经理人电话\n  \"warehouse\": \"13530015070\", //仓负责人电话，当有运力时才有\n  \"dp\": \"13118051601\" //交付点电话，当运力为配送中才有",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  },
  {
    "type": "post",
    "url": "/v1/trans_event/get_list",
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
            "field": "trans_task_id",
            "description": "<p>任务id</p> "
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
            "field": "type",
            "description": "<p>运力类型</p> "
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
            "field": "project_type",
            "description": "<p>项目类型</p> "
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
          "content": "code: 0\ninfo:\n    count : 1\n    list : [\n\n    ]\n    perpage : 20\n    page  : 1\n    totalpage: 1",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Bidding/BiddingController.php",
    "groupTitle": "TransEvent"
  }
] });