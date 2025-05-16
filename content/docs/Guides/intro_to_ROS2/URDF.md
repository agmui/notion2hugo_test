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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSB2TFN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaK6OGD2g2yEy0gKIuJ%2BgghBdmHpoGZv4WFvgr2dlSlAiEA9KbeKKqoRe6lDgVBbALOKWX6qcFSuISWIr2nTWSENy0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMqpimzKKY6afo6Z3CrcA12mmV2Evk%2B7ytdoL4C2rNAfEKQhuurKbHJImKmyMgweB1z%2BhtfR%2BjcgwbO8TVOsabX7eDTc4uQoNZpOIeXED42CSYDZfK7P9JkpF5tkjn83VFqDjas9mMRRwUsR0tpOiWXJSkls5RPvVdRl48%2F4HpIkpxLtyGZs7aY40dKUgNwxiHTHwLYfZiHRT8ZzHM5MeTWJG2mPqxepxMubhY%2FWI1EUcMRA2pvm5GvEZmb8R%2Fx3UpisiaRgEt6rm4FmFgAGIEz7Il8D8Yy4fWpLekJAfkyvkmgLFp3P5aYyzjh%2FNb96Jz9OhEp%2F607MatfNdXSGRqzGxXNYQULw9DIgDzOMznqGoWnaaOL7EAgPV9V6yks9%2BoOY%2FjXuORfnBFYF%2FUlUcJmBFR5z4%2Fv3C3ZEeB69k0xwgazBJ44Uw2Qv92oq954X3C5MxTrd7WkUCpHFkNnk7ThnW5EDN7CpM%2FOQztPB9DYeeAEtkTxMiBzmqnuhUp3x1kB0mIGy5NJUkdw5LABWtx86b5ZyKXg4mbGOf%2Fa7h5da%2FS5WXdZcy%2B8gsnEAy8fDgBH6QxohPtJ3mInbkJO73NsgWCeeWcath%2B%2BxiIXM4%2FhbF4o%2FJ1BCLXbITZ%2FljLOXoP8WhhXfqlWm6Q99MPrbnMEGOqUBu3JkItLEklWhHXrm%2BilNvjei5qQ0kLa0agrLXCmUkAZ%2FcldPv4glFEWstNFWEQCf0LfTOl0E1sVN%2FmTD8XKQHw7BIdVCPjItSmfxvAUawg0BjQbyoxlP9CX6eh1L84qVtMsIXEW7YiGt4GUNVk6UmZEaC4fo7gyl3Sv2L6zzfGCR92poysyeHz%2F03LUaLp1z9TGmDqEcG82w4idne%2FKTtydV%2FVwQ&X-Amz-Signature=30e982c5be19626093849d201d988d88a822086866d6ad461e617a17e516fd95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDSB2TFN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaK6OGD2g2yEy0gKIuJ%2BgghBdmHpoGZv4WFvgr2dlSlAiEA9KbeKKqoRe6lDgVBbALOKWX6qcFSuISWIr2nTWSENy0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMqpimzKKY6afo6Z3CrcA12mmV2Evk%2B7ytdoL4C2rNAfEKQhuurKbHJImKmyMgweB1z%2BhtfR%2BjcgwbO8TVOsabX7eDTc4uQoNZpOIeXED42CSYDZfK7P9JkpF5tkjn83VFqDjas9mMRRwUsR0tpOiWXJSkls5RPvVdRl48%2F4HpIkpxLtyGZs7aY40dKUgNwxiHTHwLYfZiHRT8ZzHM5MeTWJG2mPqxepxMubhY%2FWI1EUcMRA2pvm5GvEZmb8R%2Fx3UpisiaRgEt6rm4FmFgAGIEz7Il8D8Yy4fWpLekJAfkyvkmgLFp3P5aYyzjh%2FNb96Jz9OhEp%2F607MatfNdXSGRqzGxXNYQULw9DIgDzOMznqGoWnaaOL7EAgPV9V6yks9%2BoOY%2FjXuORfnBFYF%2FUlUcJmBFR5z4%2Fv3C3ZEeB69k0xwgazBJ44Uw2Qv92oq954X3C5MxTrd7WkUCpHFkNnk7ThnW5EDN7CpM%2FOQztPB9DYeeAEtkTxMiBzmqnuhUp3x1kB0mIGy5NJUkdw5LABWtx86b5ZyKXg4mbGOf%2Fa7h5da%2FS5WXdZcy%2B8gsnEAy8fDgBH6QxohPtJ3mInbkJO73NsgWCeeWcath%2B%2BxiIXM4%2FhbF4o%2FJ1BCLXbITZ%2FljLOXoP8WhhXfqlWm6Q99MPrbnMEGOqUBu3JkItLEklWhHXrm%2BilNvjei5qQ0kLa0agrLXCmUkAZ%2FcldPv4glFEWstNFWEQCf0LfTOl0E1sVN%2FmTD8XKQHw7BIdVCPjItSmfxvAUawg0BjQbyoxlP9CX6eh1L84qVtMsIXEW7YiGt4GUNVk6UmZEaC4fo7gyl3Sv2L6zzfGCR92poysyeHz%2F03LUaLp1z9TGmDqEcG82w4idne%2FKTtydV%2FVwQ&X-Amz-Signature=4bd9916b78b9c5f7ecb76bf5aa8b2d31052b999b73c28b5312cad6d206c58c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
