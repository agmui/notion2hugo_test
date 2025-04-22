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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIAYSYQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDrx%2B8fUtuINe5ZLsPnNa%2FBXgSVfQNmSx19pgt%2FFtKerAiEA6d3RkJ0gfOEt69QZJdOQx0jV5z%2BHVuoY%2Br645AqDNF4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVIUyBWc9cdXdbCgircA9AFswrYkgLId7e0JWPXuJ3uvMyxVhV3s%2BE%2FKO2jNBo8g3HYp55yL35WhidaaByDblE0IkOb6VLWjlepIJSsmSu1i%2FK6qd7YmNrE6FMEUpM9tFVSogU68pdI3YITNy5OVBkHfW0FiacMOj8%2Fz5bzRqQxoBj8QAIpVSu%2FuXKXvRBA7NSLFL8OkYXXBQw8qTqErt3%2FHhucZQNDv1HyNztfrnI25dU4z9nMiW5393fe1j9z3UOMnMki%2FPL9bl1XoLS%2FZpZTspVLBZSGlTEV4J6Twz4BpSPpEt1uGLe4ixWfXVq2S475l2Qpgk%2FVt%2BT%2BJx4GFH7F7XISzr40DeM6wT0rOB50n5HK9%2F%2F70bBVfFXA%2Fb9yKyEZOmwssEiT4CgdfOsUiTfOeSCtOQ38Rv1xyLWHCKNDn2fZdzPvu5coVWD0OmQK669QYpTE5JOylgUlTgVzOe2DbtH3vYqD%2FYGLdDiHtOhJ4nvqLYfLMHoH6enYVO1aqnUSJEsXbPFfOqcYuxBziHok6RHDSvmg%2Fy0SX9Aw7mLuBua%2FMmIQJzdixtJiVVm4yIuFrjffSLjkx3%2BJ4uOqCNLni%2Fp%2B7PtARJ%2BCfa%2FcW22UrIPoEkU7fm4cZuVKfvT7nSeA4HZCY%2Bb2tLwsMNzCncAGOqUBuWFOqBA%2B%2F7%2B7FskFBkOxHFNu1f%2FCEAmexMAG0JN%2BbYyKM8%2FBTjqz303blKpVToTQgCzI%2BT3jtmyXk2xygY3oisut34WI%2Fo4cWD4wCJrJZe2%2BvOmQ7ClkSk%2BQ5b9X38WjIUaTbX841Eto%2BAbca3sqLY16mkNC9XHCjjYGE%2BKgZeblULC9SoHmZzB0jE5%2FQSDLErGWFtzSNIYS4vevubOqrPUGqzhc&X-Amz-Signature=99b46680c13b6fa719cf477514af9a60f827d2eb4c630d92f26cb68c86ecd862&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIAYSYQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDrx%2B8fUtuINe5ZLsPnNa%2FBXgSVfQNmSx19pgt%2FFtKerAiEA6d3RkJ0gfOEt69QZJdOQx0jV5z%2BHVuoY%2Br645AqDNF4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVIUyBWc9cdXdbCgircA9AFswrYkgLId7e0JWPXuJ3uvMyxVhV3s%2BE%2FKO2jNBo8g3HYp55yL35WhidaaByDblE0IkOb6VLWjlepIJSsmSu1i%2FK6qd7YmNrE6FMEUpM9tFVSogU68pdI3YITNy5OVBkHfW0FiacMOj8%2Fz5bzRqQxoBj8QAIpVSu%2FuXKXvRBA7NSLFL8OkYXXBQw8qTqErt3%2FHhucZQNDv1HyNztfrnI25dU4z9nMiW5393fe1j9z3UOMnMki%2FPL9bl1XoLS%2FZpZTspVLBZSGlTEV4J6Twz4BpSPpEt1uGLe4ixWfXVq2S475l2Qpgk%2FVt%2BT%2BJx4GFH7F7XISzr40DeM6wT0rOB50n5HK9%2F%2F70bBVfFXA%2Fb9yKyEZOmwssEiT4CgdfOsUiTfOeSCtOQ38Rv1xyLWHCKNDn2fZdzPvu5coVWD0OmQK669QYpTE5JOylgUlTgVzOe2DbtH3vYqD%2FYGLdDiHtOhJ4nvqLYfLMHoH6enYVO1aqnUSJEsXbPFfOqcYuxBziHok6RHDSvmg%2Fy0SX9Aw7mLuBua%2FMmIQJzdixtJiVVm4yIuFrjffSLjkx3%2BJ4uOqCNLni%2Fp%2B7PtARJ%2BCfa%2FcW22UrIPoEkU7fm4cZuVKfvT7nSeA4HZCY%2Bb2tLwsMNzCncAGOqUBuWFOqBA%2B%2F7%2B7FskFBkOxHFNu1f%2FCEAmexMAG0JN%2BbYyKM8%2FBTjqz303blKpVToTQgCzI%2BT3jtmyXk2xygY3oisut34WI%2Fo4cWD4wCJrJZe2%2BvOmQ7ClkSk%2BQ5b9X38WjIUaTbX841Eto%2BAbca3sqLY16mkNC9XHCjjYGE%2BKgZeblULC9SoHmZzB0jE5%2FQSDLErGWFtzSNIYS4vevubOqrPUGqzhc&X-Amz-Signature=e882008ec3d22ea438399683ee2faeffb9b6c5835bff9bbf0ba0d562c0eded07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
