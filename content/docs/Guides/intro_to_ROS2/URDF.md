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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY6NQQSK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDSiJVc2F%2FualYyUODuLt3jqjqi4Dn0A%2F86JQZgXLHFcAIhAO7S2xYTALmtDKBtqKFu7UndhGoZIj1OLvYXt02sGtgHKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BAQRFXVpScVvsVNoq3AMF2I4hs2g5boU8Q8%2FUkkhQ%2B%2BNTBhe3g8C3plyndQjub7WoscElhFC%2Fyswy%2FwZ96Jxf5j7aW7EXqte7%2FWJ%2BaqYPk%2FQ8D%2FlCIn2CgaoO%2B60GKjqOrYEgmfh7zNS9ub6w1LVYEACNBEh1%2FXwq0xR0FScBLTjI17UTHfXZVDHkTxb4rgaH%2BCfomym5ZLyFL%2FIupQ%2BavaGl1Az2Jue3vPyUow5sb6Z5a6ZwyGIPdTCruB%2FkeI7vRX5%2F%2BXW5zAuYPJKRG2NfK5EAZB44JhgNO7pxLI9bu1jgbXdqQaXqWB0JznuHV7AwG92Z8YBcXEEGEd4swKnoz01%2BeUfWk0Ix39DGyeTpR6tKFgfYCInkg0TkOXngIAtutgF206%2FXQN8VoPTSQta8t0z3zzKeWJUaw6tIZNallHxLSfpBYCxMX%2FkohZPvrJWCcxOpXFJ613E3OImrNhA0IVw%2FkuMIFn1I%2FEqyQlPJMKuFUWwRJkMy4pxp0nMo8BnntgXRnVm%2FUKQMUKW6nwSx8hMvRzTIttaNOazv%2FcWiqIzccU6akWzPpDaEDJXqwF75TKBSVHhcT7d1%2FTSVEqFlxnBPCc8zmDtrdh5ny86zH7d5wsPrQ10r4QttlzLOfIPIILq70Uaj4OePUTDm7b2%2BBjqkAUkoBbXiUIKsukVVbn4Qf1d1UJs75jYeaiWEkSfpk87XQFGOY6WhEMrNTfotIYQnNe3a9dFtC2ZOGI3g10OM7%2Fw37%2FF2Eyo8ckBow4y%2BLwC4t6Se83YynNf%2BUgiJtxo8kJ9aIQavXo4McFU%2B3Cxq9DOo0fSyPlI3Zblo7mfdmFgM7plwmJa8aUhdf8nNoJ8IXCV8ibhhQbud6qVSOOEmyHCGcNQG&X-Amz-Signature=e104eba8c865414589d6916b597ec7e142324c9a0f36facb42b8b4c3c9a7f76f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY6NQQSK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDSiJVc2F%2FualYyUODuLt3jqjqi4Dn0A%2F86JQZgXLHFcAIhAO7S2xYTALmtDKBtqKFu7UndhGoZIj1OLvYXt02sGtgHKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BAQRFXVpScVvsVNoq3AMF2I4hs2g5boU8Q8%2FUkkhQ%2B%2BNTBhe3g8C3plyndQjub7WoscElhFC%2Fyswy%2FwZ96Jxf5j7aW7EXqte7%2FWJ%2BaqYPk%2FQ8D%2FlCIn2CgaoO%2B60GKjqOrYEgmfh7zNS9ub6w1LVYEACNBEh1%2FXwq0xR0FScBLTjI17UTHfXZVDHkTxb4rgaH%2BCfomym5ZLyFL%2FIupQ%2BavaGl1Az2Jue3vPyUow5sb6Z5a6ZwyGIPdTCruB%2FkeI7vRX5%2F%2BXW5zAuYPJKRG2NfK5EAZB44JhgNO7pxLI9bu1jgbXdqQaXqWB0JznuHV7AwG92Z8YBcXEEGEd4swKnoz01%2BeUfWk0Ix39DGyeTpR6tKFgfYCInkg0TkOXngIAtutgF206%2FXQN8VoPTSQta8t0z3zzKeWJUaw6tIZNallHxLSfpBYCxMX%2FkohZPvrJWCcxOpXFJ613E3OImrNhA0IVw%2FkuMIFn1I%2FEqyQlPJMKuFUWwRJkMy4pxp0nMo8BnntgXRnVm%2FUKQMUKW6nwSx8hMvRzTIttaNOazv%2FcWiqIzccU6akWzPpDaEDJXqwF75TKBSVHhcT7d1%2FTSVEqFlxnBPCc8zmDtrdh5ny86zH7d5wsPrQ10r4QttlzLOfIPIILq70Uaj4OePUTDm7b2%2BBjqkAUkoBbXiUIKsukVVbn4Qf1d1UJs75jYeaiWEkSfpk87XQFGOY6WhEMrNTfotIYQnNe3a9dFtC2ZOGI3g10OM7%2Fw37%2FF2Eyo8ckBow4y%2BLwC4t6Se83YynNf%2BUgiJtxo8kJ9aIQavXo4McFU%2B3Cxq9DOo0fSyPlI3Zblo7mfdmFgM7plwmJa8aUhdf8nNoJ8IXCV8ibhhQbud6qVSOOEmyHCGcNQG&X-Amz-Signature=0481f511ebee31985ac268548fa607cc1a8c31c8558c64df9472ffe4e3cca967&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
