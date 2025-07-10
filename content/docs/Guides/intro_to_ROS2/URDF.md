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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6EW6KL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQBpGUCPuck449TaGoKsvCcJAhAXX2I21Pk5cdV5JNZQIgdvESwN5y%2Fk6b4RiUM8MFCtU7ltuYTeIigf5Ah79J5XgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLcPg%2FIv%2BvF%2FXzGVCrcAwhBaFM6kzRC2kAAxEu9lVqJ5schUUqbGVUBZ2hD4ZYTmUUgajMD1VRuJ6subIzM196jV9e8pWyYb6tCquS89Qwagzs7k6le9beSjdOnvBcgfTrcJlxrDgygyN6zYn9VMXJ1GEEJuDi4UXeYZzRm82%2BJ05rAAsfJE%2BmA%2FcVbeeyHVRFv14ZJuLsuGVIzDEEU4swgtfLLftO1WT8wDW9wAuYHZC9VzGvOvaBw0ftW3zCyg9gDvQZ8LIkJkG1J%2FfvQ6aqtRJmArxjaIU6gZJgziqfRNufTy5BExN7V3jK6yLOZIqRO5WPa92PRuULtf9QsYYDajfjlv3OZX0uXGTizPs5SQvFQyf6fXId8yo7uwLLEbta0UMGleOQWla%2FFuXczB5xBQbGPgt8yPg9tGl3GwJq%2F85k4D5q%2BQ9GuAD9vLQzCZ0cLaUBiphFvJqxqXn07wqyigK8%2F9J8iqXD2KOTuK7UM5pJQC2JwbsKOScTjQS%2BMk7yIR%2FvKjbFxy3g%2FdsKwxDgsvcgKmAqfRxd4Q3PM2Xt0jf%2F7RvFyYC1MCO1v73RWnMMZdayttm72kmPE2w%2BlgFrjsKhyCvmMShItMsMR9rQnA%2FlPPxL%2BEU372PpEkdq%2BBZixQUKL7eP9A9F0MLXQvMMGOqUB0pirNHD%2FoefQ0yrodddrqoxbo4LXMyhFhkaeR7ZJzE4DxQt3fsGsxeWDfmywVIOL4q4SvbFmKZBX9ikzTX9Dc94k6xcWZynWX%2FcTTPc%2FIe47bsL5vu0U9If0NVdVvzCoZj35GKBNtIWWp6oSTu0fwZ8aba9PlugFmSzL2dXS5vO6D8rcuVs1ToA69DJK6cdeVGCQ1o9Gq%2B0ZO1empg5jpq3DqtWl&X-Amz-Signature=268b8bd71ea6cb4ad44600cc87cfca05d387cac73bbfcd9a4aef20693d6e6b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6EW6KL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQBpGUCPuck449TaGoKsvCcJAhAXX2I21Pk5cdV5JNZQIgdvESwN5y%2Fk6b4RiUM8MFCtU7ltuYTeIigf5Ah79J5XgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLcPg%2FIv%2BvF%2FXzGVCrcAwhBaFM6kzRC2kAAxEu9lVqJ5schUUqbGVUBZ2hD4ZYTmUUgajMD1VRuJ6subIzM196jV9e8pWyYb6tCquS89Qwagzs7k6le9beSjdOnvBcgfTrcJlxrDgygyN6zYn9VMXJ1GEEJuDi4UXeYZzRm82%2BJ05rAAsfJE%2BmA%2FcVbeeyHVRFv14ZJuLsuGVIzDEEU4swgtfLLftO1WT8wDW9wAuYHZC9VzGvOvaBw0ftW3zCyg9gDvQZ8LIkJkG1J%2FfvQ6aqtRJmArxjaIU6gZJgziqfRNufTy5BExN7V3jK6yLOZIqRO5WPa92PRuULtf9QsYYDajfjlv3OZX0uXGTizPs5SQvFQyf6fXId8yo7uwLLEbta0UMGleOQWla%2FFuXczB5xBQbGPgt8yPg9tGl3GwJq%2F85k4D5q%2BQ9GuAD9vLQzCZ0cLaUBiphFvJqxqXn07wqyigK8%2F9J8iqXD2KOTuK7UM5pJQC2JwbsKOScTjQS%2BMk7yIR%2FvKjbFxy3g%2FdsKwxDgsvcgKmAqfRxd4Q3PM2Xt0jf%2F7RvFyYC1MCO1v73RWnMMZdayttm72kmPE2w%2BlgFrjsKhyCvmMShItMsMR9rQnA%2FlPPxL%2BEU372PpEkdq%2BBZixQUKL7eP9A9F0MLXQvMMGOqUB0pirNHD%2FoefQ0yrodddrqoxbo4LXMyhFhkaeR7ZJzE4DxQt3fsGsxeWDfmywVIOL4q4SvbFmKZBX9ikzTX9Dc94k6xcWZynWX%2FcTTPc%2FIe47bsL5vu0U9If0NVdVvzCoZj35GKBNtIWWp6oSTu0fwZ8aba9PlugFmSzL2dXS5vO6D8rcuVs1ToA69DJK6cdeVGCQ1o9Gq%2B0ZO1empg5jpq3DqtWl&X-Amz-Signature=64d43fe48d42c7199f8ee69d0d32e827cd280b9e07025b9f6a3a7ebf2b11ccd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
