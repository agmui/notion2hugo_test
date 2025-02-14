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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L3JNN2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAN2mavOlKULp9R8tAP6iSqlqwU%2FsDNOIaWr34HNfl4RAiAgs3mejqVh%2BFvwlzbwil2Fso5iO31Fl7oZjOpwtcRNVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMi1LFXN9GIRB0GeQIKtwDhRlCRakIdm%2Ft62VFZhXvLiaqTVGmr2wLXCHNAqAl6BP7Fkur1hrXo%2BBAYEad18Y%2Fn9nohg9p%2B%2F7%2Bu%2FI%2Bc%2F8a3MG78fw8eSlNkIbWRCIhIWaEYQdobF%2FYqGGEsSbANRqmET%2B55e41H1edFINN0PLM1hULeExF4GOHJUDRoWWW7W6EMdfLexwUghZkM%2FEYawT4X2IYwdhM%2BO8aCvtniWVvCd12Rjv5NgPd8R%2BOR2viY8WPcOM2X3ozzXdDF%2Bt7bLEfFbTxauMFo8x3HSY0e1zq2A1fQb3vPZA8DEXUhop5WwDmwXyTBlGkhLnUJDZQGwvz358uLFjPiTVxL7uLln2i9plQoutRxILbt7enGKgEVvimtZuMRe9jXObuQvD9kA7zh%2BUrIN1htXnASYMIsQEnF2v%2BCYxgg3VUbGLgmhdeXjXr4pR1F2ZGIeugFrRh8cWOaDd6%2F008FpGhw2tCxWrCN6whTqGRvULQZyz87l11ewCIYIuyy6wmDS7z1HZ4fEeQ%2FGToIjPHnfFo2FPExnIn4OyV3SZLhXXHHRJFrRcaQyCYucah9mwTd1BgNkGg8aKFygEaPebTWySJ2UWWJxjvOghlFdKKmJ%2FbOknNS7KsrrZpqeOwyZlF3bK1YVcwxZ2%2BvQY6pgGkSLGkRgxTaR4mOPulP58KCtPwhmVCWvv9x7JF61JUQ8785INEweWA7a8W%2BfBk08YvJbQKc4Dxjje6jSHozbCfqhjBHyLBPMunUXtnm6IHnAv42pPSx1vpUqBkLGSJoI6tMUjICa0JgglHFOHyV9imSvVvpqkSqI31XDe4Bko5QYAm%2FKIr8zcSsUDnaEfKV6u2GjGxR5mRpNvgyPTM0xDT2O5cUibw&X-Amz-Signature=17dea2b8b5c94a85440a2c2cd7fa891e38149989b761bce5f435166fae037c36&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2L3JNN2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAN2mavOlKULp9R8tAP6iSqlqwU%2FsDNOIaWr34HNfl4RAiAgs3mejqVh%2BFvwlzbwil2Fso5iO31Fl7oZjOpwtcRNVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMi1LFXN9GIRB0GeQIKtwDhRlCRakIdm%2Ft62VFZhXvLiaqTVGmr2wLXCHNAqAl6BP7Fkur1hrXo%2BBAYEad18Y%2Fn9nohg9p%2B%2F7%2Bu%2FI%2Bc%2F8a3MG78fw8eSlNkIbWRCIhIWaEYQdobF%2FYqGGEsSbANRqmET%2B55e41H1edFINN0PLM1hULeExF4GOHJUDRoWWW7W6EMdfLexwUghZkM%2FEYawT4X2IYwdhM%2BO8aCvtniWVvCd12Rjv5NgPd8R%2BOR2viY8WPcOM2X3ozzXdDF%2Bt7bLEfFbTxauMFo8x3HSY0e1zq2A1fQb3vPZA8DEXUhop5WwDmwXyTBlGkhLnUJDZQGwvz358uLFjPiTVxL7uLln2i9plQoutRxILbt7enGKgEVvimtZuMRe9jXObuQvD9kA7zh%2BUrIN1htXnASYMIsQEnF2v%2BCYxgg3VUbGLgmhdeXjXr4pR1F2ZGIeugFrRh8cWOaDd6%2F008FpGhw2tCxWrCN6whTqGRvULQZyz87l11ewCIYIuyy6wmDS7z1HZ4fEeQ%2FGToIjPHnfFo2FPExnIn4OyV3SZLhXXHHRJFrRcaQyCYucah9mwTd1BgNkGg8aKFygEaPebTWySJ2UWWJxjvOghlFdKKmJ%2FbOknNS7KsrrZpqeOwyZlF3bK1YVcwxZ2%2BvQY6pgGkSLGkRgxTaR4mOPulP58KCtPwhmVCWvv9x7JF61JUQ8785INEweWA7a8W%2BfBk08YvJbQKc4Dxjje6jSHozbCfqhjBHyLBPMunUXtnm6IHnAv42pPSx1vpUqBkLGSJoI6tMUjICa0JgglHFOHyV9imSvVvpqkSqI31XDe4Bko5QYAm%2FKIr8zcSsUDnaEfKV6u2GjGxR5mRpNvgyPTM0xDT2O5cUibw&X-Amz-Signature=0aa3cd35018a8fc0648cc2faba418c4daeb57b4d0c7344c41c2c0147dc6f78db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
