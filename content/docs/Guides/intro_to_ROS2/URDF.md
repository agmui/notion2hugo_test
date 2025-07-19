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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPJDPUO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJAhd8PitBH8kweaV8SZlJS3N1a6IoH3%2FW7DA64ngR2QIgALHQJJPI6jV2onb1Cm%2F7Ic94WMlxdBPoWHVl%2FZhY230qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHQOohNONXfkLQc2yrcA8vxIZ0pmzTWd5Pk5oKI%2B%2FSUklBWyCFriu8enhN1XuxO7IfyapSDHGLmsLwxAApBz9JFjRkWTw6e5%2B6ffmwnhQHl%2FgyvIAXPNpmoJPDIe0xF5JINdxoQLlOY53iXQHNmMVMsKT9EJtotN9tvTolvBZIq3jvhuUJeY0VsLLcfaSkST12ChgJfUyXnWdANizFNYnA7yOrlMZOx9l4GZSVO8LWMes0vK4tFJQ6kCU4Ii4dH9A6ycfq5q%2FqQOIySrsNcdfoe%2Fiy%2BJufnFSITFBjjDo1TTYrReM%2Fkk8eqesJNUaOM9JUqZhCpJBoYvR9XNAhBgEt9Whg1BSQ0mnEvOs7NNqR4QoB7IO0t0bpR30csxB3IzM8vvJ3lVikghdlQlK3v%2FgSFOQ309jheDVcb4vi0vubdQZfBpjTzwJg4UUBtNNxZD2EHeIr1iL7PUv8vZodbnC7eD0oSLCfJHOVqOWiQtclAX5faxtL2sIRsmBoe7jz7uuap9KjMsAxFHOF2V5hhVOWuXlDOD2tsx63EkHyFDke7HWSwx3XbkkRYeH1qLOvcsHZbRNlKBVLD56r8DffLRw2O05pNeO1KxXtEN20HlRHLsIpCTvcoSjZ2HlGA%2BzrR%2BPQ734CpUFm22%2FwMMOGg7MMGOqUBiOY2tfxlDuA53sJ8SiRepiLN69%2B7UTbL5q%2FS636Zg8cEmz02R%2FfJknmhUQ1m1BcsH%2F8Qko%2Fl0zG0RlIgoWSafasagHIfpF3%2Bf6BwWmPitjhmBnfkRLcoYztrwdO5gRNWYB7YNsmslvArNZsE925w4%2F2ER7euTplhPQ7eYUNiyGsltof7Gca70VHc7Mdp6c0AxkpPK29HZ%2FfkzZwq3JxcyM8%2BCHNf&X-Amz-Signature=f2177beae4b9c8583e67d2d6ebecf8fcd052ae846f36376865204b1843bcc8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPJDPUO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJAhd8PitBH8kweaV8SZlJS3N1a6IoH3%2FW7DA64ngR2QIgALHQJJPI6jV2onb1Cm%2F7Ic94WMlxdBPoWHVl%2FZhY230qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHQOohNONXfkLQc2yrcA8vxIZ0pmzTWd5Pk5oKI%2B%2FSUklBWyCFriu8enhN1XuxO7IfyapSDHGLmsLwxAApBz9JFjRkWTw6e5%2B6ffmwnhQHl%2FgyvIAXPNpmoJPDIe0xF5JINdxoQLlOY53iXQHNmMVMsKT9EJtotN9tvTolvBZIq3jvhuUJeY0VsLLcfaSkST12ChgJfUyXnWdANizFNYnA7yOrlMZOx9l4GZSVO8LWMes0vK4tFJQ6kCU4Ii4dH9A6ycfq5q%2FqQOIySrsNcdfoe%2Fiy%2BJufnFSITFBjjDo1TTYrReM%2Fkk8eqesJNUaOM9JUqZhCpJBoYvR9XNAhBgEt9Whg1BSQ0mnEvOs7NNqR4QoB7IO0t0bpR30csxB3IzM8vvJ3lVikghdlQlK3v%2FgSFOQ309jheDVcb4vi0vubdQZfBpjTzwJg4UUBtNNxZD2EHeIr1iL7PUv8vZodbnC7eD0oSLCfJHOVqOWiQtclAX5faxtL2sIRsmBoe7jz7uuap9KjMsAxFHOF2V5hhVOWuXlDOD2tsx63EkHyFDke7HWSwx3XbkkRYeH1qLOvcsHZbRNlKBVLD56r8DffLRw2O05pNeO1KxXtEN20HlRHLsIpCTvcoSjZ2HlGA%2BzrR%2BPQ734CpUFm22%2FwMMOGg7MMGOqUBiOY2tfxlDuA53sJ8SiRepiLN69%2B7UTbL5q%2FS636Zg8cEmz02R%2FfJknmhUQ1m1BcsH%2F8Qko%2Fl0zG0RlIgoWSafasagHIfpF3%2Bf6BwWmPitjhmBnfkRLcoYztrwdO5gRNWYB7YNsmslvArNZsE925w4%2F2ER7euTplhPQ7eYUNiyGsltof7Gca70VHc7Mdp6c0AxkpPK29HZ%2FfkzZwq3JxcyM8%2BCHNf&X-Amz-Signature=a91e0529845bad95395562e515d9c60864215557ebc9d5c828012b8e53fbae05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
