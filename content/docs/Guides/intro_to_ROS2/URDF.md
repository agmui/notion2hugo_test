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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S76DZFJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEoI0Ak96H60QCfXj4O2Qj9FTy8JStr%2FpwZdWnHhEoknAiEA%2B0%2Bavdk5Yfs7bYUouA918ZjdeJavPtIcZsb2dU%2FjrTgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG700punC8JRJejGtircA%2Fjick5GYSjUjD7XKGmQ6r8kW9O3cdFGh0XUHtdHj%2BMptA755ynOjp%2B3Ddn64I5lIRoiujeaji5%2F%2FRYXjuJV6EqpSg%2FQyV%2BsqcjXe7pY613KXC7XnAbmAs%2B9Ep3k5GNRj4rfsfVixldzYZKA6%2B%2Be72v3mJrnClXtD%2FZ01%2BjbvvV3D5fjbZIWazow1L1OGJIl4GEFQ%2FfP8Bpl3OTewdhPDd6xLonS0cxAAPfe6ceQbeDom7TGEQjL25SyCO1DiK%2Biihvqs1P1KEWlDGsJaqgj6wHtVWkgaRtFTw05zD0NK53k5fQ03%2FHOH60TrOE3GYdebruz3GBrA1MzbzPLkcXkCnH3D%2F6KuIta8YSD41mVUP2XV9P8L9hgG%2FOoFHtneetCUsamcPXFa%2FBCDfqc9%2FJoXVxJx6q%2FlFLZF9zzzma71jl%2BAS%2BkEqG0dtz3G07d2IRtJVc72TEtbvNsKjikomEnbmv1GNR2QnvLrTZPY3iWngfW2C1QLiovZY4fBDvG30fb%2F0uXdlR63sleFUjVJwazsik%2FMTUIUJ3IhOwa5Jo541%2F52ltqcKabLZOPef2eKC5BrFxn1LreG3%2F1YUobdti2DsQLsBvIbyp6ZzHXE1uBxX1Y75AGKEWyYXTqGPVTMImRwr4GOqUBqqmAPtcKjGsGMHMBp35YmCZIsXMSL4ULORDLz%2BQk0p1roZC7qsOvHolwGhj5qyMsonQZSv2EY9jQfGOTl6N1e6lHVDZArmhWiBWvz5cwZuU7rZzFzunZxUj0%2F2aq5AN7TVM6s2pFJXyID6jSLXFVKigani3dh0qdHfQa3mRFxZqenvT7KHcb263ltY1KjZPG16TU0kDx6dD1rpRJSzV09uS%2BXWTk&X-Amz-Signature=cbbd35eb9e0ad15677a9bf6de542fa1ab510fefd13001b4f6b552a01d3347ace&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S76DZFJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEoI0Ak96H60QCfXj4O2Qj9FTy8JStr%2FpwZdWnHhEoknAiEA%2B0%2Bavdk5Yfs7bYUouA918ZjdeJavPtIcZsb2dU%2FjrTgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG700punC8JRJejGtircA%2Fjick5GYSjUjD7XKGmQ6r8kW9O3cdFGh0XUHtdHj%2BMptA755ynOjp%2B3Ddn64I5lIRoiujeaji5%2F%2FRYXjuJV6EqpSg%2FQyV%2BsqcjXe7pY613KXC7XnAbmAs%2B9Ep3k5GNRj4rfsfVixldzYZKA6%2B%2Be72v3mJrnClXtD%2FZ01%2BjbvvV3D5fjbZIWazow1L1OGJIl4GEFQ%2FfP8Bpl3OTewdhPDd6xLonS0cxAAPfe6ceQbeDom7TGEQjL25SyCO1DiK%2Biihvqs1P1KEWlDGsJaqgj6wHtVWkgaRtFTw05zD0NK53k5fQ03%2FHOH60TrOE3GYdebruz3GBrA1MzbzPLkcXkCnH3D%2F6KuIta8YSD41mVUP2XV9P8L9hgG%2FOoFHtneetCUsamcPXFa%2FBCDfqc9%2FJoXVxJx6q%2FlFLZF9zzzma71jl%2BAS%2BkEqG0dtz3G07d2IRtJVc72TEtbvNsKjikomEnbmv1GNR2QnvLrTZPY3iWngfW2C1QLiovZY4fBDvG30fb%2F0uXdlR63sleFUjVJwazsik%2FMTUIUJ3IhOwa5Jo541%2F52ltqcKabLZOPef2eKC5BrFxn1LreG3%2F1YUobdti2DsQLsBvIbyp6ZzHXE1uBxX1Y75AGKEWyYXTqGPVTMImRwr4GOqUBqqmAPtcKjGsGMHMBp35YmCZIsXMSL4ULORDLz%2BQk0p1roZC7qsOvHolwGhj5qyMsonQZSv2EY9jQfGOTl6N1e6lHVDZArmhWiBWvz5cwZuU7rZzFzunZxUj0%2F2aq5AN7TVM6s2pFJXyID6jSLXFVKigani3dh0qdHfQa3mRFxZqenvT7KHcb263ltY1KjZPG16TU0kDx6dD1rpRJSzV09uS%2BXWTk&X-Amz-Signature=3e2d24cb7793b8e0128510ab931adacd27253b1eb57afe8528b638e145d65c12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
