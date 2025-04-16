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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JKBFA7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC3BmfFix9Z8IbOSJCPy%2BpCgpp15XQa%2BM4roc5NXmKaAiBvGi5MvHq1CfWq%2B2MWp0d8jHwJv0twOZ%2FtqgHAyZ15hyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMiSFtudSJQq%2BVMe0VKtwD%2B3A03%2F%2FWUvatqGFu0vpogY%2FIo5BtiRtUKk%2B7%2BZBNeKj5H6QWGNc%2FQMuasKiaocpZB%2FTUpJ8fo8JMVOXT%2F1tBCwB2vHlEVBwWbdzLfNi6nS5uwEpR6rCvsc2kZc069%2BsoKqsh1NHsDkK6ztsxcvwwMfWht6FkouiNCCMha9IP6OAByLn0AZi2mmIaCdKwSX%2FrQHn2m3qZvTdpEWDi5pQhwm6dcHzLqgoE5DahE%2FlQ51yFV6CzT5gnfrEuonnW3HdmqeY99N581iFjVzL1V03yq8189pwrhZgRfp%2ByY5Y8Mx3UkFaIlFo%2Fi0UmPPbW413CFZolzcYicLtNIMEimyoOjC5WmUANEzak%2BHI1gJSMrWCRAMqmHsSwfIYZ3QFMwBvgGySn8SnomiqM48EqanSlD%2FLqZkybxhcJ6xwSoqcqGzz1K7XeXto7HPSebv1AfgtZhSqcQ4izoOAw9rfRmGbyMrQdk3CqsfasFAsdWQGRWfOkaC2OSrJwQPG7fhmVG87A0A5tR%2BhEP%2Bc3f4PBj5j5uboinw1bkWNMngh0aknF7CLVerXAsNcfZmUGTPHBu11SDfpHvFsLHJqhWYv817knI4HR5aL2bNN6P262RRLUYB%2BYno70hwx6lan3lwQwwdn9vwY6pgFrPV8PqTD5LVkxxz1pATXe6A3IhtHUqHXBFWMr2v5klSsszck9o8%2BANvP5aXCPCmUkPx6pqYrNOVBaKVMzM1DprLz1rV4N8Fg0zvEpf2OQvSA2%2F1fPHRRiwDkg7we9Ww1%2Fdrdar9gqpdJTY8x0KEANEfynhGqpzaNubNfgck02c1QAEnQ5jhvfrdIGfl9cFzwzvzQLnvk%2BSRdKnn8XKABW%2FpkAIPct&X-Amz-Signature=39f27387884cf7f03bdbb2ae90aec46954c2f1b5662c600f451fc0de56295335&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JKBFA7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC3BmfFix9Z8IbOSJCPy%2BpCgpp15XQa%2BM4roc5NXmKaAiBvGi5MvHq1CfWq%2B2MWp0d8jHwJv0twOZ%2FtqgHAyZ15hyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMiSFtudSJQq%2BVMe0VKtwD%2B3A03%2F%2FWUvatqGFu0vpogY%2FIo5BtiRtUKk%2B7%2BZBNeKj5H6QWGNc%2FQMuasKiaocpZB%2FTUpJ8fo8JMVOXT%2F1tBCwB2vHlEVBwWbdzLfNi6nS5uwEpR6rCvsc2kZc069%2BsoKqsh1NHsDkK6ztsxcvwwMfWht6FkouiNCCMha9IP6OAByLn0AZi2mmIaCdKwSX%2FrQHn2m3qZvTdpEWDi5pQhwm6dcHzLqgoE5DahE%2FlQ51yFV6CzT5gnfrEuonnW3HdmqeY99N581iFjVzL1V03yq8189pwrhZgRfp%2ByY5Y8Mx3UkFaIlFo%2Fi0UmPPbW413CFZolzcYicLtNIMEimyoOjC5WmUANEzak%2BHI1gJSMrWCRAMqmHsSwfIYZ3QFMwBvgGySn8SnomiqM48EqanSlD%2FLqZkybxhcJ6xwSoqcqGzz1K7XeXto7HPSebv1AfgtZhSqcQ4izoOAw9rfRmGbyMrQdk3CqsfasFAsdWQGRWfOkaC2OSrJwQPG7fhmVG87A0A5tR%2BhEP%2Bc3f4PBj5j5uboinw1bkWNMngh0aknF7CLVerXAsNcfZmUGTPHBu11SDfpHvFsLHJqhWYv817knI4HR5aL2bNN6P262RRLUYB%2BYno70hwx6lan3lwQwwdn9vwY6pgFrPV8PqTD5LVkxxz1pATXe6A3IhtHUqHXBFWMr2v5klSsszck9o8%2BANvP5aXCPCmUkPx6pqYrNOVBaKVMzM1DprLz1rV4N8Fg0zvEpf2OQvSA2%2F1fPHRRiwDkg7we9Ww1%2Fdrdar9gqpdJTY8x0KEANEfynhGqpzaNubNfgck02c1QAEnQ5jhvfrdIGfl9cFzwzvzQLnvk%2BSRdKnn8XKABW%2FpkAIPct&X-Amz-Signature=aeb4fd262cca6187abad356d66e982452a686787070940af36941264f0f02fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
