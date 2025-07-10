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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSAMOE2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7ppS01Dh6x8hR6I0O7iZ75w43NX0O7kVx1QDjocYioAiEAhivaqBWmVhzgTWUnueUKtFMAk4lU2JBj5L%2FpGHMh%2ByEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD26aeVtUaP%2Bd9eWKSrcA2GxhblboOlIYSlHJrTfVx4K5ZtnS%2BCULimBmJflSUsqShmGpo%2FpfEYmEoRHMXWIFnAS9z3Eeom07cinpPAadOivw%2BDeLM0TlfCYaDrHG3zwn5xGm30jpVcpGofWFkJJ6uFV%2BC2IMEjGNCrijSQhMNuVKUsOa4jji6FxmE%2Bbf4kK2dA0%2BnAS2lxOTDiN2Cx8%2FwT%2BfPcRvOIL7VjXpicdrkbJZXJOA%2BFlgLxxUvasB4aC2UewZxZwbCw1fr86KlU3kxWmjYCrCXiMP0L2DosEBiv5mBCYomVtdq7bWS8fw%2FvJO3UR2ooWO8tE0effpuEVspGIfpY9X3nBKZHXXHOgghq5iUUdGxxI4R44aQZzJZBR6gSdCWElJWBcM1xFOTdz7pz3RNTbmBrtjQ6N1yIOF6FzrzgR2Fj%2FyF4Kuh%2Bh1kVg5WE5wjDBxQsFgpUmEBkNg%2BKPCJfgrSoD9oQ9hjyM0WRMu%2BXWDis31BqAEnvc9rU4bp5uA9rMEW3N2o6ECiSvhwNoLaGW0mWMlnR3f4PVz2XUkl7Eh0l0OZDPVJfPOs3BfU5Ai%2BUG%2FUpzQuDZPfuRk4lH0cfs3lqyQdKWGtzEISROuS%2FTG2QjxukGemzXCqRa3LkQ8ZNZ4cXhInGDMLr5v8MGOqUBfMWZwBQuwMgxxUCaWXCOqg59Q0KkGFb%2BygLTKs%2BvEKD1CeNaQNM6UBXAsZck56%2FjYYVoCgiYZYrfbmhZq1GNRXhRZ4xeO0D2naxKBR9BIJgDvjeR7Ky3eWCElqPoynZLAk287b1H59C7%2B1jLdPJn7DwHyaT554lr9uDJ7ldOinn6OmltAHGFl%2FjO7wYaozF%2BlZQxp2QMJ1U0rdA3oxuytyYB4tvA&X-Amz-Signature=a78f9df43d389130d1f386485669bb5948e10e1e543913e502a2cd0f1ebdcc99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSAMOE2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7ppS01Dh6x8hR6I0O7iZ75w43NX0O7kVx1QDjocYioAiEAhivaqBWmVhzgTWUnueUKtFMAk4lU2JBj5L%2FpGHMh%2ByEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD26aeVtUaP%2Bd9eWKSrcA2GxhblboOlIYSlHJrTfVx4K5ZtnS%2BCULimBmJflSUsqShmGpo%2FpfEYmEoRHMXWIFnAS9z3Eeom07cinpPAadOivw%2BDeLM0TlfCYaDrHG3zwn5xGm30jpVcpGofWFkJJ6uFV%2BC2IMEjGNCrijSQhMNuVKUsOa4jji6FxmE%2Bbf4kK2dA0%2BnAS2lxOTDiN2Cx8%2FwT%2BfPcRvOIL7VjXpicdrkbJZXJOA%2BFlgLxxUvasB4aC2UewZxZwbCw1fr86KlU3kxWmjYCrCXiMP0L2DosEBiv5mBCYomVtdq7bWS8fw%2FvJO3UR2ooWO8tE0effpuEVspGIfpY9X3nBKZHXXHOgghq5iUUdGxxI4R44aQZzJZBR6gSdCWElJWBcM1xFOTdz7pz3RNTbmBrtjQ6N1yIOF6FzrzgR2Fj%2FyF4Kuh%2Bh1kVg5WE5wjDBxQsFgpUmEBkNg%2BKPCJfgrSoD9oQ9hjyM0WRMu%2BXWDis31BqAEnvc9rU4bp5uA9rMEW3N2o6ECiSvhwNoLaGW0mWMlnR3f4PVz2XUkl7Eh0l0OZDPVJfPOs3BfU5Ai%2BUG%2FUpzQuDZPfuRk4lH0cfs3lqyQdKWGtzEISROuS%2FTG2QjxukGemzXCqRa3LkQ8ZNZ4cXhInGDMLr5v8MGOqUBfMWZwBQuwMgxxUCaWXCOqg59Q0KkGFb%2BygLTKs%2BvEKD1CeNaQNM6UBXAsZck56%2FjYYVoCgiYZYrfbmhZq1GNRXhRZ4xeO0D2naxKBR9BIJgDvjeR7Ky3eWCElqPoynZLAk287b1H59C7%2B1jLdPJn7DwHyaT554lr9uDJ7ldOinn6OmltAHGFl%2FjO7wYaozF%2BlZQxp2QMJ1U0rdA3oxuytyYB4tvA&X-Amz-Signature=bc4e68a3e44c9a88d13d9bd30fa273e4353d37994e008f6e416be8269abc61fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
