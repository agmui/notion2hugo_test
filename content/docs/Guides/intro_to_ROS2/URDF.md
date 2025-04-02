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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APT5X5S%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCOu5W9alDZFSwK6ma1KpQjPZFvssoNXTYiSIjmrtwnvwIgAJ8zUSpiPpmWHKmxeQxlqPKeuZvQBIRNHO3ACac4%2FvcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAPsq0MZZLL7foZXircA56ZC9BUDknSYblO7EHxzmPDjgLPFluSx0ubNU9t4LG2lyS9RR0HZzRolLGGUTmAigRWJghUNff3gmx9HrE9ducWT7vONtQVGAi20ZDPf6ksQCBvl6HBd0BIyyHBEWzxkky1m1ir7Vci9i2nCUWJpyTaVVyLdXDCj2SavvtEGpnASuUURU82bMUzx2tXmwrJKxKlh8t3d9ztzaPanQHMOXw%2BgiVxDsmZO77DP3Z9rSLJqjgKENXnzr15mM35GWz2CaPV3dlJR53KOGYhOwbJZxliGOnX3YDslXjpa7lzguF70eMGvqz6M4mF84v3T3xHV8wrQTvF525lpNWwgoPocTd0EJbtk3WYlBotX0Jr2MS3uiWRlcIk%2FEhnP03RfMn7T0T1m7ht0Y5XMkEFEVL1YOCzQnlpw%2BqsWFm9k1zVZtokkZ5ysK80K9TW36e%2BPEmbcvcXu3Y3%2BFldaK1yS74vJCV01VWqgED259ErtqqKCfyY7OiGyIbFAgqmpOzWNOzUxg8xclavgesqnKR68nThpwtoWda0WNyQednTydo4f0b07cuCEQ7tG0W%2BshXDgZgCYxaPXnCksrO1P7isSC29Ll2NhiQFK1AmsPluop8WrUasmulgLE8be%2Fvk9vB1MN3Ytr8GOqUBlWXgi4DCi2mBhONDnLGHocmvHjRBFxzwEu8Hb6EDY6TJdPKzEFH0u3UEqgPP%2FbMvppPiP6GNmp2TfbOt1gmu7M5PEKk6tneNbQaP2eWx7rpwtYRIfURvXGhRQQBbRDvtZoDVs3MPJvtOvstqZ1f3Fb0CFK%2FzyE%2F70Eqenu3ctdAG2SdaBk6BD7sFb%2FZfaFlEBA8Mziakn0G%2Bx8SopAnbQebio%2BnY&X-Amz-Signature=6b9fafeb6951bfe6e7ac048458c4675927a24e2acbbd843561dba703147e5eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APT5X5S%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCOu5W9alDZFSwK6ma1KpQjPZFvssoNXTYiSIjmrtwnvwIgAJ8zUSpiPpmWHKmxeQxlqPKeuZvQBIRNHO3ACac4%2FvcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAPsq0MZZLL7foZXircA56ZC9BUDknSYblO7EHxzmPDjgLPFluSx0ubNU9t4LG2lyS9RR0HZzRolLGGUTmAigRWJghUNff3gmx9HrE9ducWT7vONtQVGAi20ZDPf6ksQCBvl6HBd0BIyyHBEWzxkky1m1ir7Vci9i2nCUWJpyTaVVyLdXDCj2SavvtEGpnASuUURU82bMUzx2tXmwrJKxKlh8t3d9ztzaPanQHMOXw%2BgiVxDsmZO77DP3Z9rSLJqjgKENXnzr15mM35GWz2CaPV3dlJR53KOGYhOwbJZxliGOnX3YDslXjpa7lzguF70eMGvqz6M4mF84v3T3xHV8wrQTvF525lpNWwgoPocTd0EJbtk3WYlBotX0Jr2MS3uiWRlcIk%2FEhnP03RfMn7T0T1m7ht0Y5XMkEFEVL1YOCzQnlpw%2BqsWFm9k1zVZtokkZ5ysK80K9TW36e%2BPEmbcvcXu3Y3%2BFldaK1yS74vJCV01VWqgED259ErtqqKCfyY7OiGyIbFAgqmpOzWNOzUxg8xclavgesqnKR68nThpwtoWda0WNyQednTydo4f0b07cuCEQ7tG0W%2BshXDgZgCYxaPXnCksrO1P7isSC29Ll2NhiQFK1AmsPluop8WrUasmulgLE8be%2Fvk9vB1MN3Ytr8GOqUBlWXgi4DCi2mBhONDnLGHocmvHjRBFxzwEu8Hb6EDY6TJdPKzEFH0u3UEqgPP%2FbMvppPiP6GNmp2TfbOt1gmu7M5PEKk6tneNbQaP2eWx7rpwtYRIfURvXGhRQQBbRDvtZoDVs3MPJvtOvstqZ1f3Fb0CFK%2FzyE%2F70Eqenu3ctdAG2SdaBk6BD7sFb%2FZfaFlEBA8Mziakn0G%2Bx8SopAnbQebio%2BnY&X-Amz-Signature=d3986a420c0845901aa4c8fb600f0fba9ffd260d22bc479434f55ae91e2ef33d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
