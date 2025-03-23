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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIBFNJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQClm89ZqjB0SyEVUAQXJBzRx%2B3ZEjqfTzzvHhkun%2BvdowIhAPV9e%2FJ3Eju4rzBYYyQIpSI5gwy4snTsrowOmNyErAztKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrKfgI4ykcpMatom0q3AMkICbldogC35SniaAtvTSzC68hpqh%2FuPpfr%2FYv%2FHUl7EhZpgY9gVrox0e47GtuhHq27xII%2B3IwcbSxYQ92oaTLzePle7wljIkht%2BbBKDJIYVtzwPyUgkZxbvkLMJwjcS86l8IQMCfgGa%2BiiuFhUf7yqZJ46RchskltVi40DtzrTcqVb%2Bk7yDhrtViJcnUhiYkgdj339VRkr44z%2F%2F5LjsGVO8LoVJQHsAl4ItwTqBjGJc8rrDPqzCoXA1gX0d6IyDlFWSPmDhIxhQxh9RE23udsFfhstw6pOQzlmdOWQ3HMxoDskqf0W%2BdXJLOuENU26UPLFzb3TJT3jcb2DnOZyQ0pV4IDxm7Pt4T87YwgTz4VWriQUW1Ov2Iog9uJKYz3CErny%2BHw%2BWoKbbkeA68XOTgHxJRTknGafIBoNo0qDDZ9zBcJXWxdY7jXQcnKLLb4FAxl%2FTHJYkcHwsKKMlEBzsFR6bBKx1qwbzWLpOBlxbpkl%2Bd6gBTZFHiHM8xA6lxNmbQaVlyY4UfONFBwtJplHka8Na7o8fZGttMaSYX4S4AD2eEPWEAn3mke8WD7kp0Km64Gq9JOUfVHlZNI1kIFwQMCjNHBS%2B1htRWuXJKEQpurnRf4l0mp5LLtiSJEJjDPzP%2B%2BBjqkAWb5GD045HM4NuOfuw%2FGu%2FTNb96Rr18uomx6f%2Bhu6Vp7xoBrIvuy7kYPDsrdN2GeFfovm62JRSvFPe96lpJ2bzAJcNLUN9%2By5ZoHVzK2HE55UkqY5z%2BA4BtrC6A3bnMhTBeXHS8in%2BfO67lPwJYibyGZW4WWsdzbDybPxOqWGLC7De5mJ8cJga%2F%2F2rIaGuRef%2FRGuKv%2F0AqEM27ry88GzpRs4nIw&X-Amz-Signature=dd073337add0190d86e349518e31fb5f39155aefb26ade1f3545fb07c0f2b541&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIBFNJF%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQClm89ZqjB0SyEVUAQXJBzRx%2B3ZEjqfTzzvHhkun%2BvdowIhAPV9e%2FJ3Eju4rzBYYyQIpSI5gwy4snTsrowOmNyErAztKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrKfgI4ykcpMatom0q3AMkICbldogC35SniaAtvTSzC68hpqh%2FuPpfr%2FYv%2FHUl7EhZpgY9gVrox0e47GtuhHq27xII%2B3IwcbSxYQ92oaTLzePle7wljIkht%2BbBKDJIYVtzwPyUgkZxbvkLMJwjcS86l8IQMCfgGa%2BiiuFhUf7yqZJ46RchskltVi40DtzrTcqVb%2Bk7yDhrtViJcnUhiYkgdj339VRkr44z%2F%2F5LjsGVO8LoVJQHsAl4ItwTqBjGJc8rrDPqzCoXA1gX0d6IyDlFWSPmDhIxhQxh9RE23udsFfhstw6pOQzlmdOWQ3HMxoDskqf0W%2BdXJLOuENU26UPLFzb3TJT3jcb2DnOZyQ0pV4IDxm7Pt4T87YwgTz4VWriQUW1Ov2Iog9uJKYz3CErny%2BHw%2BWoKbbkeA68XOTgHxJRTknGafIBoNo0qDDZ9zBcJXWxdY7jXQcnKLLb4FAxl%2FTHJYkcHwsKKMlEBzsFR6bBKx1qwbzWLpOBlxbpkl%2Bd6gBTZFHiHM8xA6lxNmbQaVlyY4UfONFBwtJplHka8Na7o8fZGttMaSYX4S4AD2eEPWEAn3mke8WD7kp0Km64Gq9JOUfVHlZNI1kIFwQMCjNHBS%2B1htRWuXJKEQpurnRf4l0mp5LLtiSJEJjDPzP%2B%2BBjqkAWb5GD045HM4NuOfuw%2FGu%2FTNb96Rr18uomx6f%2Bhu6Vp7xoBrIvuy7kYPDsrdN2GeFfovm62JRSvFPe96lpJ2bzAJcNLUN9%2By5ZoHVzK2HE55UkqY5z%2BA4BtrC6A3bnMhTBeXHS8in%2BfO67lPwJYibyGZW4WWsdzbDybPxOqWGLC7De5mJ8cJga%2F%2F2rIaGuRef%2FRGuKv%2F0AqEM27ry88GzpRs4nIw&X-Amz-Signature=558de3ed4e497f9fc6b14c6caf2e97fd1b40096e154e0847ec4c2569aab3c7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
