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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WEHTQ6N%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhuGe9DVmRYIW1GahdX7T2%2F0xkwXkkYWJK8ubDm7eGeAiEArAs0oXS8cSQIKlz2RZTsUiEpgxhWBIpaon5QMXjXY14qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEH3lc4FrE9Im%2FD0QyrcA0dgt8VbufcPKNWJu1C7JuxhM%2BvJ0xcdd1SwWXcQ6qoIGrY%2BBPuLOkxod9eKV%2F8xGC83ZSKfyzZz8Q5sJOxX81V0uzZE5ubbjElwSWlx4ANFCciJV642egqslrMrLbOy2DGsDr8hdUnqsPPpvj28ny1MOnxpcUhhI7dfEpK9qfpKqW%2BCsPNkBQWFbT9BONNsufJ91j4j4jXpYMAJZRe8xt4Nms5fROVkL2p1g5poVhV3BBXAytu05WAUcatMsT%2BXy7xLbjfCMYEm75WZ8Nnktc3C8ucepdBMwGQRwuKDxVx6bKq0d6%2BftDEKe%2BBaNYSb5RbCZC8N0nPsa%2FmX6YKggBKnpDAYrdVvboFoHEI%2BBMNvgTTkzMzNbh6Vf3PY19sr5JqzGN6XWkLgoMlnFmnALUgGarkU3O9v6nCEg%2FlXVOPPhWBrBeV%2FthyoWniLQvR2HiYAg%2BjXETE2%2FD5euVsnYsEGeOIfAkP241Q%2Fxz6LUvdAhPw%2BShbHuTkdRKfnGfhgyfxHjE99kINWYHQ%2FbX%2Fmag80wnndB11goPWw1TbESwcC79nepo4AXcPyUQe7UaQd%2F96jWIcb0vblixkFkPA0aH%2Bp5noHHfkejvG4fdQU6QiXmZfiOzTA6LvbadCIMKHhpL0GOqUBtythk28pMFQYku2%2FY2cB8A25o39ZxvvBCAVTyBNEvyoCM4QnwsK1nOwA5ksNkW%2BdTvGsOf6vpEIFAchRfwdVCmuxbWtPPHK4LQ7nULngPRysNGwCgeaNzAoPG44N7hriZpVNZiNR%2BPBHTRG6t%2FR7epGBPs%2B0dm%2BUKd4C1T8y%2FcX%2Flwc5WIl5hL1PKNxai1kyro%2Blv%2B6%2BF83nmfbwylep7OMYpIW6&X-Amz-Signature=27ea4ed56f2389b0bd0296835b7f7106e393b7d20d75e85684b9f62f07711e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WEHTQ6N%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhuGe9DVmRYIW1GahdX7T2%2F0xkwXkkYWJK8ubDm7eGeAiEArAs0oXS8cSQIKlz2RZTsUiEpgxhWBIpaon5QMXjXY14qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEH3lc4FrE9Im%2FD0QyrcA0dgt8VbufcPKNWJu1C7JuxhM%2BvJ0xcdd1SwWXcQ6qoIGrY%2BBPuLOkxod9eKV%2F8xGC83ZSKfyzZz8Q5sJOxX81V0uzZE5ubbjElwSWlx4ANFCciJV642egqslrMrLbOy2DGsDr8hdUnqsPPpvj28ny1MOnxpcUhhI7dfEpK9qfpKqW%2BCsPNkBQWFbT9BONNsufJ91j4j4jXpYMAJZRe8xt4Nms5fROVkL2p1g5poVhV3BBXAytu05WAUcatMsT%2BXy7xLbjfCMYEm75WZ8Nnktc3C8ucepdBMwGQRwuKDxVx6bKq0d6%2BftDEKe%2BBaNYSb5RbCZC8N0nPsa%2FmX6YKggBKnpDAYrdVvboFoHEI%2BBMNvgTTkzMzNbh6Vf3PY19sr5JqzGN6XWkLgoMlnFmnALUgGarkU3O9v6nCEg%2FlXVOPPhWBrBeV%2FthyoWniLQvR2HiYAg%2BjXETE2%2FD5euVsnYsEGeOIfAkP241Q%2Fxz6LUvdAhPw%2BShbHuTkdRKfnGfhgyfxHjE99kINWYHQ%2FbX%2Fmag80wnndB11goPWw1TbESwcC79nepo4AXcPyUQe7UaQd%2F96jWIcb0vblixkFkPA0aH%2Bp5noHHfkejvG4fdQU6QiXmZfiOzTA6LvbadCIMKHhpL0GOqUBtythk28pMFQYku2%2FY2cB8A25o39ZxvvBCAVTyBNEvyoCM4QnwsK1nOwA5ksNkW%2BdTvGsOf6vpEIFAchRfwdVCmuxbWtPPHK4LQ7nULngPRysNGwCgeaNzAoPG44N7hriZpVNZiNR%2BPBHTRG6t%2FR7epGBPs%2B0dm%2BUKd4C1T8y%2FcX%2Flwc5WIl5hL1PKNxai1kyro%2Blv%2B6%2BF83nmfbwylep7OMYpIW6&X-Amz-Signature=66edf6ffa8c99eed8998e751e3391cb4bd9b4c409dcf531c70cd31866bf364d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
