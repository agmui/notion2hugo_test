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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QO3UPRX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCMaUm%2Blx1ym2p5J6eEDc0AYvL6SE7mbEG7tdN9CLG9ggIgXIfZlgy%2Fa%2BEIvK%2BHxG8TorXdw218VGvYPZn%2B27NQ%2BS8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN8ht5P%2FDHXZCFlvRircA1gE0qJvIkQiEUqdYPlEH0oiTCq3puNziHkxcKI7Nunx%2BdK2vigXzatJYQsfIkOb1ukrJxRj77KlaPIWaHl%2BVl3aQZsPbrXuIF6Tv6TxWrCkXzRs0DtWRRcgOdxS%2Bav4x0dV%2FnG%2BA6t8QL6%2F68zECmwknI%2BpIXQdS%2BPa8M%2B6gWvFNPR6uaR%2BJsE%2BdNSOerbw2v8cDMHywxKWmxS32Fbpzt67gLlwi9FZS83aaJZcj44DRDPsuAX5pUr%2FTmCbgYcWEE5rLfzIULed18saD%2BsaDZNmLjsLuC0VpA6eZz68GjnQbXyuatCaage59D%2FO0Myg1a6InbKJ%2B%2FmHAnqe9%2FaV0ZxrQDwlcm38CmmLHilojkPe9FUJbsH3CBwTb8QkRhukKbyvgGQTXfGim%2F%2BqQGr6q5Kj9b2%2BCZsnRHqMVEt2fdLeJxxbVFUeEmDjLTOU%2FX6vV5JwyZlD9ACSP4VKRzj8B2Vb%2FaNy4ph%2FRZqqxUBaQDwFmrBiQ4DIFSpIs092JrdQtRQu4Qdr3VKqUTIOT1XfUBva06QUpS%2FtIr5aoSlV5srkqPppxkADn6geces83ovsmUSQ8YjUVdKquu4LSe1PTrR9ALupsWRBYsI%2FMsjiiKMoEJ%2BuhcfsLohQJUpWMPv91sMGOqUBYFv%2BlpqPIpXWvD2ZqImCznLaAUJ5eGoqvOMF6YRnphZ3Q4QwXbiywz0cgET8kct46LSDfH42T9YnKVMvamDKX0kgChay8k%2FdPYs8MkqNhGhSYdaxuSAHibayjwLhdqyiEdc8Yx2Em0hM%2BlguqIuLtxIdhElZo1CQpWqxQUQtiR3Ktyz2MYNjPDb%2FSff%2Fj%2BgofM9c8c0SVsrh7vycMRceLMhiI%2FHz&X-Amz-Signature=9f567a8df5dee6833a771643218a0d7838a1ddd906cb42c15c1cb31d5b35aae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QO3UPRX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCMaUm%2Blx1ym2p5J6eEDc0AYvL6SE7mbEG7tdN9CLG9ggIgXIfZlgy%2Fa%2BEIvK%2BHxG8TorXdw218VGvYPZn%2B27NQ%2BS8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN8ht5P%2FDHXZCFlvRircA1gE0qJvIkQiEUqdYPlEH0oiTCq3puNziHkxcKI7Nunx%2BdK2vigXzatJYQsfIkOb1ukrJxRj77KlaPIWaHl%2BVl3aQZsPbrXuIF6Tv6TxWrCkXzRs0DtWRRcgOdxS%2Bav4x0dV%2FnG%2BA6t8QL6%2F68zECmwknI%2BpIXQdS%2BPa8M%2B6gWvFNPR6uaR%2BJsE%2BdNSOerbw2v8cDMHywxKWmxS32Fbpzt67gLlwi9FZS83aaJZcj44DRDPsuAX5pUr%2FTmCbgYcWEE5rLfzIULed18saD%2BsaDZNmLjsLuC0VpA6eZz68GjnQbXyuatCaage59D%2FO0Myg1a6InbKJ%2B%2FmHAnqe9%2FaV0ZxrQDwlcm38CmmLHilojkPe9FUJbsH3CBwTb8QkRhukKbyvgGQTXfGim%2F%2BqQGr6q5Kj9b2%2BCZsnRHqMVEt2fdLeJxxbVFUeEmDjLTOU%2FX6vV5JwyZlD9ACSP4VKRzj8B2Vb%2FaNy4ph%2FRZqqxUBaQDwFmrBiQ4DIFSpIs092JrdQtRQu4Qdr3VKqUTIOT1XfUBva06QUpS%2FtIr5aoSlV5srkqPppxkADn6geces83ovsmUSQ8YjUVdKquu4LSe1PTrR9ALupsWRBYsI%2FMsjiiKMoEJ%2BuhcfsLohQJUpWMPv91sMGOqUBYFv%2BlpqPIpXWvD2ZqImCznLaAUJ5eGoqvOMF6YRnphZ3Q4QwXbiywz0cgET8kct46LSDfH42T9YnKVMvamDKX0kgChay8k%2FdPYs8MkqNhGhSYdaxuSAHibayjwLhdqyiEdc8Yx2Em0hM%2BlguqIuLtxIdhElZo1CQpWqxQUQtiR3Ktyz2MYNjPDb%2FSff%2Fj%2BgofM9c8c0SVsrh7vycMRceLMhiI%2FHz&X-Amz-Signature=eb3102d006963072f511d66baba85afbae8ff778af51d8bec1462b16f3a2bb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
