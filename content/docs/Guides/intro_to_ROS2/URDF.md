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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VJXZJW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhTohJFOrdwg%2FdndnyV7meTQfaehRN%2F1c1cnzoWi%2BmmwIhAIgGagWDl9gol32%2B7kS3WRdCkr2495g4hr52qW5UjYl%2FKv8DCCwQABoMNjM3NDIzMTgzODA1Igw8NqGhKEKWs7XenSwq3ANehlXTA6LEQqmxl2ohhz8kD6KXl7nZ7%2Bkq%2Be6s4dp025Z2hwGO2riTpOSDRWWvlrnFCVsJv6RfXI%2BoGHNO0m3pD7p0Oe6urQvk8%2F55CKcylM2%2BDxfX7C%2B8vTod1BKjGfY22%2BEKawSd1D1maBr034bb0rCXNWxiHxRTU%2B0Rl3yeiYQ8OoBTEo0nn93pFne4Jr710w8IhQopUp5%2Bbl7pVwm%2FM5KkE9xY0tH3MELa4Ixm2Uu%2BupMv4DJOaglmmJ%2B%2B%2BzDl%2B74GxicGlNHKNLPHZpW%2FKmGK%2FnhqGsC4Y1p9%2F7LdpMd455KRi6UBecM03Jx6JlE4QaQ3TMKTibbVrV1G5tO%2BI0a332DuyFgKxEJf1djpzGK9%2BteqQ7p6L8gmSsJX2X3bAtf3UIkuLlxDrN%2B3dLFAbzAIBsjeoiTcFnGJAnT780Y%2Ba3zX5u0T2Bgw0GJBn4G%2B35762Shg0UzAawvYwIbu4Xqc1kVZoJbxEkwsh4xXF3UJ7muwARnOwM9TiP3alroSwkK6D0b7Mc6DFVs4AOAGGRG8qxjack1hkXzr38Wsc9AFAoWIxvjvLlJ2GpnQ9UbDJTE3Lu5H0HI5G7Iq20VZ3FbplGvxqTsrXDVFiRxB4%2BhQ9FQfxMYGJDsHCTCO86W%2BBjqkAZ0040zfA8oPbWJFZobdqGfsYlXOJQTHD6ZsLTORgDUcuG0Q%2B6wokeGULFuwgVqNKXXWM%2FWmO4ftb%2BgLP2lrTw2sLYovOVEm%2BBsFFY%2BhHiSVMCiHN%2BXUaHoqysHwcWW0XtrQByZUnR%2Bu9xBq4KD%2FpSwQj8XoPHCGBc0SnrB7KHF4rtQ7nSgbGiCxR3AyFvXMCLPtBaUrEFxQIHANi%2BN0d0rZ3X0y&X-Amz-Signature=02699a98bfbf707fec73d33c5e725a4fdc4a4710bd089e659e1407f9ff03c071&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VJXZJW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhTohJFOrdwg%2FdndnyV7meTQfaehRN%2F1c1cnzoWi%2BmmwIhAIgGagWDl9gol32%2B7kS3WRdCkr2495g4hr52qW5UjYl%2FKv8DCCwQABoMNjM3NDIzMTgzODA1Igw8NqGhKEKWs7XenSwq3ANehlXTA6LEQqmxl2ohhz8kD6KXl7nZ7%2Bkq%2Be6s4dp025Z2hwGO2riTpOSDRWWvlrnFCVsJv6RfXI%2BoGHNO0m3pD7p0Oe6urQvk8%2F55CKcylM2%2BDxfX7C%2B8vTod1BKjGfY22%2BEKawSd1D1maBr034bb0rCXNWxiHxRTU%2B0Rl3yeiYQ8OoBTEo0nn93pFne4Jr710w8IhQopUp5%2Bbl7pVwm%2FM5KkE9xY0tH3MELa4Ixm2Uu%2BupMv4DJOaglmmJ%2B%2B%2BzDl%2B74GxicGlNHKNLPHZpW%2FKmGK%2FnhqGsC4Y1p9%2F7LdpMd455KRi6UBecM03Jx6JlE4QaQ3TMKTibbVrV1G5tO%2BI0a332DuyFgKxEJf1djpzGK9%2BteqQ7p6L8gmSsJX2X3bAtf3UIkuLlxDrN%2B3dLFAbzAIBsjeoiTcFnGJAnT780Y%2Ba3zX5u0T2Bgw0GJBn4G%2B35762Shg0UzAawvYwIbu4Xqc1kVZoJbxEkwsh4xXF3UJ7muwARnOwM9TiP3alroSwkK6D0b7Mc6DFVs4AOAGGRG8qxjack1hkXzr38Wsc9AFAoWIxvjvLlJ2GpnQ9UbDJTE3Lu5H0HI5G7Iq20VZ3FbplGvxqTsrXDVFiRxB4%2BhQ9FQfxMYGJDsHCTCO86W%2BBjqkAZ0040zfA8oPbWJFZobdqGfsYlXOJQTHD6ZsLTORgDUcuG0Q%2B6wokeGULFuwgVqNKXXWM%2FWmO4ftb%2BgLP2lrTw2sLYovOVEm%2BBsFFY%2BhHiSVMCiHN%2BXUaHoqysHwcWW0XtrQByZUnR%2Bu9xBq4KD%2FpSwQj8XoPHCGBc0SnrB7KHF4rtQ7nSgbGiCxR3AyFvXMCLPtBaUrEFxQIHANi%2BN0d0rZ3X0y&X-Amz-Signature=1687b810d4782ff1c030915c1be66667a30e38757a27dab78644c708949f46fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
