---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6AFB25%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD6VzPUiWv%2Fl1AmJPwDQJRYh0mkKSJ7NnUghiHn5hdgxwIgaiX3%2BHnVviDaNTsogmOYHen6wauER1g3KkLO83TAbtwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEzDGRfcdpw%2BdCAdSrcAxn0vBLFB6J%2FNFFDo8XSrR26%2Fa%2FqW4U3gFnZL7iK33kj1Zp5txKZC3FmB%2BS9WxYGxnBQi4aurfzl1vUKHf0RaaqIz26%2B9E75iTAcZcgdH4L8W6V5jkgRB9Yo1fWx5yrv3rnPv79%2FlDiFfIXb%2F24DYxWb0PlokEAodg4jitDbSII%2B4tiAPD1Wvcx4tYdnfi%2BJOKycp035xnpo6sa7%2F5urcD%2Fpx20TeZj0fxZXgsOFwiHpbUksJ9kkCFPSnU8qRqdTERwNXMj8hjOXDIZcPdDPWXYVNAjAGUHQ4t87UKhZ0jER7sfedef%2BT1707Z0dHnRDOfScx%2FSfFU0h4LLXELaBr6XtVSo%2BoDnHeo2Q7PM2SAEHwwVz9B9at%2FVKCkpUMLjgEne43gd1A1C1qXRSBVjT8cN573Rqp0jMtdNDVY7tBjnj9PXRbKAusUusiuJPj53QUeabe%2BwVLX0zJICVxny3u0uCUyip2hb1piznmS6MQR2sgZdqo2Q1VIC8ieObAnTCKtt73bu7spLY7pDlCbEWnf3yxqcNFMdKqC%2BhEo9fDDZX8SWPSIgNO7Tfj31OwGkG8avP7z6Qu8zb58ezCA%2Fx9qsz6reb3vn%2FXhnsrkTyeHmDtm06YTlGkll%2BWxcoMMPf2cQGOqUBLBc9ovY0ikH0O7mv6kOUtBsSlfy09q9cEH3H%2F0GX97iblVFeCoY7Mxvyms9JP8NFSWzmUzWBElZRsPPv889Nrc5UG9%2Fz1PFTUC%2FKNhEHFQ%2F0UPId6BQl0xeF6lWw5rrI0pQXJa9%2F6QNQzNZMWqFfRTg6Kap71XpWTTZIZrOsAx%2FleH%2BK0LXxpcQXoeSxHms3Mbh%2BjH7QIdXk%2BEe55wiVvbFWopQX&X-Amz-Signature=3ddaf0002d7270d9a4d1c503a0be12b88d2b502a36bd746a2db08ea87c46e56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6AFB25%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD6VzPUiWv%2Fl1AmJPwDQJRYh0mkKSJ7NnUghiHn5hdgxwIgaiX3%2BHnVviDaNTsogmOYHen6wauER1g3KkLO83TAbtwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEzDGRfcdpw%2BdCAdSrcAxn0vBLFB6J%2FNFFDo8XSrR26%2Fa%2FqW4U3gFnZL7iK33kj1Zp5txKZC3FmB%2BS9WxYGxnBQi4aurfzl1vUKHf0RaaqIz26%2B9E75iTAcZcgdH4L8W6V5jkgRB9Yo1fWx5yrv3rnPv79%2FlDiFfIXb%2F24DYxWb0PlokEAodg4jitDbSII%2B4tiAPD1Wvcx4tYdnfi%2BJOKycp035xnpo6sa7%2F5urcD%2Fpx20TeZj0fxZXgsOFwiHpbUksJ9kkCFPSnU8qRqdTERwNXMj8hjOXDIZcPdDPWXYVNAjAGUHQ4t87UKhZ0jER7sfedef%2BT1707Z0dHnRDOfScx%2FSfFU0h4LLXELaBr6XtVSo%2BoDnHeo2Q7PM2SAEHwwVz9B9at%2FVKCkpUMLjgEne43gd1A1C1qXRSBVjT8cN573Rqp0jMtdNDVY7tBjnj9PXRbKAusUusiuJPj53QUeabe%2BwVLX0zJICVxny3u0uCUyip2hb1piznmS6MQR2sgZdqo2Q1VIC8ieObAnTCKtt73bu7spLY7pDlCbEWnf3yxqcNFMdKqC%2BhEo9fDDZX8SWPSIgNO7Tfj31OwGkG8avP7z6Qu8zb58ezCA%2Fx9qsz6reb3vn%2FXhnsrkTyeHmDtm06YTlGkll%2BWxcoMMPf2cQGOqUBLBc9ovY0ikH0O7mv6kOUtBsSlfy09q9cEH3H%2F0GX97iblVFeCoY7Mxvyms9JP8NFSWzmUzWBElZRsPPv889Nrc5UG9%2Fz1PFTUC%2FKNhEHFQ%2F0UPId6BQl0xeF6lWw5rrI0pQXJa9%2F6QNQzNZMWqFfRTg6Kap71XpWTTZIZrOsAx%2FleH%2BK0LXxpcQXoeSxHms3Mbh%2BjH7QIdXk%2BEe55wiVvbFWopQX&X-Amz-Signature=8295fe037dfe8b82d82277ff8cf57656a84156d2a6b0c0d5409faffbe614b4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
