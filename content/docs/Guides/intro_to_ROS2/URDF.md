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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEG6Z4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL6dz7%2BOqd0LAG7IFoAyuK2sjHVcqyxbRRUDdgGSgDzAiEAlCyRiW1DZSNs33UMmayxccei0J8HtE1jgmhgT13K%2Bk0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGqTEkDSPpeMVWzkuyrcAyJYseh6oxHFDh3VjFHkEFRsyEoW4RJk3UFFzbOtnUk063aDp0jY3i%2F7RqVYt4ZNIfb5hxGXt4xTe%2FaR6q7tBf6dO6WzXy5TQJQk9DqCJXJrV4nco31oOyyr8yv0LUpkfpd8D%2F2Oo5pqAY0BGCZCJBhBw%2Bbm7WF0jyFo3qJ36WMTP8ARvWb0H3xdr3eubnRpWISc4JkZuBv0eoZu2OBHzFQ%2FEP8MnVOrU1OqGAvfxu204NxILELjp4lxBPgCVHjTRZqQrPquezFkPnOUGT1vPaMR2I5ksSgL2x%2B25ep5aTAyJqAhobgGzE2qP9cnIz7BAM0giFQO2CrbBU%2BGXx98T6L3MSgBPVWf7FCCHDJvgFtpMl97XvcxG%2FGQ6wGCIlOtSdKOJziiVO%2B0zBBfgJQDH7ocf5GiRnbXhGdsJabP0QOmBoeAdJz5dHLLK%2BfDUD2fkcALzbI%2FkJDyePOa7o0I8WMrtbwVmRSSBn2lMZp8qZK5IOyhuAeTDmrFvFNxeIJIMOqbqNrAnuSkiLSaUicad%2BVxU2U%2B0jbj96ISXm6OWeC961QfUciqD6zKa87FrjAmSUkPJ%2BN93oTuU4UxyKfVRPsTNVHVRmROvc9%2F4Kx1z7vvSvQXjIVqG70tgo36MK3%2B5cAGOqUBbmkCR8LZnCMAcIGkm6idBjdWJ5OPr2XgiwDubT0vi4YhX7IJ%2BXH0CTEl41rMA3qr5xwbuQEkgEYzieQQBmrSyrGIAea3jcz9VgRDk%2Fs72VN3gdn5qkFLM%2FozF8D6tYda4oW0wO95gioiElrwbvl1uTYat2aOPl7rKhVGVXgVQXzSfrBtAOejzqgjYMBkiGKKuo6NLqg%2FHpZpD7pnahkD7HdsjXnZ&X-Amz-Signature=bbc46e140f7c6a8e82f662b9a250c5933f3c43ef19f7125f45ac83d555226515&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEG6Z4M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL6dz7%2BOqd0LAG7IFoAyuK2sjHVcqyxbRRUDdgGSgDzAiEAlCyRiW1DZSNs33UMmayxccei0J8HtE1jgmhgT13K%2Bk0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGqTEkDSPpeMVWzkuyrcAyJYseh6oxHFDh3VjFHkEFRsyEoW4RJk3UFFzbOtnUk063aDp0jY3i%2F7RqVYt4ZNIfb5hxGXt4xTe%2FaR6q7tBf6dO6WzXy5TQJQk9DqCJXJrV4nco31oOyyr8yv0LUpkfpd8D%2F2Oo5pqAY0BGCZCJBhBw%2Bbm7WF0jyFo3qJ36WMTP8ARvWb0H3xdr3eubnRpWISc4JkZuBv0eoZu2OBHzFQ%2FEP8MnVOrU1OqGAvfxu204NxILELjp4lxBPgCVHjTRZqQrPquezFkPnOUGT1vPaMR2I5ksSgL2x%2B25ep5aTAyJqAhobgGzE2qP9cnIz7BAM0giFQO2CrbBU%2BGXx98T6L3MSgBPVWf7FCCHDJvgFtpMl97XvcxG%2FGQ6wGCIlOtSdKOJziiVO%2B0zBBfgJQDH7ocf5GiRnbXhGdsJabP0QOmBoeAdJz5dHLLK%2BfDUD2fkcALzbI%2FkJDyePOa7o0I8WMrtbwVmRSSBn2lMZp8qZK5IOyhuAeTDmrFvFNxeIJIMOqbqNrAnuSkiLSaUicad%2BVxU2U%2B0jbj96ISXm6OWeC961QfUciqD6zKa87FrjAmSUkPJ%2BN93oTuU4UxyKfVRPsTNVHVRmROvc9%2F4Kx1z7vvSvQXjIVqG70tgo36MK3%2B5cAGOqUBbmkCR8LZnCMAcIGkm6idBjdWJ5OPr2XgiwDubT0vi4YhX7IJ%2BXH0CTEl41rMA3qr5xwbuQEkgEYzieQQBmrSyrGIAea3jcz9VgRDk%2Fs72VN3gdn5qkFLM%2FozF8D6tYda4oW0wO95gioiElrwbvl1uTYat2aOPl7rKhVGVXgVQXzSfrBtAOejzqgjYMBkiGKKuo6NLqg%2FHpZpD7pnahkD7HdsjXnZ&X-Amz-Signature=0222415f9d27124b808abe85d75fbaa2331c6810f5ad7c1a7f717e548079f1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
