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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVOR5SC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FzyATF%2B1A1DJsVwDlelMV2S2crMuqUXnQ1WQJpV0TtgIgf%2FDLVUHVJfnYSzngavbmWcb2jTeCSAgD0nZA4d2khZgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJyy5KcN4O2JImPo1CrcA9%2Fru1T9jSCd9d0gqNI5mQ%2BubadlQEj7IOEASuu0ETJvTYBQG2w1a4%2FoPedhXBd0tYFhujwazZdyFojPcZvatW3ELDZjBb3HWYlNcDPqXvN0cTRrCAW4nhdi6%2FUcIkTVp%2B29as79OP5%2B24oG3WPirY6F0ypWxgSKvm%2BfXVyjDihXGRHSfgin5F2Q%2FKQBWHtpTcnzY4pd8tBdbLBsa2tHDjA%2BtQDFseHEHYhpOz8wCMr3xpbsaH4ry%2B2nshuiMHpJh4IYY59JqH0Yuu1EDEI7L5UvyajV0Nl9A0eN0fFtdB7AXlUVmlqX7Nkv4ZKc3ghAKcn7Y3aOOAgG2ngcQnTkDOmi0UEIOIV9rXshsPxDYi5WGy%2Bs2bE%2BMFCkaH%2B45RSGbckZHmtWUqjG%2BSaOdVfbFWGVdkLrti1DTjPmujyicaLyugY7YYUJAL1v2GdGw9QH7Oe6Fvs3fyASEMqIDiBrlrtwke9xyQwP4rBHou4naCPRFxVXFOrdYqpBnzG6wJFMHYdUq8yyY9Gfx9ANL99b%2Fd37562nZHSqYhgtiTO%2BSk16VzzMR167VBHME2ggZao9ev6bfurh2maBcd95IsF3vQAHzZR7KUtZbRMY%2BB2%2FC2lR6t5bym%2BeiWcaWmi1MJCkxb8GOqUBhFy1O1QIQ21nxGizJd1GrIeR%2F35fJE3p1SpKwama6HvtnA4BrWw1iIuTi6JTh6EDskkDeCYiqTYZMxasqFsoJEa6RoC86%2FGN%2BpqqdfyIOyrYkhBvWLXXlJFkeXEWHw0kSkCD2XH3EBSWtSzxd%2FHInq8AjfUvZ21upyfhRhFiP0tTHdeYOOHpIfXn2qm7dXVbwBu51VJLMuPB8SxpMu8QvnkIKt40&X-Amz-Signature=455013ac9835b51b74959da58c46087d01d68dbbc65605465cc013e4cea57693&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVOR5SC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FzyATF%2B1A1DJsVwDlelMV2S2crMuqUXnQ1WQJpV0TtgIgf%2FDLVUHVJfnYSzngavbmWcb2jTeCSAgD0nZA4d2khZgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJyy5KcN4O2JImPo1CrcA9%2Fru1T9jSCd9d0gqNI5mQ%2BubadlQEj7IOEASuu0ETJvTYBQG2w1a4%2FoPedhXBd0tYFhujwazZdyFojPcZvatW3ELDZjBb3HWYlNcDPqXvN0cTRrCAW4nhdi6%2FUcIkTVp%2B29as79OP5%2B24oG3WPirY6F0ypWxgSKvm%2BfXVyjDihXGRHSfgin5F2Q%2FKQBWHtpTcnzY4pd8tBdbLBsa2tHDjA%2BtQDFseHEHYhpOz8wCMr3xpbsaH4ry%2B2nshuiMHpJh4IYY59JqH0Yuu1EDEI7L5UvyajV0Nl9A0eN0fFtdB7AXlUVmlqX7Nkv4ZKc3ghAKcn7Y3aOOAgG2ngcQnTkDOmi0UEIOIV9rXshsPxDYi5WGy%2Bs2bE%2BMFCkaH%2B45RSGbckZHmtWUqjG%2BSaOdVfbFWGVdkLrti1DTjPmujyicaLyugY7YYUJAL1v2GdGw9QH7Oe6Fvs3fyASEMqIDiBrlrtwke9xyQwP4rBHou4naCPRFxVXFOrdYqpBnzG6wJFMHYdUq8yyY9Gfx9ANL99b%2Fd37562nZHSqYhgtiTO%2BSk16VzzMR167VBHME2ggZao9ev6bfurh2maBcd95IsF3vQAHzZR7KUtZbRMY%2BB2%2FC2lR6t5bym%2BeiWcaWmi1MJCkxb8GOqUBhFy1O1QIQ21nxGizJd1GrIeR%2F35fJE3p1SpKwama6HvtnA4BrWw1iIuTi6JTh6EDskkDeCYiqTYZMxasqFsoJEa6RoC86%2FGN%2BpqqdfyIOyrYkhBvWLXXlJFkeXEWHw0kSkCD2XH3EBSWtSzxd%2FHInq8AjfUvZ21upyfhRhFiP0tTHdeYOOHpIfXn2qm7dXVbwBu51VJLMuPB8SxpMu8QvnkIKt40&X-Amz-Signature=21de635c97459fbd115a4d2bb734f479f355a86cf46b532dcc2b65b7659789dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
