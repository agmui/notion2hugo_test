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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUAEURQH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHowjkSyG%2FpOTbaHX3iwV80%2BuayF1toQBkVre8ojiJI%2BAiEA6dNiQcWA3XH7WXObP6tm48qrOnJMrMqFjrBnskkmrvsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvIq71MoQwHrr%2BBlircA9MgSmCEBtGJ0bzUouwJQARopC%2B1lAMZn5BTH5efUeAcwacM3buwrUq1G4xywZ2CHe2P8J7uKhWC%2B8cJINk98Xa112Vs5a2%2B03JSrlZ7Lv7H0%2BFeyX75KAv5eMRzhDwwlPYXqI71HXlYmpBlBBIY6goq9PLzmfYfxfgYejdOhPrpP5B%2BMRreTtrq3xxMScCfxNrmpwRaV1o9Jd3rbot3Wox5y096JypfUxuJP5yn7SdtEJA8BfknlZU2cESEH3phrE9P58GYsdHOF9oAA1dD1AC%2F8yiXmtRJcPB8DaUV76EcLb2%2BSfJ2bK2qCIonahbVEJ84wQf2piZd1hlGWygy7T06cTGgCXEUOk9JwkE24cuY1pjYNCsvDl42QX%2BJ%2BlgHjE%2F2rHgpxn1Q4XR6tmkJ6%2B91uM7eBZoKeAIttm%2Bii04fOCmXDaNibrYBphwwIo%2FXX8zeDaFx8HWTPUURjI2H2LOZHz1rvyQlyvDJzSo16CnG25Bq3Zz%2Bqp8w%2FRpVtGLH2bS8wb%2FO73xNZhJRWpG7MLpLZsP6qwkQ5W8gR0Jp8dqwhRk0qBBE50COkZlGu%2BuT6%2FHEVL%2FdZlJ9cRZY%2FT4BeTxnlDEZp15bRChjpMILbXzm0i2uwcqaNeBHSBYuMPCQ4b8GOqUB6aVCsL%2FMTi93dxTv%2FA7iDVPixKNYm0tA%2FU29J0ILRGDAGgUrZD%2FCK%2FL%2FZn%2FY0ku1Ap%2Bc83Nptw2co%2FX9jGY64oPhp0xORsVPaI%2FIjLe5IYKHbCjfdy0MHwiJSTYaAs2SVHsTBqQYqMR3DuhRQO0Izwh1Vv6nKv1IamNOkj8XpLFhlBwF0Ip9UetuhJKIxdC6xj229OoIx3QXYACZrcfjcoNBFe6Y&X-Amz-Signature=4aa601bc146d6fa480b041ca2422218c2fd8026c2b1c3de85547b23694336362&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUAEURQH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHowjkSyG%2FpOTbaHX3iwV80%2BuayF1toQBkVre8ojiJI%2BAiEA6dNiQcWA3XH7WXObP6tm48qrOnJMrMqFjrBnskkmrvsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvIq71MoQwHrr%2BBlircA9MgSmCEBtGJ0bzUouwJQARopC%2B1lAMZn5BTH5efUeAcwacM3buwrUq1G4xywZ2CHe2P8J7uKhWC%2B8cJINk98Xa112Vs5a2%2B03JSrlZ7Lv7H0%2BFeyX75KAv5eMRzhDwwlPYXqI71HXlYmpBlBBIY6goq9PLzmfYfxfgYejdOhPrpP5B%2BMRreTtrq3xxMScCfxNrmpwRaV1o9Jd3rbot3Wox5y096JypfUxuJP5yn7SdtEJA8BfknlZU2cESEH3phrE9P58GYsdHOF9oAA1dD1AC%2F8yiXmtRJcPB8DaUV76EcLb2%2BSfJ2bK2qCIonahbVEJ84wQf2piZd1hlGWygy7T06cTGgCXEUOk9JwkE24cuY1pjYNCsvDl42QX%2BJ%2BlgHjE%2F2rHgpxn1Q4XR6tmkJ6%2B91uM7eBZoKeAIttm%2Bii04fOCmXDaNibrYBphwwIo%2FXX8zeDaFx8HWTPUURjI2H2LOZHz1rvyQlyvDJzSo16CnG25Bq3Zz%2Bqp8w%2FRpVtGLH2bS8wb%2FO73xNZhJRWpG7MLpLZsP6qwkQ5W8gR0Jp8dqwhRk0qBBE50COkZlGu%2BuT6%2FHEVL%2FdZlJ9cRZY%2FT4BeTxnlDEZp15bRChjpMILbXzm0i2uwcqaNeBHSBYuMPCQ4b8GOqUB6aVCsL%2FMTi93dxTv%2FA7iDVPixKNYm0tA%2FU29J0ILRGDAGgUrZD%2FCK%2FL%2FZn%2FY0ku1Ap%2Bc83Nptw2co%2FX9jGY64oPhp0xORsVPaI%2FIjLe5IYKHbCjfdy0MHwiJSTYaAs2SVHsTBqQYqMR3DuhRQO0Izwh1Vv6nKv1IamNOkj8XpLFhlBwF0Ip9UetuhJKIxdC6xj229OoIx3QXYACZrcfjcoNBFe6Y&X-Amz-Signature=2af6c8666e9b09587f31ef34f8a67c348dd7d289e23cc39b2e64427466ddf4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
