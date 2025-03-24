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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZJTJH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiTvLMl44puppGEypSM9ird0GSHWaCmKveCasg0HQ67AiEAuxJRG2u7oNMuOQIyzgt4dm71YFAFfb%2FUCo%2Bgfgr2GhMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJfP1vaaX%2F407rJmircA0b2%2BHHfEJ44BT1u1OK2DOs%2FTJKxDhxRjWyrtE%2B2rNNo%2B5OW%2B6LRx0modrRvASxcHeb7Y%2B2rLXHGW7AKe%2Bafe%2BFMwzXgPeXaQUwj%2FByEYRY%2Fy5RJ09jCaZnSFX758VWQ5zdXPzjC5s3vdvBEUKl1MTwB2HhGWpy%2Fd7Gj59%2BYPaWNQXWEgMEUSM6hdkSz4uflgAcOSAedHKzfcpNn3Y2F288%2FxZdxmSxlc6%2Bf%2BnhAKsVhQ1%2BG4ifFMMvSugRQ2%2BVt5wJMAOhNqtQ5%2FGI9CDgdVPC4IbPjvtdtSIXTuSuGkRiD6Z%2B2Flj1LrOkh4PHd8aGUERobd49M8JAbtNA9XOf0pBC85tFi2Xq%2BUVB2pZdJN7fLXWspyOJwHWYbnuZJDeKRLXk%2FtJKOFDrUl6dJBXpDh57yDAYN8IT5%2FQYlBYGZV7T0d31xJBMz2TW71jyTO9v%2FQb7Fh%2FrHeYNjO9FdW6JPSojAvS2VssXKN3n47FkTAxHmkENDY%2FheZl0KE1VsCs1ZYFRJnFbwpN3Z0ZjtfjwUI082CNJZ0fP1FLXNSJMt9Kk0c12rTawPqqzO4gbu4x5ALEMh1w9%2FERY8cNIW3wn4pDlJoGfXM20bCSnsNdHrI2tCSA6IglDTuN2kNmgMLbwhL8GOqUBfq1klrInd7VQtLu16Vt3Ea0eHNgnvla0DLgHaGvZr51rfXEIhPa0TTjrh%2B38%2FsgAbvSKqdFYlIc3D3Lea1TLm9IV0y6ofNcnS9D1sk7edg1rOln3WDys4xybPCSxORTJJ58QNJwWisfQyT95Er81A6f8ioWg6Dgzhwi2XqyFxp6IlQjmVewB4B3aZsY45wHE1HzZOkDvRzPJExX6foLU2TShNa7p&X-Amz-Signature=e6cff8d7f3076b3d9e86c0ef4abcb0efa9942952449d615fde9494295c43dfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCZJTJH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiTvLMl44puppGEypSM9ird0GSHWaCmKveCasg0HQ67AiEAuxJRG2u7oNMuOQIyzgt4dm71YFAFfb%2FUCo%2Bgfgr2GhMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJfP1vaaX%2F407rJmircA0b2%2BHHfEJ44BT1u1OK2DOs%2FTJKxDhxRjWyrtE%2B2rNNo%2B5OW%2B6LRx0modrRvASxcHeb7Y%2B2rLXHGW7AKe%2Bafe%2BFMwzXgPeXaQUwj%2FByEYRY%2Fy5RJ09jCaZnSFX758VWQ5zdXPzjC5s3vdvBEUKl1MTwB2HhGWpy%2Fd7Gj59%2BYPaWNQXWEgMEUSM6hdkSz4uflgAcOSAedHKzfcpNn3Y2F288%2FxZdxmSxlc6%2Bf%2BnhAKsVhQ1%2BG4ifFMMvSugRQ2%2BVt5wJMAOhNqtQ5%2FGI9CDgdVPC4IbPjvtdtSIXTuSuGkRiD6Z%2B2Flj1LrOkh4PHd8aGUERobd49M8JAbtNA9XOf0pBC85tFi2Xq%2BUVB2pZdJN7fLXWspyOJwHWYbnuZJDeKRLXk%2FtJKOFDrUl6dJBXpDh57yDAYN8IT5%2FQYlBYGZV7T0d31xJBMz2TW71jyTO9v%2FQb7Fh%2FrHeYNjO9FdW6JPSojAvS2VssXKN3n47FkTAxHmkENDY%2FheZl0KE1VsCs1ZYFRJnFbwpN3Z0ZjtfjwUI082CNJZ0fP1FLXNSJMt9Kk0c12rTawPqqzO4gbu4x5ALEMh1w9%2FERY8cNIW3wn4pDlJoGfXM20bCSnsNdHrI2tCSA6IglDTuN2kNmgMLbwhL8GOqUBfq1klrInd7VQtLu16Vt3Ea0eHNgnvla0DLgHaGvZr51rfXEIhPa0TTjrh%2B38%2FsgAbvSKqdFYlIc3D3Lea1TLm9IV0y6ofNcnS9D1sk7edg1rOln3WDys4xybPCSxORTJJ58QNJwWisfQyT95Er81A6f8ioWg6Dgzhwi2XqyFxp6IlQjmVewB4B3aZsY45wHE1HzZOkDvRzPJExX6foLU2TShNa7p&X-Amz-Signature=9da9e5fddbf9b6ae002e2233da675d6514059fd59445ad6a63703c182c2e53e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
