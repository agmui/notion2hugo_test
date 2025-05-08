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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFZPK2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2mQXPn1zttdNgD90jA8uMGJsBIq%2FVsGjG70mRKmN9WAiAlklaj8cNnPHhmazzghi7WS42xYS4hNg4juSuWgCPf%2BCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMGSkaxrgcYWIEklJ0KtwDNhgFtP%2FIHwaaO59ofHtiSktnUoaRTRouUW3ek9N7sZRRnFTDzhweCm8iNp1jj5IZWptgW3cocKsob0LhmpxPlhoJy1NtZ4y5joXn0kdMB5ZIScwWdyh%2Btpl9Uk5C1fRKwwpp9IVXCq%2FDsDXfnCVP%2Fdeh5%2BJEmYrLLP5a6Ilx3MlfP9%2FON98qdXdrnTeXvNZrEB61CpF1dDJkWCWl3D2YbW0Yw0jNm45bovlR1IRbn4KTre0mMJuD6vrz%2FrEUWbVp1IUKi1lD%2FSCsQ5GSyBrZmxuOu0XL8xEOPxGzUmnK4MojYMy5Kt9gNMiQBwgMOySVdsZmR3vdHbbW3LGQtSAcYkVezu5T6pmqeKt0H1W7ucwAU3u17IzwlnH%2B2ENZMCv%2BC6MSoNdY2ZJYHEPh52trX9iEs8F2XmGMwVSV74KGOPbh0aT7jz3ww75hB6PbRvIQIvfnI7LXtxUqdu%2BXtK9wSVUXpkpw7jKevaL0U%2BKChGMz%2F6e0Wy0Uffgm7ylA5NWDAdtfuvk73CtfH8rNGT5x0UeyigMNix1epEqzNzCHf8Sm4v5pjpnYZmUVxPrFXZWC5u37ZeQ1JQB4b9CMPzopZA7In1eDZfzbCu4uVNMGtOzzae%2FeRjvI1c33bj4w6%2BTywAY6pgE6pT%2B0ZgMO7W%2Bu5OErhQ7Zy%2Bq46atii%2BDQsa%2BxcDz9u%2BtWL44dOX4VZWa8zg70gIjt8IIL7gwmbAf4Y43Tz2BB6XLElD6hw9x774SzWNliOVXRC505yDgLLqZJkKT8LkcxEesOZU0tnZbFbDiGA86qN8VRYebzn3pHHK5jEwdGXj%2BFOz1zaUy8N2XBypzRm%2F3SuG2fjlwv0ZQG7o5pL7iXVa7uz3kE&X-Amz-Signature=ee1ab7184ff897e7404bbc3438e7d610c7fb112f7750078be72d751b97d536c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFZPK2N%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2mQXPn1zttdNgD90jA8uMGJsBIq%2FVsGjG70mRKmN9WAiAlklaj8cNnPHhmazzghi7WS42xYS4hNg4juSuWgCPf%2BCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMGSkaxrgcYWIEklJ0KtwDNhgFtP%2FIHwaaO59ofHtiSktnUoaRTRouUW3ek9N7sZRRnFTDzhweCm8iNp1jj5IZWptgW3cocKsob0LhmpxPlhoJy1NtZ4y5joXn0kdMB5ZIScwWdyh%2Btpl9Uk5C1fRKwwpp9IVXCq%2FDsDXfnCVP%2Fdeh5%2BJEmYrLLP5a6Ilx3MlfP9%2FON98qdXdrnTeXvNZrEB61CpF1dDJkWCWl3D2YbW0Yw0jNm45bovlR1IRbn4KTre0mMJuD6vrz%2FrEUWbVp1IUKi1lD%2FSCsQ5GSyBrZmxuOu0XL8xEOPxGzUmnK4MojYMy5Kt9gNMiQBwgMOySVdsZmR3vdHbbW3LGQtSAcYkVezu5T6pmqeKt0H1W7ucwAU3u17IzwlnH%2B2ENZMCv%2BC6MSoNdY2ZJYHEPh52trX9iEs8F2XmGMwVSV74KGOPbh0aT7jz3ww75hB6PbRvIQIvfnI7LXtxUqdu%2BXtK9wSVUXpkpw7jKevaL0U%2BKChGMz%2F6e0Wy0Uffgm7ylA5NWDAdtfuvk73CtfH8rNGT5x0UeyigMNix1epEqzNzCHf8Sm4v5pjpnYZmUVxPrFXZWC5u37ZeQ1JQB4b9CMPzopZA7In1eDZfzbCu4uVNMGtOzzae%2FeRjvI1c33bj4w6%2BTywAY6pgE6pT%2B0ZgMO7W%2Bu5OErhQ7Zy%2Bq46atii%2BDQsa%2BxcDz9u%2BtWL44dOX4VZWa8zg70gIjt8IIL7gwmbAf4Y43Tz2BB6XLElD6hw9x774SzWNliOVXRC505yDgLLqZJkKT8LkcxEesOZU0tnZbFbDiGA86qN8VRYebzn3pHHK5jEwdGXj%2BFOz1zaUy8N2XBypzRm%2F3SuG2fjlwv0ZQG7o5pL7iXVa7uz3kE&X-Amz-Signature=d37d3624de9ed11e5f650e31df7b6249c8350bad5f7e635d050335bac086904c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
