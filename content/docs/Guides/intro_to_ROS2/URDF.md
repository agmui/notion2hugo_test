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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HRLMO6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGJ6RvD8rz3V8Ua0K3JZsHpsYgB6yHmdy5EJUE%2BuSGgIgY8KQd54h1tADj9qHdW6lCMV13%2FqM61Xno239EW216TwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKniCdqmikU08smT%2FCrcAx7pHySl9GsW%2BoMyfhLpooenzK4jRXNUpcUICq7ymVNkBwkKw5ESIfjfLTAbZRx9R%2FptLpSpTW4YrjNHBVWy4m%2B8By%2BvH0tl1ENRfyEWRht%2BZUbms9T4I8xDWyv%2BjBwcsYBcnDEA4vmKsFcNmTu2opPpJPJ7bBUsXe%2FHRdfp2jzKFkfOQZ1XNz2lsGn5RM4hHQurOOwWoTBiqq2NJjs8KkItF2T%2F3x%2FRlhyBipvdYMKRLn7m959QNmDBAHRrYKxl2UmaNjkNGg%2FkyfJXoGyPcyfbBOulxAeaaMaKEodMj7PW2WnPbJ63DK8GY2XnK277fJjRCXleHKjiEURwtwFk9ejVLoElIzPs9r6jBmJ9va%2BRwR35XFfdJuxWs%2BrfuiJSQiguI3dh9J9zuYRsUxncSzPnkeBABxCndOcvkKqUVkI01Rsw7EK20R90wwML4ms%2FhujIB%2FvtjJlKfYQw2gdY5sfvrWddVGgTSPpU8ixjOncGoc4fRjT4A%2FJu74OAY15gwIWuyX7HyBDup1ke2PrLxFAnMt8G2Jzov%2FqP4Kx33tyBi2LLw%2Fm%2BbH8DQu%2Fd%2FCeul3mMkHTjLqBW0kk%2BrV%2B27HGPessIoQpZOtnfDiPWINppbCWMkzDfofGIP991MJXapsQGOqUBEgHEFl6M1kqxKwAyZwAmHZj%2BNfkYKaL49t%2Bg5dptQTde%2FRTviDXMJ%2By1vZCeT0fdcVyApN6AmYgvYmwfySeBggGLG8wpa8P14AmnFtcyFkKxhUWnSveUZsxAQZ5fup89ODj2gNuZpD3vgPPIflVqPRdrUPuph1RBaSrXq9p4Fy6xcm6fliI%2FqyQhXhO91dpsFtgL8XxF4UWgPrFZtrxZUTqSw804&X-Amz-Signature=3d9e2f3cc4d794acc61f1f551ab5ab81217143fa286a69d649175cac56802b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HRLMO6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGJ6RvD8rz3V8Ua0K3JZsHpsYgB6yHmdy5EJUE%2BuSGgIgY8KQd54h1tADj9qHdW6lCMV13%2FqM61Xno239EW216TwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKniCdqmikU08smT%2FCrcAx7pHySl9GsW%2BoMyfhLpooenzK4jRXNUpcUICq7ymVNkBwkKw5ESIfjfLTAbZRx9R%2FptLpSpTW4YrjNHBVWy4m%2B8By%2BvH0tl1ENRfyEWRht%2BZUbms9T4I8xDWyv%2BjBwcsYBcnDEA4vmKsFcNmTu2opPpJPJ7bBUsXe%2FHRdfp2jzKFkfOQZ1XNz2lsGn5RM4hHQurOOwWoTBiqq2NJjs8KkItF2T%2F3x%2FRlhyBipvdYMKRLn7m959QNmDBAHRrYKxl2UmaNjkNGg%2FkyfJXoGyPcyfbBOulxAeaaMaKEodMj7PW2WnPbJ63DK8GY2XnK277fJjRCXleHKjiEURwtwFk9ejVLoElIzPs9r6jBmJ9va%2BRwR35XFfdJuxWs%2BrfuiJSQiguI3dh9J9zuYRsUxncSzPnkeBABxCndOcvkKqUVkI01Rsw7EK20R90wwML4ms%2FhujIB%2FvtjJlKfYQw2gdY5sfvrWddVGgTSPpU8ixjOncGoc4fRjT4A%2FJu74OAY15gwIWuyX7HyBDup1ke2PrLxFAnMt8G2Jzov%2FqP4Kx33tyBi2LLw%2Fm%2BbH8DQu%2Fd%2FCeul3mMkHTjLqBW0kk%2BrV%2B27HGPessIoQpZOtnfDiPWINppbCWMkzDfofGIP991MJXapsQGOqUBEgHEFl6M1kqxKwAyZwAmHZj%2BNfkYKaL49t%2Bg5dptQTde%2FRTviDXMJ%2By1vZCeT0fdcVyApN6AmYgvYmwfySeBggGLG8wpa8P14AmnFtcyFkKxhUWnSveUZsxAQZ5fup89ODj2gNuZpD3vgPPIflVqPRdrUPuph1RBaSrXq9p4Fy6xcm6fliI%2FqyQhXhO91dpsFtgL8XxF4UWgPrFZtrxZUTqSw804&X-Amz-Signature=bf9f0f19df7f2e7e65c271449a80e00413be64b65ae81d439e1c5a178b6adc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
