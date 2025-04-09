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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVL4FDH6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCzVYHcyDKHW2xXMERMSpbwUwenWEs2Ft4DpE9K%2BjAVWQIgalNjK4cVcihFxY01O4zy%2F5HGaWrJO%2FxbT8R6vd%2BijyIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRcyj%2FyZ9ycBBSoRyrcA5rByfMHdafgJ6uQ1vH4SMnHPqvdoyJgjM%2BqLctWQo0S0enI8uOjJGgLwv6d9IdXFKN15mMi0SkOuzDj4%2BuFVuOs55L26jLGJTWnc2PPYPR56TktnO5%2BZMv%2F%2F4A%2FlXo5A46wcC7A60bmhxPRczt4IbxVLR%2BZ08sbdAqkWg8Im7QSfb6DIDAaQJBwKybpoSyvxHbzyewZ0a5pcoPAmUDItVuypve2%2FfqzHLZlki4C7NSU6kK8nfJxe1O8eRiQzFij6EkcNmep%2FD8%2FAbnAW3cg%2FC%2Fn2T2q3uNKY3V%2BqeFQaHTPNF6T7LZIlx2zq6vjSHGHgUsdOFfGbvRFFK7jY8Y2AWfCW9zewJEgw2anMegTXp598skMkwnqWWHbhPq2fSDf%2FLj0wQP5kEXOY2i0cULA71KY4eDoZgkJMY9MohaJBJ7ouLjDV4zas3QkpQzOxebz15Zqxl5CY52C8F5sWDIicLs%2Bov3A%2BPuuX325PXC4pm%2BevpUfDqTzzccSzy3wGok38pJtOWhqviRxBNxkdg60gRHJ8vIxfjjhEzq3Ef5ETyW7sATHxmo3BLJNK71u%2FIeDxBsGARDulRk%2Bz1BLv8DpoiIEmT4fsTVW1Z%2Bmmh%2Bl%2BdnQMJWztPv4a5UIm8WNMOWy2L8GOqUBw%2FhB1AZhlSw1ZWMwI5xz5bjJBSsDUE2gNWs0XQY73PdEMG1lFIdrt0YOLFw6zi6VOcjQFkwxsxOrjGKBmIIjxkAQ2BODW4vB73Rod8EUxLdFQkRZdFiNgJ5%2B4VSwdcfcySd8v0r%2BLwZ8c3HqXudt2mb8D0dqLRCvD1cScMfpsWU%2FVY98l%2FCrEaW9Kgn8O6EJBPEN99Mlmz6%2FXNZMi%2FTQp82eO60e&X-Amz-Signature=be45e94bdb063f6e36c86fbcc115bde68451b02787be9efdc6ba10f393543377&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVL4FDH6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCzVYHcyDKHW2xXMERMSpbwUwenWEs2Ft4DpE9K%2BjAVWQIgalNjK4cVcihFxY01O4zy%2F5HGaWrJO%2FxbT8R6vd%2BijyIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRcyj%2FyZ9ycBBSoRyrcA5rByfMHdafgJ6uQ1vH4SMnHPqvdoyJgjM%2BqLctWQo0S0enI8uOjJGgLwv6d9IdXFKN15mMi0SkOuzDj4%2BuFVuOs55L26jLGJTWnc2PPYPR56TktnO5%2BZMv%2F%2F4A%2FlXo5A46wcC7A60bmhxPRczt4IbxVLR%2BZ08sbdAqkWg8Im7QSfb6DIDAaQJBwKybpoSyvxHbzyewZ0a5pcoPAmUDItVuypve2%2FfqzHLZlki4C7NSU6kK8nfJxe1O8eRiQzFij6EkcNmep%2FD8%2FAbnAW3cg%2FC%2Fn2T2q3uNKY3V%2BqeFQaHTPNF6T7LZIlx2zq6vjSHGHgUsdOFfGbvRFFK7jY8Y2AWfCW9zewJEgw2anMegTXp598skMkwnqWWHbhPq2fSDf%2FLj0wQP5kEXOY2i0cULA71KY4eDoZgkJMY9MohaJBJ7ouLjDV4zas3QkpQzOxebz15Zqxl5CY52C8F5sWDIicLs%2Bov3A%2BPuuX325PXC4pm%2BevpUfDqTzzccSzy3wGok38pJtOWhqviRxBNxkdg60gRHJ8vIxfjjhEzq3Ef5ETyW7sATHxmo3BLJNK71u%2FIeDxBsGARDulRk%2Bz1BLv8DpoiIEmT4fsTVW1Z%2Bmmh%2Bl%2BdnQMJWztPv4a5UIm8WNMOWy2L8GOqUBw%2FhB1AZhlSw1ZWMwI5xz5bjJBSsDUE2gNWs0XQY73PdEMG1lFIdrt0YOLFw6zi6VOcjQFkwxsxOrjGKBmIIjxkAQ2BODW4vB73Rod8EUxLdFQkRZdFiNgJ5%2B4VSwdcfcySd8v0r%2BLwZ8c3HqXudt2mb8D0dqLRCvD1cScMfpsWU%2FVY98l%2FCrEaW9Kgn8O6EJBPEN99Mlmz6%2FXNZMi%2FTQp82eO60e&X-Amz-Signature=74652f25a981d8fbd0e2b8b44e020d56f9df6c7d662113eb1cb43bb1c6805ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
