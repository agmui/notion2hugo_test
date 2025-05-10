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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJX4SIU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAypaAVdo%2FTMvovaoDI6LxQzODnFY299np3%2F0nyxufUAiEArTPzLNLWSTjfTrGydkd5qRJuMUKYFUVAvNRGlCTtNA0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWpPO8URKTa%2BFDXtyrcA5V0pvmahhCbAMVm5MEkE1p7qVPnyUjTLD9GyZHbfvnFkgd2XZLAC0Q3vedukAS5Y48mpPhQ4fc%2BVwxcX%2ByJI81%2BOoni8pvdLrK6cMmCt1ZhmGE8%2BCm2WuiD6aONJcdEC8L%2B92dEXC3K6FZb1lz0b3tRzfNny7J5ga2f89zihphYEKsACZn35mXxJ9F%2F98TIPd62a8z%2BGaIxRRJJ%2BUjeO54zSmdbLGK4fHaIkiRtRNWsaXqlMal35FybLAivmKHglK3fY7zUFu8BNPLOKVO2SoK%2B%2F3lTX7Bs9CDKcYWUY%2FfmaE%2Fl5PdAMTlWA00H%2FCw1bIDk6X3EspfmPQvZS7DYhgw%2B8SqyXkSyjVcRqSbAEiDI4pcNJaenEdV27XU%2FNzXUJTDougEPp9lomKtnHt%2FfBFit%2BleUIpXYT%2FpPRzxysHm2L%2BaJXp%2BbykJNvUOwiYp4Udoh%2Bh4P1F%2BPmrVZwtJtKPyrKa%2FSc9jNge0gqYEk5zB8tmLpU36Yf0y0SSRDiTbemHndgH7maTGO6KUfHle8E3OKmTdKQYT0Q%2Fe9rVkkMYEXOK%2FuaVx3zA8m40%2BmhNpjb3nLI1jg%2FQhsO9AjWklb%2FYnA71fpeRKfZtSiTJUhGPNmrsRRfwyrlqFkbKgMMNSK%2F8AGOqUB1uGvPJQFcboP29Jm3ouyq%2BM5iX8S2RRN%2B7%2FfP8vrbyqr6eA%2BbSj85docm76%2Fu1jLtFYWyPw%2FsOMFz%2FnUE9Z%2BoaFDV2RI8tMk3sWTvn1B5SZUqlPEKEYoj4sw9yE0ox1kVgeXRrsCF2ce3fQWM%2BRAXEzPRvAxVoeSefS4d1%2BNT1aohuJi2o8lLLaCT5nyMo%2BMg5guVToqb4IpqsS2uXWDBwRKrsyF&X-Amz-Signature=93ed9eaa2cb3a127722cc395e9b0299e4ddaf376587bb640a53cc3eb6617b1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJX4SIU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAypaAVdo%2FTMvovaoDI6LxQzODnFY299np3%2F0nyxufUAiEArTPzLNLWSTjfTrGydkd5qRJuMUKYFUVAvNRGlCTtNA0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWpPO8URKTa%2BFDXtyrcA5V0pvmahhCbAMVm5MEkE1p7qVPnyUjTLD9GyZHbfvnFkgd2XZLAC0Q3vedukAS5Y48mpPhQ4fc%2BVwxcX%2ByJI81%2BOoni8pvdLrK6cMmCt1ZhmGE8%2BCm2WuiD6aONJcdEC8L%2B92dEXC3K6FZb1lz0b3tRzfNny7J5ga2f89zihphYEKsACZn35mXxJ9F%2F98TIPd62a8z%2BGaIxRRJJ%2BUjeO54zSmdbLGK4fHaIkiRtRNWsaXqlMal35FybLAivmKHglK3fY7zUFu8BNPLOKVO2SoK%2B%2F3lTX7Bs9CDKcYWUY%2FfmaE%2Fl5PdAMTlWA00H%2FCw1bIDk6X3EspfmPQvZS7DYhgw%2B8SqyXkSyjVcRqSbAEiDI4pcNJaenEdV27XU%2FNzXUJTDougEPp9lomKtnHt%2FfBFit%2BleUIpXYT%2FpPRzxysHm2L%2BaJXp%2BbykJNvUOwiYp4Udoh%2Bh4P1F%2BPmrVZwtJtKPyrKa%2FSc9jNge0gqYEk5zB8tmLpU36Yf0y0SSRDiTbemHndgH7maTGO6KUfHle8E3OKmTdKQYT0Q%2Fe9rVkkMYEXOK%2FuaVx3zA8m40%2BmhNpjb3nLI1jg%2FQhsO9AjWklb%2FYnA71fpeRKfZtSiTJUhGPNmrsRRfwyrlqFkbKgMMNSK%2F8AGOqUB1uGvPJQFcboP29Jm3ouyq%2BM5iX8S2RRN%2B7%2FfP8vrbyqr6eA%2BbSj85docm76%2Fu1jLtFYWyPw%2FsOMFz%2FnUE9Z%2BoaFDV2RI8tMk3sWTvn1B5SZUqlPEKEYoj4sw9yE0ox1kVgeXRrsCF2ce3fQWM%2BRAXEzPRvAxVoeSefS4d1%2BNT1aohuJi2o8lLLaCT5nyMo%2BMg5guVToqb4IpqsS2uXWDBwRKrsyF&X-Amz-Signature=79d3a68d3c67ae5c69462ba28e7691c73d6fcd68fb00f801484a4aed52fbf821&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
