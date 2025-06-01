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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3PYMMH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICJJkMguazgAEGfZ0XJX0yqVK78%2BlmP8V7jos3TMXbAUAiBYylVqVjEVLCvM96qKhyesH9W3d8M4imZv4eHy9FDqYCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvISDOYtQVNB4%2BC2bKtwDjS%2BN4fbSsl44%2FXzg5I9XoAMLxrSBZIJu0EXNY7CIUqWJcQMk4YiC4QIIjaIKXUk8NM2uqBeOd1Pgj4dws823CpVeViCUQQRqMZ85P4xXvDeRQdFrmZSZo47rbhbiRZhv8sZ%2BPE4WrWpkX%2FsUdDcrwQl9q%2FGJ58dZpNi78nkJuLFQhKcWB7Z%2F9QHpQCe20ZiNn72pt7yXWb%2FHBXrAUGSugif7hboJZrn8rk6%2FaeSPQZpq%2Ba2w5QB%2BQBd0gGdkognfIZ%2BWDstTpBQA%2B1O%2BcOia05KnNlb4XNNh%2Bb5Xtjfy17qxS5DEvz4tUzq2YjnVXTjR1Yj%2Fu3dDmIQquqjc7Lmh7FEWPtyQPZwc%2FuMDoSIOTbvCg%2B%2BHj8YLO8U0QyMCWmIGhoPwm3QykMZIUVkMJkZvKDPW2fxWk9A43Gj3as%2Bwk6SEhe2tnzBXdvqCFLIacZngblyj7ef9SBq1f4R7EkEtZWIvrt7P4z5tDBaOr1tUAQgObcFqS79xbbIRZOuZ5yOb8QxM05OvoBtGVDMddtcw6I3zrMYW8rA26cLPao1G7w7SbnjxCnZOg5TkICB4%2BDCTzuUuaCotPxPNjrqgt%2FUXsHa0ur9qW5%2B%2BaX2ooKXI%2Bz64uGf5dNdcaVv6x3ww0t7wwQY6pgE5GngUTxY1iATimJEsAFb%2FnXOPhftQ7AGM%2FcjMiiMktDmCue9pUWr%2F7PHO9YhZI5oARv%2B79LymWMtGaiiWQZ2zH23VzhUvBR4p1WMtaHm1HWL5inDK6lHCkOe%2Fk8jDOHuR8VKJEDNQ2hVBoPggOqGQm0fAwV20o6PpI9M0WV%2FRchEs0%2Bv0ADYCC41U3rZ3HsMFwu9vJ9gx21pKONxfyBPiViZQxoIs&X-Amz-Signature=429e9b35fe5c32990bc6039c9e2569644dea66903075ca30a6ab29d7e0eb7537&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3PYMMH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICJJkMguazgAEGfZ0XJX0yqVK78%2BlmP8V7jos3TMXbAUAiBYylVqVjEVLCvM96qKhyesH9W3d8M4imZv4eHy9FDqYCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvISDOYtQVNB4%2BC2bKtwDjS%2BN4fbSsl44%2FXzg5I9XoAMLxrSBZIJu0EXNY7CIUqWJcQMk4YiC4QIIjaIKXUk8NM2uqBeOd1Pgj4dws823CpVeViCUQQRqMZ85P4xXvDeRQdFrmZSZo47rbhbiRZhv8sZ%2BPE4WrWpkX%2FsUdDcrwQl9q%2FGJ58dZpNi78nkJuLFQhKcWB7Z%2F9QHpQCe20ZiNn72pt7yXWb%2FHBXrAUGSugif7hboJZrn8rk6%2FaeSPQZpq%2Ba2w5QB%2BQBd0gGdkognfIZ%2BWDstTpBQA%2B1O%2BcOia05KnNlb4XNNh%2Bb5Xtjfy17qxS5DEvz4tUzq2YjnVXTjR1Yj%2Fu3dDmIQquqjc7Lmh7FEWPtyQPZwc%2FuMDoSIOTbvCg%2B%2BHj8YLO8U0QyMCWmIGhoPwm3QykMZIUVkMJkZvKDPW2fxWk9A43Gj3as%2Bwk6SEhe2tnzBXdvqCFLIacZngblyj7ef9SBq1f4R7EkEtZWIvrt7P4z5tDBaOr1tUAQgObcFqS79xbbIRZOuZ5yOb8QxM05OvoBtGVDMddtcw6I3zrMYW8rA26cLPao1G7w7SbnjxCnZOg5TkICB4%2BDCTzuUuaCotPxPNjrqgt%2FUXsHa0ur9qW5%2B%2BaX2ooKXI%2Bz64uGf5dNdcaVv6x3ww0t7wwQY6pgE5GngUTxY1iATimJEsAFb%2FnXOPhftQ7AGM%2FcjMiiMktDmCue9pUWr%2F7PHO9YhZI5oARv%2B79LymWMtGaiiWQZ2zH23VzhUvBR4p1WMtaHm1HWL5inDK6lHCkOe%2Fk8jDOHuR8VKJEDNQ2hVBoPggOqGQm0fAwV20o6PpI9M0WV%2FRchEs0%2Bv0ADYCC41U3rZ3HsMFwu9vJ9gx21pKONxfyBPiViZQxoIs&X-Amz-Signature=1e6389967ad8805dcfe75ad0d97f4e0c4c53f4fc4918714b284208eb5902f77d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
