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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSJ5B4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo9ABzv9KzYyoI7BqjkHDynNstq%2FEHr81XBzY6%2FOADHAiEAs9eJm68oiLmj%2FSlS6G98bVtgxybSa%2BMWssO9UPTd6NsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56r8n6xa7ohgh4iyrcA46rdNeh%2B6TPUC6vlz0IRT1qNC5ZHv%2F9XpQi5VjrYtqsalItNgchXltmtE5Q%2BBHEqhbU4rEw%2BlHZE%2BIWxQFW000NNFaVp05S%2BY9kRYEf%2BVfVX8vwaXwQDZaBnEFwdn%2FCBJUBsNvQRlOM5xUly%2FKhdOlKgKheh3UPaF7bKnl5JyQ9ocBCHWmPCiBk2WuD9KLi1I9fP0jbwtQvhVXSQFp4dtYLKOyrc7PUHl9wziVVLpPyxYEMmgu%2BQpl60Ic70PGwOPYJ9CbusiSUDa07XMusDrpetqGKBWnuG%2BenGe87Bivpn5rxztCleX%2BLWADdY8zRrtqmQ6mQBKZPwxyntZVIK%2Fo6QeSFxOJxc7m7V62FCFBb9o5K4uCHKsG6daneXIeq6wdTi4n9aWAbomMhTBpLRGl7TFu1PjhCeDMwIQpPv%2BXV05Se%2BPuj9w4D50Y81iMGKK3UwoMyS2WjVNspwmsuTRA3VQSvC2IzDnEa7F3VcVawkX4yHYnwCcV%2FFE0oXZO8c2o2YetpSQO5zN2tOp4n5ZYJjYlkqWkkNyOMcxn4beMiECU9YYEl%2BeDWZ1rt5A3%2BsgRZ0Rv6NqpsU3MO6e3Ew9W9FglqIWV5MUbmMRj%2BUWaMLva%2F%2Bgq%2FszRWbSPDMICWpMIGOqUBQOi9wveZi2dMOUIIRyZLHWc6uHL2ZbVvPVOe2yo3MVIiXGHfEDy%2BIEua1xs2DM6zDnZeTlPdLu9tzbi4U6hy1yCm74x%2BILy7qZPnZZStwNJ2yWcR5Dj7IYI4JQITCgTrPYOlBDThwjechV4vcKSWXj7bYunFL5NdZHxfF12uMe351ilm2dPpRlWi2SGQMz3iQVJUIxHIncqLUGH%2F3Qc399DIWi8s&X-Amz-Signature=8524a9ba25ced2db4b2f2849d8b00971a0cb82ceff9a55b130113466a8e98da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSJ5B4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo9ABzv9KzYyoI7BqjkHDynNstq%2FEHr81XBzY6%2FOADHAiEAs9eJm68oiLmj%2FSlS6G98bVtgxybSa%2BMWssO9UPTd6NsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56r8n6xa7ohgh4iyrcA46rdNeh%2B6TPUC6vlz0IRT1qNC5ZHv%2F9XpQi5VjrYtqsalItNgchXltmtE5Q%2BBHEqhbU4rEw%2BlHZE%2BIWxQFW000NNFaVp05S%2BY9kRYEf%2BVfVX8vwaXwQDZaBnEFwdn%2FCBJUBsNvQRlOM5xUly%2FKhdOlKgKheh3UPaF7bKnl5JyQ9ocBCHWmPCiBk2WuD9KLi1I9fP0jbwtQvhVXSQFp4dtYLKOyrc7PUHl9wziVVLpPyxYEMmgu%2BQpl60Ic70PGwOPYJ9CbusiSUDa07XMusDrpetqGKBWnuG%2BenGe87Bivpn5rxztCleX%2BLWADdY8zRrtqmQ6mQBKZPwxyntZVIK%2Fo6QeSFxOJxc7m7V62FCFBb9o5K4uCHKsG6daneXIeq6wdTi4n9aWAbomMhTBpLRGl7TFu1PjhCeDMwIQpPv%2BXV05Se%2BPuj9w4D50Y81iMGKK3UwoMyS2WjVNspwmsuTRA3VQSvC2IzDnEa7F3VcVawkX4yHYnwCcV%2FFE0oXZO8c2o2YetpSQO5zN2tOp4n5ZYJjYlkqWkkNyOMcxn4beMiECU9YYEl%2BeDWZ1rt5A3%2BsgRZ0Rv6NqpsU3MO6e3Ew9W9FglqIWV5MUbmMRj%2BUWaMLva%2F%2Bgq%2FszRWbSPDMICWpMIGOqUBQOi9wveZi2dMOUIIRyZLHWc6uHL2ZbVvPVOe2yo3MVIiXGHfEDy%2BIEua1xs2DM6zDnZeTlPdLu9tzbi4U6hy1yCm74x%2BILy7qZPnZZStwNJ2yWcR5Dj7IYI4JQITCgTrPYOlBDThwjechV4vcKSWXj7bYunFL5NdZHxfF12uMe351ilm2dPpRlWi2SGQMz3iQVJUIxHIncqLUGH%2F3Qc399DIWi8s&X-Amz-Signature=591f31ccf6ab40d34f92ae559eec6466b226adfd22e61d8962be76e8f46b62d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
