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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBD2I2SG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHR8Kqn9w26H7SW9IC5voRsp9D0DjGdVEiMWskHcH6BtAiEA93uaA9sQT%2BC3rtXWhJXnsv%2B5K58DHLYbfVVqQaijxrcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBY4OalrtfD3U6AMDyrcA45NnHy8pdkIF7DSljd28Z5BxjpO%2BDM5UGBp0j71vc6P7qddWKzAewoi3QIby%2BBWpI4mknEupK9f6dCItHTKr3T6hUoqv9twt9cCG8ZHQ9e1vukYRw12hW%2FRSRJaekzpOiczkSRIYozUS1r7HKcgmGO7y%2FqAq8cSth4qIUzxZ4KeoGrnhgSnbH7mmrU9fvTGxZC2kRiY9PyZaFfEeRLeb3%2FnpxV3sNJE9eZIoRemS%2FU7ApnwwXa3FIo2BiWVLQUbtlG0oWpvRlECCb3DS%2FwijFu4EeUAyrYpX7VPx11W%2FfIO684FpmUlZhTSpAEWVGhizxIycaxB83%2BAle4UbY7Kx7rKQVZWzI1Oc7JvG%2FarTYG3cCZRSVsGb87ATQP4qTYWMKrQQd%2BXUfJ4DNJlg6JI%2F3Q6KyO94EzOsmKk5F%2F3CnY90oSbXVQPqNKVOtORrEiu8FEQ2W44rP2Z6s%2FJGlCwvvry3FooTYgZcFz8xKoVQnsabmGs0KxYoNGMVrCzuRTGiRwJXK%2Bjsxp%2FvgnVRVF09WjD8feFK6PX2VaWr4CUo32ecdnKGd4BR3tqMtfcmWD0eOhg3KMEvX2JvenhvfcxvSkwFZEO9I6TI3H56uBeMPsEkRMkCuM5G%2FPGGps2MOKr0MsGOqUBOcvOHiy2huKlm%2Fkwb%2Fd91yRcmD3CVpESLwJfk4VR42t0Os91Cm6Gc2uXyhljQ5HF19wzXnrEWReyDFgNVqK4QlEtZ7HyHiKRwzbitfkBVCS02AIL4RAlq0DaRGXDSiukI1fqbb%2BDYIMt3bmGaWdKbZMeB5%2FQVA7x%2FrJmghGOG1KWNXH93cQqZSx%2FKkG38BedJbMvSSVWYFsZGjTRkBXrBczl4nDV&X-Amz-Signature=1d3c87fded1d3816bbc1d1bcf7f19d2e52c0399534b229d5e0c0ce5a0c2ad8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBD2I2SG%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHR8Kqn9w26H7SW9IC5voRsp9D0DjGdVEiMWskHcH6BtAiEA93uaA9sQT%2BC3rtXWhJXnsv%2B5K58DHLYbfVVqQaijxrcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDBY4OalrtfD3U6AMDyrcA45NnHy8pdkIF7DSljd28Z5BxjpO%2BDM5UGBp0j71vc6P7qddWKzAewoi3QIby%2BBWpI4mknEupK9f6dCItHTKr3T6hUoqv9twt9cCG8ZHQ9e1vukYRw12hW%2FRSRJaekzpOiczkSRIYozUS1r7HKcgmGO7y%2FqAq8cSth4qIUzxZ4KeoGrnhgSnbH7mmrU9fvTGxZC2kRiY9PyZaFfEeRLeb3%2FnpxV3sNJE9eZIoRemS%2FU7ApnwwXa3FIo2BiWVLQUbtlG0oWpvRlECCb3DS%2FwijFu4EeUAyrYpX7VPx11W%2FfIO684FpmUlZhTSpAEWVGhizxIycaxB83%2BAle4UbY7Kx7rKQVZWzI1Oc7JvG%2FarTYG3cCZRSVsGb87ATQP4qTYWMKrQQd%2BXUfJ4DNJlg6JI%2F3Q6KyO94EzOsmKk5F%2F3CnY90oSbXVQPqNKVOtORrEiu8FEQ2W44rP2Z6s%2FJGlCwvvry3FooTYgZcFz8xKoVQnsabmGs0KxYoNGMVrCzuRTGiRwJXK%2Bjsxp%2FvgnVRVF09WjD8feFK6PX2VaWr4CUo32ecdnKGd4BR3tqMtfcmWD0eOhg3KMEvX2JvenhvfcxvSkwFZEO9I6TI3H56uBeMPsEkRMkCuM5G%2FPGGps2MOKr0MsGOqUBOcvOHiy2huKlm%2Fkwb%2Fd91yRcmD3CVpESLwJfk4VR42t0Os91Cm6Gc2uXyhljQ5HF19wzXnrEWReyDFgNVqK4QlEtZ7HyHiKRwzbitfkBVCS02AIL4RAlq0DaRGXDSiukI1fqbb%2BDYIMt3bmGaWdKbZMeB5%2FQVA7x%2FrJmghGOG1KWNXH93cQqZSx%2FKkG38BedJbMvSSVWYFsZGjTRkBXrBczl4nDV&X-Amz-Signature=45754e924329358cdebc46c0d8d345f87f48f312a19459fbb4d95ec2f12bd3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
