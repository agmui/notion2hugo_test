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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WWUGX5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGsqz4jVWXaQm9fBCl68gpn0F%2BkkebqbmbFr5N5ilOYzAiB4LNszbt%2ByQfzKgmdoae24oQU6LfaK7x1M9eqJNpYiNSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfh5B2yFATobkFOUKtwDrMk3hBbFCRx45JJcvszSYPZCaFJOWhsxFPV3he502dcJBvpxnxAUq8%2BFl6pZqdx8HxvpKEqFBLz%2Fx2t%2BLd0C9JGr7HujXuNO8yj%2FhHtCKU%2B1C92BZzgD1FNUsANsqJqqwr3splIZxpXup3Q%2FhRPQTw0fTyLjjxtt8mXy81q6ZBlXFMA2GxgrAjDtqPQbrcZmGpqktN7RWkmOd0SuMaf6lpGtPjar36gEl3cx9FHO5ghxx1lyTM6wNJcwkYeZkj7OP4KXl3dRAnF8dD7Hv2PcYRiFpX15%2FqHIrE0j6nZ4svYLUpPnr9o9h2EjaoSEJFMKF1HVuTsZ0lE%2FdKJunUs305%2BIYu%2BjVe6ZuF5kpz4PILjPR4l7nLhtsCM2zTyppA1P9ZfTnghE%2BwHeZUDZ%2FdNKKxUCTpY6bKk0YwWy9p9TxSsh3QaKGc3ssAozFb2W4qZrdJFXQmHRAzDV%2Fbijl0ys3mBRd2Sc1LP7j%2BwbS7MRXXzgVMYDMbcATY5PL8nkJOLylC%2B9LdrSU0FqCYE%2BpAG9kMEjtSp4XFxvZ2a49NEuJW1FzwOjTw9wRy1gXHz5g1ER0cFso1lO2BedpBguvvAeQArDkGy1KP8rly5Kd1XIw5BYggEVu47DsVTX9jYw6dmKwQY6pgHuC%2Bc2TEdSdoSLAR4fUCy89n9ZcQoNQ8Tk3slxkZogfRjWSdHcMShFcMcEsgEN5jAbhi02uQ8RG2S7vercAjaqHvrbOtmUITUEjnQLuIx%2BkSKZ5RtQ6DDs6kKRZ%2BIwIaQ9UPUubN%2BKKLcIvG3rh7Nq%2BM099yWEIg1%2BhqlBP6ziMvzpkNTn23W68EGv7cii3vjz2WSk%2Fx3ZCuU10An9HLT44daYiZNR&X-Amz-Signature=7970d38b8e25f9bfde5bd440c134749cba562843808bddfebca99aff95d1b93b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WWUGX5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGsqz4jVWXaQm9fBCl68gpn0F%2BkkebqbmbFr5N5ilOYzAiB4LNszbt%2ByQfzKgmdoae24oQU6LfaK7x1M9eqJNpYiNSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfh5B2yFATobkFOUKtwDrMk3hBbFCRx45JJcvszSYPZCaFJOWhsxFPV3he502dcJBvpxnxAUq8%2BFl6pZqdx8HxvpKEqFBLz%2Fx2t%2BLd0C9JGr7HujXuNO8yj%2FhHtCKU%2B1C92BZzgD1FNUsANsqJqqwr3splIZxpXup3Q%2FhRPQTw0fTyLjjxtt8mXy81q6ZBlXFMA2GxgrAjDtqPQbrcZmGpqktN7RWkmOd0SuMaf6lpGtPjar36gEl3cx9FHO5ghxx1lyTM6wNJcwkYeZkj7OP4KXl3dRAnF8dD7Hv2PcYRiFpX15%2FqHIrE0j6nZ4svYLUpPnr9o9h2EjaoSEJFMKF1HVuTsZ0lE%2FdKJunUs305%2BIYu%2BjVe6ZuF5kpz4PILjPR4l7nLhtsCM2zTyppA1P9ZfTnghE%2BwHeZUDZ%2FdNKKxUCTpY6bKk0YwWy9p9TxSsh3QaKGc3ssAozFb2W4qZrdJFXQmHRAzDV%2Fbijl0ys3mBRd2Sc1LP7j%2BwbS7MRXXzgVMYDMbcATY5PL8nkJOLylC%2B9LdrSU0FqCYE%2BpAG9kMEjtSp4XFxvZ2a49NEuJW1FzwOjTw9wRy1gXHz5g1ER0cFso1lO2BedpBguvvAeQArDkGy1KP8rly5Kd1XIw5BYggEVu47DsVTX9jYw6dmKwQY6pgHuC%2Bc2TEdSdoSLAR4fUCy89n9ZcQoNQ8Tk3slxkZogfRjWSdHcMShFcMcEsgEN5jAbhi02uQ8RG2S7vercAjaqHvrbOtmUITUEjnQLuIx%2BkSKZ5RtQ6DDs6kKRZ%2BIwIaQ9UPUubN%2BKKLcIvG3rh7Nq%2BM099yWEIg1%2BhqlBP6ziMvzpkNTn23W68EGv7cii3vjz2WSk%2Fx3ZCuU10An9HLT44daYiZNR&X-Amz-Signature=238b4cb5e2ffa58b70b9bd9aeefebfa1f57b423bbb51b6baf1d77b9c56b75135&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
