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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRUFBPA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCczgWoJvxDoCURzJazXphjuMBON7Q1deOL%2F6vQ8QB%2FcgIgJ8aBHEE5XOLCxJyARosZ52xBm%2FG63ewZwJ1auBV%2FaCcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSTaHcdzeQtPirF7ircA1tokqR0wbxW2vw8bGUVy7kWrKEKYwFekZ7EgTeEpVWbF1l%2Fy4WG7x8Uigk4XOBYmxpKVN6BH5JZKxbiALO1SEslnzeZ3BNMMtLANV53MnuInAy%2FoTWyXlZNWBJWzU9RCYYO3iddV%2BMkYf7RNIcx%2FU7aIxwIg2qxg%2FYeDevxlSVC3Lm0sijVARH9yteHuCgwOhn1NAEP2vB%2FlhiP1RhqFznWXzus2ZfyIxR2WNDKvJ986%2Fqub%2Fe%2BRF5quXjotdv4dKLoNqFiOqIwmlrBJWeFFTH036v%2BPDqLHt%2F2HXh1faL1szfw5CqJi786L%2BvmphJVvrIMhLdkXbSLwTEzaLV42rjouSPDh%2FGm6BssWamXrEk%2FIualpwKiMbDfEdyK6bdkn5%2BwA%2BXLUc1GZToQVXryxouJnQeCoeLkTvscC9XjBCBJCwEwcQk0wE634zYJwdKn%2BsWDXw7QhSwTtogp7QulBT3o4Y0XxcUvSzE1rBnC2DS1V%2BAxAWOGxpNRzVmHcjQ3ed7g5csykhcr6Kd%2F0clhnEhOZZ8JSe4V1Jli4yAKzgGm1SVloOc0DunhZVfLFeRu91J%2FjNe51OZJfZCxExF7wHl3AgHWLtH5elSCu6n8v0KJwNBqAJ9dSNnePw6%2FMIGji8MGOqUBOfQjTTYxN%2Bjh%2FhzhuCCA5VatR68u3r42YJFblphudyQekv5uySJIIppImynb5ud9LOZzCwBV1FTzFg8bJi3b1fXeIsUYklD2IXG%2Bn9kt4bYf1LTFGP5cU3C3WLVx35i4i4yr2xX%2BnRybOBkiqbuw15Ci3uTY9NgxuNZqi%2FTo3ovZi0wOwmXq84p6onksPcBjAFhAO2%2BQFHNkhWqfIpqkiDMtMQ1V&X-Amz-Signature=57887d8d3793fb6fe267781e081c11b7dc2c4b289c184903b3a00963fef33209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRUFBPA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCczgWoJvxDoCURzJazXphjuMBON7Q1deOL%2F6vQ8QB%2FcgIgJ8aBHEE5XOLCxJyARosZ52xBm%2FG63ewZwJ1auBV%2FaCcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSTaHcdzeQtPirF7ircA1tokqR0wbxW2vw8bGUVy7kWrKEKYwFekZ7EgTeEpVWbF1l%2Fy4WG7x8Uigk4XOBYmxpKVN6BH5JZKxbiALO1SEslnzeZ3BNMMtLANV53MnuInAy%2FoTWyXlZNWBJWzU9RCYYO3iddV%2BMkYf7RNIcx%2FU7aIxwIg2qxg%2FYeDevxlSVC3Lm0sijVARH9yteHuCgwOhn1NAEP2vB%2FlhiP1RhqFznWXzus2ZfyIxR2WNDKvJ986%2Fqub%2Fe%2BRF5quXjotdv4dKLoNqFiOqIwmlrBJWeFFTH036v%2BPDqLHt%2F2HXh1faL1szfw5CqJi786L%2BvmphJVvrIMhLdkXbSLwTEzaLV42rjouSPDh%2FGm6BssWamXrEk%2FIualpwKiMbDfEdyK6bdkn5%2BwA%2BXLUc1GZToQVXryxouJnQeCoeLkTvscC9XjBCBJCwEwcQk0wE634zYJwdKn%2BsWDXw7QhSwTtogp7QulBT3o4Y0XxcUvSzE1rBnC2DS1V%2BAxAWOGxpNRzVmHcjQ3ed7g5csykhcr6Kd%2F0clhnEhOZZ8JSe4V1Jli4yAKzgGm1SVloOc0DunhZVfLFeRu91J%2FjNe51OZJfZCxExF7wHl3AgHWLtH5elSCu6n8v0KJwNBqAJ9dSNnePw6%2FMIGji8MGOqUBOfQjTTYxN%2Bjh%2FhzhuCCA5VatR68u3r42YJFblphudyQekv5uySJIIppImynb5ud9LOZzCwBV1FTzFg8bJi3b1fXeIsUYklD2IXG%2Bn9kt4bYf1LTFGP5cU3C3WLVx35i4i4yr2xX%2BnRybOBkiqbuw15Ci3uTY9NgxuNZqi%2FTo3ovZi0wOwmXq84p6onksPcBjAFhAO2%2BQFHNkhWqfIpqkiDMtMQ1V&X-Amz-Signature=4976154a6ae216e29fe0d9320671f6a01c5c9b623919d05fe001275a1c57b286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
