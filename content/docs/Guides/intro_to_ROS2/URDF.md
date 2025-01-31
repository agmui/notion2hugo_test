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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655JV44XS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBEXycb7ondB5EXRrmzOajcSPBk%2BBlYB1bd2D2h7vMQIgYPNTlKxtenRtYPmyhbn%2BYLfNtaH999SCiWU7VjRkVuAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQzUAVbL%2FMIzfilnCrcAwbtqsZsm1sJjQXcbE0ohbACwgxOBo%2FQAjK3kWgMHVdeSI%2FUZW4STpEUqvr5NUKfUyqeTIbPp3XoEz%2Fk07k4zY50xaHlA9mA8c13Wbm96SuiVkwaP%2BRiYw88ALWzHjK1YSaC6W0s6vzPb23ibgTF0cLRUdglIOMK0nQ3NAUFSFa8SSL39czQ4VRvmOqwB0XBl%2Bm4KvksuhB%2BrRbkM3kzjpbUNGme9yclYfszcbvDp%2F3HNs1flh%2BzxSN%2FHPSedY3%2FTG00jdE%2BhlwKioRyOOcelXceJYsIrb8Z3n3ohRtj1UTthy01to4YXmHqPdRgNHFUxPcdtrerKhRiGG%2F5I9etRcfGccO6V44ERTgrjWvG%2FrO5a0a2v5JsTv3bUBbsqjdBqEYoa3CnJlVsgZ9sCoywHnWqZRq5aytoRMm%2FN0ZUYxK%2BwEsmZvCjdpsGjCmCDKtNQXxZjOBINeA3pf9Ekaff5F01iPRBgDCilFfDrCDtX%2FK6ZZbxvTM1mhqgTwqFmxm9OalLYBpReI%2FM7gmVe1FZHUObvrd%2FMYF1La2p0%2FS2rG%2F%2FM8jLRwvNxitE1APvyKEnRD9TY7H7vf7vZyMb3jCb6nrB%2BCUjj5xdoGZdRVTJg%2FY9qIEQS9cKexrt2xdAMPXR8LwGOqUBUBStF2ar0GJYyBPP66ewAte14Lr3JrdC8tK5p0KS9JWRLwh5Gprynp1g75XVXiCgZ05SFZkMpAxQpf6lEIMzJO5DJyT6peu3HwFaB%2BYmD%2BjIRO5tx32PMujIfHPspr6VVdo7jSAOA7YL2xd3IpOvVq6ZJTJpYFdrgkwIOnkuNALHj4yQwwf0mmY%2Fidm4R0iF49inh3sDrrPMhC4EqnPrBrrH6wMG&X-Amz-Signature=efdf8346fd45a827583f2cc970ad0d7629c9d8e9c57ae8571191bf4c57d1d38b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655JV44XS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfBEXycb7ondB5EXRrmzOajcSPBk%2BBlYB1bd2D2h7vMQIgYPNTlKxtenRtYPmyhbn%2BYLfNtaH999SCiWU7VjRkVuAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQzUAVbL%2FMIzfilnCrcAwbtqsZsm1sJjQXcbE0ohbACwgxOBo%2FQAjK3kWgMHVdeSI%2FUZW4STpEUqvr5NUKfUyqeTIbPp3XoEz%2Fk07k4zY50xaHlA9mA8c13Wbm96SuiVkwaP%2BRiYw88ALWzHjK1YSaC6W0s6vzPb23ibgTF0cLRUdglIOMK0nQ3NAUFSFa8SSL39czQ4VRvmOqwB0XBl%2Bm4KvksuhB%2BrRbkM3kzjpbUNGme9yclYfszcbvDp%2F3HNs1flh%2BzxSN%2FHPSedY3%2FTG00jdE%2BhlwKioRyOOcelXceJYsIrb8Z3n3ohRtj1UTthy01to4YXmHqPdRgNHFUxPcdtrerKhRiGG%2F5I9etRcfGccO6V44ERTgrjWvG%2FrO5a0a2v5JsTv3bUBbsqjdBqEYoa3CnJlVsgZ9sCoywHnWqZRq5aytoRMm%2FN0ZUYxK%2BwEsmZvCjdpsGjCmCDKtNQXxZjOBINeA3pf9Ekaff5F01iPRBgDCilFfDrCDtX%2FK6ZZbxvTM1mhqgTwqFmxm9OalLYBpReI%2FM7gmVe1FZHUObvrd%2FMYF1La2p0%2FS2rG%2F%2FM8jLRwvNxitE1APvyKEnRD9TY7H7vf7vZyMb3jCb6nrB%2BCUjj5xdoGZdRVTJg%2FY9qIEQS9cKexrt2xdAMPXR8LwGOqUBUBStF2ar0GJYyBPP66ewAte14Lr3JrdC8tK5p0KS9JWRLwh5Gprynp1g75XVXiCgZ05SFZkMpAxQpf6lEIMzJO5DJyT6peu3HwFaB%2BYmD%2BjIRO5tx32PMujIfHPspr6VVdo7jSAOA7YL2xd3IpOvVq6ZJTJpYFdrgkwIOnkuNALHj4yQwwf0mmY%2Fidm4R0iF49inh3sDrrPMhC4EqnPrBrrH6wMG&X-Amz-Signature=edd4f698a12e0a8b0b59b75e70c72bfd0eb9305919baafd27b11a5f38105b453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
