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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJZCMLG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4uNPDtDAwVgcm3Xg%2FipUtcQ1xdkeJUpwrImewTZxdOQIgbQ7FRByaO1qlHr0s%2BO3D56rF3CC1TerENjwuXfq7jggqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXGbpTsQvCOM1CfnCrcA6ZFeP3uvnkTVFDZVgakCBNoKh7sk%2FBhprSLpiaIfyartd6izTL5mw9fd2T%2BXv%2FXV5ETo%2BV4lNxfzHllScvd1DGyZCP29jPFWk2o1KGewj9weatjMxJrez54BBlvfOBhcm29UG%2FTiBmfkIgibhVfq1A%2Bg62nDchPWkXjoVzSok%2BCHytF7fJL%2B5VTjxbSgrhsA8HJqTRrwL3JnU8P2TkMqXqqfY7tJGkIccl%2Bdqs2EwgeizX3AD9OZbmheAdnk1e4u7pUzTn5tKuzPtNjaTkMq229RhgcA0QA5ZjrTfvNyD1MZBsHPoLinjgUH5jCHEjPfi8qc%2BrUJLVz4W%2FPGhHNTo0qEQtTWkK4yuwcCwxCMCePv0eN1lCsoXmY%2BhW9zaJBA60AXLrSddyyeJ%2BtvENNsKdmfuQFO4xbt9ltd1QrkXefSvGHQZqbPgm5AEv4V%2BwY1%2BC4oWr81%2Fc4wopoqEJzkiQlw%2BgTs1WkKjRy%2FNkYa6v4Yyd0zoo0RN4awCYSQDKqQ3d0tA0B2HsXaTS%2Fs80tadP8l6Z%2BVgaHWXoSbPa0KujgcyNAo8C8hclZJc9JnDnj69QaZNpS9dnwTM84l6kNsa7Z4WTBPpZ8953GeQBufi65gli1WTXLBwzVuvy0MLqJs8QGOqUB27H7fgLFq2opZalOBDlLHCYrNuBeXgRJy8YzCkYIOAs2P1D%2BGi3ixXmRWJ1%2BYVlH%2BLoir2M6bgdQTc4L%2BLcfCtA1cvg9Z6x%2FYjEq1Ndtst3xmuh%2BYwe%2FdnSe3JzLr8c%2FrZ%2FYEOcyEpnGXQWfhJFkae9eZC7joMlKDRaESi8OdkjWssfdLiOY0ChfmrvUiJY3pIybWW0%2FQxguJoWJL6g1BZnRkyHA&X-Amz-Signature=c1e31b1dc45b23776539491204188af527b6fb5f5945223752669c360cbd7828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJZCMLG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4uNPDtDAwVgcm3Xg%2FipUtcQ1xdkeJUpwrImewTZxdOQIgbQ7FRByaO1qlHr0s%2BO3D56rF3CC1TerENjwuXfq7jggqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXGbpTsQvCOM1CfnCrcA6ZFeP3uvnkTVFDZVgakCBNoKh7sk%2FBhprSLpiaIfyartd6izTL5mw9fd2T%2BXv%2FXV5ETo%2BV4lNxfzHllScvd1DGyZCP29jPFWk2o1KGewj9weatjMxJrez54BBlvfOBhcm29UG%2FTiBmfkIgibhVfq1A%2Bg62nDchPWkXjoVzSok%2BCHytF7fJL%2B5VTjxbSgrhsA8HJqTRrwL3JnU8P2TkMqXqqfY7tJGkIccl%2Bdqs2EwgeizX3AD9OZbmheAdnk1e4u7pUzTn5tKuzPtNjaTkMq229RhgcA0QA5ZjrTfvNyD1MZBsHPoLinjgUH5jCHEjPfi8qc%2BrUJLVz4W%2FPGhHNTo0qEQtTWkK4yuwcCwxCMCePv0eN1lCsoXmY%2BhW9zaJBA60AXLrSddyyeJ%2BtvENNsKdmfuQFO4xbt9ltd1QrkXefSvGHQZqbPgm5AEv4V%2BwY1%2BC4oWr81%2Fc4wopoqEJzkiQlw%2BgTs1WkKjRy%2FNkYa6v4Yyd0zoo0RN4awCYSQDKqQ3d0tA0B2HsXaTS%2Fs80tadP8l6Z%2BVgaHWXoSbPa0KujgcyNAo8C8hclZJc9JnDnj69QaZNpS9dnwTM84l6kNsa7Z4WTBPpZ8953GeQBufi65gli1WTXLBwzVuvy0MLqJs8QGOqUB27H7fgLFq2opZalOBDlLHCYrNuBeXgRJy8YzCkYIOAs2P1D%2BGi3ixXmRWJ1%2BYVlH%2BLoir2M6bgdQTc4L%2BLcfCtA1cvg9Z6x%2FYjEq1Ndtst3xmuh%2BYwe%2FdnSe3JzLr8c%2FrZ%2FYEOcyEpnGXQWfhJFkae9eZC7joMlKDRaESi8OdkjWssfdLiOY0ChfmrvUiJY3pIybWW0%2FQxguJoWJL6g1BZnRkyHA&X-Amz-Signature=f370812ff2d4c261bd4e8b3014c9a19695e792765bfe49ae8bd0d7a312bf8921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
