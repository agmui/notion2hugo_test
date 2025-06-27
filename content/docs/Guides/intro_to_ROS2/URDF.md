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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKY3HJYM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD58jeWRtj05E3NEGNKvCM4UBDKL%2FeiTlNHj%2BOrX6DUvwIgNXxYrLfKpu%2BWWm0ZtM6bjXvfkcBEW82rFsL8ta0NKBgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDILeBj29y%2BQ%2B0%2BudCyrcA58bt%2F09pxJGki%2FeLzXOqG9avfGy2eul9Z8HC6F4xibUuJf918UFKHyYAE1vpDc9tR3tOsHatFcR3f9gjvV8tcL2EhMJsLeQfs3hdhAdRsrhAqX77LPj7l9kcQ%2B4I7P0uFX203WBzquog%2FiVyqgeojJG%2FonAu%2Bz1iLtNNS91iHfYfVA8DtlB0oW3z8Cgr99AnaOMMzx9ND5dAsHxWudPSDneH3JddaNJ2roqFl8I3xX5HzP1hwVLT1Cku2Jz6DQO3f8NvySKdar0ix2frnPUox153M6pNbKMxLg8YrWrU%2BYp%2B%2FQIuJstufNoKkMi5LeSI%2F10k94WK0STX%2FmFn24hDW0doSlNVNtwG2LuZM6EjJxHHrGPtoC%2Fw%2Bu0oaC1DtsWRmC6c6cJaYx2xpuxXro7DxXLiYqCNL7osqFjPp%2FLRSjOlZkhUMagqo8NSYygsKL90TWg1bbnY1ooIqPqMaLEWgR9Dw7jqEOK9eeJmJ%2FMR21sddOUZO4WMkyrHFCrQUwmTkNa51pIMQjuQN73DUEE%2BvyFlQdMeOH5H%2FDl89HXvNHDrugmgJC28rCdDYokkcv73D%2BxEZaAygBbyBz0aXUCGT9mGosLaWo7cvlif1eHs87vAb9s9QO6888cJyo%2FMJ7298IGOqUBSUZEBkCotdFZpxOzjfFSUqOa9TbsASZeP5Eb7y4jyH96hVvdIdLM3i4mhPlhLkQ6EtqyiSc524vnTvX7pEDVl4jC%2BC6Uc0kRj9PYrVWU3KLBzXV5KT4O1aDAjO7ZnPMRivUtAaM7G2Mnl5%2Bt10%2Ffoox0oeaqCzg7Ob5VRJhnoEaPGVxuZksr0LKTutv0sa%2FH%2FbPWr%2BZllphXouo3gyw9Bf3u4mSz&X-Amz-Signature=d43ef55bdf1e9e565270eeef3133938ec64f54303578549250e4b09857fa314d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKY3HJYM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD58jeWRtj05E3NEGNKvCM4UBDKL%2FeiTlNHj%2BOrX6DUvwIgNXxYrLfKpu%2BWWm0ZtM6bjXvfkcBEW82rFsL8ta0NKBgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDILeBj29y%2BQ%2B0%2BudCyrcA58bt%2F09pxJGki%2FeLzXOqG9avfGy2eul9Z8HC6F4xibUuJf918UFKHyYAE1vpDc9tR3tOsHatFcR3f9gjvV8tcL2EhMJsLeQfs3hdhAdRsrhAqX77LPj7l9kcQ%2B4I7P0uFX203WBzquog%2FiVyqgeojJG%2FonAu%2Bz1iLtNNS91iHfYfVA8DtlB0oW3z8Cgr99AnaOMMzx9ND5dAsHxWudPSDneH3JddaNJ2roqFl8I3xX5HzP1hwVLT1Cku2Jz6DQO3f8NvySKdar0ix2frnPUox153M6pNbKMxLg8YrWrU%2BYp%2B%2FQIuJstufNoKkMi5LeSI%2F10k94WK0STX%2FmFn24hDW0doSlNVNtwG2LuZM6EjJxHHrGPtoC%2Fw%2Bu0oaC1DtsWRmC6c6cJaYx2xpuxXro7DxXLiYqCNL7osqFjPp%2FLRSjOlZkhUMagqo8NSYygsKL90TWg1bbnY1ooIqPqMaLEWgR9Dw7jqEOK9eeJmJ%2FMR21sddOUZO4WMkyrHFCrQUwmTkNa51pIMQjuQN73DUEE%2BvyFlQdMeOH5H%2FDl89HXvNHDrugmgJC28rCdDYokkcv73D%2BxEZaAygBbyBz0aXUCGT9mGosLaWo7cvlif1eHs87vAb9s9QO6888cJyo%2FMJ7298IGOqUBSUZEBkCotdFZpxOzjfFSUqOa9TbsASZeP5Eb7y4jyH96hVvdIdLM3i4mhPlhLkQ6EtqyiSc524vnTvX7pEDVl4jC%2BC6Uc0kRj9PYrVWU3KLBzXV5KT4O1aDAjO7ZnPMRivUtAaM7G2Mnl5%2Bt10%2Ffoox0oeaqCzg7Ob5VRJhnoEaPGVxuZksr0LKTutv0sa%2FH%2FbPWr%2BZllphXouo3gyw9Bf3u4mSz&X-Amz-Signature=4f5ce71324bc110b22a5cd954a7a98ec578825d460817ea3c756016e537d2d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
