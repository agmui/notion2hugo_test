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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCM6EO4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCmYBMdVk%2F9zLcW1sMKf6dPvXcmTnlJkyncDD%2BZyAQUZQIgKHJpmuUClv53LWlIlXUIfaEZuiLjFV%2BNZsb%2FVNVkhFsq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFc7y3ts9Bwx3%2BQAyyrcA7BOYSyGCX1UbkB36zjYnpSXSrQClb9zx7Fj5yOmZzKFfPCvWNqOjdm7oUMtzx2g%2BkVQ42acEsfu3znB6VhWc3rHXxNI9g0uISEDsp29ulggaCBQMbKteF%2BEOo2sWalvjT%2FzoKczcHwRpzNlcIoTe%2FafhvgnlArCtfPJkfwbV74EMAZhAHSqvHHEzlvBCSn2C1wF58g5oVRhS9OaIo9qMnIa7tnJGOHKsUXU1JO2eSpMnugURxj7QbWNd5BmTi8S88KOCDcMt5JqMtHk1Gc7xuY0k5aX3wsxcxthpJSUOzpmrS5lvVRMr5w5r%2FCXlih7Yie9ihlUBnkVSQUeCgRlJTzqXi4yQDdGH5WXkGN8lgd%2FS6WTl02AiVVp%2BTsSlYacBJ2X4Q%2Bz2sitbEZuM3Oy%2Bv8msQpg%2BpClB636LvY%2FdT48Ai9ArlgaShuY0LbFTV6xMSxG5n4nPRYgDosdfSBoRUTkRodnLlbJYqfbad46DNbc0noeorMxaDQI6yvPVB0cBmH7pvT2fs98qs0ADvOxj9Yj88W1FDwGNOYuqO3Xn5NgU0TquBn5CGL77NRIRxzv2%2B8CvgOvBLI%2BjThsUzH4%2BS7d22fOPfxUfgsmbCBxrJwXcczzAnWIHNDP2QECMKi%2Frb4GOqUBS0vu5zGYZ29rHYgOz1Pi4AUZCG2RI%2B4HWrD4KbBOg3VR9nZY%2BicHqY0Ka8eNZSSyss3%2B5M310BvAlGZAg3eAORDZ62%2F88XW6C4JxB0js63MfbcwLWqVTSHCaYA0s6TFsurCAtYnOMqSRhvFBW7LIfhoqbojhUaivt%2F8NrLlbDBC314HphD%2F%2BMioNuW6xoAKQMS79rHqBAkRxxcp1AC02DQQxivpU&X-Amz-Signature=b171bfeabb6db62f0c6c0d15ac8bd27169f43f6f12afa3c1ed8d5c6402cae7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCM6EO4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCmYBMdVk%2F9zLcW1sMKf6dPvXcmTnlJkyncDD%2BZyAQUZQIgKHJpmuUClv53LWlIlXUIfaEZuiLjFV%2BNZsb%2FVNVkhFsq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFc7y3ts9Bwx3%2BQAyyrcA7BOYSyGCX1UbkB36zjYnpSXSrQClb9zx7Fj5yOmZzKFfPCvWNqOjdm7oUMtzx2g%2BkVQ42acEsfu3znB6VhWc3rHXxNI9g0uISEDsp29ulggaCBQMbKteF%2BEOo2sWalvjT%2FzoKczcHwRpzNlcIoTe%2FafhvgnlArCtfPJkfwbV74EMAZhAHSqvHHEzlvBCSn2C1wF58g5oVRhS9OaIo9qMnIa7tnJGOHKsUXU1JO2eSpMnugURxj7QbWNd5BmTi8S88KOCDcMt5JqMtHk1Gc7xuY0k5aX3wsxcxthpJSUOzpmrS5lvVRMr5w5r%2FCXlih7Yie9ihlUBnkVSQUeCgRlJTzqXi4yQDdGH5WXkGN8lgd%2FS6WTl02AiVVp%2BTsSlYacBJ2X4Q%2Bz2sitbEZuM3Oy%2Bv8msQpg%2BpClB636LvY%2FdT48Ai9ArlgaShuY0LbFTV6xMSxG5n4nPRYgDosdfSBoRUTkRodnLlbJYqfbad46DNbc0noeorMxaDQI6yvPVB0cBmH7pvT2fs98qs0ADvOxj9Yj88W1FDwGNOYuqO3Xn5NgU0TquBn5CGL77NRIRxzv2%2B8CvgOvBLI%2BjThsUzH4%2BS7d22fOPfxUfgsmbCBxrJwXcczzAnWIHNDP2QECMKi%2Frb4GOqUBS0vu5zGYZ29rHYgOz1Pi4AUZCG2RI%2B4HWrD4KbBOg3VR9nZY%2BicHqY0Ka8eNZSSyss3%2B5M310BvAlGZAg3eAORDZ62%2F88XW6C4JxB0js63MfbcwLWqVTSHCaYA0s6TFsurCAtYnOMqSRhvFBW7LIfhoqbojhUaivt%2F8NrLlbDBC314HphD%2F%2BMioNuW6xoAKQMS79rHqBAkRxxcp1AC02DQQxivpU&X-Amz-Signature=fc5ac2c921beaf80da70199bda0554891c36e57f5a768b5ab947bcf5957f9985&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
