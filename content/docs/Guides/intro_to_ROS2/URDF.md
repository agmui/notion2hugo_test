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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647HMXGT3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwWGW2d4miao5FOteNkh2KJXDVk2QqsZMJSdJCcXOhYAiEAh0ue%2Bi5lAb8EKXieB4QNQ25ISHHtrzjNTGeF%2BuziB9sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRcijUaSgJYEa%2Ff%2FyrcAw9VpVlZ%2BKZOl5FrKpCkUCANHq7JBdUvRYfNBsoycKye6QK%2Bswda%2FebTiVxFYLzuyczvUeume%2BmR5dj7VcPZoJb1aZFTk4MZMnOCqDyOr2SO%2FP%2FZ1nK%2F%2FANytlRpAY18mg7v07HHVuC8ArSpkg%2BXa2reDCgtVWIekLhWqNVLGDodJzD57iQLUj0j6LKaH5zFD6JS20GNNwvJ4MUW4GvXYnkqg9Y8PPepKaTPTkcrs%2BWJRLNzJ1ruWPGC8ZmzoupKZs1VR4HgIs0%2FTlUdPggVaEKbh2ZbG7X%2FqSwA8MIJo%2BnzvbebFFv37%2Bw81O1UYbVP9hJ17vcAQQhoTcqwjJYUYR35hD9qmYdgMe4hpEzz%2FISOMByPAYtQJs3vfywsQow%2F1%2BNvrEz3yhISEKzaXyCOjk5HfA6j1hIXaNR77lUxmDyFBufObkh25rUw1pfjHts0fTzk3fI0Zfmas9LKcJBS6wHO1n1trvfdOG5p%2FgxfSVCDNG2VlkROHQhcgDlz4LLHv5gdlCJyBmxDZl3LD7UanalW9k1tV3MUgDt4uppnUxRUMzUWdAu%2Bxe4xEzM353a7C5ms%2FWG1AyRmblIfYmwiMMQ1h7ye%2B9d%2Fhzw7pl55D1tfXKq43DD%2BL6FpGIvuMN3B%2Bb8GOqUBdPH7QiJB25JREMOEItNGJWxhRZcWRA7oOnBSotN85d3HzWC%2BlUczSv0JIi37scoeTt6wt%2BKpbSFk6rp7XG0vPXmrNXvqmy1NMke0BN6lVyygsiN5Sxq9pi67BnYepQeIWqn1obFeWHHEuGaM%2FiaY8Stn%2B%2B8coWbxtKaW34m6y1kwf4MaFv1lHDhAEWp5AtT%2FJv%2B3cvPTWGZzE3HSRBLVjlK62ugk&X-Amz-Signature=b42bf0d935ae2aafeea93903c9e021d02fe71d8ed4a14953de9d7cb196d22578&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647HMXGT3%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwWGW2d4miao5FOteNkh2KJXDVk2QqsZMJSdJCcXOhYAiEAh0ue%2Bi5lAb8EKXieB4QNQ25ISHHtrzjNTGeF%2BuziB9sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRcijUaSgJYEa%2Ff%2FyrcAw9VpVlZ%2BKZOl5FrKpCkUCANHq7JBdUvRYfNBsoycKye6QK%2Bswda%2FebTiVxFYLzuyczvUeume%2BmR5dj7VcPZoJb1aZFTk4MZMnOCqDyOr2SO%2FP%2FZ1nK%2F%2FANytlRpAY18mg7v07HHVuC8ArSpkg%2BXa2reDCgtVWIekLhWqNVLGDodJzD57iQLUj0j6LKaH5zFD6JS20GNNwvJ4MUW4GvXYnkqg9Y8PPepKaTPTkcrs%2BWJRLNzJ1ruWPGC8ZmzoupKZs1VR4HgIs0%2FTlUdPggVaEKbh2ZbG7X%2FqSwA8MIJo%2BnzvbebFFv37%2Bw81O1UYbVP9hJ17vcAQQhoTcqwjJYUYR35hD9qmYdgMe4hpEzz%2FISOMByPAYtQJs3vfywsQow%2F1%2BNvrEz3yhISEKzaXyCOjk5HfA6j1hIXaNR77lUxmDyFBufObkh25rUw1pfjHts0fTzk3fI0Zfmas9LKcJBS6wHO1n1trvfdOG5p%2FgxfSVCDNG2VlkROHQhcgDlz4LLHv5gdlCJyBmxDZl3LD7UanalW9k1tV3MUgDt4uppnUxRUMzUWdAu%2Bxe4xEzM353a7C5ms%2FWG1AyRmblIfYmwiMMQ1h7ye%2B9d%2Fhzw7pl55D1tfXKq43DD%2BL6FpGIvuMN3B%2Bb8GOqUBdPH7QiJB25JREMOEItNGJWxhRZcWRA7oOnBSotN85d3HzWC%2BlUczSv0JIi37scoeTt6wt%2BKpbSFk6rp7XG0vPXmrNXvqmy1NMke0BN6lVyygsiN5Sxq9pi67BnYepQeIWqn1obFeWHHEuGaM%2FiaY8Stn%2B%2B8coWbxtKaW34m6y1kwf4MaFv1lHDhAEWp5AtT%2FJv%2B3cvPTWGZzE3HSRBLVjlK62ugk&X-Amz-Signature=b61ca3a9ffb0aa9d465131ed81b4496c7411c837f7f3fc4fcb94d94b643fa1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
