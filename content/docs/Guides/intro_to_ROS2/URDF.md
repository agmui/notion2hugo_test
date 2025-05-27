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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EVRGC2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICor%2BZWKFSvLxBQffXxOgl6CkVnOXW1XRvbgcZgktR6dAiEAtQCB%2B%2Fx86QKLprevNB7XelOn1cTXNd0MGusE7nRHujAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGm3q%2BrezKh0cXIPXircAzmr%2FdKyzbWkD9OxYvSsiGZEYDecTIDKZBXqfjwV3RGvF2SnaGithq7RnerZxG1XRUD9U9r0JkfzUOyGBDWasvgtUjoF%2B9apE9%2Bj218VJ0JbEDLb%2BRW7ye6GazdI%2BJvilAeffHsdZCPrT7gnkB5XRO3StbiaIA6CPLQaAxu9i4iLCi%2Fgv7W0iZx%2FdRKWSChk09hRDl8%2BkU8kAQLlCrN4v3OIhJkE1lC3IsERnu9wg828lVM63A%2B27LFD%2BrC4CF8H90BO%2FUCqGcRQDxCdKME8xefMvQkXkjOtvM6FIvw0uDIRELQ7sJVElnTC%2Bkv8jySdzVcIoBYe7csZoFfTXInvQc0O6Xx7g8J0Kdt3Bh54jUOezYyo492n%2FhVlb1iBZz25sdbHkGseXf45Eta3nhMN1JuQxsL99I0OJvsi5Ohs7LsDGSg%2Fn6%2Bw8ZKC9AZXfyNV9LVbYTbkQalm6uQfvXvt8Xg6WKxjE1deVLadQkRHaWLamD3BslX%2BCLAG%2BR88nRqFbDpVLIFXPC8NPZzmh4nvgcsk2i6%2BJTP4XG4DzgTtBnb3xh%2FnexxQFgzrxFdjBB17ruZxwjQMVvwL6iQzBcMw5YgJHVhg56fCP9VjXnds7o6wnSGr%2FgtHjXmV32rlMOva1cEGOqUBEtXj%2FkAEQvHxlfVTJk%2BXlrCXZJG2N%2BTVBsLFiXQGr%2BmjrewilDBUlDnVIjO7O50rgGCPqujyjBfAKj4DpP3UROx5JqaBsAJLlTE9pC1TsMUJXqIpGhjHcZdqV%2BQeend2qBMQYswBmWcZrMOCJdphBKp%2BWwhnrzvzNn7J%2Be8Pl8RWeInb2w%2BPonFS5HXmrjcOOHZk0kfXGvvAUi19GxKMnpUnTVKs&X-Amz-Signature=7fbe4d428b3914d9a13c796160538b78fdd55d08c9a3f440d85b92759314adf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EVRGC2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICor%2BZWKFSvLxBQffXxOgl6CkVnOXW1XRvbgcZgktR6dAiEAtQCB%2B%2Fx86QKLprevNB7XelOn1cTXNd0MGusE7nRHujAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGm3q%2BrezKh0cXIPXircAzmr%2FdKyzbWkD9OxYvSsiGZEYDecTIDKZBXqfjwV3RGvF2SnaGithq7RnerZxG1XRUD9U9r0JkfzUOyGBDWasvgtUjoF%2B9apE9%2Bj218VJ0JbEDLb%2BRW7ye6GazdI%2BJvilAeffHsdZCPrT7gnkB5XRO3StbiaIA6CPLQaAxu9i4iLCi%2Fgv7W0iZx%2FdRKWSChk09hRDl8%2BkU8kAQLlCrN4v3OIhJkE1lC3IsERnu9wg828lVM63A%2B27LFD%2BrC4CF8H90BO%2FUCqGcRQDxCdKME8xefMvQkXkjOtvM6FIvw0uDIRELQ7sJVElnTC%2Bkv8jySdzVcIoBYe7csZoFfTXInvQc0O6Xx7g8J0Kdt3Bh54jUOezYyo492n%2FhVlb1iBZz25sdbHkGseXf45Eta3nhMN1JuQxsL99I0OJvsi5Ohs7LsDGSg%2Fn6%2Bw8ZKC9AZXfyNV9LVbYTbkQalm6uQfvXvt8Xg6WKxjE1deVLadQkRHaWLamD3BslX%2BCLAG%2BR88nRqFbDpVLIFXPC8NPZzmh4nvgcsk2i6%2BJTP4XG4DzgTtBnb3xh%2FnexxQFgzrxFdjBB17ruZxwjQMVvwL6iQzBcMw5YgJHVhg56fCP9VjXnds7o6wnSGr%2FgtHjXmV32rlMOva1cEGOqUBEtXj%2FkAEQvHxlfVTJk%2BXlrCXZJG2N%2BTVBsLFiXQGr%2BmjrewilDBUlDnVIjO7O50rgGCPqujyjBfAKj4DpP3UROx5JqaBsAJLlTE9pC1TsMUJXqIpGhjHcZdqV%2BQeend2qBMQYswBmWcZrMOCJdphBKp%2BWwhnrzvzNn7J%2Be8Pl8RWeInb2w%2BPonFS5HXmrjcOOHZk0kfXGvvAUi19GxKMnpUnTVKs&X-Amz-Signature=4c7beb17783bc6a521bb8fd75592132a7180d5822857bf2bd5a52679d6ea01dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
