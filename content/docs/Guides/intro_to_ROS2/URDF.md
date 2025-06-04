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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFVPQDS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD8ZEt8D9hSiD4ifCZJkuXQfwJWm2lxKlS%2B%2BDIht57WdgIgfqnWFfQINcZC7bNnGdZo7mgW24uL6%2BWvGGYAMyJlWpMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMjTZ%2BmSC6QTQQEoFircA8R8oEwEcHxq0pBhpenJlVGELueFNKNxIN3cCtzKXtYQjDnYGhvDEb4%2ByGsv%2Bwx3BHN6qj3GmIv%2FPSehwDjAH53NFX%2BTUVIlwhIQy%2BWEe29F0HD1P6OraG1x%2Fug%2FbkPCAdm4ea6n1XxSw%2FuaOIZN4kgT0W9WnBRtolMJ%2Bz8GosAaC2y9C35CHJ0Iqi2KsN2srZLTfxETGMYm6aH2tfvT3gPedfN30SbgpYVIZff5zH3YFW5BDVSxphlc%2B3D0s%2F%2Bqr9sJA8mZazPuBuMIhQ5ZQ%2F3WJJW6jkKLDknRuZJeUJ%2FlJc0R1IETe4xIjVAQn8E5PZRbfjONvp4zeLGSgRRjrTV5%2BrK7S0%2F2CO5Qgf%2FkvuEgfEo5kAl8h622SslBMns6VnEylEuQoWrtGOXvAimwsAADVIADCw2YtEv1tY%2BPlMtJQSRjaKcmrOhwHD7N8b57tMWdAR8uJGzCbmzQMjACe1f2PLlRzjLMBIjcpPMCqo%2BtsWyTmS5ZLmr4ADp%2BXrHNePC5OOzwvbs%2BW1AyiLt8qjrk3YmyReGoiw1NI3OvcO863qPvikjN99Z2gK0sOnxqx6gqJRDJlNpjFwguQWPmihBZ3b0h6WwRBMg7hwfnihD73MNSE9uQwuysk3iCMMXY%2F8EGOqUBjD111S0jhHGZN6kYyx1HssJ4As%2BZfVKD16qM7XPyhMEg60z%2BJEWA4RHvf4rBfm%2F%2Faz4z1W6o3RS7CPvFRt%2FdVGxAcCGf3B1%2Be1K2Q7P%2BVpA%2FswxCVN9T%2FETcNg0ukf8C5MR4v0jTiZbtyOIeeMD2NxV%2Bfo5p%2B%2FR3lq%2Bx61R6qWkvUxKJku7nxpLWZKwIisnjpIdei6dlnaGOzKE75%2Bq5CQcWvpC9&X-Amz-Signature=05bb90406129c828f59c715526722c9a7d7ac727c29eb6ded442cba0bfb1fa8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFVPQDS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD8ZEt8D9hSiD4ifCZJkuXQfwJWm2lxKlS%2B%2BDIht57WdgIgfqnWFfQINcZC7bNnGdZo7mgW24uL6%2BWvGGYAMyJlWpMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMjTZ%2BmSC6QTQQEoFircA8R8oEwEcHxq0pBhpenJlVGELueFNKNxIN3cCtzKXtYQjDnYGhvDEb4%2ByGsv%2Bwx3BHN6qj3GmIv%2FPSehwDjAH53NFX%2BTUVIlwhIQy%2BWEe29F0HD1P6OraG1x%2Fug%2FbkPCAdm4ea6n1XxSw%2FuaOIZN4kgT0W9WnBRtolMJ%2Bz8GosAaC2y9C35CHJ0Iqi2KsN2srZLTfxETGMYm6aH2tfvT3gPedfN30SbgpYVIZff5zH3YFW5BDVSxphlc%2B3D0s%2F%2Bqr9sJA8mZazPuBuMIhQ5ZQ%2F3WJJW6jkKLDknRuZJeUJ%2FlJc0R1IETe4xIjVAQn8E5PZRbfjONvp4zeLGSgRRjrTV5%2BrK7S0%2F2CO5Qgf%2FkvuEgfEo5kAl8h622SslBMns6VnEylEuQoWrtGOXvAimwsAADVIADCw2YtEv1tY%2BPlMtJQSRjaKcmrOhwHD7N8b57tMWdAR8uJGzCbmzQMjACe1f2PLlRzjLMBIjcpPMCqo%2BtsWyTmS5ZLmr4ADp%2BXrHNePC5OOzwvbs%2BW1AyiLt8qjrk3YmyReGoiw1NI3OvcO863qPvikjN99Z2gK0sOnxqx6gqJRDJlNpjFwguQWPmihBZ3b0h6WwRBMg7hwfnihD73MNSE9uQwuysk3iCMMXY%2F8EGOqUBjD111S0jhHGZN6kYyx1HssJ4As%2BZfVKD16qM7XPyhMEg60z%2BJEWA4RHvf4rBfm%2F%2Faz4z1W6o3RS7CPvFRt%2FdVGxAcCGf3B1%2Be1K2Q7P%2BVpA%2FswxCVN9T%2FETcNg0ukf8C5MR4v0jTiZbtyOIeeMD2NxV%2Bfo5p%2B%2FR3lq%2Bx61R6qWkvUxKJku7nxpLWZKwIisnjpIdei6dlnaGOzKE75%2Bq5CQcWvpC9&X-Amz-Signature=eb4bf88d5a2253577ff1f9bbcec278c4164d3a5883aeef7c61e2fdebe5b88f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
