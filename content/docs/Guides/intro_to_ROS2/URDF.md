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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ7YL7WP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBymvvDs8N8fYf5ysM1cZwFUAD8Vlw98QGEVRp52g0KjAiEAjMiTwQ%2B565xTlmGlWhLs9Yf3gw8h0ObRd6l7iXd%2FdAMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVVT%2BjwTIap6JOhhCrcA2NcbxFfZjJTA05m50HUJ9PBuL%2BgnsUF38VwCzhw8tAyGle7C1oIpwiiG4bZsYR0lDOgDdricrpAC4KF6Zu3Kb6Avt2zEqXLJtD58bFUxtV19YaQ5NdAf49fqmXGCgF4nP6r%2BUoJ4G288laN%2F7UC%2BuSHvUsbQFYcSoduP1pve4UvsYanmAl%2FAxYHcr7Lwn%2Bw8OG6AodebXTG6u8AwiLWpZ4AsQ5Yal9oVXppyhAN1EoTy612k8TcPoU8x1b%2B%2B9m0EQi4n7s8StaUOIdjKMQitoBOPS38siCq1NsD04MbGh2HM3xEx120LErIUOLd%2FV3mDuIBydVy3XyK%2BN5rV%2F5WNq3IkueXuCZ3IYgl7thj6ZdCxVApekB%2FOOxXWCtLrpRl05aYh2%2F1%2B8PDW3XepPT%2FB9kmIesjgQZ1TmqoB28tMO9F8ARqW6qbPX79xYB3rlh93v6u7wGxe%2BBamT1hbdEK%2BHdpLXp0PLOZsdsUQy2cH1vShCzc5AgLsrFykA2kWJAaZPrMFiR2xjATA%2FIwrPw7xl493j63lBhodJw83nVXjM2Som3yd%2Bom1mXa2ftSjdUwUrP4L4tYVji4%2Bvb6dpBFXuEYdle69XqI80m5Z%2F0MaJZ0OT9ZgXRJ7SQE3EPzMOO6lMMGOqUBatH4ghDqNQxC%2Bu3vNwdU%2BZ74Jl2UPRflbeEyUdlvhWUvrX6jrzxk9KePA1GRAEuZsw1TV8Me06SSfgr1Hrmj2iaqILN4E6wLvJXPn7w6mOIEhhN1SMXbhRqX8gkuFllp4s2zX2JG9PR%2BSEC9U1VT6fX3KcUf7XI5YJCN8%2Bie48jDZcYeKiclr6Xljo78FqRBQ8387B%2BhfyrYnb0T94EILM0TuCKo&X-Amz-Signature=984d04bdc650dcc851672dddb3e18a8848aade7b169be93455e221eb37d1cb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ7YL7WP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBymvvDs8N8fYf5ysM1cZwFUAD8Vlw98QGEVRp52g0KjAiEAjMiTwQ%2B565xTlmGlWhLs9Yf3gw8h0ObRd6l7iXd%2FdAMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVVT%2BjwTIap6JOhhCrcA2NcbxFfZjJTA05m50HUJ9PBuL%2BgnsUF38VwCzhw8tAyGle7C1oIpwiiG4bZsYR0lDOgDdricrpAC4KF6Zu3Kb6Avt2zEqXLJtD58bFUxtV19YaQ5NdAf49fqmXGCgF4nP6r%2BUoJ4G288laN%2F7UC%2BuSHvUsbQFYcSoduP1pve4UvsYanmAl%2FAxYHcr7Lwn%2Bw8OG6AodebXTG6u8AwiLWpZ4AsQ5Yal9oVXppyhAN1EoTy612k8TcPoU8x1b%2B%2B9m0EQi4n7s8StaUOIdjKMQitoBOPS38siCq1NsD04MbGh2HM3xEx120LErIUOLd%2FV3mDuIBydVy3XyK%2BN5rV%2F5WNq3IkueXuCZ3IYgl7thj6ZdCxVApekB%2FOOxXWCtLrpRl05aYh2%2F1%2B8PDW3XepPT%2FB9kmIesjgQZ1TmqoB28tMO9F8ARqW6qbPX79xYB3rlh93v6u7wGxe%2BBamT1hbdEK%2BHdpLXp0PLOZsdsUQy2cH1vShCzc5AgLsrFykA2kWJAaZPrMFiR2xjATA%2FIwrPw7xl493j63lBhodJw83nVXjM2Som3yd%2Bom1mXa2ftSjdUwUrP4L4tYVji4%2Bvb6dpBFXuEYdle69XqI80m5Z%2F0MaJZ0OT9ZgXRJ7SQE3EPzMOO6lMMGOqUBatH4ghDqNQxC%2Bu3vNwdU%2BZ74Jl2UPRflbeEyUdlvhWUvrX6jrzxk9KePA1GRAEuZsw1TV8Me06SSfgr1Hrmj2iaqILN4E6wLvJXPn7w6mOIEhhN1SMXbhRqX8gkuFllp4s2zX2JG9PR%2BSEC9U1VT6fX3KcUf7XI5YJCN8%2Bie48jDZcYeKiclr6Xljo78FqRBQ8387B%2BhfyrYnb0T94EILM0TuCKo&X-Amz-Signature=0ba33894b75a610785eed180e03cf1e3c473f4c0062261363184699cd88be3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
