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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5DNI6E%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFP3jnRZnpWqk1kY9R8sot3Ocv6V4Fd8IyCwZg2mFbN3AiEAl5ujZdvQgSSTAQKf9k5CkMi1bFCXV4LK6QRQDELDTGAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLDIQLXg4rvDR9O3RyrcA5x2IQRlkfhEBpksRcp6hCTsVKhS38Ub9gNQMCNNMkIjHIPHs%2Bc6J51fCwkUulD%2FEyKoc%2BM%2BoJxX%2BxdIF%2B3MHIG%2B2q%2FLogd58r0hgyVT9fEDokoLNwfyoNfNBohToJHlcyRtDf1DzXcVpZohbVpzl9%2BOWtwLHUWWa8pvPfqlN%2BtAsMZZ2snhX9xekoZ3ZYxAqeHxMuutnMjYQq%2FH9c7eS5qPqNjkCSrV8650217V7BYykinzQrEhWVf0jL9a%2BNIs0J6lRj4G9GcsL9vvM6NG3mIcxhgm2oK%2BROi5rxEJj%2F%2BqTxK1689WtErjRJxO0XdJl4W1%2FuWpkCbSHfskmjRNeMLIoLNrINY%2BQIsc2Z2zC3Jvh2pYbx%2Bo71XG%2BoaCPM8YwiVNpYHNGz32pXy1SxNoT7YsquJ6fIca2aKphZUf%2Fvj45%2BIg%2BlKJQmCtCDxg5zBA44f0WKfRtOLtmv4Z4IhKwq9ANivqq8KmU8dP7YYzjeSBQKutoXEQButI0N%2FTRKMvJd1BSfMzooile%2B0UoMPVm%2BD01BJZrVqpxZIqVzUk300BqcEEuWHlYGJ0i9%2FmvaUZ7iZg7boAP4EN8SuH48TiEJLYl8ZSiE4jIzzfAuxj8eP203X0iWDsduo1DSELMIWiib0GOqUBJdECTGNkm2KhmUcxqjEcjGRDSntE79nFXoo%2FyiEzamA5M7WUfwUwkZJQuMw1WBvda84LbBgsOsguM%2BBR8i33idk6YA6KjVFLHjq%2F9G%2FB8l5huSo5xIDCFvWkTsOFiQy%2BU3Hz5GgSyRi0HowysVUMQW2VrbL43ptA%2FGG6rmIYcaHl6ijqEYYD7uy8VeINtM9e%2FZP39ekUYvwkTqjus7tYMFoG8k30&X-Amz-Signature=393b368db30d0167cbc02a8961004fa94fe957a8745601b476e80bef60be1254&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5DNI6E%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFP3jnRZnpWqk1kY9R8sot3Ocv6V4Fd8IyCwZg2mFbN3AiEAl5ujZdvQgSSTAQKf9k5CkMi1bFCXV4LK6QRQDELDTGAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLDIQLXg4rvDR9O3RyrcA5x2IQRlkfhEBpksRcp6hCTsVKhS38Ub9gNQMCNNMkIjHIPHs%2Bc6J51fCwkUulD%2FEyKoc%2BM%2BoJxX%2BxdIF%2B3MHIG%2B2q%2FLogd58r0hgyVT9fEDokoLNwfyoNfNBohToJHlcyRtDf1DzXcVpZohbVpzl9%2BOWtwLHUWWa8pvPfqlN%2BtAsMZZ2snhX9xekoZ3ZYxAqeHxMuutnMjYQq%2FH9c7eS5qPqNjkCSrV8650217V7BYykinzQrEhWVf0jL9a%2BNIs0J6lRj4G9GcsL9vvM6NG3mIcxhgm2oK%2BROi5rxEJj%2F%2BqTxK1689WtErjRJxO0XdJl4W1%2FuWpkCbSHfskmjRNeMLIoLNrINY%2BQIsc2Z2zC3Jvh2pYbx%2Bo71XG%2BoaCPM8YwiVNpYHNGz32pXy1SxNoT7YsquJ6fIca2aKphZUf%2Fvj45%2BIg%2BlKJQmCtCDxg5zBA44f0WKfRtOLtmv4Z4IhKwq9ANivqq8KmU8dP7YYzjeSBQKutoXEQButI0N%2FTRKMvJd1BSfMzooile%2B0UoMPVm%2BD01BJZrVqpxZIqVzUk300BqcEEuWHlYGJ0i9%2FmvaUZ7iZg7boAP4EN8SuH48TiEJLYl8ZSiE4jIzzfAuxj8eP203X0iWDsduo1DSELMIWiib0GOqUBJdECTGNkm2KhmUcxqjEcjGRDSntE79nFXoo%2FyiEzamA5M7WUfwUwkZJQuMw1WBvda84LbBgsOsguM%2BBR8i33idk6YA6KjVFLHjq%2F9G%2FB8l5huSo5xIDCFvWkTsOFiQy%2BU3Hz5GgSyRi0HowysVUMQW2VrbL43ptA%2FGG6rmIYcaHl6ijqEYYD7uy8VeINtM9e%2FZP39ekUYvwkTqjus7tYMFoG8k30&X-Amz-Signature=0399dbd6c18aec0da085667113ce9229da75e7b42c17705293294e73026a916f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
