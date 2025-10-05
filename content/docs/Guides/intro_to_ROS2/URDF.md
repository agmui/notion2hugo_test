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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARM5C54%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2BW4wV9murABvOYxPEiIIN5x%2BldvpvuhO4mOWOVzkjQIgCwR7%2BO0c%2BFnSB0xcTEbCIbqpGpptM%2BOPtcLqs8OTLl4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDK2d8QMFvYaQAMUS%2FyrcA8KB%2BQ6Ore6IFnaM6TXrXJ2bhCCYM%2BZs60GhFHuybmieezMLiIGg%2BESzIcdGh9rf1Ew797aWKoRl97tpxW4zKaFj6BF9tX78K5JOYIU6V3Nu5yF7t79nDm%2BRMwz60KWGCLIQcSM1d9zS%2FRRYrIr6xIjvejYZZtEpF6Ptq0nRLvjKGp8CBFUSxVs4tAICHbBaCMAITXn57ZSKTQh4WzRGKcUOecex5W3s3bB1PnUoW5QvFkLEYs75MeSugvkx6GWNFOXijrvvBLYmvhgMHM6reimkfe4qkSODjpIDWD1MmOBDBG08QmUwzQu4TTG80VwWlf9cJKQBD04pJiNDVW2SUG1KFkBZ307RsyorbS1m0GCMZnYdRQXEyq%2FKNgjsFvUDhtfeBiKlbJRkD3Bjsse52MtPbPb3udzz6QK44ejzSGgUatPpV2LH0uGRVQwn9EiUyeFjvoC2h%2BiRyvcnVAHiZgAgmLRgOwvV6ZAgnX1MLBKJ%2F26zkV7nETEsiEBDhurxbhz6k2VYWc4NqKEGEpFEd2j9GZeu8yQNJWS458n20xoyxZrVYbzwgZd0aG3jDkqQaSjWnqY7PU8NY7wNtEGmARXfOsp6r7J93bpuWheS6hYp0owxqPpSoBKqyfGAMO30hscGOqUBxc7X4bP9ovz6gIpSEMA2Q6zaK7eRsKZ%2BIcwFckE6tB0yq2nO31GwHAXMUU6QeMvGEZiB02l5MI6XByhi4Sm7pRGndEyC64HQ5ONuyRLS3H4uhTxzlucv41hUGUm%2B%2B4vUkxSUEqQ8yLKnx5CxfVkOmJCn6oB07i3wfPGz8ao5sJ2AuEdZn5vbcA2GWse%2BEMc4M8092Okx8LjFV%2FovmfqbWhmYJkmN&X-Amz-Signature=16844da4fcfdede5a1b5df88388d46ff4ab482147b6b32eca7bdeeb2e1d92851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARM5C54%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2BW4wV9murABvOYxPEiIIN5x%2BldvpvuhO4mOWOVzkjQIgCwR7%2BO0c%2BFnSB0xcTEbCIbqpGpptM%2BOPtcLqs8OTLl4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDK2d8QMFvYaQAMUS%2FyrcA8KB%2BQ6Ore6IFnaM6TXrXJ2bhCCYM%2BZs60GhFHuybmieezMLiIGg%2BESzIcdGh9rf1Ew797aWKoRl97tpxW4zKaFj6BF9tX78K5JOYIU6V3Nu5yF7t79nDm%2BRMwz60KWGCLIQcSM1d9zS%2FRRYrIr6xIjvejYZZtEpF6Ptq0nRLvjKGp8CBFUSxVs4tAICHbBaCMAITXn57ZSKTQh4WzRGKcUOecex5W3s3bB1PnUoW5QvFkLEYs75MeSugvkx6GWNFOXijrvvBLYmvhgMHM6reimkfe4qkSODjpIDWD1MmOBDBG08QmUwzQu4TTG80VwWlf9cJKQBD04pJiNDVW2SUG1KFkBZ307RsyorbS1m0GCMZnYdRQXEyq%2FKNgjsFvUDhtfeBiKlbJRkD3Bjsse52MtPbPb3udzz6QK44ejzSGgUatPpV2LH0uGRVQwn9EiUyeFjvoC2h%2BiRyvcnVAHiZgAgmLRgOwvV6ZAgnX1MLBKJ%2F26zkV7nETEsiEBDhurxbhz6k2VYWc4NqKEGEpFEd2j9GZeu8yQNJWS458n20xoyxZrVYbzwgZd0aG3jDkqQaSjWnqY7PU8NY7wNtEGmARXfOsp6r7J93bpuWheS6hYp0owxqPpSoBKqyfGAMO30hscGOqUBxc7X4bP9ovz6gIpSEMA2Q6zaK7eRsKZ%2BIcwFckE6tB0yq2nO31GwHAXMUU6QeMvGEZiB02l5MI6XByhi4Sm7pRGndEyC64HQ5ONuyRLS3H4uhTxzlucv41hUGUm%2B%2B4vUkxSUEqQ8yLKnx5CxfVkOmJCn6oB07i3wfPGz8ao5sJ2AuEdZn5vbcA2GWse%2BEMc4M8092Okx8LjFV%2FovmfqbWhmYJkmN&X-Amz-Signature=c2dca96a9cf6832b00432904f532aaad69e0b7e973b29dac44d02c2c67db6dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
