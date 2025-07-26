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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDEGS7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBz1Rl3GZjpyUGboxUtC08Wi0mrOY1aXWChEvgkm1Fk5AiEA9xK%2Fv%2FilLJzVpIMpH0u7HXhOA2j2gNTG9QsAbmPA8mYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD8bWzhjrjBEDu1JTCrcA89eOHcDbESDsJo8CaN4VGL8T2ed%2B0FuZFqAze6qCJ0cSBdtU9vGA%2FKpWIOFUDPrUik6vE8SpmOexJyLGWDHLLfSKYXLn1xbCDKcdviV96cMAHZ1CmvtNVxtuVSR505kklqdfJ58jMdui049Gls06GUklAnyppziFbOI%2FD8a0rOwoNCtUzDNrD1pGUfgXFxKLCAvIABzddAnOG7DBh3f3wHKREiezElmdmcmTFNQM7%2Fpk15cuwKmAuvUETbITlkELwpicZ1ljqql6dXB6gEBQtAPCENmu9Bb%2FfEl9hQdIW6SBPAfZOkOtLWrTDPfhl%2BY2kMZguHtcGgvYx8JKBf69NolGY5D8rqz1dYTJFvClcyPYs%2B%2BOVrPNCI1t3Ttwb5FPlICcbQlwDlFBVJoZ6H8Wzk2c3nNPwyvSAbRkUelqHWAirdDgNrbA6StmowaghLlKI0fyPzLQwboBZDDg%2B%2FZMXnZjlakzCZ64TwqCqgbBNJhwtivENBGbF7pD73enBDq3MTmGIyqev7eD%2B6Fysg3x9d80ABu8AyI4A2xZT7mFoZ%2Fc5meNdoYP3ngQBJ96io3a3ZS23vWegrs5Ij8Z%2BaRPfnqEjSmLSUmSOE46I84efcfHPuQzBtjyCcsexWkMOH0kMQGOqUB6JwrEw29S%2FYwL8bdrRrIemhdKq%2B%2F2pq5CATZhhKjecXXa4tG2UkKZjoWAKzd%2FgziyssOWvMGXpxTh4Sr1D6L%2BTdxkvmwDhDGjcJDIduKHsx9mHUOGfxInCl1Bemp75K2rBhZI2%2BpITe4pruBzlrUGmAaCLck7ibGekzISuyArw3lhe2nm7Dxzeo4x%2FpTK7kfGeAyHmkKZFb69mBYe38R6AeOMtuc&X-Amz-Signature=b85b9007bd4ebac0849f31b338c100fe508a2b460f1fff991eda2b0834817f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDEGS7X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBz1Rl3GZjpyUGboxUtC08Wi0mrOY1aXWChEvgkm1Fk5AiEA9xK%2Fv%2FilLJzVpIMpH0u7HXhOA2j2gNTG9QsAbmPA8mYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDD8bWzhjrjBEDu1JTCrcA89eOHcDbESDsJo8CaN4VGL8T2ed%2B0FuZFqAze6qCJ0cSBdtU9vGA%2FKpWIOFUDPrUik6vE8SpmOexJyLGWDHLLfSKYXLn1xbCDKcdviV96cMAHZ1CmvtNVxtuVSR505kklqdfJ58jMdui049Gls06GUklAnyppziFbOI%2FD8a0rOwoNCtUzDNrD1pGUfgXFxKLCAvIABzddAnOG7DBh3f3wHKREiezElmdmcmTFNQM7%2Fpk15cuwKmAuvUETbITlkELwpicZ1ljqql6dXB6gEBQtAPCENmu9Bb%2FfEl9hQdIW6SBPAfZOkOtLWrTDPfhl%2BY2kMZguHtcGgvYx8JKBf69NolGY5D8rqz1dYTJFvClcyPYs%2B%2BOVrPNCI1t3Ttwb5FPlICcbQlwDlFBVJoZ6H8Wzk2c3nNPwyvSAbRkUelqHWAirdDgNrbA6StmowaghLlKI0fyPzLQwboBZDDg%2B%2FZMXnZjlakzCZ64TwqCqgbBNJhwtivENBGbF7pD73enBDq3MTmGIyqev7eD%2B6Fysg3x9d80ABu8AyI4A2xZT7mFoZ%2Fc5meNdoYP3ngQBJ96io3a3ZS23vWegrs5Ij8Z%2BaRPfnqEjSmLSUmSOE46I84efcfHPuQzBtjyCcsexWkMOH0kMQGOqUB6JwrEw29S%2FYwL8bdrRrIemhdKq%2B%2F2pq5CATZhhKjecXXa4tG2UkKZjoWAKzd%2FgziyssOWvMGXpxTh4Sr1D6L%2BTdxkvmwDhDGjcJDIduKHsx9mHUOGfxInCl1Bemp75K2rBhZI2%2BpITe4pruBzlrUGmAaCLck7ibGekzISuyArw3lhe2nm7Dxzeo4x%2FpTK7kfGeAyHmkKZFb69mBYe38R6AeOMtuc&X-Amz-Signature=bdfd3136a0d5f4a8c979be46e6fac2a1e125f6ad940aaba970fed6541960f193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
