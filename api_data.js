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
          "content": "code: 0\nmsg: success\ninfo:\n   \"400\":\n      \"display_name\": \"云鸟400\", //显示姓名\n      \"mobile\": 400800020,      //电话\n      \"desc\": \"400电话\"         //电话类别标识\n   \"dd\":\n      \"display_name\": \"拓展测试\",\n      \"mobile\": \"13811344123\",\n      \"desc\": \"拓展经理电话\"\n   \"warehouse\":  //仓负责人电话，当有运力时才有\n      \"display_name\": \"tester\",\n      \"mobile\": 18812221222,\n      \"desc\": \"仓库管理员电话\"\n   \"dp\":  //交付点电话，当运力为配送中才有\n      \"display_name\": \"张北新+北新桥地铁站\",\n      \"mobile\": \"13118051601\",\n      \"desc\": \"交付点收货人电话\"",
          "type": "yaml"
        }
      ]
    },
    "filename": "app/Http/Controllers/Driver/DriverController.php",
    "groupTitle": "Driver"
  }
] });