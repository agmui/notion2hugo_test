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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652EHSV6O%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZQ5VzQCP9HXLu9zp%2B%2BowbM2PtEtqz1pHPM3Sw93hZCAIhAMiNmJR%2Bjxd6xjhzaxOqO8rssK7htw9roGeBIXJG66mIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vpselrke7IVGd4Iq3AP5He9fTHVg1gG5rFOBYe5R%2BwWmzMBDgnDG604ZUmZcyIZPY9QrQMB1pcfojjPmT3WEdDjnSyNvXeRIwWNkUrVa9yyzw06XGQQI139vhEXRZJHgcK0spXfFkFb1DPNWHoKuT4m89%2BNqYD%2F0WYRV%2FXK6DYuWZHfzeaRkNNzMTlZV48xTvS%2Bahy%2FYjkTxhY8%2BsQoc52iWdPSoyFj2UICsfrm9gCkVnld%2FzoPTf0DHaH%2B40Jk%2B6sdzV0mwma1lmL2hIQUhIjk3L6Wfexw0hfZEjM8YNexMUvlrVthr8QbZkZ3UoF32hjiGYpqqJqU8E2kfBHdY1nA3VKHR1foifi7xLV%2F9MLbl4vJLIWyz%2BNVkueFxjqCsu2DqK6XC5bLttghVAxONlTxFJB93Rx3kFT4bEotxgWS3tUdQMKlNq%2FJCjJ99mYoHmv9SacWB6h3pB5ipWQQ%2BEhbgVAi1lyfqeM3NmUQZsn%2FDZSWxmaZ%2Fo4dlPALB50a7w%2FUmBFTre7rTLc6UjJkhs2UkaBb6%2BTiDhq2Wltbw7dgVmXR984tPrXu%2BjHY1EgMkmYaGTsYKfaFUhRWKdwl6d3u%2BdgZgrjuG8nRc%2Ff%2FTZaMThOuNKw8pArFT4hsfczdX978QQGvOBBe5nTDEvqDCBjqkAY5InLqjHVJ4jhD7InRdrE4ub6r9TlYJInMAb1B6C%2B5MFHJ0pf5aPM9OjMNSAKNaDgMl5huooCqYPesfmKS6PLsULhV7Xyl8Zn%2FzG0t5adrK4HcEaL%2BBPsjT%2F%2F86fTiQ5nzjVgpLRA1%2F5CR%2FqDd9DIVGbJ5hvf64lPd0ywn9lecbaQU0EkHFnH34L7JMrRP3oHzOilgnq3ftd3b6dHrDw%2BmM9bni&X-Amz-Signature=90eb03f6dd918fbc779ac06c185fda184bf2cb01e6a760670dc3e79e044c643c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652EHSV6O%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZQ5VzQCP9HXLu9zp%2B%2BowbM2PtEtqz1pHPM3Sw93hZCAIhAMiNmJR%2Bjxd6xjhzaxOqO8rssK7htw9roGeBIXJG66mIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0vpselrke7IVGd4Iq3AP5He9fTHVg1gG5rFOBYe5R%2BwWmzMBDgnDG604ZUmZcyIZPY9QrQMB1pcfojjPmT3WEdDjnSyNvXeRIwWNkUrVa9yyzw06XGQQI139vhEXRZJHgcK0spXfFkFb1DPNWHoKuT4m89%2BNqYD%2F0WYRV%2FXK6DYuWZHfzeaRkNNzMTlZV48xTvS%2Bahy%2FYjkTxhY8%2BsQoc52iWdPSoyFj2UICsfrm9gCkVnld%2FzoPTf0DHaH%2B40Jk%2B6sdzV0mwma1lmL2hIQUhIjk3L6Wfexw0hfZEjM8YNexMUvlrVthr8QbZkZ3UoF32hjiGYpqqJqU8E2kfBHdY1nA3VKHR1foifi7xLV%2F9MLbl4vJLIWyz%2BNVkueFxjqCsu2DqK6XC5bLttghVAxONlTxFJB93Rx3kFT4bEotxgWS3tUdQMKlNq%2FJCjJ99mYoHmv9SacWB6h3pB5ipWQQ%2BEhbgVAi1lyfqeM3NmUQZsn%2FDZSWxmaZ%2Fo4dlPALB50a7w%2FUmBFTre7rTLc6UjJkhs2UkaBb6%2BTiDhq2Wltbw7dgVmXR984tPrXu%2BjHY1EgMkmYaGTsYKfaFUhRWKdwl6d3u%2BdgZgrjuG8nRc%2Ff%2FTZaMThOuNKw8pArFT4hsfczdX978QQGvOBBe5nTDEvqDCBjqkAY5InLqjHVJ4jhD7InRdrE4ub6r9TlYJInMAb1B6C%2B5MFHJ0pf5aPM9OjMNSAKNaDgMl5huooCqYPesfmKS6PLsULhV7Xyl8Zn%2FzG0t5adrK4HcEaL%2BBPsjT%2F%2F86fTiQ5nzjVgpLRA1%2F5CR%2FqDd9DIVGbJ5hvf64lPd0ywn9lecbaQU0EkHFnH34L7JMrRP3oHzOilgnq3ftd3b6dHrDw%2BmM9bni&X-Amz-Signature=df8c150f18a5d41890a289a2cb233b084b77f8dcd7b2714cabe3b1e062d3dd78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
