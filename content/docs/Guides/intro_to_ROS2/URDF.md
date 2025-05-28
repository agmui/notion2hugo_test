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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WN4CLIZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhQFNLgLgXeDssHRTEuK1u8WtU0kifKeaf%2BHbJOjYs9AiEAgWAbAiUlxXPL2GTeyM61acYwtGozrk3XpasCBgxBZRAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBPp%2FoiX0VMY%2FbOAZyrcA1U9f180ex5%2F1xWYgI6gPI0KHb5mFvhaw36TkmkMWm%2Bt9TUsRggMhZK%2BvKi3yjb%2FTN%2FCDI%2FOjib4MoV9ixPmf9gt3AeRL8E8QLePeCU%2F86EcI77Yc%2FPLqH%2Fu53mjywsAB3WfSDsJ9Y5oVUag5KhTRRQ5oM1vX%2BYz1kHQ4C8FCYMbLBclANXKuJKjRtguY8efOBfcW8wzQ8W8%2FnZ5dycICL76lkAVnzOstnRF%2BJPopHEHFd3EfoJJTbL1kgI9tsVDVxBl8bvgl0WPR1cjAxa9ZawcBeZQhMhto%2BuMcwupm2qEVrkJLWpYUTemWrAAo67qfRdUPpZsU8WEB9N9JoC7GWDWpAjLaCSWumIT%2B%2FL%2FIOPxAV5WAe0sz8Z3HtBRsId%2Bid6PPeLVvh9LNlKGLxv08KLM8WA9HMMPLu40zb046aQtjDwa0oGFnhZZQIThxIhps11GoADSAVUV0Gwn72dag9Xr2wPCrs3fdBEPQZh80cw%2FtVbEAKcorcOBSaxWiq5Xgy9XBuuU4%2BBnrMkoZBuOfF3jefVJa6R0xsBOY7E14EDzZZzcCI67I5CybWMK6VvvoiGZHjZEbCt8vXfXJodN108WGqcs7CxAaz23hgsytG08CDRMgj%2FC7uactL46MLf43MEGOqUBX%2FI5Sw2U4Hi6%2FYLq%2BA3%2BpQLnZUevKsYsnpyPq0BZLt3z5wlE60My0J8kodUGpPTSZnrx%2FGoT%2B4XIAkEqacUqTIqZw%2BHUbbNMqgAVWi7%2BvhtiqhcugJyPsYZPOyVRv83F5QgncrTJ%2BAlN8KoDDEF3%2FkeM5HbelXCa26u5wYiqJ65UAJlM3lImLQFeNJiS%2FI1YFb%2FINKAOIJvgHB4yEJa6qc9Lx86j&X-Amz-Signature=47155e2026ab8159fb94ae41edebc13500dedbdde8d9072daec9d08973db3ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WN4CLIZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhQFNLgLgXeDssHRTEuK1u8WtU0kifKeaf%2BHbJOjYs9AiEAgWAbAiUlxXPL2GTeyM61acYwtGozrk3XpasCBgxBZRAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBPp%2FoiX0VMY%2FbOAZyrcA1U9f180ex5%2F1xWYgI6gPI0KHb5mFvhaw36TkmkMWm%2Bt9TUsRggMhZK%2BvKi3yjb%2FTN%2FCDI%2FOjib4MoV9ixPmf9gt3AeRL8E8QLePeCU%2F86EcI77Yc%2FPLqH%2Fu53mjywsAB3WfSDsJ9Y5oVUag5KhTRRQ5oM1vX%2BYz1kHQ4C8FCYMbLBclANXKuJKjRtguY8efOBfcW8wzQ8W8%2FnZ5dycICL76lkAVnzOstnRF%2BJPopHEHFd3EfoJJTbL1kgI9tsVDVxBl8bvgl0WPR1cjAxa9ZawcBeZQhMhto%2BuMcwupm2qEVrkJLWpYUTemWrAAo67qfRdUPpZsU8WEB9N9JoC7GWDWpAjLaCSWumIT%2B%2FL%2FIOPxAV5WAe0sz8Z3HtBRsId%2Bid6PPeLVvh9LNlKGLxv08KLM8WA9HMMPLu40zb046aQtjDwa0oGFnhZZQIThxIhps11GoADSAVUV0Gwn72dag9Xr2wPCrs3fdBEPQZh80cw%2FtVbEAKcorcOBSaxWiq5Xgy9XBuuU4%2BBnrMkoZBuOfF3jefVJa6R0xsBOY7E14EDzZZzcCI67I5CybWMK6VvvoiGZHjZEbCt8vXfXJodN108WGqcs7CxAaz23hgsytG08CDRMgj%2FC7uactL46MLf43MEGOqUBX%2FI5Sw2U4Hi6%2FYLq%2BA3%2BpQLnZUevKsYsnpyPq0BZLt3z5wlE60My0J8kodUGpPTSZnrx%2FGoT%2B4XIAkEqacUqTIqZw%2BHUbbNMqgAVWi7%2BvhtiqhcugJyPsYZPOyVRv83F5QgncrTJ%2BAlN8KoDDEF3%2FkeM5HbelXCa26u5wYiqJ65UAJlM3lImLQFeNJiS%2FI1YFb%2FINKAOIJvgHB4yEJa6qc9Lx86j&X-Amz-Signature=fae2858b0d23a1748fe7724b17c72309a0a302916daaaa1822f43e2e814f3993&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
