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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJRIMASS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF7cXXnK3EQagCV2g9u%2FdmQ5%2FqQp1lTgVgLWMNq35BrAiEAklQsJq5e0T0VYRZVrgHRYWSv4RhdoyeaB2%2FJ7C73jsUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOEpPPUopCuk5c2UXCrcA6oUa8TjitRbSHnC912qSB%2FucuJZQ4s87Y5m62Hu7niPfKvZHCr%2B1ANzW1eWNXSn5weYxDOJiuaBhqASE8vMDp%2FnSA4vDeJaIvkGLp7f9wQysRJzuITeI%2B6al%2BqXF3KhUUTcuJ5c%2BSdFqJz0JgN4kQRC3Hh82kRN9GYIqWH123pwUpALX%2FUfTCcYY2at7yw8kQY1HKQGXK2%2F38B0u2XsfP22rviUOvbW6T%2BK4crhFlt2nI18xwewuRco6IF%2FBsP0NiM0gUKyOnSlugGT9LoTiTSPmyW9nlQjigvc9GydbfX4eZHdXC4HJHQOssjoTEJvGsTNzJTNKaelgfBwcqztE%2FtTbaUsCNcZG5k7LCnlxh0ibqE47QToe0EbqtvLhPZZYn791wfO9K6OSLSp9QRoO17TOCG%2FRB9CRxc4bWihgMR2weAE%2FY3WYq7z%2BqaVTTsDrcN5j2RaU3DctsGpa1u%2FLuf%2BwO1IfVxo%2F9Bm6s7uowMqjP9PbBV66JH%2Bd9JMmXO%2B7AE7y268rDLYOA%2FM9u%2BHuJd55Dr2eNG2pNqrh%2FMMWmOoCMVu10IVJG0PeXJdbLvGTO8ClNUC0pTxORHDzXau3DCdPgUPUhQ2rIDuaHVAHul4CDaE%2BJrDOXcGzW0mMJ%2Fk4sAGOqUBF0n8Qb6LYIpoFaDUbgxC4%2FqmJIy%2F7Q1pFajlDe8ZElutc6%2BRYdgZIwKnS6xQB8RpXpNvoW1N%2BaFSWmZSRpiB%2B%2F27j7IALpWB8HPnrypPnRa6u%2BHO37kSF1FZbm9K56kYZWu9z25TRPI%2B4pAenQkX1dTU7si7%2FR7gnFEouNc%2BP5MfgMIwMKH8gYcHbYAst%2FTy7ITbysUltk%2FqoWpkWVDdA9WByePy&X-Amz-Signature=9dd219756de9f7feeb2f32d9de4a80407f3f7a0fba0228b58ec6ca60ef324bff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJRIMASS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEF7cXXnK3EQagCV2g9u%2FdmQ5%2FqQp1lTgVgLWMNq35BrAiEAklQsJq5e0T0VYRZVrgHRYWSv4RhdoyeaB2%2FJ7C73jsUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOEpPPUopCuk5c2UXCrcA6oUa8TjitRbSHnC912qSB%2FucuJZQ4s87Y5m62Hu7niPfKvZHCr%2B1ANzW1eWNXSn5weYxDOJiuaBhqASE8vMDp%2FnSA4vDeJaIvkGLp7f9wQysRJzuITeI%2B6al%2BqXF3KhUUTcuJ5c%2BSdFqJz0JgN4kQRC3Hh82kRN9GYIqWH123pwUpALX%2FUfTCcYY2at7yw8kQY1HKQGXK2%2F38B0u2XsfP22rviUOvbW6T%2BK4crhFlt2nI18xwewuRco6IF%2FBsP0NiM0gUKyOnSlugGT9LoTiTSPmyW9nlQjigvc9GydbfX4eZHdXC4HJHQOssjoTEJvGsTNzJTNKaelgfBwcqztE%2FtTbaUsCNcZG5k7LCnlxh0ibqE47QToe0EbqtvLhPZZYn791wfO9K6OSLSp9QRoO17TOCG%2FRB9CRxc4bWihgMR2weAE%2FY3WYq7z%2BqaVTTsDrcN5j2RaU3DctsGpa1u%2FLuf%2BwO1IfVxo%2F9Bm6s7uowMqjP9PbBV66JH%2Bd9JMmXO%2B7AE7y268rDLYOA%2FM9u%2BHuJd55Dr2eNG2pNqrh%2FMMWmOoCMVu10IVJG0PeXJdbLvGTO8ClNUC0pTxORHDzXau3DCdPgUPUhQ2rIDuaHVAHul4CDaE%2BJrDOXcGzW0mMJ%2Fk4sAGOqUBF0n8Qb6LYIpoFaDUbgxC4%2FqmJIy%2F7Q1pFajlDe8ZElutc6%2BRYdgZIwKnS6xQB8RpXpNvoW1N%2BaFSWmZSRpiB%2B%2F27j7IALpWB8HPnrypPnRa6u%2BHO37kSF1FZbm9K56kYZWu9z25TRPI%2B4pAenQkX1dTU7si7%2FR7gnFEouNc%2BP5MfgMIwMKH8gYcHbYAst%2FTy7ITbysUltk%2FqoWpkWVDdA9WByePy&X-Amz-Signature=3788df75251adba49a0c55e144ad594431a97832a61f2e15b2c254e9d60fdb87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
