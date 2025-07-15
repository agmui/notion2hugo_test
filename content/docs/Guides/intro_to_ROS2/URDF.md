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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSI45PW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDHxcgrWi4LW0YYfnvj2VstX7l%2BjDTGyhZB8RU9dJCUZgIgRSCMuDHgggLRl6o0wqdjwp4dROkF35LwA3kxvJo2krYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPe%2B%2BHBDAguVWCj%2BDSrcA%2FV9Gvi4sFFZoAQgYLZpavfMN%2FQMGKvdohwKfrKFclhZoHgmmd72G39EGwP5t4bHszVkVZX3bcQiWHi8AG4mE2urwtgHCMPp5Kl2YM1D6uJQ9AR%2BjYuD9MSILiigx1ntGtQ%2FvQRxtfENU6DQ3lzzZmdLMG43UmTKTjaTMiefovCB9irnik%2BAVpF4UHNj7923vpL1mnHgs28TtqmeXOCJb8mVNmF1wuh2FpL0BeJZICY9mh78Xr3oYA2VOEqfgn%2Fnk8Ed1gzpIPslptz5oY2vm6OUredpJ3SA%2BgKYItLttfZmf60O33K8N9hXKihLkglENJOgbbTatemo6P2JOLhHDUkawOVW6LtNrPzI9E7Q0jYDMFaDantO78w2QqS9aSHy2yzLNMyCw3zPwk3LqW3wcBxT102Dx8tmM8fW6WDkaYokZA4byaexZXmrQ0aSPEgj%2F9I6cfcfqHD9FdYoChokXf%2B4qfX84Mh2B%2BymWHTX2Gzcb9XW3%2FW1NGLySD4NV2BEjpTXJYErSW9AvWzZ%2BwDkl8%2FmReyZwmFqnIyejiy2T1vyu9ls9rSW1o2Et2QJC%2B272EKtl7k4eU39DWRe%2B2vuTPc2jqudhYguYy%2FJH9JMY6FU1%2BKrem0m7oBrjhoTMO6B2MMGOqUBQk7VItUlgkH3POM6bIDeeGGyMxWQgcxTK8brt2aG8aObkquVRFBw3eTrwMV51XO%2FgxHN%2FqYo5s84bxaRalBW6V7woaBCLWwfuRtSW8mJBEpNxhCmiPazClbp2L68UEj8pgq5kMyJjdEC7qIDS46MG1uH%2F9tRoqdcMGCWvNwFvuPTs8fRZYc3LFzLd%2Bu5NprNEzubfx0RnpGqEGFEdnbesg7flp6y&X-Amz-Signature=63f8e72f8365a97f0d0df9b14c7a796c53aadb71b895934a23daa0661c210406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSI45PW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDHxcgrWi4LW0YYfnvj2VstX7l%2BjDTGyhZB8RU9dJCUZgIgRSCMuDHgggLRl6o0wqdjwp4dROkF35LwA3kxvJo2krYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPe%2B%2BHBDAguVWCj%2BDSrcA%2FV9Gvi4sFFZoAQgYLZpavfMN%2FQMGKvdohwKfrKFclhZoHgmmd72G39EGwP5t4bHszVkVZX3bcQiWHi8AG4mE2urwtgHCMPp5Kl2YM1D6uJQ9AR%2BjYuD9MSILiigx1ntGtQ%2FvQRxtfENU6DQ3lzzZmdLMG43UmTKTjaTMiefovCB9irnik%2BAVpF4UHNj7923vpL1mnHgs28TtqmeXOCJb8mVNmF1wuh2FpL0BeJZICY9mh78Xr3oYA2VOEqfgn%2Fnk8Ed1gzpIPslptz5oY2vm6OUredpJ3SA%2BgKYItLttfZmf60O33K8N9hXKihLkglENJOgbbTatemo6P2JOLhHDUkawOVW6LtNrPzI9E7Q0jYDMFaDantO78w2QqS9aSHy2yzLNMyCw3zPwk3LqW3wcBxT102Dx8tmM8fW6WDkaYokZA4byaexZXmrQ0aSPEgj%2F9I6cfcfqHD9FdYoChokXf%2B4qfX84Mh2B%2BymWHTX2Gzcb9XW3%2FW1NGLySD4NV2BEjpTXJYErSW9AvWzZ%2BwDkl8%2FmReyZwmFqnIyejiy2T1vyu9ls9rSW1o2Et2QJC%2B272EKtl7k4eU39DWRe%2B2vuTPc2jqudhYguYy%2FJH9JMY6FU1%2BKrem0m7oBrjhoTMO6B2MMGOqUBQk7VItUlgkH3POM6bIDeeGGyMxWQgcxTK8brt2aG8aObkquVRFBw3eTrwMV51XO%2FgxHN%2FqYo5s84bxaRalBW6V7woaBCLWwfuRtSW8mJBEpNxhCmiPazClbp2L68UEj8pgq5kMyJjdEC7qIDS46MG1uH%2F9tRoqdcMGCWvNwFvuPTs8fRZYc3LFzLd%2Bu5NprNEzubfx0RnpGqEGFEdnbesg7flp6y&X-Amz-Signature=fda8f63af4886de261a6b611f4e4c551ec1879cfd11f9cb4b5c5b1adb6f11cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
