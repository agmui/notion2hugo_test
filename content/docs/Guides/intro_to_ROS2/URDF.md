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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIJW32J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCveslFMaIUOrP7Gw7Os6rtrUb55EweJs2ybiV2ACsS%2BAIgDlzkptrNA5zHCCD5%2BWZrne%2FA21TYQhHAsgloolAwQq0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDgnx%2BdzpYWwEGnzeyrcA6lpJ4Xc4NBOJVpBmkpc%2FC8I%2F%2F1t5Td0Jhuv2Atw7Kl8TWu42cx2wsExYYDwFqnQ%2F10IQeYEI%2FJORPCSji5AE%2FitM2ApLQN5KJAZa6%2B7kE0AB2amM0veEa8zP8hCPdzblWeUHX6WcT05rHbDyTt00Dpy%2Fa%2FjHliIVbL93WKgTpLkELGFWcG2OdIcZn%2BxjrHzqP8xToFq4KRxuOFLrDhBHy8WLh%2B8m0qTTw2Evj86MYI8lDWw1ZAXKqrGK8e3hg4VpE6jiJXwQ3NZJ%2FjArPK%2FuncGbnGWvQvRmheuobJUJONLyEGpbpI906O4mux7apoxF0o1mGzVOm1QBrNG%2FFEY6%2BwmED9v4EZK10FH3YAdq7ED10i2ecjjSTWUME1ccDA0ijIywLDqEUxeqBl3uECBJJGJKgTH%2BgBlSeXlIfibVpw2FKTrFzVx9sivwdHye7sIJsDa4tpIIVwEGNed5K6%2BHd0aiUh1YIrOtVULCu02%2BxwpCr98I%2FMknopHxje2AFUhEbef6sanP8LtTU13Y43y0HSdAstijKNtJynMbwNZW8tiEwFQrG4zRj%2FNA6TBQOPT5tohwHY4PPwjYJ1%2BKb0vg4Xro5YT%2FdkCPg5ezi1fHZ6lcKC9fAhXtprvRsPyMKqzxsQGOqUBuUf%2Bf6nKk96hZf2Zzwtg%2Fo4Kzfx5LkvYLBm91uRQ07z7rp84AxGpXcfKIanZxZjkhiIRH%2FWXQyHcNnOj6yuWdTfA2%2BqXJpZgwMqiuCo8i6Scnb6dxyFIE1P0knIRvXEVLtsyWRrPfK%2FyChGB%2BgRmt6HO2dWk0eQxb1Ix6NOfVETf7PaSZKE6fSMsl1ZzexOXCbqlvXE9FDX%2BUW4RxSQALnv4SzLM&X-Amz-Signature=2a43254cce95e6108fde3446c9dded3818c07cc56d41035187297cfec88dfb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIJW32J%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCveslFMaIUOrP7Gw7Os6rtrUb55EweJs2ybiV2ACsS%2BAIgDlzkptrNA5zHCCD5%2BWZrne%2FA21TYQhHAsgloolAwQq0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDgnx%2BdzpYWwEGnzeyrcA6lpJ4Xc4NBOJVpBmkpc%2FC8I%2F%2F1t5Td0Jhuv2Atw7Kl8TWu42cx2wsExYYDwFqnQ%2F10IQeYEI%2FJORPCSji5AE%2FitM2ApLQN5KJAZa6%2B7kE0AB2amM0veEa8zP8hCPdzblWeUHX6WcT05rHbDyTt00Dpy%2Fa%2FjHliIVbL93WKgTpLkELGFWcG2OdIcZn%2BxjrHzqP8xToFq4KRxuOFLrDhBHy8WLh%2B8m0qTTw2Evj86MYI8lDWw1ZAXKqrGK8e3hg4VpE6jiJXwQ3NZJ%2FjArPK%2FuncGbnGWvQvRmheuobJUJONLyEGpbpI906O4mux7apoxF0o1mGzVOm1QBrNG%2FFEY6%2BwmED9v4EZK10FH3YAdq7ED10i2ecjjSTWUME1ccDA0ijIywLDqEUxeqBl3uECBJJGJKgTH%2BgBlSeXlIfibVpw2FKTrFzVx9sivwdHye7sIJsDa4tpIIVwEGNed5K6%2BHd0aiUh1YIrOtVULCu02%2BxwpCr98I%2FMknopHxje2AFUhEbef6sanP8LtTU13Y43y0HSdAstijKNtJynMbwNZW8tiEwFQrG4zRj%2FNA6TBQOPT5tohwHY4PPwjYJ1%2BKb0vg4Xro5YT%2FdkCPg5ezi1fHZ6lcKC9fAhXtprvRsPyMKqzxsQGOqUBuUf%2Bf6nKk96hZf2Zzwtg%2Fo4Kzfx5LkvYLBm91uRQ07z7rp84AxGpXcfKIanZxZjkhiIRH%2FWXQyHcNnOj6yuWdTfA2%2BqXJpZgwMqiuCo8i6Scnb6dxyFIE1P0knIRvXEVLtsyWRrPfK%2FyChGB%2BgRmt6HO2dWk0eQxb1Ix6NOfVETf7PaSZKE6fSMsl1ZzexOXCbqlvXE9FDX%2BUW4RxSQALnv4SzLM&X-Amz-Signature=206b5f25ca9e20d9123aebce3b42857b8ca51dea6a7039b582b0125d7d40f7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
