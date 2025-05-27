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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K24KWLG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOZYI691v4l3%2B5ZrjltD51Q7wAlSXI1MvxpENBFOZigIhANd0L5rLhMuUafNFnsa0CSC8KkcF3sIwXzhqkiNGZ4SDKv8DCFoQABoMNjM3NDIzMTgzODA1IgwlweX7aIoBHGuSI1Iq3AM8LskYp7X94AO%2B0inQ3T0RcQbozkwx0wo0lMfwM6obXuiXAuAGJEKvAxa7T6PwfWjWPw3%2ByhCaOIkWoeE%2Bnv0aKwmTh9JuadUMBoYLOR6ePbONTrXsRi%2FY2Ys1aDGL4NleYf5eYBaEgXmbk1zdGCdvyuZMb%2F5Jf8Zzl9bzgvME1HuJ9WDy88bgD733dPZZefdCibM0hf6sfa9K%2Braz7l8dTcGnFUHyKbDhoOv6jEmBJjWO48MJbebWeq5YU6VVFRmfDD6zmBfXz5934cO6vBrMfhvKWPthBfg6vIHIJaYnWXwNT9lzZnKEEcRYs8UBz9b7nTnG1VwmnOH0MAPldmqALmEPHBEa1%2FVgiMwKXYVtaL1OXq5eOiMLjo4x%2BrFZ3ZB28cYFBJ9nc%2FRyZbJEh6qroLEuoqS3uIqhIyPjd7ObHuTLiSDqGOEoeHzaJ9MJtjNsULOe%2FbGyMmQXnwK6ioq%2FPL7VVcFftD9s38zIw0gCzSC0VH21Y3er%2BwN2O8aNkUmQN%2F83OZSw4h21oqTIxH53ZUGxwmbroTBlZ4jC3NVf6qKWzdMrff6tiXTOU%2FY4ujv1jtEyq%2BJdKT%2FB%2B6wlUHZ%2BB5A2eyiAfwGagzimBqdbXur0V9Pl0reFYklS7DDygNbBBjqkAQgqq5KaY8PSwmYFimpNufac92RdTzpI9YpvarVz%2F2WTGhxk6e90jQODv%2Bj8eWw%2FXGYZ1KC5jyiPFxAn3pwSMiiG%2BN8xr5g66mK4PAOb2ikE%2F9jNQyw0nx5xmzzcAY6sU57L%2B9L4XE2217b0Xz%2BR0aIc1yHGoY82HO%2BQ7coztIKm4Atkxd9mGixgMOmr3lBdz8kFEGvohINY9NXILAH2Acm%2FUnmc&X-Amz-Signature=2ae90013ec66fa6f4a8d9b857dbb100ecdbef13c39e6bfa45a469be8b33130ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K24KWLG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOZYI691v4l3%2B5ZrjltD51Q7wAlSXI1MvxpENBFOZigIhANd0L5rLhMuUafNFnsa0CSC8KkcF3sIwXzhqkiNGZ4SDKv8DCFoQABoMNjM3NDIzMTgzODA1IgwlweX7aIoBHGuSI1Iq3AM8LskYp7X94AO%2B0inQ3T0RcQbozkwx0wo0lMfwM6obXuiXAuAGJEKvAxa7T6PwfWjWPw3%2ByhCaOIkWoeE%2Bnv0aKwmTh9JuadUMBoYLOR6ePbONTrXsRi%2FY2Ys1aDGL4NleYf5eYBaEgXmbk1zdGCdvyuZMb%2F5Jf8Zzl9bzgvME1HuJ9WDy88bgD733dPZZefdCibM0hf6sfa9K%2Braz7l8dTcGnFUHyKbDhoOv6jEmBJjWO48MJbebWeq5YU6VVFRmfDD6zmBfXz5934cO6vBrMfhvKWPthBfg6vIHIJaYnWXwNT9lzZnKEEcRYs8UBz9b7nTnG1VwmnOH0MAPldmqALmEPHBEa1%2FVgiMwKXYVtaL1OXq5eOiMLjo4x%2BrFZ3ZB28cYFBJ9nc%2FRyZbJEh6qroLEuoqS3uIqhIyPjd7ObHuTLiSDqGOEoeHzaJ9MJtjNsULOe%2FbGyMmQXnwK6ioq%2FPL7VVcFftD9s38zIw0gCzSC0VH21Y3er%2BwN2O8aNkUmQN%2F83OZSw4h21oqTIxH53ZUGxwmbroTBlZ4jC3NVf6qKWzdMrff6tiXTOU%2FY4ujv1jtEyq%2BJdKT%2FB%2B6wlUHZ%2BB5A2eyiAfwGagzimBqdbXur0V9Pl0reFYklS7DDygNbBBjqkAQgqq5KaY8PSwmYFimpNufac92RdTzpI9YpvarVz%2F2WTGhxk6e90jQODv%2Bj8eWw%2FXGYZ1KC5jyiPFxAn3pwSMiiG%2BN8xr5g66mK4PAOb2ikE%2F9jNQyw0nx5xmzzcAY6sU57L%2B9L4XE2217b0Xz%2BR0aIc1yHGoY82HO%2BQ7coztIKm4Atkxd9mGixgMOmr3lBdz8kFEGvohINY9NXILAH2Acm%2FUnmc&X-Amz-Signature=0333bd0e4f686e6e6353799b3f1b9702324781733684a204174fcb9bad5aa8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
