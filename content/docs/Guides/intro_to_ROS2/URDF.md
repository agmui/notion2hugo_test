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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3TIPDB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwEzKSCAE4gKh1fHyqVy%2FA9agdDG8Nfh9rbV5kfhnqPAiEA99mWzoHhEwtYvUAG229YdXNzh69LessjjtLHLq%2BFTwAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIf2dSecT3D0OYPnSrcAxWxq6vkt%2BbF0L8fkBmorIJLt1JSvkM1r%2BxpNQaBIKqCjXI%2FSm3J%2BXUofuefnJA2cG5utS5J0xRXnkaZEj%2FWNdJ8lBym0nAYhhsQT5UHl%2BhRHaJby%2FpGI3lioBouo6mlKKzYZksFMFCdClCB%2Fy2z5CQxJ%2FYgRdTf7BXiO5ypJ3XGktK%2FKvi%2FjTo%2BAFnDR22z0y13eRZeMK1VN7CA%2BOeVhrk01zE8pSrHEagvuYCs8kmyaUx4gpbAjbTZUjlOXdZM0eutY6douXNbAeVz50p7iggfnYYjSljSRukMBibHoUATxgAXqGrYVxZV5Y1RXXuuLsBbBmvOQ4XFJ4s7I59RFEoeafNmE38ak0ng5jhEnmTD9X0W5nwyJ0uknjn%2BPCcmRsINYBh7CwXyhuuO%2F8BJS04lOIqr5xkSGO2erIMpspj9Qrag09LP4KJN%2BWUYAPAoxQZmk1VBAbOYB8mOt1ANsY8xb8vWDXLtfhpV%2FnNC732KMTC9kzU4N7LahoUeXJaU9JlkFYZ8nLRsgXW%2FM5sFkWd%2FqvK0e07DMMxMf6fL3tTH1DsGVZU1SWsOMcng%2BTrWDW3f0%2Folr6wMQYsZQSjfg14hlfkpQYw7ycq%2B3TajM8t4QutPx4qLOFWqJ05OMMKflL4GOqUBoVo23tIMqzETxMHVxhNjNRuVk9ma2w8qsW71WWlA3%2Fby2qXmNxi4qEIVkGRXrG7nBixeKZDiIlFMgoShOnH7lRp8k5CDhu0B68zry45JeTzC9fRjvWhpDv3qUa3WBvkYtYAy411E2Wy9n%2BxyPYM7qpswl6IRtry6UeIM91YsHmims9Nrp1UBmyoJIravl1FXaCZD11r2rJYwMjb%2FbltIFGu%2F%2BWqC&X-Amz-Signature=b44203e6bf1564026c33d1abf773b7c7c7409ca62880d04798351bfdf887dd91&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK3TIPDB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwEzKSCAE4gKh1fHyqVy%2FA9agdDG8Nfh9rbV5kfhnqPAiEA99mWzoHhEwtYvUAG229YdXNzh69LessjjtLHLq%2BFTwAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIf2dSecT3D0OYPnSrcAxWxq6vkt%2BbF0L8fkBmorIJLt1JSvkM1r%2BxpNQaBIKqCjXI%2FSm3J%2BXUofuefnJA2cG5utS5J0xRXnkaZEj%2FWNdJ8lBym0nAYhhsQT5UHl%2BhRHaJby%2FpGI3lioBouo6mlKKzYZksFMFCdClCB%2Fy2z5CQxJ%2FYgRdTf7BXiO5ypJ3XGktK%2FKvi%2FjTo%2BAFnDR22z0y13eRZeMK1VN7CA%2BOeVhrk01zE8pSrHEagvuYCs8kmyaUx4gpbAjbTZUjlOXdZM0eutY6douXNbAeVz50p7iggfnYYjSljSRukMBibHoUATxgAXqGrYVxZV5Y1RXXuuLsBbBmvOQ4XFJ4s7I59RFEoeafNmE38ak0ng5jhEnmTD9X0W5nwyJ0uknjn%2BPCcmRsINYBh7CwXyhuuO%2F8BJS04lOIqr5xkSGO2erIMpspj9Qrag09LP4KJN%2BWUYAPAoxQZmk1VBAbOYB8mOt1ANsY8xb8vWDXLtfhpV%2FnNC732KMTC9kzU4N7LahoUeXJaU9JlkFYZ8nLRsgXW%2FM5sFkWd%2FqvK0e07DMMxMf6fL3tTH1DsGVZU1SWsOMcng%2BTrWDW3f0%2Folr6wMQYsZQSjfg14hlfkpQYw7ycq%2B3TajM8t4QutPx4qLOFWqJ05OMMKflL4GOqUBoVo23tIMqzETxMHVxhNjNRuVk9ma2w8qsW71WWlA3%2Fby2qXmNxi4qEIVkGRXrG7nBixeKZDiIlFMgoShOnH7lRp8k5CDhu0B68zry45JeTzC9fRjvWhpDv3qUa3WBvkYtYAy411E2Wy9n%2BxyPYM7qpswl6IRtry6UeIM91YsHmims9Nrp1UBmyoJIravl1FXaCZD11r2rJYwMjb%2FbltIFGu%2F%2BWqC&X-Amz-Signature=49a8d729e903d0e30a27a2e93bdfc486842220dc12995fdf9cb056e5f97beb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
