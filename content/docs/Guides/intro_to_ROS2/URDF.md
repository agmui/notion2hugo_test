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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZFMA5T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC6Xk7Q0rg%2BSEonGYTz%2B%2B4JYdPD8tpzEc8nr4VgOR1G3wIhALSWx0vnRPaIY1KAKQJged8qUOhNgC9rVNec68vFiYn1Kv8DCFwQABoMNjM3NDIzMTgzODA1IgxeK%2F%2Bl2cDmATfYwkYq3AOY3Qodv1uksud1LZN9oZ92kvFykeX9Q%2BYdIe8WR5uIq%2FuYEgXLfufnXEOVxqju5WSIAWkGcahh2i%2Bk3aZ7ec6%2FOhrSSkTotC52opeudsKIZu47EKibHSHNJ%2BP2xySPykP6WG5GeaQEGvegtTK58NM1OOM6cIbWJuA7K%2BHv3eTCTLfKQTQCjOpATCCM02kZK9qoVwXEMUTp93TeOfCBOTXSA1Vf6Q4Hi8vO2b1scRhJZA4TkV6yI6ocb4YAUtL3nlJdD%2FifahdQVKCn0n9tyzkLkQrfWXnQnnugihoQQtiLJ8V23ZZP8hUYR5KnloZE3Mc%2FAJLikfmSNA2eAcEYWfW27PlJILJX3UU%2BAtXAqT7yc7hQBBYSQzOv1XeevFk3cvtE5ZygnfsNPF%2B9xy52mwP7boFA1GFuXxbzvvty2bziLakkKWKwtlIS%2FM4h%2B1owuMMGFEa1kCrOitgxpKiZkdKxkUmfA0Iv7Z%2BqlrGXT5cL7rOCPtTztyi%2Fzhvd%2BWH3xGROHjJZoUjADok7rt%2BoYNLtURMgn%2FT8gkyLQ8OugMSpIpXlUgc8FVs5NSegvn4Yl2o434tikGG%2F9zw6tl8dM3kRrvYrXAnoS5TZAXrEDBcJwbk2v7j9AQ0jaTAZYjC0luW%2BBjqkATVTYhRsBsMcGFANyPoWlEbn7LNK%2BNHalj0UwIXyeUenoqqXOwYFSfSdZyOgCzFOMpZampNKpILgZgcIugyDi865bAGnQLFoM%2F9STKzKcaGFF0GyImkIITpsBsqHoW1CSI2uZDkrhMAouZIgRFF%2Bzbf9Avw88MvrvJTmY85O%2B18TS2jTw%2FWK3UfV1O%2FxD3Sk4Lb776nEO9zI0%2FsubMj%2BuZMfOYXx&X-Amz-Signature=842fef352b0f5116f96d56f7692a61ea375e2efafd633e86051a22739b155ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZFMA5T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC6Xk7Q0rg%2BSEonGYTz%2B%2B4JYdPD8tpzEc8nr4VgOR1G3wIhALSWx0vnRPaIY1KAKQJged8qUOhNgC9rVNec68vFiYn1Kv8DCFwQABoMNjM3NDIzMTgzODA1IgxeK%2F%2Bl2cDmATfYwkYq3AOY3Qodv1uksud1LZN9oZ92kvFykeX9Q%2BYdIe8WR5uIq%2FuYEgXLfufnXEOVxqju5WSIAWkGcahh2i%2Bk3aZ7ec6%2FOhrSSkTotC52opeudsKIZu47EKibHSHNJ%2BP2xySPykP6WG5GeaQEGvegtTK58NM1OOM6cIbWJuA7K%2BHv3eTCTLfKQTQCjOpATCCM02kZK9qoVwXEMUTp93TeOfCBOTXSA1Vf6Q4Hi8vO2b1scRhJZA4TkV6yI6ocb4YAUtL3nlJdD%2FifahdQVKCn0n9tyzkLkQrfWXnQnnugihoQQtiLJ8V23ZZP8hUYR5KnloZE3Mc%2FAJLikfmSNA2eAcEYWfW27PlJILJX3UU%2BAtXAqT7yc7hQBBYSQzOv1XeevFk3cvtE5ZygnfsNPF%2B9xy52mwP7boFA1GFuXxbzvvty2bziLakkKWKwtlIS%2FM4h%2B1owuMMGFEa1kCrOitgxpKiZkdKxkUmfA0Iv7Z%2BqlrGXT5cL7rOCPtTztyi%2Fzhvd%2BWH3xGROHjJZoUjADok7rt%2BoYNLtURMgn%2FT8gkyLQ8OugMSpIpXlUgc8FVs5NSegvn4Yl2o434tikGG%2F9zw6tl8dM3kRrvYrXAnoS5TZAXrEDBcJwbk2v7j9AQ0jaTAZYjC0luW%2BBjqkATVTYhRsBsMcGFANyPoWlEbn7LNK%2BNHalj0UwIXyeUenoqqXOwYFSfSdZyOgCzFOMpZampNKpILgZgcIugyDi865bAGnQLFoM%2F9STKzKcaGFF0GyImkIITpsBsqHoW1CSI2uZDkrhMAouZIgRFF%2Bzbf9Avw88MvrvJTmY85O%2B18TS2jTw%2FWK3UfV1O%2FxD3Sk4Lb776nEO9zI0%2FsubMj%2BuZMfOYXx&X-Amz-Signature=2e6df60a166480c705a821933bdb14bdb1abe62ff2212a0bfebb1eb5e691f043&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
