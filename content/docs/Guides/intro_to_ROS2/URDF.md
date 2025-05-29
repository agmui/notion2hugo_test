---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5XDFMW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiYatBAvKkYVSawikH63qom3BQ%2BO8ex%2BsdU2bKnubSFAiB89RuWmsgmGhJtYVeom02v8Re0BF7j297IMbwKgfsDlCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOsGt8aQbFgomzEEcKtwDFYMeRpYa29KzirhV8NkdUFGEclh4UF%2BWDiJkavIBAi47qWf13%2BQjc%2FO%2BPAiN3aS8tkfdnYbRZMWh04hLYavgSCSjPxj2Oh%2FXAaCm4IYzpcL8YwMH6J8HdWt4gB49ENUnUnjAyMUyeEgdhr5bnyGj5WqNEYNLEin2tSqEXjzfliWwYJPKMBjX3dX3flnXPh0xP5G58d%2Bxs7%2BuMbR%2B7xsA1Rwfhfo6GcIURS71Dr4q4%2B%2BLOka9zBAwZrHEHZ0Iz24lBdIOP3Kp6FK75VQOQSbzPN78Oa8sCWsXdRWPUwQkGh5dBz7Ds3r9aD6JJDEdXLmZmTFiSAPD7DrPrKwMbDEhJtFVe1ZRhDxaVbPkv2W%2BDUkAuWAo7WeiiKnC%2BwRzeCF%2BmsaEgrbkYgP2WteGEVrKUvl35ZSyN6oAfq0MAbi3pu%2F2CtBuve0KWXImdR3m1Q822jctVHhgdrSF0DGYUkvxMosRT48qSik6txalbxsYUZHwjeJ1Ri48m6m2BOHOSVympAVUJpx0gL7ybKg2Eh0px%2Fv8O1eH7ILhLSoiIs11FRl540s5%2B5MnsknnKlioe%2BI7274bQzDZHia11pkrbL1SZFC%2BeW6CfyV25dPOwNiCZceQcPKKd%2BSBjpensBowo7LjwQY6pgHPg4wZGlRpSRGsWqRp6nKPqDWClBxhUXEyLi%2FpmQh%2BslMNFkEMrfnbZfcGoT2m%2B2fufJdZ4toEwsLHU8Xx9N3PhxQHxGridqi3zP71OBRaZqAdMgcQX8F6y98pIwEOXKiB7Tn2CalpZWCb64i9tdSSx7RsnVDY%2FqKJ0ZMEceDO29mjXbArCi2yeGwX9idtzq%2FfjDJIWlMTwvp14NxMudWfkFOZ%2BtYW&X-Amz-Signature=55424761d76136f009e26e3542b8d4888f816d633cc02d255dcf4f61cabd5f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5XDFMW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiYatBAvKkYVSawikH63qom3BQ%2BO8ex%2BsdU2bKnubSFAiB89RuWmsgmGhJtYVeom02v8Re0BF7j297IMbwKgfsDlCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOsGt8aQbFgomzEEcKtwDFYMeRpYa29KzirhV8NkdUFGEclh4UF%2BWDiJkavIBAi47qWf13%2BQjc%2FO%2BPAiN3aS8tkfdnYbRZMWh04hLYavgSCSjPxj2Oh%2FXAaCm4IYzpcL8YwMH6J8HdWt4gB49ENUnUnjAyMUyeEgdhr5bnyGj5WqNEYNLEin2tSqEXjzfliWwYJPKMBjX3dX3flnXPh0xP5G58d%2Bxs7%2BuMbR%2B7xsA1Rwfhfo6GcIURS71Dr4q4%2B%2BLOka9zBAwZrHEHZ0Iz24lBdIOP3Kp6FK75VQOQSbzPN78Oa8sCWsXdRWPUwQkGh5dBz7Ds3r9aD6JJDEdXLmZmTFiSAPD7DrPrKwMbDEhJtFVe1ZRhDxaVbPkv2W%2BDUkAuWAo7WeiiKnC%2BwRzeCF%2BmsaEgrbkYgP2WteGEVrKUvl35ZSyN6oAfq0MAbi3pu%2F2CtBuve0KWXImdR3m1Q822jctVHhgdrSF0DGYUkvxMosRT48qSik6txalbxsYUZHwjeJ1Ri48m6m2BOHOSVympAVUJpx0gL7ybKg2Eh0px%2Fv8O1eH7ILhLSoiIs11FRl540s5%2B5MnsknnKlioe%2BI7274bQzDZHia11pkrbL1SZFC%2BeW6CfyV25dPOwNiCZceQcPKKd%2BSBjpensBowo7LjwQY6pgHPg4wZGlRpSRGsWqRp6nKPqDWClBxhUXEyLi%2FpmQh%2BslMNFkEMrfnbZfcGoT2m%2B2fufJdZ4toEwsLHU8Xx9N3PhxQHxGridqi3zP71OBRaZqAdMgcQX8F6y98pIwEOXKiB7Tn2CalpZWCb64i9tdSSx7RsnVDY%2FqKJ0ZMEceDO29mjXbArCi2yeGwX9idtzq%2FfjDJIWlMTwvp14NxMudWfkFOZ%2BtYW&X-Amz-Signature=6f59f76ab64f9d964166d33515abe6ace82aa85fc3e4dc8eb419708fc6544f01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
