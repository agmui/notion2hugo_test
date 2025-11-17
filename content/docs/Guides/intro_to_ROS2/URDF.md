---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6BAWCY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOccMY%2FaY%2Bwy8dpa5CpeleQCdZna1QZxwLLDQaHX6SZgIgSU8plUY1DxKD5O7BjK9hCilSWI6NMHgu8AOprQEEs%2BcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJcpTdJfxMEpiwVLCrcA1kpwz%2Bxvc7DeBn4ukEyOAglx%2FFixtW6RMGtJpFn2OQITzqpkwT3xKRzL0NSFoP24TaiB3Z4vOp%2Bf4St0aGwgg8oVGl9GkTXrQ8hM8BFJm%2BAAq2nr%2FsdOQ5vTsfRt%2FKvXOFDZgZllZwxbAJB6iZJrSuAwdwSABXq0EXCw7du80e9Rxesv0hHgDpsAO5rD457lSa44qU4DBcnvkRgSyI9iiyPMh0lrrjxboSyXsxEqr%2BRwweP2tGQ0ftBopHl%2BQIBJQCEmxwKbdph15xS54otKIzf6aBVj88ZNFsjCVQRCtvK1neTJ1kRy%2BzJgiF5S32Oc6dHNfZTKCjA5LjFEzCNj%2FBmmHWm4Y2ZCS%2BANHbVEVrsMQe9U9kdN348a7%2FlvPJhvB8Cy7Yfe1lfmaZw%2F8Cj8yQzt31KWEKQogAeo40BV9cvLFQhdpDZuL5povqjSniIEWAwb1%2FNhhb5Ax9CWaxbin4LexEenkUuanTfmhqNqXQ9U8PI9h1OR1O1R5hseHK71AsmQUvSO229zCjCptv7t7cEfMebXvxrZpyXsYpoEJUv%2Bu6tBPfCSLzj6lqKqU30NNzpIJ%2B6sICF32xj7UIpCyRle1zAyyIgoQnaOomIqKsTzeUgwnenw%2F%2FP5pIYMMrg6cgGOqUB9iLQxwbHIK5fne6i5Bi%2Bsv8Akcd4V7SGuyomI94wjt8i2V2n9nxxmLCsc51LmFf7VJVquVwn47L9u471UQ%2F5k6ibaSsTPwcQEGg4gYwTx6rN2JTNlueCgzklGubrQTfwAa%2F7cdZf%2FgZu0vsMo6L5cIZRQEV2guoFRrGXArDzfcYuTzHfn%2BNUasFSlhQyJCaGxgskWx3%2FnXHQevR%2FnUpmRrVtPN8C&X-Amz-Signature=16f03b492356b2b36e187ddee3b3c1b367f587f7e7e4a57dc0f653cae6f9f123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6BAWCY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOccMY%2FaY%2Bwy8dpa5CpeleQCdZna1QZxwLLDQaHX6SZgIgSU8plUY1DxKD5O7BjK9hCilSWI6NMHgu8AOprQEEs%2BcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJcpTdJfxMEpiwVLCrcA1kpwz%2Bxvc7DeBn4ukEyOAglx%2FFixtW6RMGtJpFn2OQITzqpkwT3xKRzL0NSFoP24TaiB3Z4vOp%2Bf4St0aGwgg8oVGl9GkTXrQ8hM8BFJm%2BAAq2nr%2FsdOQ5vTsfRt%2FKvXOFDZgZllZwxbAJB6iZJrSuAwdwSABXq0EXCw7du80e9Rxesv0hHgDpsAO5rD457lSa44qU4DBcnvkRgSyI9iiyPMh0lrrjxboSyXsxEqr%2BRwweP2tGQ0ftBopHl%2BQIBJQCEmxwKbdph15xS54otKIzf6aBVj88ZNFsjCVQRCtvK1neTJ1kRy%2BzJgiF5S32Oc6dHNfZTKCjA5LjFEzCNj%2FBmmHWm4Y2ZCS%2BANHbVEVrsMQe9U9kdN348a7%2FlvPJhvB8Cy7Yfe1lfmaZw%2F8Cj8yQzt31KWEKQogAeo40BV9cvLFQhdpDZuL5povqjSniIEWAwb1%2FNhhb5Ax9CWaxbin4LexEenkUuanTfmhqNqXQ9U8PI9h1OR1O1R5hseHK71AsmQUvSO229zCjCptv7t7cEfMebXvxrZpyXsYpoEJUv%2Bu6tBPfCSLzj6lqKqU30NNzpIJ%2B6sICF32xj7UIpCyRle1zAyyIgoQnaOomIqKsTzeUgwnenw%2F%2FP5pIYMMrg6cgGOqUB9iLQxwbHIK5fne6i5Bi%2Bsv8Akcd4V7SGuyomI94wjt8i2V2n9nxxmLCsc51LmFf7VJVquVwn47L9u471UQ%2F5k6ibaSsTPwcQEGg4gYwTx6rN2JTNlueCgzklGubrQTfwAa%2F7cdZf%2FgZu0vsMo6L5cIZRQEV2guoFRrGXArDzfcYuTzHfn%2BNUasFSlhQyJCaGxgskWx3%2FnXHQevR%2FnUpmRrVtPN8C&X-Amz-Signature=54529af4a698f242c275f4e57ef62cc709f3ad4621443bc631a55524940f6d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
