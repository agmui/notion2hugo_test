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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7NIUXS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLmeFldUsQ5yVCnqd3SoUXQyuUTgVplH0PajYzpXK96AiEAx8pPol8DAH7dXjXHM6vBqECR18BzbzECMu11JZz2QuwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1qPKRlwCGz3l8XMircA3aXhUV6Dx8ezF1wMqJ5ku4CMfGsSn3s%2FWMz%2FRHcei9ZTwSyWQM%2BH9M%2BZzW4LXnzGxqH5kHVJss1HyE9R%2Fv%2F6e0usBodXA3ADuBvZrGdNNbDVJSN%2F%2FvMvHiscbIV93qxksjvyqVJVPASdgDDlqlINqWa6HfFHIfw217wmYEPnJbd95eOeFqwNBFcq7bK7WyMqXyrF3hkK9vqJbEKPL3%2BhxTc98m%2Fy2AyWpPEztIaSMr%2F6pPqKIhvEKS9AeK%2BPHAcj0YJsPr688XJjz5QGm6VCnONr%2BRYiPxftiWxU1PDTi6WY7GUzrYkY3gJq%2BBupqY037X4Fh76yvvyhkNn5KFfh0fobqr%2BhRE5AMMor915J0Ak3qI5QPBN7ss0HZs%2FH1Kd2oVO5FvPFrhBixPZhUuS6si6o%2FaBTRJEaP2m0Vk0VcZZBSVoyAzYeB%2Bru2LEfS%2BiNRCstQtckNH6nqggS9uVSz7ZabaK2Cn9we4Ur0yC%2BYmBzwgL01sfzJGJN1OKv5soFR4YQFQRPkXXk04wI77qUuyEXEd08YNdPOvpOj6uDYKTwKIFgQip%2F3nbVhOzy%2BqHBHxAzIeJEpq049xkOg5%2FvAjUuF2%2FIgVlgovLervoPbktqaa%2BlbuzBjc6YJZ1MO7K3L0GOqUBxPThYGW5M1m68yL0G%2Bt78pSlNSXFov4PBRXELSkeLT9e1Ixf4oVApCZnAQhr6sULTufBWk9wUzF5QpRoa%2B6HmQtnQzuFgofwKRi44%2F1Xq8%2FJLYXujFprnaES9IujoPuQkLAgEeJVfhi9bqbDvDtOEOVU%2F9hmkYZwncHxdDqwofQQWrhMXYesCjYxRL87qvnXTGL3YQ0rKL9eEx%2Btt%2B6VOyE5tfAz&X-Amz-Signature=7bde96771b2b72053a0824dbb769c2df91dcf0ed1ee2300aff50e116b0d83981&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7NIUXS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLmeFldUsQ5yVCnqd3SoUXQyuUTgVplH0PajYzpXK96AiEAx8pPol8DAH7dXjXHM6vBqECR18BzbzECMu11JZz2QuwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1qPKRlwCGz3l8XMircA3aXhUV6Dx8ezF1wMqJ5ku4CMfGsSn3s%2FWMz%2FRHcei9ZTwSyWQM%2BH9M%2BZzW4LXnzGxqH5kHVJss1HyE9R%2Fv%2F6e0usBodXA3ADuBvZrGdNNbDVJSN%2F%2FvMvHiscbIV93qxksjvyqVJVPASdgDDlqlINqWa6HfFHIfw217wmYEPnJbd95eOeFqwNBFcq7bK7WyMqXyrF3hkK9vqJbEKPL3%2BhxTc98m%2Fy2AyWpPEztIaSMr%2F6pPqKIhvEKS9AeK%2BPHAcj0YJsPr688XJjz5QGm6VCnONr%2BRYiPxftiWxU1PDTi6WY7GUzrYkY3gJq%2BBupqY037X4Fh76yvvyhkNn5KFfh0fobqr%2BhRE5AMMor915J0Ak3qI5QPBN7ss0HZs%2FH1Kd2oVO5FvPFrhBixPZhUuS6si6o%2FaBTRJEaP2m0Vk0VcZZBSVoyAzYeB%2Bru2LEfS%2BiNRCstQtckNH6nqggS9uVSz7ZabaK2Cn9we4Ur0yC%2BYmBzwgL01sfzJGJN1OKv5soFR4YQFQRPkXXk04wI77qUuyEXEd08YNdPOvpOj6uDYKTwKIFgQip%2F3nbVhOzy%2BqHBHxAzIeJEpq049xkOg5%2FvAjUuF2%2FIgVlgovLervoPbktqaa%2BlbuzBjc6YJZ1MO7K3L0GOqUBxPThYGW5M1m68yL0G%2Bt78pSlNSXFov4PBRXELSkeLT9e1Ixf4oVApCZnAQhr6sULTufBWk9wUzF5QpRoa%2B6HmQtnQzuFgofwKRi44%2F1Xq8%2FJLYXujFprnaES9IujoPuQkLAgEeJVfhi9bqbDvDtOEOVU%2F9hmkYZwncHxdDqwofQQWrhMXYesCjYxRL87qvnXTGL3YQ0rKL9eEx%2Btt%2B6VOyE5tfAz&X-Amz-Signature=2b720ebcf47ff42f93086a5a476d5d7d7da1043397354b5d87d68c5b599e7e05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
