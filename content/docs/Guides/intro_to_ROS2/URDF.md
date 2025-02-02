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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AGTYQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbAiZM4QXyQg7eL25JRKPc9QkPKZpRKQskZVtIPwE0wIhAJ10fN59ZIT0J1wTa6RyzNsAsZ%2FGIjW68Ig6YQUuJuW7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO8dcno8VNZ3QT2t4q3AOGdBwWmIAwO25PhV2pLhzgzjvfkaS0G22ove2LL1vwGqqGfx378YAhe03YoJt4%2F%2Bijy5j7Cld5PeDP9srhEeJO%2B%2FSEiNnQBr3KRXhIEluVJ1TgkhhDSVHWY5mlMIOwKj0w4Yb20HEbv2hg3BVE%2Fgs8ZLSM8Po6Ql6MYkymxmVUWUVG3MPLDYf%2B5B18q0k6jP3FFZnU%2B6W3e7AUZaMiKhyW4Zp4NEqRaFqZ97rQTDyhfXEwyjdI%2F%2FyEFPuEPhxOHCHMZsHCfukMrZGkV%2BRFxJnzXICvtYnElBXKLcpGE7YzGqph0CsTTO8Oh8g33nkuIw7jEXW2QChrbgGtyPpWPa4oh8r9V0WvAwrpdePR2MTwhbLMHfNG6BRmMdnIjxRnPPG8NvLv5D5ByAPtltW7i8LZxe4VtPeaDk%2F87unIAhX6pIi83kv7m4kVGxQ0KaOXjicw7ipskpuJHqbAZew9R0DQi0dtWtHYdsCrC9cRZkz6Qi7u1M5Ebg7p4B0dfjq4bGn%2FdDbQ0YUcuCd4Hhm%2BB5f%2FwOYsXan63YqdveLQItmYOKLPujKHi8lWl%2FwTGzeqVPHwzlVaZhD%2BAZlwe1NeULMi%2BnQs%2FWt7ox%2BuIbIcccAuJ6okXRBk6qmshFZPIjCjvf28BjqkAeBoTzRgEJaDhXITGWoJviwwnu4cYYJW0dm3Wcwf7LP3EeoKX2XA%2BLBbs38l7edapIJN0LS%2BrPva2zJpyGU7qLBV7F%2B2F4ge3VG14aj5OiP0AeslOkpIuiKAboy%2BWoCXVjyHI0hg9eU7Q3mVtwqy2pJ5b%2Fww8N2gyFdoO%2FGj8LrVq8yMc99WetmU0NjPQOjtPxyDdpla4qmGvhvlSWVMP8QKcj7s&X-Amz-Signature=e04b53e539c97d9c9bdcd97ec904e3b20b59b48caa5c91b5bde9545c9ed6d47b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2AGTYQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbAiZM4QXyQg7eL25JRKPc9QkPKZpRKQskZVtIPwE0wIhAJ10fN59ZIT0J1wTa6RyzNsAsZ%2FGIjW68Ig6YQUuJuW7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO8dcno8VNZ3QT2t4q3AOGdBwWmIAwO25PhV2pLhzgzjvfkaS0G22ove2LL1vwGqqGfx378YAhe03YoJt4%2F%2Bijy5j7Cld5PeDP9srhEeJO%2B%2FSEiNnQBr3KRXhIEluVJ1TgkhhDSVHWY5mlMIOwKj0w4Yb20HEbv2hg3BVE%2Fgs8ZLSM8Po6Ql6MYkymxmVUWUVG3MPLDYf%2B5B18q0k6jP3FFZnU%2B6W3e7AUZaMiKhyW4Zp4NEqRaFqZ97rQTDyhfXEwyjdI%2F%2FyEFPuEPhxOHCHMZsHCfukMrZGkV%2BRFxJnzXICvtYnElBXKLcpGE7YzGqph0CsTTO8Oh8g33nkuIw7jEXW2QChrbgGtyPpWPa4oh8r9V0WvAwrpdePR2MTwhbLMHfNG6BRmMdnIjxRnPPG8NvLv5D5ByAPtltW7i8LZxe4VtPeaDk%2F87unIAhX6pIi83kv7m4kVGxQ0KaOXjicw7ipskpuJHqbAZew9R0DQi0dtWtHYdsCrC9cRZkz6Qi7u1M5Ebg7p4B0dfjq4bGn%2FdDbQ0YUcuCd4Hhm%2BB5f%2FwOYsXan63YqdveLQItmYOKLPujKHi8lWl%2FwTGzeqVPHwzlVaZhD%2BAZlwe1NeULMi%2BnQs%2FWt7ox%2BuIbIcccAuJ6okXRBk6qmshFZPIjCjvf28BjqkAeBoTzRgEJaDhXITGWoJviwwnu4cYYJW0dm3Wcwf7LP3EeoKX2XA%2BLBbs38l7edapIJN0LS%2BrPva2zJpyGU7qLBV7F%2B2F4ge3VG14aj5OiP0AeslOkpIuiKAboy%2BWoCXVjyHI0hg9eU7Q3mVtwqy2pJ5b%2Fww8N2gyFdoO%2FGj8LrVq8yMc99WetmU0NjPQOjtPxyDdpla4qmGvhvlSWVMP8QKcj7s&X-Amz-Signature=103bc61893946cce1863d400734a00d88833f747f07420b12b66f79fe6be67b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
