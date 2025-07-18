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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3WAT2L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBYSeCTGi%2FI%2BwTat3JWlUUgb5OG3iP%2B1qYY3nckRWQ%2FRAiB80NSTCYXakJEAgkWsSuLP2DOHjQnN4zc8Iohs1DbA%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu23eQabz2gSLRtRGKtwDzYJ81n6UaeOQi40bpczV9bg9gH0MxT2F4oAe7dHWgUSe%2BHc6l%2FrxGzLnPFI71xuDyZ4C0pMYY04i%2F6EhCxR4%2B%2F562fBoC8V9KZo2clKqCU0JDkiCERrtXEkeuRX3BjJXAuf7bNdLNKz4r5VA5F7YLdh0Fb0ldnZ5nDnVErbnBP88jray%2BuJ0BqKrU0umecHbAoQ9Fl7XJGiPZnRTa2R3VeNEFPqax3EO9PjowZ2o3w0Pzjf4EVzExBRXjwX2c11xXXSrmMM2%2BQVqTi8CeOOM2Mv9LKhjIIy3400kNWNebMd9ZwNVJOJ9hm1B%2FClrdVmgj9Z%2BADtRIeq0GfRkSMAj31WGJeONTmzRXAlTiRM5fxjOZIAuLm2XQRqNJ0qJwO80OmHHPIBHRgLibMXKWuZ%2BPxO%2FMhLpmsg9BQ34auQE9fEf0ux7WuUYQFf2aSZav6lWdWVu1x7pPF0ZkXTsnUbT%2FaMeyktluvXAPYQgSnjlhGAFreUiRWGDpWqUwvtY8ocQLqLuJd0aVd%2BlWSd97zDp1Ek0raM0OV5RdhdW0sLjV%2FC7wwkXS4gEfymC4PbYlbx83RyzjJU4tlLiUin72PkyUN1e4la7xkWZxut3ONL%2FGsYDS5H3YfklQXoQXH4w%2F%2FrlwwY6pgF0W2ZUvHJ2YICdzDYFORu7iuwRwAoXIJ1B2FP6loQjkxYSoUd6SuTUlp8pbYitYJOh4asyf38bxUoU5pSyNAzP8Na4ROoYVy4kVRwxlCLZO1b%2BQkEO4PQ2HsZao9m1CLaKIRt4PzCcrLlLsKCMk68DWwM1en09%2Bv0xP1WRaw7lSR7yLRdCif34lSVY5b2qdmlQU18yt3tT38fQLK8PUF4Oal0Msgu4&X-Amz-Signature=795987992cfe719d242ccb57c331aa5e411777ad9ca45b426c74e556d2999c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3WAT2L%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBYSeCTGi%2FI%2BwTat3JWlUUgb5OG3iP%2B1qYY3nckRWQ%2FRAiB80NSTCYXakJEAgkWsSuLP2DOHjQnN4zc8Iohs1DbA%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu23eQabz2gSLRtRGKtwDzYJ81n6UaeOQi40bpczV9bg9gH0MxT2F4oAe7dHWgUSe%2BHc6l%2FrxGzLnPFI71xuDyZ4C0pMYY04i%2F6EhCxR4%2B%2F562fBoC8V9KZo2clKqCU0JDkiCERrtXEkeuRX3BjJXAuf7bNdLNKz4r5VA5F7YLdh0Fb0ldnZ5nDnVErbnBP88jray%2BuJ0BqKrU0umecHbAoQ9Fl7XJGiPZnRTa2R3VeNEFPqax3EO9PjowZ2o3w0Pzjf4EVzExBRXjwX2c11xXXSrmMM2%2BQVqTi8CeOOM2Mv9LKhjIIy3400kNWNebMd9ZwNVJOJ9hm1B%2FClrdVmgj9Z%2BADtRIeq0GfRkSMAj31WGJeONTmzRXAlTiRM5fxjOZIAuLm2XQRqNJ0qJwO80OmHHPIBHRgLibMXKWuZ%2BPxO%2FMhLpmsg9BQ34auQE9fEf0ux7WuUYQFf2aSZav6lWdWVu1x7pPF0ZkXTsnUbT%2FaMeyktluvXAPYQgSnjlhGAFreUiRWGDpWqUwvtY8ocQLqLuJd0aVd%2BlWSd97zDp1Ek0raM0OV5RdhdW0sLjV%2FC7wwkXS4gEfymC4PbYlbx83RyzjJU4tlLiUin72PkyUN1e4la7xkWZxut3ONL%2FGsYDS5H3YfklQXoQXH4w%2F%2FrlwwY6pgF0W2ZUvHJ2YICdzDYFORu7iuwRwAoXIJ1B2FP6loQjkxYSoUd6SuTUlp8pbYitYJOh4asyf38bxUoU5pSyNAzP8Na4ROoYVy4kVRwxlCLZO1b%2BQkEO4PQ2HsZao9m1CLaKIRt4PzCcrLlLsKCMk68DWwM1en09%2Bv0xP1WRaw7lSR7yLRdCif34lSVY5b2qdmlQU18yt3tT38fQLK8PUF4Oal0Msgu4&X-Amz-Signature=5edf29ff40bb4b44d513b8dd16c12be9cc392861cf05669ae0d29866429c58fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
