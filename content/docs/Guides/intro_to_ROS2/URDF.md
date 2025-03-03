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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVVAONO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrrL4FBX3lXZDQKhA78ZMjIZHrIZpYkALFDifyNG8zDAiEA9Drq9SSjJTk17kmgX%2FcTecQ1ZwtFGr0aidqlEzjgN%2FoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY5QmbRFkgs3fgWoSrcAy7qn7VhtGvVJt5y5coFJjvvVZ0VcvhNZXw3Z3hZaKRzXoXrpwDdwbuQEzklTGIShsmE1kSo4WBalpDSmYY57y2lANxS7Om3fTrrMHe5Qroei1VM2TizzEH8Vc4%2Fvjozb7wRuOn65EEc8ZzszfDwqbexiuYoHlpbdg%2Bn1IVnCabZuE1WgswCTarHpt6Goy8ojl1alQ%2BLOL4zqrBb0Iu66Droq47x%2FFbM2NoJYVna%2BCnH0kXVhc9GXOZQz%2FGQZXvFb%2FH0QCSvwPp7tJauSeVJzd28Cn%2F79V3q9XpTokFqhok3bcxN93NJxmFmX26CEwBqO9qUwFW6yRz7kHGwL6%2FcbofoGWS8s%2Bu5Yaypm5Wo%2F1tmK68Iwl0ikNPB1y%2B0cU0GJZTgfEfUUZMDaCTR1U7u%2FeSLau4zdG%2F5QI0ZJckaubL8iPqnDh72nST0fun0h%2BlEErp1QrzIWrUfaaSTjhPGyEVcEj1JPyUX%2Fr0boDlBzAjFO%2BCjBl6ZSQ70U7OmVggZVrQWt1%2BS1ZLj1D2y2D%2Fxo70Oh4FtBJPXdugqnIKN2gR%2F7B0zijIVWelcUCoPgP0BWCWgfXGMNKP7boQ7QL2gsCCO%2BGbpj1pRyIRLFLJSZUYiRkYWti4RdL6LrcvCMOSWlb4GOqUBAlYQ2dW%2FuCUOFPdL%2Fxwfn8wmvu94c1reL79hLqtY5YLUDKti9s6368E1ovuwBDfNFMGZugiaHwlkOvo9FnMsn8iYB%2BdObw2ov2UYEkK%2F2Sx9cHy33tohmGig0H6Gu4Q8dSiscK2dJ2rNS5vx1Cba5FyCJmNmUaK%2FkuBdJzABETdBSssZxOSpdEPoCoUq0rAF01lMGmZ39nGAYgRw9ROnPYLTQBsq&X-Amz-Signature=11dbc1f45ddcd3aaeb7d6ec4dd0cb991eec146143ca30a06994df71eae73b0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVVAONO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrrL4FBX3lXZDQKhA78ZMjIZHrIZpYkALFDifyNG8zDAiEA9Drq9SSjJTk17kmgX%2FcTecQ1ZwtFGr0aidqlEzjgN%2FoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY5QmbRFkgs3fgWoSrcAy7qn7VhtGvVJt5y5coFJjvvVZ0VcvhNZXw3Z3hZaKRzXoXrpwDdwbuQEzklTGIShsmE1kSo4WBalpDSmYY57y2lANxS7Om3fTrrMHe5Qroei1VM2TizzEH8Vc4%2Fvjozb7wRuOn65EEc8ZzszfDwqbexiuYoHlpbdg%2Bn1IVnCabZuE1WgswCTarHpt6Goy8ojl1alQ%2BLOL4zqrBb0Iu66Droq47x%2FFbM2NoJYVna%2BCnH0kXVhc9GXOZQz%2FGQZXvFb%2FH0QCSvwPp7tJauSeVJzd28Cn%2F79V3q9XpTokFqhok3bcxN93NJxmFmX26CEwBqO9qUwFW6yRz7kHGwL6%2FcbofoGWS8s%2Bu5Yaypm5Wo%2F1tmK68Iwl0ikNPB1y%2B0cU0GJZTgfEfUUZMDaCTR1U7u%2FeSLau4zdG%2F5QI0ZJckaubL8iPqnDh72nST0fun0h%2BlEErp1QrzIWrUfaaSTjhPGyEVcEj1JPyUX%2Fr0boDlBzAjFO%2BCjBl6ZSQ70U7OmVggZVrQWt1%2BS1ZLj1D2y2D%2Fxo70Oh4FtBJPXdugqnIKN2gR%2F7B0zijIVWelcUCoPgP0BWCWgfXGMNKP7boQ7QL2gsCCO%2BGbpj1pRyIRLFLJSZUYiRkYWti4RdL6LrcvCMOSWlb4GOqUBAlYQ2dW%2FuCUOFPdL%2Fxwfn8wmvu94c1reL79hLqtY5YLUDKti9s6368E1ovuwBDfNFMGZugiaHwlkOvo9FnMsn8iYB%2BdObw2ov2UYEkK%2F2Sx9cHy33tohmGig0H6Gu4Q8dSiscK2dJ2rNS5vx1Cba5FyCJmNmUaK%2FkuBdJzABETdBSssZxOSpdEPoCoUq0rAF01lMGmZ39nGAYgRw9ROnPYLTQBsq&X-Amz-Signature=74fc46a086a7bf2b79c0527941ffe86a0ebb54abaebfbf43a2f27ed70dff767a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
