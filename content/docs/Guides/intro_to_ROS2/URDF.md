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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73PSPPD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWKXSl7USIr0DyfYbQm%2BR5v7tbP8kqTmLC5vokf6ibkAiAquyl%2BSg5HToT4QHCjaTi3xGA5kL5FONW1GvmVhNhO4SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVivLijVhsi3OVsLMKtwDgrHLjDRvBYLTuUvPL6a462Db0ZQ%2FwzMa8CztCdUVgD5mASvx1e2kKsXEMPazmejyXgkWA%2FQOfTLrFhsu0hwA1gSg8HCbKm8hdf9NWVxV6NqcAGeCoi494FNDXXeIISPKolNvtU0R2IJJr6Ui8z1q0HjAt2zjmGrzWpWAbdAUeDSgu6tjAk7bMV9l%2BlGELmFwBNG2fL0m%2BGEDEYtCfvDaWE2o6N7nKmQq4ZwJENmMJ%2BUDx3NehlalB5y%2FGq5o6pYbf4z4F4X6T3f1%2FNtfKtmsvpdqPs%2FwdApRrFYuOxb3HGdMUiky3ehptPlVKaZQfBFZzFluNhe3tvOHte%2FtpbCyJyXCfUDTQ8QQyclfVKZtjVUveds%2F%2BCNAxhyQxCcIPT6z31Urxdt57vmx6VgawQFzDRRnzEC0eRoCL6VQsefG%2FYtHBfSmlSQmmEy4L%2BaPnTUUXdluT3%2FaD%2BQcvRYKT5EBlIFaOV5C61SzZgBT3OezwBTIAMelO4g1p41ZsAFoyzk4GVPyzRTgabPGroKhApmwGH78IXDSozwERssvby2%2BISgZPyAOyoEfvdSJMxIVdVgR1iSICButbMP9SqGIYJaYgkSVtILm35xCJNgFsJAi0q%2BF%2Bf%2FhcKSDJlF5jcYw9LfuwwY6pgFcOHVOPqj62AgPEtnQ12qXySjoZCkQijQgBVA6l6q9MYbuqmCD%2BLAtRdAb%2Fv7m3ql9aqiqCfyLO67lwuRyldlALD%2BxDkSe9FeFRrYDJFpJFbYaxKc80%2BSwPgCg3AUKLFSbOhURMNiYyrZNhDx2XKgP34Cm5SSB7Qqc7xhDmj81cSx8UdrgdwTE2Qw79yFtG1bawZxI9FqQwKrU4aO6wKKR4MAfYxEX&X-Amz-Signature=0f5196fdf0e47251eb15c2e446cea6243b3144d4a691e949aaf8c781afb3ff54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73PSPPD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWKXSl7USIr0DyfYbQm%2BR5v7tbP8kqTmLC5vokf6ibkAiAquyl%2BSg5HToT4QHCjaTi3xGA5kL5FONW1GvmVhNhO4SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVivLijVhsi3OVsLMKtwDgrHLjDRvBYLTuUvPL6a462Db0ZQ%2FwzMa8CztCdUVgD5mASvx1e2kKsXEMPazmejyXgkWA%2FQOfTLrFhsu0hwA1gSg8HCbKm8hdf9NWVxV6NqcAGeCoi494FNDXXeIISPKolNvtU0R2IJJr6Ui8z1q0HjAt2zjmGrzWpWAbdAUeDSgu6tjAk7bMV9l%2BlGELmFwBNG2fL0m%2BGEDEYtCfvDaWE2o6N7nKmQq4ZwJENmMJ%2BUDx3NehlalB5y%2FGq5o6pYbf4z4F4X6T3f1%2FNtfKtmsvpdqPs%2FwdApRrFYuOxb3HGdMUiky3ehptPlVKaZQfBFZzFluNhe3tvOHte%2FtpbCyJyXCfUDTQ8QQyclfVKZtjVUveds%2F%2BCNAxhyQxCcIPT6z31Urxdt57vmx6VgawQFzDRRnzEC0eRoCL6VQsefG%2FYtHBfSmlSQmmEy4L%2BaPnTUUXdluT3%2FaD%2BQcvRYKT5EBlIFaOV5C61SzZgBT3OezwBTIAMelO4g1p41ZsAFoyzk4GVPyzRTgabPGroKhApmwGH78IXDSozwERssvby2%2BISgZPyAOyoEfvdSJMxIVdVgR1iSICButbMP9SqGIYJaYgkSVtILm35xCJNgFsJAi0q%2BF%2Bf%2FhcKSDJlF5jcYw9LfuwwY6pgFcOHVOPqj62AgPEtnQ12qXySjoZCkQijQgBVA6l6q9MYbuqmCD%2BLAtRdAb%2Fv7m3ql9aqiqCfyLO67lwuRyldlALD%2BxDkSe9FeFRrYDJFpJFbYaxKc80%2BSwPgCg3AUKLFSbOhURMNiYyrZNhDx2XKgP34Cm5SSB7Qqc7xhDmj81cSx8UdrgdwTE2Qw79yFtG1bawZxI9FqQwKrU4aO6wKKR4MAfYxEX&X-Amz-Signature=50a858c7fb998e121486c3fd62d7175244a5628b46319ade16d4cad0ae7400a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
