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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7BTL4R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLWujTQsaHAd91BQOBECvupK9tI33ReAsPpWgWWuOswIgDAJyoyefaVIuLyM95lpWiobKFc0TFPQtmJg5%2Bxbb9gIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAMjjAeQDsBoa%2Fmb1CrcA3CAnmkMF1rKVzdSdyqAh%2Fa%2FughD8K06%2BWTCBq%2FUCatCQ9DgU697Tg3dAv5lAmpgI13ahyZHqxiD34alzP9J1TJmPKwq6ErW1u2UjjkMhPtkuY0LW0qfyDC%2BhtbOcFaR9hgyQrasHan6o%2BqktD0Psc0X1ARKJckL1t8QpmGOqEiGEHvHi1XX3OXmDxo6pDxWqUGRvHRhbokL51T9to31aHPmyrERcyqxcaY0KD90Hf8nyoJ0hFM149HaG5r7v4VbxpL0lHqRCNP%2FAUXS%2BXq%2F%2BTvTjoSvHoXCC0MvAv5yJTq9FLkKEQvgzNVvOgCSGnjQPs7tArni9FdiyygEb0rGWutH4%2BZRbSkck0yMg77t%2Fy3bPfrOUk6jZcTePhTYUj2%2FfdXyTb%2B%2BQG8Acu4aysuwjJ7T0UHuatuddeDOJRxD6Ai7yoBi5neSyOS6vlRTqJXwgq4Mj2niwRVXcdmUnW1%2BP%2BsOi2vU%2FEaG1W45wiUjerKH926D12k46PjgurnLaDtXBMq0jBBiH1IwnNPc2kUZ5v6JtXzYaZPeOfA0iV1J4%2F4iYM%2FIRWi1yW4I6%2BtIjgNC4jnw0v5V7mIr44Rw4HakQ5ltwhL7e%2B91xPA73Acr76wuoClL4AP8fJ3%2BF0MOMI%2FIgsAGOqUBfuHbh8iFGdo8VRvpzhu3xxVU713D1w0p%2F2DwuXDLVohay86WdVsPF%2FejuOA3upTb3R%2FTRQQkORBs0lIyvXQ0MynM8Souxjr4odYeAx2ahQHQKYmWnb1QA%2FKPMCDpak8LVG2nL89PtIZMlvqe%2B%2BqnlhkUP0f2rEVuiuYzY4D1kOKu3lu8V3OI9aBBNbyqlKTCHdmIYiZ%2FUIr4saEWeIbJAIBpdkIe&X-Amz-Signature=8111e50d7c34f9341fe383513b0e03093920c6609abd214ec08403142f5dcec5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7BTL4R%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLWujTQsaHAd91BQOBECvupK9tI33ReAsPpWgWWuOswIgDAJyoyefaVIuLyM95lpWiobKFc0TFPQtmJg5%2Bxbb9gIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAMjjAeQDsBoa%2Fmb1CrcA3CAnmkMF1rKVzdSdyqAh%2Fa%2FughD8K06%2BWTCBq%2FUCatCQ9DgU697Tg3dAv5lAmpgI13ahyZHqxiD34alzP9J1TJmPKwq6ErW1u2UjjkMhPtkuY0LW0qfyDC%2BhtbOcFaR9hgyQrasHan6o%2BqktD0Psc0X1ARKJckL1t8QpmGOqEiGEHvHi1XX3OXmDxo6pDxWqUGRvHRhbokL51T9to31aHPmyrERcyqxcaY0KD90Hf8nyoJ0hFM149HaG5r7v4VbxpL0lHqRCNP%2FAUXS%2BXq%2F%2BTvTjoSvHoXCC0MvAv5yJTq9FLkKEQvgzNVvOgCSGnjQPs7tArni9FdiyygEb0rGWutH4%2BZRbSkck0yMg77t%2Fy3bPfrOUk6jZcTePhTYUj2%2FfdXyTb%2B%2BQG8Acu4aysuwjJ7T0UHuatuddeDOJRxD6Ai7yoBi5neSyOS6vlRTqJXwgq4Mj2niwRVXcdmUnW1%2BP%2BsOi2vU%2FEaG1W45wiUjerKH926D12k46PjgurnLaDtXBMq0jBBiH1IwnNPc2kUZ5v6JtXzYaZPeOfA0iV1J4%2F4iYM%2FIRWi1yW4I6%2BtIjgNC4jnw0v5V7mIr44Rw4HakQ5ltwhL7e%2B91xPA73Acr76wuoClL4AP8fJ3%2BF0MOMI%2FIgsAGOqUBfuHbh8iFGdo8VRvpzhu3xxVU713D1w0p%2F2DwuXDLVohay86WdVsPF%2FejuOA3upTb3R%2FTRQQkORBs0lIyvXQ0MynM8Souxjr4odYeAx2ahQHQKYmWnb1QA%2FKPMCDpak8LVG2nL89PtIZMlvqe%2B%2BqnlhkUP0f2rEVuiuYzY4D1kOKu3lu8V3OI9aBBNbyqlKTCHdmIYiZ%2FUIr4saEWeIbJAIBpdkIe&X-Amz-Signature=469e0ed9ae83ecd95e35c8a3ddfac0893970e9acb92c59c4b916c6a4891f4bad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
