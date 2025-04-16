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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUAZ7IOC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDde2MnYivR9JOJhZhQNovIbiG5Q9WeMptcBKwkz8hWggIgLnHUhgOybsvLfRygB0cLAdx8S6ZATATRB%2B7fCSkUno0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNUTxdYI3CoeVPqmbCrcAzslqNQkD%2B1Zf4t%2BG8sQM%2Bel2ojh44mO8edaBrtZAZB%2FCq9pw8Rup2hBPITQYsIP%2BAO%2BD97jCpAPGShxla%2FuQcuuFasYUWlZDmJyrcqMZq7AbTczmq56NYzeF6QrYn45Bo%2BjwDoET%2BduD8fjF0t%2BmWb1%2F2FsBdTUgVmxJl9hyqqVjJXxzLzdnumZOD%2FvT8XWFu0ASQcbF3Vh8V6feiI%2Fop3h1aeq%2BO7L28XRhGfZBVqVnuoZYWUdH5tF3xjWxtItP4b5VD30glgOIoKcMB%2FA1rRSS0Jid8omcuHJhWk9G967RgkEXD2W6%2BOZdgQOheNF6GtSLPp544OL1JnTaCkMlPEYvdAh56IyP%2FesGDiB%2BBsdt5qAsxuRn0q%2FqM2tpEl914ArBuiGkpiveOHdpHd6zN2CUgFmh5pyGABSzLyPBsfMWx6XeEtG0wFb9x5MpZVq45sZNY%2FX9NPhnEurCm51YKmkt0XkX2fRf3P%2Fl%2Bd1%2FwNRJxDeIGyGJTYG8OAg7mm45Mxy%2BgL2nu6yOEBmWqKePBhm8l7pYpPaNeBm6Q%2F3IaNnDMAuumX54k%2BI4NDPmi7IwvmJS15oSpqeJA8EA57aP9zRtmwe62npkRldPFdjd6t4L4vs97EKsMnbifutMJz4%2Fr8GOqUBcA0JPeMvIc9WXZcKio0RhkEe291hPOiPwgUQUxoma7IfJMs3m%2Ff%2BIpmw3N7ltuJ3RmLQ939i4TzH3pTD1pmBtN8wJSGreYAV0MktqW38KB8n5i4n4I%2BfKx%2FQwUrMsb%2FdNoD5I7gFNWzmDtPFZH1%2BOvDMMZBmbOEhcVLroHbXbOpVYOND%2FWJLndwhMXZIyKKett1k3iXEiZxH7TZluWEkpSz0gXIG&X-Amz-Signature=eabea0efcf019f1fd5dbba65e9b9d3d86e3306801947e96796832734dcb37193&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUAZ7IOC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDde2MnYivR9JOJhZhQNovIbiG5Q9WeMptcBKwkz8hWggIgLnHUhgOybsvLfRygB0cLAdx8S6ZATATRB%2B7fCSkUno0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNUTxdYI3CoeVPqmbCrcAzslqNQkD%2B1Zf4t%2BG8sQM%2Bel2ojh44mO8edaBrtZAZB%2FCq9pw8Rup2hBPITQYsIP%2BAO%2BD97jCpAPGShxla%2FuQcuuFasYUWlZDmJyrcqMZq7AbTczmq56NYzeF6QrYn45Bo%2BjwDoET%2BduD8fjF0t%2BmWb1%2F2FsBdTUgVmxJl9hyqqVjJXxzLzdnumZOD%2FvT8XWFu0ASQcbF3Vh8V6feiI%2Fop3h1aeq%2BO7L28XRhGfZBVqVnuoZYWUdH5tF3xjWxtItP4b5VD30glgOIoKcMB%2FA1rRSS0Jid8omcuHJhWk9G967RgkEXD2W6%2BOZdgQOheNF6GtSLPp544OL1JnTaCkMlPEYvdAh56IyP%2FesGDiB%2BBsdt5qAsxuRn0q%2FqM2tpEl914ArBuiGkpiveOHdpHd6zN2CUgFmh5pyGABSzLyPBsfMWx6XeEtG0wFb9x5MpZVq45sZNY%2FX9NPhnEurCm51YKmkt0XkX2fRf3P%2Fl%2Bd1%2FwNRJxDeIGyGJTYG8OAg7mm45Mxy%2BgL2nu6yOEBmWqKePBhm8l7pYpPaNeBm6Q%2F3IaNnDMAuumX54k%2BI4NDPmi7IwvmJS15oSpqeJA8EA57aP9zRtmwe62npkRldPFdjd6t4L4vs97EKsMnbifutMJz4%2Fr8GOqUBcA0JPeMvIc9WXZcKio0RhkEe291hPOiPwgUQUxoma7IfJMs3m%2Ff%2BIpmw3N7ltuJ3RmLQ939i4TzH3pTD1pmBtN8wJSGreYAV0MktqW38KB8n5i4n4I%2BfKx%2FQwUrMsb%2FdNoD5I7gFNWzmDtPFZH1%2BOvDMMZBmbOEhcVLroHbXbOpVYOND%2FWJLndwhMXZIyKKett1k3iXEiZxH7TZluWEkpSz0gXIG&X-Amz-Signature=14fb11057187269f86c43f70e64436ba23c458d798ac27ce8d957f79d86295e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
