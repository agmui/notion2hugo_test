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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPLY7YM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnDP2USgmRWCB%2BmAyz5Hk4FZbksjU1hoA892f49pjasQIgJpSkxCLTEGGYzKiIbZkjR1mlke4N8qsi%2BPI8QIRlvZQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhwJjHER2%2BgmSb8zircA%2BhjKauXn8fmGMrhvVwmEIQtkciQLox66dbnsEr1crTe9zaWPM5j2douTnFlR2MR%2FH4Xti9Fe9vnNciLpUdmL4xQcwI2ntKW%2BNxzq39ctFtvSc0qBteTl3%2BDnoLT34C1abY0XMeC9ULgFpupy8N6sGwVKz5ykbzKHUAwo0WIuMQOtaPVp7HmLtg%2B6q6%2FqD8aO3asuHi6WqRpNdPWnrq1Aubz9cWGUFx%2FbVmHvLfm70vg8a0P43pn1Y10vucomyNfh4ivuqz8SDEyS2HzwIHBiUNp8ji7kkx%2BdUQTVTK2qLbSqytmVwpLzJ1%2B9kea3%2BzR7Fdf0lwHZ2tsrcTbJEbWzJ2%2F5BExs%2B9U6pQp4JlmCcSoyYw8QnKdlskqUOj8TgasSYwIrP6Cy%2F9cBCuuosT%2B1F2Temq1k5uBM8K8NAv%2BCu0yUcA1CeBT4FP1Y2QhfiFO6bTHSHwvIH8u6tVz3X3yZSX03w8or1ITPUaE%2BR8%2FfdP4cZZXNNqHFCiVYJzik0AJZ4kYoeOcYKjLqZWxy2bYNJPyv0VECk6dXCCkN553xWrIR6NyTy4TdjbuzuiD1y0bP27msJtaHnNHiMplkR6OCT8vIpPjrCIYgS3%2FvYFIk%2F8u0ZtDKOkADOmwLnPeMJbMoMQGOqUBqQzwc7uE2vz4SyNk9pXGMGdahs5FUhj69a8VqYQwttcfxlY6YQQFV95AM%2B03BU0vtfKqPzPwn6x6dOOcUgpPY5spuja6rrqXFwcaoQifvu47X166TyVRZr6sbfAltXIqD5vXvQ6BdSa4tylG7YmIHgNWGTpwGyBeFEoktsfK3sl343dmc%2B7z%2FKy5219CFbVCr7v7DDGX%2FshonoqY06VEr83Z0Avh&X-Amz-Signature=900746106f1ff7501d73590db311deabeaf8903e75dc3497141e6d1fa37c8c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPLY7YM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCnDP2USgmRWCB%2BmAyz5Hk4FZbksjU1hoA892f49pjasQIgJpSkxCLTEGGYzKiIbZkjR1mlke4N8qsi%2BPI8QIRlvZQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhwJjHER2%2BgmSb8zircA%2BhjKauXn8fmGMrhvVwmEIQtkciQLox66dbnsEr1crTe9zaWPM5j2douTnFlR2MR%2FH4Xti9Fe9vnNciLpUdmL4xQcwI2ntKW%2BNxzq39ctFtvSc0qBteTl3%2BDnoLT34C1abY0XMeC9ULgFpupy8N6sGwVKz5ykbzKHUAwo0WIuMQOtaPVp7HmLtg%2B6q6%2FqD8aO3asuHi6WqRpNdPWnrq1Aubz9cWGUFx%2FbVmHvLfm70vg8a0P43pn1Y10vucomyNfh4ivuqz8SDEyS2HzwIHBiUNp8ji7kkx%2BdUQTVTK2qLbSqytmVwpLzJ1%2B9kea3%2BzR7Fdf0lwHZ2tsrcTbJEbWzJ2%2F5BExs%2B9U6pQp4JlmCcSoyYw8QnKdlskqUOj8TgasSYwIrP6Cy%2F9cBCuuosT%2B1F2Temq1k5uBM8K8NAv%2BCu0yUcA1CeBT4FP1Y2QhfiFO6bTHSHwvIH8u6tVz3X3yZSX03w8or1ITPUaE%2BR8%2FfdP4cZZXNNqHFCiVYJzik0AJZ4kYoeOcYKjLqZWxy2bYNJPyv0VECk6dXCCkN553xWrIR6NyTy4TdjbuzuiD1y0bP27msJtaHnNHiMplkR6OCT8vIpPjrCIYgS3%2FvYFIk%2F8u0ZtDKOkADOmwLnPeMJbMoMQGOqUBqQzwc7uE2vz4SyNk9pXGMGdahs5FUhj69a8VqYQwttcfxlY6YQQFV95AM%2B03BU0vtfKqPzPwn6x6dOOcUgpPY5spuja6rrqXFwcaoQifvu47X166TyVRZr6sbfAltXIqD5vXvQ6BdSa4tylG7YmIHgNWGTpwGyBeFEoktsfK3sl343dmc%2B7z%2FKy5219CFbVCr7v7DDGX%2FshonoqY06VEr83Z0Avh&X-Amz-Signature=68e2a943bfe6e87b5ffdb684b07097fb79b31934b3e3609a76dc94e0e844236a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
