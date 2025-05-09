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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4BSCVV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuA7n0EhAW2TS98b2uYHnBHcMj8DoNnsk%2BBvV%2BhKotSAiB8HOgaAK41XjuJKWRFvuuNhrJCWGp6xrpoR%2FNoBKWZtCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMml5d1hKlaT9UihtMKtwDEtFg143uuEyE84RKc91BeYuFuHZ4M8dLKFmH6%2Fff4%2Fm1zm4ZH3llt9QG9o4zlIuDkZ%2FoXOjBwSFbPJ%2B5z1P02Qbb8aaF2SWlYcL7atHo7PwNF0DusC4UJqMhwAUxqGeee5SqyYKDARAnySwEnpFEvUwYILcp5wLdjjiodnXSeWGcXQGfbnDHThl3GIyTpagJ%2FZnCW%2Bqevb4vxfbaXeXO%2Bx7U3H5%2BKTk7%2F63kmpOpSwoa%2FDtuzEC2geIwhemQX7sQIeFgyLLiqVfZSfSOJLcp4J9wmB88MF8PoaLpft8ucawyuQ02ETfo8OTkfCORRykXLo2WaCdkOjumN9pOPWlVaEYDj75tNHyfuOgs3Fm6d1hDvviNMViOYBdMB5GYWzijK1mJ4WeC3IfyzpmpU6hc%2B%2BQKevlhdIsWiEddiefdyevY%2FaYs%2FQOEZVd5owV3twBTje%2Fvt18pMgjNvvzaHtzjjWqDghvLU9C4WJS%2FPAT%2BqK6SsNZJFNjfB%2FI00ra3tr74CQz3WYM1LvUepyU11kRsOHIBB757TGCAzbzb4fpgX0gh3dRI2zcn%2FsIrNBhYPMH4vrxDSA5HLKw4J0yCsp%2B%2BCaJXmWolLoPekDsV%2BKrajCEdMvQimQPbKTMHcRow8sz1wAY6pgHUryyGB%2BN2wNlg%2FTaakK2gQ%2BZYIxStwE6t%2BLak4%2BF5QHogcyY63c6zyn%2B66eVZMtRrKC6nTEQI1Tr4NMqtzaDKFY9DZKHj%2BqJSplHA9UGXaW90iHGzpVGp%2FiStxd294Xfv5RU8%2B4dY4QyU3oC9ek2z6LDnL9bQuj%2BA%2BKGOFR2x9ZqARzRAvc6O%2Bm9v3jKunDMi8jfqecRovMCqwsSkZa%2F49TcS%2BUpS&X-Amz-Signature=306f29b43dc3ce51a2039f57296e9a52cdea6e866cc1bbd418b83fe58c743f81&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK4BSCVV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuA7n0EhAW2TS98b2uYHnBHcMj8DoNnsk%2BBvV%2BhKotSAiB8HOgaAK41XjuJKWRFvuuNhrJCWGp6xrpoR%2FNoBKWZtCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMml5d1hKlaT9UihtMKtwDEtFg143uuEyE84RKc91BeYuFuHZ4M8dLKFmH6%2Fff4%2Fm1zm4ZH3llt9QG9o4zlIuDkZ%2FoXOjBwSFbPJ%2B5z1P02Qbb8aaF2SWlYcL7atHo7PwNF0DusC4UJqMhwAUxqGeee5SqyYKDARAnySwEnpFEvUwYILcp5wLdjjiodnXSeWGcXQGfbnDHThl3GIyTpagJ%2FZnCW%2Bqevb4vxfbaXeXO%2Bx7U3H5%2BKTk7%2F63kmpOpSwoa%2FDtuzEC2geIwhemQX7sQIeFgyLLiqVfZSfSOJLcp4J9wmB88MF8PoaLpft8ucawyuQ02ETfo8OTkfCORRykXLo2WaCdkOjumN9pOPWlVaEYDj75tNHyfuOgs3Fm6d1hDvviNMViOYBdMB5GYWzijK1mJ4WeC3IfyzpmpU6hc%2B%2BQKevlhdIsWiEddiefdyevY%2FaYs%2FQOEZVd5owV3twBTje%2Fvt18pMgjNvvzaHtzjjWqDghvLU9C4WJS%2FPAT%2BqK6SsNZJFNjfB%2FI00ra3tr74CQz3WYM1LvUepyU11kRsOHIBB757TGCAzbzb4fpgX0gh3dRI2zcn%2FsIrNBhYPMH4vrxDSA5HLKw4J0yCsp%2B%2BCaJXmWolLoPekDsV%2BKrajCEdMvQimQPbKTMHcRow8sz1wAY6pgHUryyGB%2BN2wNlg%2FTaakK2gQ%2BZYIxStwE6t%2BLak4%2BF5QHogcyY63c6zyn%2B66eVZMtRrKC6nTEQI1Tr4NMqtzaDKFY9DZKHj%2BqJSplHA9UGXaW90iHGzpVGp%2FiStxd294Xfv5RU8%2B4dY4QyU3oC9ek2z6LDnL9bQuj%2BA%2BKGOFR2x9ZqARzRAvc6O%2Bm9v3jKunDMi8jfqecRovMCqwsSkZa%2F49TcS%2BUpS&X-Amz-Signature=178a3fa774095f172046219e6b3651c58f863d3a5fb2d719bfa62996fe2acd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
