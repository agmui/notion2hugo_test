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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGXYXY6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU1dWAUFueojZoUPyEXZ2GJgpEJAUofNCqjnKONm4XJAiEA3222MKTjWBLrHff1vUnIpung%2FCw42eyQMO8nIif91aEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwTSHS1RObgfhIgDircA3zFT0a2vobqLCj%2BzhyYPoNCAQKVqIZN0DZzQ7T9rXJX7Gkn1Lnp92y0hcjjwV6V8ibkLO5gPHG0qgr5qQ68WGd8AEuAL2%2Fwhf5CJUn7JRmtQruojwPqxC9Yhy4%2BwA%2FBTAYFjsf%2F0k2AwW6IEDbv2X6%2B3h0rUCalxySLc3BUARZLmMkDQYxMv3Z7F9xEzjECf%2FPK%2F7Z5UYZrUOon4spLo%2Fsu0v4oUfFtc%2FBq2nIBDcdRtQ5PRUv6Nwy%2BSGlOwJYeEgcBL4JiXSk%2FTrftHoMjyq26p0XBEV3FHmjGHpK%2Fc5G6DfUxwKKb8%2BXux5Ft4DAXD4%2Fgy%2BRRxFTZG0CDSFMwDmVlhp8ajAklaBBHDek8WF6Bv4aVFKhSTpY6RVLlsbr9tU7ND68r9UKmqDt77%2BbPRJb4ESqRbpRCHNGq6LWweCU7YrpO9TQivRuYZW2RA13oBpZmVeMhpC78LWnNgB9gNSB1Gc%2FNZuMg0SsW30EgKHoJYh4VYs41zp%2BjL2HPvEsO3rLD3kK8oLBsMYRXhoPO516AxTQK2fsmtTPlw6Cww91LqMrHl4bMMnj3mdEW7TYHSWXe0Deehbm8MY79DO%2FDmFyKQrb%2B%2FGCeFvSgmC32ArU9oz6eTk1KycecceZAMLX4nMIGOqUB5Ta46Xn3NPesk3g9QMNigfzt7NZmaj2ErMkRla%2B26gp8Rf6KFNvYpxNiA5oWsiueeXB1vCsSFGClmEHddqMKAkjCsdTEv0WD9NLfQkZIafj%2BbsYJK4EzxgxcbjYzdgoHCCUM%2FW7Qk0%2FfSwfQZepuvfTEVJxgvZMCAgyuN%2Fc144r%2B7GER%2F3bnbbEPuj2%2FJ4i7jH1SAXobfsG7NeuqKPVibC3vDMyU&X-Amz-Signature=c57f09018b0b822b6f8af254abda1f25be6b0b9d20cc3e34ba2a064e2a9193b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGXYXY6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU1dWAUFueojZoUPyEXZ2GJgpEJAUofNCqjnKONm4XJAiEA3222MKTjWBLrHff1vUnIpung%2FCw42eyQMO8nIif91aEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwTSHS1RObgfhIgDircA3zFT0a2vobqLCj%2BzhyYPoNCAQKVqIZN0DZzQ7T9rXJX7Gkn1Lnp92y0hcjjwV6V8ibkLO5gPHG0qgr5qQ68WGd8AEuAL2%2Fwhf5CJUn7JRmtQruojwPqxC9Yhy4%2BwA%2FBTAYFjsf%2F0k2AwW6IEDbv2X6%2B3h0rUCalxySLc3BUARZLmMkDQYxMv3Z7F9xEzjECf%2FPK%2F7Z5UYZrUOon4spLo%2Fsu0v4oUfFtc%2FBq2nIBDcdRtQ5PRUv6Nwy%2BSGlOwJYeEgcBL4JiXSk%2FTrftHoMjyq26p0XBEV3FHmjGHpK%2Fc5G6DfUxwKKb8%2BXux5Ft4DAXD4%2Fgy%2BRRxFTZG0CDSFMwDmVlhp8ajAklaBBHDek8WF6Bv4aVFKhSTpY6RVLlsbr9tU7ND68r9UKmqDt77%2BbPRJb4ESqRbpRCHNGq6LWweCU7YrpO9TQivRuYZW2RA13oBpZmVeMhpC78LWnNgB9gNSB1Gc%2FNZuMg0SsW30EgKHoJYh4VYs41zp%2BjL2HPvEsO3rLD3kK8oLBsMYRXhoPO516AxTQK2fsmtTPlw6Cww91LqMrHl4bMMnj3mdEW7TYHSWXe0Deehbm8MY79DO%2FDmFyKQrb%2B%2FGCeFvSgmC32ArU9oz6eTk1KycecceZAMLX4nMIGOqUB5Ta46Xn3NPesk3g9QMNigfzt7NZmaj2ErMkRla%2B26gp8Rf6KFNvYpxNiA5oWsiueeXB1vCsSFGClmEHddqMKAkjCsdTEv0WD9NLfQkZIafj%2BbsYJK4EzxgxcbjYzdgoHCCUM%2FW7Qk0%2FfSwfQZepuvfTEVJxgvZMCAgyuN%2Fc144r%2B7GER%2F3bnbbEPuj2%2FJ4i7jH1SAXobfsG7NeuqKPVibC3vDMyU&X-Amz-Signature=3b8bb9fd4fea18e07f8d73ab8eef8fa8db735a5eabaa2b70730aacdaaada19fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
