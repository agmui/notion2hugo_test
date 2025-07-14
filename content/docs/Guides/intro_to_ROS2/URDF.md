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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZHKMDY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCID8uS2qaBeyLCJkuYP1OBDU21Ih%2FUNgVTRkIQ50J7VabAiBaagwqIVnwwMn8kak998JLYHDGJZ4jF29M1htCvKVm2ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMwpAiawyC7xC6npZLKtwD4zFXlkDm%2FZe3v%2Fn5U5kaB7HLhzE4g5eZeb46Fb0%2BFxNX5k4BI4QpkFgICnT8eP1aN6C6Qe8OdUV9ecKgzaMlZJzns5XIgVBB%2F8gBL4PuqILv9DqefihT5SHPmITK2xXi3xdheJ%2B5fzIgQfs9Ijrcnu16cTFkL5SWGqZg87dEVB%2FIL6EMYMn5K2OnnKQTBgphY0zzpRfq%2F%2BCZeH4s364cQdZuzRRpcwBNC83yjD5i0LEvc3YPWRntBu4MzOpAR2aWip8vBYWY%2BPy%2BF5iEQeGkStUcX%2Bbrz0lMrjvXMfEHxSgyRVy47Ej9vOJuBL55%2Fu3DZeYP2jy8qPeg2SlJZ07u%2BPXA0P3OvfTp9iha4%2Bm3d3DYpC4wyi43fv6yTxbH5ExgVFBLWFIki%2Bd6GuSW7jwDC9EQfE4Gzz16q5M3zWukN05n322gPjeHKSfDkd7ggb6%2F1ECV7VhenqJzjK5Q41WrVmzYWrILk6hdwWIYgkNQBquwYUOkzjXuWpu6n5PgGb1LNW%2BoX1oBDemqXaxjIbHiIPXou635fxH9%2FPwyagPZbkCTOZsfgl0WDbEewCp%2FpSYn2UkyeIsxpJYnwr13dvJYvT%2BIcR6jLYG%2Ftu4ExSZppBPsTRICei2Z%2BGyyp54wr9vSwwY6pgGv%2BRXRKDr6%2FWVMwl1AHKjrVV7Zl9SwGE1URZ8eYM8ZsolK0rUyf%2FeXd%2Bek7avjXtrKwf3w%2BbHWd8rRYYMKkmTZcYxmb%2FWq4I6DzV8%2BN9tPEbYcn6HKvuJ18RJUdBkZ8cOLUzR3TEdy496Ri8lTiFl3UHKj5hNM4lcrg4Pmcc0iXIn5d9PnRn9P2onsK1zGIgEbmZnqdzligWNPXxJ0oybv6R6IYzq3&X-Amz-Signature=f73da8f71622652025c97a781bfccffe7e0255a54d2022cc62fc385d95a98ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZHKMDY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCID8uS2qaBeyLCJkuYP1OBDU21Ih%2FUNgVTRkIQ50J7VabAiBaagwqIVnwwMn8kak998JLYHDGJZ4jF29M1htCvKVm2ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMwpAiawyC7xC6npZLKtwD4zFXlkDm%2FZe3v%2Fn5U5kaB7HLhzE4g5eZeb46Fb0%2BFxNX5k4BI4QpkFgICnT8eP1aN6C6Qe8OdUV9ecKgzaMlZJzns5XIgVBB%2F8gBL4PuqILv9DqefihT5SHPmITK2xXi3xdheJ%2B5fzIgQfs9Ijrcnu16cTFkL5SWGqZg87dEVB%2FIL6EMYMn5K2OnnKQTBgphY0zzpRfq%2F%2BCZeH4s364cQdZuzRRpcwBNC83yjD5i0LEvc3YPWRntBu4MzOpAR2aWip8vBYWY%2BPy%2BF5iEQeGkStUcX%2Bbrz0lMrjvXMfEHxSgyRVy47Ej9vOJuBL55%2Fu3DZeYP2jy8qPeg2SlJZ07u%2BPXA0P3OvfTp9iha4%2Bm3d3DYpC4wyi43fv6yTxbH5ExgVFBLWFIki%2Bd6GuSW7jwDC9EQfE4Gzz16q5M3zWukN05n322gPjeHKSfDkd7ggb6%2F1ECV7VhenqJzjK5Q41WrVmzYWrILk6hdwWIYgkNQBquwYUOkzjXuWpu6n5PgGb1LNW%2BoX1oBDemqXaxjIbHiIPXou635fxH9%2FPwyagPZbkCTOZsfgl0WDbEewCp%2FpSYn2UkyeIsxpJYnwr13dvJYvT%2BIcR6jLYG%2Ftu4ExSZppBPsTRICei2Z%2BGyyp54wr9vSwwY6pgGv%2BRXRKDr6%2FWVMwl1AHKjrVV7Zl9SwGE1URZ8eYM8ZsolK0rUyf%2FeXd%2Bek7avjXtrKwf3w%2BbHWd8rRYYMKkmTZcYxmb%2FWq4I6DzV8%2BN9tPEbYcn6HKvuJ18RJUdBkZ8cOLUzR3TEdy496Ri8lTiFl3UHKj5hNM4lcrg4Pmcc0iXIn5d9PnRn9P2onsK1zGIgEbmZnqdzligWNPXxJ0oybv6R6IYzq3&X-Amz-Signature=850e6e3388a661d1de2c4030eb869d9f46fce0bdf02edb02425c33d0e92f107d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
