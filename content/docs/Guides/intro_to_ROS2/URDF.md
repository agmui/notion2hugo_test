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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZL4ZUU%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDAazyXOyM0bbsMNJ%2FLA3t1RzBDYrxbZ2k2JyBk3g1eHwIgG6yIU4%2FyrllSplVTNHro9RIEJ%2FQ5%2FYXoZDnY%2BBBVmxQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIB%2Bjs6cwN4wG4jpircA%2FPgXaxHkmjlUL2TSN3qFzvBOjWVOWJXb9UYpd3nA4jWgWJJ%2BPk4OFaeK%2Bt8tA8paunVXu3zrtG1MqZ6plgITdlCVgHWR9QCy0adGNeJ82%2BIZHzAwP%2FJrq%2B7xF1KfR2a%2F9tPKoNouiY7mJW9r%2FErOg9srHNqW7HgdSB%2Bz%2FksXACRPpvCL2dk%2BQaz5SmwN6jDX9t2WDzrxtDgAcRWTWQW2549U7SJFk1ON2yzjFUTw6B46gSxuZ%2BjflIG7WfLjVENLTfYBLJU%2BOEtI9B1IENa3GiYlhDzfQ9aaksBg8C5myIos1tHfr0oqaR3mzbrTAJ%2FEIS6JHV5DT1S%2FtpxbLJTSzfJ7q0rKeHkmYCMN%2BEiYRbF1ghL%2BkGIAiqYwfQBv23s0Ad9e7PWu1QAuc5NXZT2ZLNsCIUubWpBE32VDd%2BVcBduR1%2F68S2z9Dk4bm8S4uRWW4e53cojbClW%2Ff0su6T8t0VAMJaC%2FLuyzP%2BvTARl9HHoH9AmLH3ZbWqcPFjsb1DxGe503XG0YG7bgAIM94IjG5PMuPN1uad294m%2F9SN6X2CYBggpGbtI4zy9B93kqYNKwM2Q3s80II9sv6wFAk498gsoC2sxEiJoNXqKBsbP%2F3IcFt9qLu8YsA%2B6e1NsMLC26MkGOqUBeOBYFBkjw1i6yMpDXBNXlUvulzSNKzWcw2Oqy64QncnCjckVJe4LGoZHSYdSC0ZO6lT1ysjOJHonuyhHfWBOKmFzHtOxt6AfN%2BDrqo0tYrCJuDkpfQk%2FczIp5Qyrb9ArgPShw8nCHz7gh4pqP%2BbVSjAhTXnO6%2FKgH5rbtMNfMaTPWM3HxKK7AvIA5NILJz8AIDgM3lGDWMhpbCVbQEUrjdKmSIHd&X-Amz-Signature=d3d3e0063e1960a85356af446e0e39ca6b5e03e89c072a714ac2fce1773317a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZL4ZUU%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDAazyXOyM0bbsMNJ%2FLA3t1RzBDYrxbZ2k2JyBk3g1eHwIgG6yIU4%2FyrllSplVTNHro9RIEJ%2FQ5%2FYXoZDnY%2BBBVmxQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIB%2Bjs6cwN4wG4jpircA%2FPgXaxHkmjlUL2TSN3qFzvBOjWVOWJXb9UYpd3nA4jWgWJJ%2BPk4OFaeK%2Bt8tA8paunVXu3zrtG1MqZ6plgITdlCVgHWR9QCy0adGNeJ82%2BIZHzAwP%2FJrq%2B7xF1KfR2a%2F9tPKoNouiY7mJW9r%2FErOg9srHNqW7HgdSB%2Bz%2FksXACRPpvCL2dk%2BQaz5SmwN6jDX9t2WDzrxtDgAcRWTWQW2549U7SJFk1ON2yzjFUTw6B46gSxuZ%2BjflIG7WfLjVENLTfYBLJU%2BOEtI9B1IENa3GiYlhDzfQ9aaksBg8C5myIos1tHfr0oqaR3mzbrTAJ%2FEIS6JHV5DT1S%2FtpxbLJTSzfJ7q0rKeHkmYCMN%2BEiYRbF1ghL%2BkGIAiqYwfQBv23s0Ad9e7PWu1QAuc5NXZT2ZLNsCIUubWpBE32VDd%2BVcBduR1%2F68S2z9Dk4bm8S4uRWW4e53cojbClW%2Ff0su6T8t0VAMJaC%2FLuyzP%2BvTARl9HHoH9AmLH3ZbWqcPFjsb1DxGe503XG0YG7bgAIM94IjG5PMuPN1uad294m%2F9SN6X2CYBggpGbtI4zy9B93kqYNKwM2Q3s80II9sv6wFAk498gsoC2sxEiJoNXqKBsbP%2F3IcFt9qLu8YsA%2B6e1NsMLC26MkGOqUBeOBYFBkjw1i6yMpDXBNXlUvulzSNKzWcw2Oqy64QncnCjckVJe4LGoZHSYdSC0ZO6lT1ysjOJHonuyhHfWBOKmFzHtOxt6AfN%2BDrqo0tYrCJuDkpfQk%2FczIp5Qyrb9ArgPShw8nCHz7gh4pqP%2BbVSjAhTXnO6%2FKgH5rbtMNfMaTPWM3HxKK7AvIA5NILJz8AIDgM3lGDWMhpbCVbQEUrjdKmSIHd&X-Amz-Signature=4c780c1f33f996eede7ef94dfb0c4d5423cf255b61d07d7a4ee5ca9de4c0ab98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
