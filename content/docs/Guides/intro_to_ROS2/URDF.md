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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662F5N4H3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFHH0IDKFycp3D5R8rW51PvR3a%2B1AUFfl4MA2D2LFCJ7AiAOC6CwGjoMoXS6F6EXE3J%2F0ziSXp6Om4o2bW0NfnjExCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEC3fJbM4GZo30j6LKtwD45Xz29ZZntCknhj7BVFtdj1t3k0%2Fo2D7GbImRt%2BM%2FPKLD8LcQOMDUrMuYx83dpJVEVozOQgclnH5rhI6e7Y4LhB2fLytv9gMIFg8pDp%2FK6QuxZ%2B9tbvKd7b9pOvn4zvAuhzK%2F2tHsVlBveLHKZ86jywYwPTNendBKObSpkx9ivuUm5gr6rpFtyMW%2BeyQqvPVt4i7dTkguZWkFVqu%2BVwUh5iUNJYb3aSosd32ehWyojPzzcoGENb434SdeaU2KS%2FykiLhJ85Aoxg%2FUZins%2BTw%2BFmO59ToW%2FLL0lbWNOSzvIl7ay3xaxizTGyNBVpHhoNZydCnK7ezRMpOObEP7c1pi%2Bcis5sM3lja%2FNUGmplLmeLR2sxBDXiZocYnEd8YUfp0zFiaXIin2vIWmJ8S2lIaqSSo%2Fc4CA%2BuNSc7WbWpEObt3mKPtRTYjV85KWI9G24V2VGRvzqN9vcxVo6IPkKbnQ8J3a9eQF5tiNRq%2BeWdQWSibueAJqh9miRCW2PZw8orjQeszUE%2F59Xmp%2Bwdx8C9rj%2BWsBClLWb8on3KdXW9cgpbme9gdowoC%2B592eZb4Wp5pkhHfx%2FsC%2BZMYxGIdESMFGhucE76eioBSZ0LoDZv64g%2B5v1oF81fUmmh86gUww9KCvgY6pgHYWHW7g1RgOOYYQsokDfQGRF3r6St5JslxotozIgMUj6MUVvzeikkgH7ae4WB3PfE5Zb1cDH64UV49aYj%2BX3r3qBWVTSk722kceGNBCYYXSsMqDsU1U5mPJGKVGB9lCpfdsVXvAmpJ9O%2F6xuQzUapg9dgP0dFo7OwdFjPGwIq7BLo1PG4zZRh4XSD7dnjui01Whp7l2O5EAnQAyh%2F0nLWNH7ltn93I&X-Amz-Signature=018169bb3508e18630cd7889299cdd70bd6dee6ce6a5851c40f9d0005018aa39&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662F5N4H3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFHH0IDKFycp3D5R8rW51PvR3a%2B1AUFfl4MA2D2LFCJ7AiAOC6CwGjoMoXS6F6EXE3J%2F0ziSXp6Om4o2bW0NfnjExCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMEC3fJbM4GZo30j6LKtwD45Xz29ZZntCknhj7BVFtdj1t3k0%2Fo2D7GbImRt%2BM%2FPKLD8LcQOMDUrMuYx83dpJVEVozOQgclnH5rhI6e7Y4LhB2fLytv9gMIFg8pDp%2FK6QuxZ%2B9tbvKd7b9pOvn4zvAuhzK%2F2tHsVlBveLHKZ86jywYwPTNendBKObSpkx9ivuUm5gr6rpFtyMW%2BeyQqvPVt4i7dTkguZWkFVqu%2BVwUh5iUNJYb3aSosd32ehWyojPzzcoGENb434SdeaU2KS%2FykiLhJ85Aoxg%2FUZins%2BTw%2BFmO59ToW%2FLL0lbWNOSzvIl7ay3xaxizTGyNBVpHhoNZydCnK7ezRMpOObEP7c1pi%2Bcis5sM3lja%2FNUGmplLmeLR2sxBDXiZocYnEd8YUfp0zFiaXIin2vIWmJ8S2lIaqSSo%2Fc4CA%2BuNSc7WbWpEObt3mKPtRTYjV85KWI9G24V2VGRvzqN9vcxVo6IPkKbnQ8J3a9eQF5tiNRq%2BeWdQWSibueAJqh9miRCW2PZw8orjQeszUE%2F59Xmp%2Bwdx8C9rj%2BWsBClLWb8on3KdXW9cgpbme9gdowoC%2B592eZb4Wp5pkhHfx%2FsC%2BZMYxGIdESMFGhucE76eioBSZ0LoDZv64g%2B5v1oF81fUmmh86gUww9KCvgY6pgHYWHW7g1RgOOYYQsokDfQGRF3r6St5JslxotozIgMUj6MUVvzeikkgH7ae4WB3PfE5Zb1cDH64UV49aYj%2BX3r3qBWVTSk722kceGNBCYYXSsMqDsU1U5mPJGKVGB9lCpfdsVXvAmpJ9O%2F6xuQzUapg9dgP0dFo7OwdFjPGwIq7BLo1PG4zZRh4XSD7dnjui01Whp7l2O5EAnQAyh%2F0nLWNH7ltn93I&X-Amz-Signature=6974d5390a15c2d483e0ae9da88b2bd64f31693cbaf6390dc02c0244d0d69e30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
