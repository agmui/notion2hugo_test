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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACPUUJA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5RaWt0O2xiLsY4KiHoGNSLTxrYcnpSlVtL2aMSirJaAiB6aMakfAeykHmeFI6W9hMyaXIz1fyjhxmmTUUF1d%2BafCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0dlf1kGg90%2BHVYolKtwD7C57X4ebXY6st9BUg0DeCNka1hd3PbcxOR8885xZgUlMaFB0MjtTUFeC28gB4ELQsYx44%2FKUaAdH%2F2GXScEGp08CAvQUykDYNPgyJUvuYNRhclPdC36Hhrtu5D9%2Fo5DuHtAOmo3dia1sXUvOrV%2BNNpTYSr6PxtTUqNVIx%2FmLkuoU36pLI11e5XQHHj2ZD1x%2BAbyXPQon7w6z7Ec6f%2FlO5%2F46b9gTaC9Avo05XzskSGwApi3lorpd0NaSrdr7qV7xbbxVD3xpTNWXCGK3wRWB4J6sqR9M3g5VgPnNxXvQFvhHwhz6jlAAZRvPpZXE%2BLLhgg2%2Fg6459lFmGsrvI2zGVO9nkClMYtg0iHAL%2Fmk0PUFCyTKLxu7K5%2FGYyg5ybXGntFHpmwBJ%2FRnkbNWtn%2Bb3vFC%2FjIeMmsNJZgzCZAGb9mHMKLgi65wNwgQTmJ4oGDoLiGxjf9lfxLA%2F80wtlxQuzJ1Lmpt8myrMvhf8yS6l7QNHOogXQ%2Br3g%2BYEGaodSrUeu6BxzSV7R52rpU7V80fsFrvQ%2FXDBKsWIUWWKV8bfH56L8Jpn%2BslobhG7eraNBt24C1DhsdtFO9k0IZ2fFIfPIXc9fMCUwmJeNyNKLa2SRt3DbmI1YCWN2luz9ScwqoqPvwY6pgFKTHh2YEHoOsrl5t7RJ3BpPbOPya71Zk4PBxHDMJ43e6pfXUYiWmevX2u2ZZ2K8LDxtyZ3yiOfcE%2F7i8JmYwG2MFMj0vj1wo4%2B%2BKSUdI2CUvsiZdPq53rw%2Br0uxgCDazQRSXHfS4cqpVf2Z%2Fihj0FmAT%2Bg4n1o%2F%2FVTDbbm%2B%2B2kN4ShA0LMkYnf%2BcYi2yQ3zO2oVtWN5fV9tvM1u2AkXs3uyQ1UOSRC&X-Amz-Signature=565ac77f5d701d367ed643a9f68e51ba673073e753ea5e825042897c2ab97710&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACPUUJA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5RaWt0O2xiLsY4KiHoGNSLTxrYcnpSlVtL2aMSirJaAiB6aMakfAeykHmeFI6W9hMyaXIz1fyjhxmmTUUF1d%2BafCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM0dlf1kGg90%2BHVYolKtwD7C57X4ebXY6st9BUg0DeCNka1hd3PbcxOR8885xZgUlMaFB0MjtTUFeC28gB4ELQsYx44%2FKUaAdH%2F2GXScEGp08CAvQUykDYNPgyJUvuYNRhclPdC36Hhrtu5D9%2Fo5DuHtAOmo3dia1sXUvOrV%2BNNpTYSr6PxtTUqNVIx%2FmLkuoU36pLI11e5XQHHj2ZD1x%2BAbyXPQon7w6z7Ec6f%2FlO5%2F46b9gTaC9Avo05XzskSGwApi3lorpd0NaSrdr7qV7xbbxVD3xpTNWXCGK3wRWB4J6sqR9M3g5VgPnNxXvQFvhHwhz6jlAAZRvPpZXE%2BLLhgg2%2Fg6459lFmGsrvI2zGVO9nkClMYtg0iHAL%2Fmk0PUFCyTKLxu7K5%2FGYyg5ybXGntFHpmwBJ%2FRnkbNWtn%2Bb3vFC%2FjIeMmsNJZgzCZAGb9mHMKLgi65wNwgQTmJ4oGDoLiGxjf9lfxLA%2F80wtlxQuzJ1Lmpt8myrMvhf8yS6l7QNHOogXQ%2Br3g%2BYEGaodSrUeu6BxzSV7R52rpU7V80fsFrvQ%2FXDBKsWIUWWKV8bfH56L8Jpn%2BslobhG7eraNBt24C1DhsdtFO9k0IZ2fFIfPIXc9fMCUwmJeNyNKLa2SRt3DbmI1YCWN2luz9ScwqoqPvwY6pgFKTHh2YEHoOsrl5t7RJ3BpPbOPya71Zk4PBxHDMJ43e6pfXUYiWmevX2u2ZZ2K8LDxtyZ3yiOfcE%2F7i8JmYwG2MFMj0vj1wo4%2B%2BKSUdI2CUvsiZdPq53rw%2Br0uxgCDazQRSXHfS4cqpVf2Z%2Fihj0FmAT%2Bg4n1o%2F%2FVTDbbm%2B%2B2kN4ShA0LMkYnf%2BcYi2yQ3zO2oVtWN5fV9tvM1u2AkXs3uyQ1UOSRC&X-Amz-Signature=c4b1a8052c406ab5a357cf9f28d815accc20c2645470d169cdc63c32f7ba86e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
