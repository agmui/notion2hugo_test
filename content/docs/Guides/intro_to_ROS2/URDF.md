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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UQ5T2P6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGsx19Thyi7kwEgVECT1FWXOmy%2Fq7LfIlO5u7YH1d2HmAiEA5pf4X%2F8Dq4pwMi1oYKuK%2BLkhA0YRri%2Bn9Y2IDmYFQU0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpO8KKuEiaPaxcSJircA2RvtEDkTiXm3ILB1%2F6uj72tCpgbud6BLExXMZZ%2FpTF1Slmh1ee7Drd3fsEr6hl%2FmuzIm8%2B0uif2e9G%2BRM6O5uLD0qVVAlClokb6CsZyl7l5quwA22hN43iSG0cSxo9PExQtq2RCaQ7PPQbOl9mBButr3LApqgoOiAMFOgKBODfwDJmfs8mdxUgBbnfiGCmnl8ZMevYTCQ82QZyYrVMqDPwVveyKSx79nBnFuA%2Burd3Db10GzmqY8IN5HLwKSgd87yaebgdUOlRHJH9nsXfwWcArraV7QjLj0XypRVp%2FvUMWTtcKyqvzV39q9gVid6hWRhyGEWDSMdtMp92J8uVSu%2FUQioC7QUY21MB84SVSQhKCMw5qJGOY%2B%2FohP7YIU7NAjqw2jwDgvTbnzPgCvgq3s6XzXNVLGf4AbaEPWwgGwmV20AZm6JLbHqJt0RBi7eS2IJYcFSy2SPphmReCbBtXJPD5JhFvtYxzUjkxpoCx0Gi%2BC%2B2JXy6gjNwfLvgW89zuE6Quh1TfTgK8876%2BaPscK7nEfpydK4M3Iw10MwnD62UYSYFYjAiuAY875Wl5iXx0e42dYPun8NSXuB5o5MdH8qnTgZ0N%2B128VLMc53mck4n7%2FkmiQpKgZC%2FKcQckMJ3lqL8GOqUBIOU8LMW0H6RegGLT8j5N5RaFNAZ2HKtqWbqGB0fCMoc7TDgY9kJRrpbFoAOHxzhkbUq0L7wrOdbL5yJeUbH7XS%2BK9mkLiVXGNfj88Qx2OlfVrDeB0bkP%2Fa2uQDlV2dwVc4WMlfJtsv%2F9koY9fG13a9V3nWIcx5U1Wau%2Bb1FO1jnpKQo%2Bp%2BO2zwn796fNqrcFyxSBUFXLBaca4d95DGOO6Jwd5lpv&X-Amz-Signature=72ab8ca3a68f60f59d4582508310ea82095e5d74f2260431675c7c714e587c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UQ5T2P6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGsx19Thyi7kwEgVECT1FWXOmy%2Fq7LfIlO5u7YH1d2HmAiEA5pf4X%2F8Dq4pwMi1oYKuK%2BLkhA0YRri%2Bn9Y2IDmYFQU0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpO8KKuEiaPaxcSJircA2RvtEDkTiXm3ILB1%2F6uj72tCpgbud6BLExXMZZ%2FpTF1Slmh1ee7Drd3fsEr6hl%2FmuzIm8%2B0uif2e9G%2BRM6O5uLD0qVVAlClokb6CsZyl7l5quwA22hN43iSG0cSxo9PExQtq2RCaQ7PPQbOl9mBButr3LApqgoOiAMFOgKBODfwDJmfs8mdxUgBbnfiGCmnl8ZMevYTCQ82QZyYrVMqDPwVveyKSx79nBnFuA%2Burd3Db10GzmqY8IN5HLwKSgd87yaebgdUOlRHJH9nsXfwWcArraV7QjLj0XypRVp%2FvUMWTtcKyqvzV39q9gVid6hWRhyGEWDSMdtMp92J8uVSu%2FUQioC7QUY21MB84SVSQhKCMw5qJGOY%2B%2FohP7YIU7NAjqw2jwDgvTbnzPgCvgq3s6XzXNVLGf4AbaEPWwgGwmV20AZm6JLbHqJt0RBi7eS2IJYcFSy2SPphmReCbBtXJPD5JhFvtYxzUjkxpoCx0Gi%2BC%2B2JXy6gjNwfLvgW89zuE6Quh1TfTgK8876%2BaPscK7nEfpydK4M3Iw10MwnD62UYSYFYjAiuAY875Wl5iXx0e42dYPun8NSXuB5o5MdH8qnTgZ0N%2B128VLMc53mck4n7%2FkmiQpKgZC%2FKcQckMJ3lqL8GOqUBIOU8LMW0H6RegGLT8j5N5RaFNAZ2HKtqWbqGB0fCMoc7TDgY9kJRrpbFoAOHxzhkbUq0L7wrOdbL5yJeUbH7XS%2BK9mkLiVXGNfj88Qx2OlfVrDeB0bkP%2Fa2uQDlV2dwVc4WMlfJtsv%2F9koY9fG13a9V3nWIcx5U1Wau%2Bb1FO1jnpKQo%2Bp%2BO2zwn796fNqrcFyxSBUFXLBaca4d95DGOO6Jwd5lpv&X-Amz-Signature=7abe768dbdb09d9ad1c1231b4ac989f16a9fb42557635f1a807be7ab40a50c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
