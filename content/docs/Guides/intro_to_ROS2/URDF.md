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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQ2M7R3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB8blh8XpBd7A0t6lAXivGjejLOyPvdWJi1g3Iv9rRwwIgO1oZTE41wf2OzPZoVtajX9TZVIVAYl3F22c%2Bj89Qx5kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLskK%2Bg1huBQu5PFVyrcA9CJYystF9vivUjhukvSMRZacINbsDK7DwP3S9CURnE44vmkenfGYu%2FJQMj%2FxQBthymhkrxH4XHCXgJa0BKRBP%2BV254rlvUAl1YhqZ29GWWvbOVsGC%2Bd5dAFO%2BEx0weCgEvsxD4BKgg0P7x3Fy%2F4Coxp0Seq%2BGhghIW54GETw108UHT2PIbWDhlMUp8gbaFN8%2F9HgzhyrRlVAjJ46hj1iTKZWaTwFWtgdZGLdRFsS1gXdFRgGwkbOBM%2BZKdsqa99lIOLf6PQHnNG9U3Ue3dEwXOBjbgnW2NhkW6iBhRsQNPpCxH7m56w5i65Jl4%2BIX19d8b8uPU70H%2FwvGllgZD%2BQcPKZ1GRsZVeFgDOEfe7Tqrit9WMIb0LvlK7emlykkZXKbW%2BLAqCg%2B5F9qWFaPQPKX1m2kLtfGC%2F%2Bt%2FVHr9pvxk%2Fk9Gae4%2BtnIkciqjP0K4OLXz7yJqbsAX0MWaXVXAUbYYtd1a%2Bot5aoys3uBoPuPqB1aYNs%2FS7JHTigxxxtDmPFqTdTuW4v03Dd7ehXJiAuIzyA%2B0dWfqB98x%2FkLfffd8in%2Fdb0Mwp1YUdEY0NZC7IOJJUmjrvL5bn2rq0WMbPl2buhWJxIoOBZwpNfcGOL8bPBAAr17WmlZAs%2BWZMMNCU9b8GOqUBEGYAwnoyp7MF3Yelp6CJFUVH3Pwgi9YtuoUs7a%2FW8Pku6H3bdFcyoMM2M00J2bQmGRk61eLSCOyfcgssdLxjn3GKkzWuSQoaAF2o4c9KgIsT%2BPn4lbPfanUshwZRKo4C9oD%2BN4bmgz4rFd05jby1CWa%2FLNVJ4H%2Byt0E3ORc8iSZ6fuYBGuPULZdO6UYQYJt%2F%2BQAykhw26aJzMzdLPQjzk5buCTCb&X-Amz-Signature=80581ce6ddf07466950c0550a8b52a8cb137ed396e22d959075623911735a086&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQ2M7R3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB8blh8XpBd7A0t6lAXivGjejLOyPvdWJi1g3Iv9rRwwIgO1oZTE41wf2OzPZoVtajX9TZVIVAYl3F22c%2Bj89Qx5kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLskK%2Bg1huBQu5PFVyrcA9CJYystF9vivUjhukvSMRZacINbsDK7DwP3S9CURnE44vmkenfGYu%2FJQMj%2FxQBthymhkrxH4XHCXgJa0BKRBP%2BV254rlvUAl1YhqZ29GWWvbOVsGC%2Bd5dAFO%2BEx0weCgEvsxD4BKgg0P7x3Fy%2F4Coxp0Seq%2BGhghIW54GETw108UHT2PIbWDhlMUp8gbaFN8%2F9HgzhyrRlVAjJ46hj1iTKZWaTwFWtgdZGLdRFsS1gXdFRgGwkbOBM%2BZKdsqa99lIOLf6PQHnNG9U3Ue3dEwXOBjbgnW2NhkW6iBhRsQNPpCxH7m56w5i65Jl4%2BIX19d8b8uPU70H%2FwvGllgZD%2BQcPKZ1GRsZVeFgDOEfe7Tqrit9WMIb0LvlK7emlykkZXKbW%2BLAqCg%2B5F9qWFaPQPKX1m2kLtfGC%2F%2Bt%2FVHr9pvxk%2Fk9Gae4%2BtnIkciqjP0K4OLXz7yJqbsAX0MWaXVXAUbYYtd1a%2Bot5aoys3uBoPuPqB1aYNs%2FS7JHTigxxxtDmPFqTdTuW4v03Dd7ehXJiAuIzyA%2B0dWfqB98x%2FkLfffd8in%2Fdb0Mwp1YUdEY0NZC7IOJJUmjrvL5bn2rq0WMbPl2buhWJxIoOBZwpNfcGOL8bPBAAr17WmlZAs%2BWZMMNCU9b8GOqUBEGYAwnoyp7MF3Yelp6CJFUVH3Pwgi9YtuoUs7a%2FW8Pku6H3bdFcyoMM2M00J2bQmGRk61eLSCOyfcgssdLxjn3GKkzWuSQoaAF2o4c9KgIsT%2BPn4lbPfanUshwZRKo4C9oD%2BN4bmgz4rFd05jby1CWa%2FLNVJ4H%2Byt0E3ORc8iSZ6fuYBGuPULZdO6UYQYJt%2F%2BQAykhw26aJzMzdLPQjzk5buCTCb&X-Amz-Signature=610149fdad264bafed3eca89e597471861772bddbe050498d64a4899ce39566f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
