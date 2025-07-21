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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLSKNPM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BhSh1QI24HVTytPn2K5M5Nk701hg7f%2BA45DswFzZSKAIhANH5Mq42kGndKQ2DEA8N1AioDObCa1ZbQr0HskCUG%2FgoKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxgeNWzCqMAkSmT%2Bkq3ANnGFUC48nXCADeSES6xAs9aU8ObGpctl7QcZ8IVn%2F8l0G7BZBWzLUzyxISp9QPS9EKpBt4O8gjel4yfLZ09k2Os9%2BrY7Vf1aWZ77C4snqY%2F8nPG4AGtmLimLX1PPwRjC3n3hRaJD%2BNCKCrD1QFtruN25qUgU%2FOIQ10Z9hnwyQIlWaLg5El8tqurftE34D9dRshLzaTzOE%2Ff1P2MnL4Og8omJVldsHVUerRkPk6LDgfnL%2BQuBUO8Jx0NX9Td1pLQz3YfeWclI5OfjAqcDOL4yTwQfTYpgx6NV9W1PK%2BMKbO%2BXqFG1uTJEiM4YInLjmMicjETadwXIrMDh2Ded4EJHzT8gRNZy1z4MrD%2BYxYNKwE5CMLb1XY%2BqONuipP759YfWcWvQKlodHj%2BVaXvmlrafmKHundZy7TTa9OgTg9tzXZj%2B6rvOQ9DWGsurcYpRgDihboJZ5wNblho7pda01HT8cd0VjloYocuY2UEytKggaJhrInXJn3x1XFy7jnER%2FR%2FH6j9ZM86Q1K7ok9DKn4lf99SE%2FfMaJLuPR1Lzx4gIhAsqAe1JXSp1GF12eQcXj2oXXhYWm0v37JA2uku14%2FLJLiBV%2FptzeGGDryOcIZrpDv9OsvmRAvgr4lkKC2vjCl1%2FrDBjqkAayXcM7q%2F3VTjXhMpy%2BTG8RMBCVNkmR2M5E%2BxeA6mRETOQoQMUg9VIZRlJHqh1XupN0LmqOom8wB24fufx35dhsNbXEhCQwYtNVP56VhoOiBu6hwcYpBWuPHTxCj4Az9IMJqo%2F%2BP0OhkFFSk9nWl%2FyYSoGOcf8przWzHV%2BubqXR0U62F0sDJ9EtnSuVGY%2BeQvS%2BT7vWQdLUdwt%2Bzjllh%2FezZk1Ms&X-Amz-Signature=8591a19fc91315ae3ebc23cc2b13e1428961f5ea595e307cb9794cf5abe29f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLSKNPM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BhSh1QI24HVTytPn2K5M5Nk701hg7f%2BA45DswFzZSKAIhANH5Mq42kGndKQ2DEA8N1AioDObCa1ZbQr0HskCUG%2FgoKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxgeNWzCqMAkSmT%2Bkq3ANnGFUC48nXCADeSES6xAs9aU8ObGpctl7QcZ8IVn%2F8l0G7BZBWzLUzyxISp9QPS9EKpBt4O8gjel4yfLZ09k2Os9%2BrY7Vf1aWZ77C4snqY%2F8nPG4AGtmLimLX1PPwRjC3n3hRaJD%2BNCKCrD1QFtruN25qUgU%2FOIQ10Z9hnwyQIlWaLg5El8tqurftE34D9dRshLzaTzOE%2Ff1P2MnL4Og8omJVldsHVUerRkPk6LDgfnL%2BQuBUO8Jx0NX9Td1pLQz3YfeWclI5OfjAqcDOL4yTwQfTYpgx6NV9W1PK%2BMKbO%2BXqFG1uTJEiM4YInLjmMicjETadwXIrMDh2Ded4EJHzT8gRNZy1z4MrD%2BYxYNKwE5CMLb1XY%2BqONuipP759YfWcWvQKlodHj%2BVaXvmlrafmKHundZy7TTa9OgTg9tzXZj%2B6rvOQ9DWGsurcYpRgDihboJZ5wNblho7pda01HT8cd0VjloYocuY2UEytKggaJhrInXJn3x1XFy7jnER%2FR%2FH6j9ZM86Q1K7ok9DKn4lf99SE%2FfMaJLuPR1Lzx4gIhAsqAe1JXSp1GF12eQcXj2oXXhYWm0v37JA2uku14%2FLJLiBV%2FptzeGGDryOcIZrpDv9OsvmRAvgr4lkKC2vjCl1%2FrDBjqkAayXcM7q%2F3VTjXhMpy%2BTG8RMBCVNkmR2M5E%2BxeA6mRETOQoQMUg9VIZRlJHqh1XupN0LmqOom8wB24fufx35dhsNbXEhCQwYtNVP56VhoOiBu6hwcYpBWuPHTxCj4Az9IMJqo%2F%2BP0OhkFFSk9nWl%2FyYSoGOcf8przWzHV%2BubqXR0U62F0sDJ9EtnSuVGY%2BeQvS%2BT7vWQdLUdwt%2Bzjllh%2FezZk1Ms&X-Amz-Signature=3b32e6354e964d3518a589a1f97b4a58ba479163120a5356d5575cdc9996fc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
