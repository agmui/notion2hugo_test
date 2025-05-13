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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XORAYIA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFLDOEGghf%2BDmyAvXcInGP5ZpAmnf7fgj%2BVcBzaWWQUTAiEA%2FrSlNDg2sWxq5iC%2FzVSpWRCMyv8CJvFN6BM0yWIkxuAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnO0TM4PBB2v6cgASrcAwJMg%2FQz1DF5ZLYYNOBHzh42n7t%2BacjNMYS67QQkUglId6SoJgj6o9pMYi9bQYfivG6jpAa%2BnkKRr8FX%2BZB7ePvIW5AnnYxVE3jTUWuMu1OnagTUY8PP%2Fnc6aKKgLktn%2BAX0TtP%2BWAqkWmdwIPxoAb%2FVrc8w1i%2BhE%2FWrpsHigWiQQdCEttAdJyVb2sJTpnjVsep3lWuXPL73dXN2kMYQX%2BQuZCva29y78qS2H8vjCFw16PPrZnz5YiVr9UHDRreOQFWVARX7B%2FF6%2BQ7wr1NhWbdeX4zgpO%2B%2BqV6jT4RQ4rpkQhxVerDlMFsQZi1FxxrgH7V4OnNuv9OVqDt%2FndFUGWollxtAmRg5pGSzGqzWw8AzagaYv%2FwLXwdE9RetdbNTg%2FG8srq7Oi6R%2F8t2MnRxtsi6Y21y9Fc%2BNHJdcjryR6BPv0oFogeOrm1WtEwewvgwhEtSGslxdGnYCSGWKs5GhA7SkYk1sqd0xNo5mSjUKsQ%2FJMyGrp4WVVfiXEfk3xTHQ%2FachJNbu7WqShPQxcc4jSezlb2NLaOrpsmQ4c9KQMX6ui1q%2BbpyrE1dqt7agtvP66c59OdCvuNnZjwuauidfVCWzsA5hxSfxBqzSwjFNO2LRDuOGl8mesRTE7a2MMOJjMEGOqUBvk6YjyZhbLLL4Lv0CyZu8vmgw23Cq02kZV5770BWxn40vQ8nk%2BGlmi7A4XrX1h1WILiKesSRqsGCqp9XzCVq2CEEEXiYpy%2FdVR9XlvHHkYdMbgl7IXSF0cmNgTogEqZ%2BRRs3zx2WJ4Z8z2NV8wzRZbHk0Yq4iOzvpCz0ACQp8WiUEBjd2XP6OTf2ScBwFqJaIyjuSb6ZrqqvIorBBBX%2F4Pb%2F86bD&X-Amz-Signature=fcc2be5744aa1ddeab07f202fc78a75e01749f6b340d9651c207aafb870a7f29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XORAYIA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFLDOEGghf%2BDmyAvXcInGP5ZpAmnf7fgj%2BVcBzaWWQUTAiEA%2FrSlNDg2sWxq5iC%2FzVSpWRCMyv8CJvFN6BM0yWIkxuAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnO0TM4PBB2v6cgASrcAwJMg%2FQz1DF5ZLYYNOBHzh42n7t%2BacjNMYS67QQkUglId6SoJgj6o9pMYi9bQYfivG6jpAa%2BnkKRr8FX%2BZB7ePvIW5AnnYxVE3jTUWuMu1OnagTUY8PP%2Fnc6aKKgLktn%2BAX0TtP%2BWAqkWmdwIPxoAb%2FVrc8w1i%2BhE%2FWrpsHigWiQQdCEttAdJyVb2sJTpnjVsep3lWuXPL73dXN2kMYQX%2BQuZCva29y78qS2H8vjCFw16PPrZnz5YiVr9UHDRreOQFWVARX7B%2FF6%2BQ7wr1NhWbdeX4zgpO%2B%2BqV6jT4RQ4rpkQhxVerDlMFsQZi1FxxrgH7V4OnNuv9OVqDt%2FndFUGWollxtAmRg5pGSzGqzWw8AzagaYv%2FwLXwdE9RetdbNTg%2FG8srq7Oi6R%2F8t2MnRxtsi6Y21y9Fc%2BNHJdcjryR6BPv0oFogeOrm1WtEwewvgwhEtSGslxdGnYCSGWKs5GhA7SkYk1sqd0xNo5mSjUKsQ%2FJMyGrp4WVVfiXEfk3xTHQ%2FachJNbu7WqShPQxcc4jSezlb2NLaOrpsmQ4c9KQMX6ui1q%2BbpyrE1dqt7agtvP66c59OdCvuNnZjwuauidfVCWzsA5hxSfxBqzSwjFNO2LRDuOGl8mesRTE7a2MMOJjMEGOqUBvk6YjyZhbLLL4Lv0CyZu8vmgw23Cq02kZV5770BWxn40vQ8nk%2BGlmi7A4XrX1h1WILiKesSRqsGCqp9XzCVq2CEEEXiYpy%2FdVR9XlvHHkYdMbgl7IXSF0cmNgTogEqZ%2BRRs3zx2WJ4Z8z2NV8wzRZbHk0Yq4iOzvpCz0ACQp8WiUEBjd2XP6OTf2ScBwFqJaIyjuSb6ZrqqvIorBBBX%2F4Pb%2F86bD&X-Amz-Signature=f2a1c7843109dde7cc7cfe5fb555e8c8e6af53ac2a25f6ebad17b96596e50fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
