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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGDIRBV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuwThiqliJJHTh17lI3QrbfAjluJb6QecEGTJMvS80CAIgEcUj6dm4z5gU7vvptWczJObOuHPT87LXCeuN67BVRBEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJzbMMguoEi7VefcMircA4F%2FSs90sKBtt7Gbd855A4MQjtRnJLbQeF4lZvPNrsWWXAfGZkXMTe3LpJxGNR48lLbg61FeTfTLLZFeAXNAPOoYwjwIeyYrFbs55AXuVq9qS5kuP%2F5XtaguG7LjoywT78PwQRHLsg3ACCF0HWtt4MoJuomco3helu9hSX2%2BcG%2FtK%2B0%2BWeLzf4Qha998gsN42quh0pHOGw%2FJVXWQCOZmsY5ah45NMIW5UQ3xTD5wLrfcgVpZHTZYbRFqIv1SSDdBS2PVtBAHv%2BnrXaXEMhXd%2F8bjWz6e8zF6cYHMloY7vUNKkPHzEpglN4tO9X8HKywtummS84TFuvqsrxADjG5iNbTMLOfIw9khVXd2IeNg8rWmvOipOaHqmTM0MJpLHGMVs8Ifb4Xk7xCb7tUg60zKNFwZxJ7kcP9yjByy%2BRvKcytEFnlwtfKLQRVxTaoWwq6sRf7fIJVDC%2FZouPtecSZcuxjTU2FH%2B%2B5ION93xaEdDzbaQCTg%2BCIkmogx%2FlkKBaKIdCuAMsH5jnFeY6K4DJMLXwzAFOp6pjbF3iS9TJ1Ci%2Bw6%2BpMrUC51mhQFmamoimZaCn6NhrO1gVa68KpUY715mgC9fpEfIUzUod1C%2FIk1jI0uXNgeB2yLllbGXoAbMK3%2ByL8GOqUBchS7t1XduDAFY%2F9nFuqbz0%2B3SWDbwNVEBSkYv7TrAFSHW2Xr3ZuLUtIS6A4PdQF6jFgbd%2F28QA0YpiR6lP6mmp7tu1ouoEkHC%2Fzdb4cm3gI%2F6OFaAxygLVLEGXN%2B%2FQM8hrCOzC%2B0pacaiKvpdRFYmtu0j5cGkY0gx7CqpNNcaPRC%2FviYwwHW9LigIN0H%2FUpwsXJ7lJca1u0ntzVFxEFUz6yOQI92&X-Amz-Signature=9d05ba9d9c90574ddac1ef9d5922e44bb3aa3fa6aabeb26b7b0f21759f2e146b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGDIRBV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuwThiqliJJHTh17lI3QrbfAjluJb6QecEGTJMvS80CAIgEcUj6dm4z5gU7vvptWczJObOuHPT87LXCeuN67BVRBEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJzbMMguoEi7VefcMircA4F%2FSs90sKBtt7Gbd855A4MQjtRnJLbQeF4lZvPNrsWWXAfGZkXMTe3LpJxGNR48lLbg61FeTfTLLZFeAXNAPOoYwjwIeyYrFbs55AXuVq9qS5kuP%2F5XtaguG7LjoywT78PwQRHLsg3ACCF0HWtt4MoJuomco3helu9hSX2%2BcG%2FtK%2B0%2BWeLzf4Qha998gsN42quh0pHOGw%2FJVXWQCOZmsY5ah45NMIW5UQ3xTD5wLrfcgVpZHTZYbRFqIv1SSDdBS2PVtBAHv%2BnrXaXEMhXd%2F8bjWz6e8zF6cYHMloY7vUNKkPHzEpglN4tO9X8HKywtummS84TFuvqsrxADjG5iNbTMLOfIw9khVXd2IeNg8rWmvOipOaHqmTM0MJpLHGMVs8Ifb4Xk7xCb7tUg60zKNFwZxJ7kcP9yjByy%2BRvKcytEFnlwtfKLQRVxTaoWwq6sRf7fIJVDC%2FZouPtecSZcuxjTU2FH%2B%2B5ION93xaEdDzbaQCTg%2BCIkmogx%2FlkKBaKIdCuAMsH5jnFeY6K4DJMLXwzAFOp6pjbF3iS9TJ1Ci%2Bw6%2BpMrUC51mhQFmamoimZaCn6NhrO1gVa68KpUY715mgC9fpEfIUzUod1C%2FIk1jI0uXNgeB2yLllbGXoAbMK3%2ByL8GOqUBchS7t1XduDAFY%2F9nFuqbz0%2B3SWDbwNVEBSkYv7TrAFSHW2Xr3ZuLUtIS6A4PdQF6jFgbd%2F28QA0YpiR6lP6mmp7tu1ouoEkHC%2Fzdb4cm3gI%2F6OFaAxygLVLEGXN%2B%2FQM8hrCOzC%2B0pacaiKvpdRFYmtu0j5cGkY0gx7CqpNNcaPRC%2FviYwwHW9LigIN0H%2FUpwsXJ7lJca1u0ntzVFxEFUz6yOQI92&X-Amz-Signature=f30eeb0e7264fa3000f06485184123a29e3e71beafc37a8608627f0b20ae029c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
