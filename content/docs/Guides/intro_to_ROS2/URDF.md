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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD4FTCV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz2bgHJ%2Fsas56Vk%2BkvWjqtQC0On%2Bq8eELMWfEGgD1XsgIhAOkbcZMeHDgo%2BggRVGuy7WfRbDKcCbVTdkdIXwDGX15vKv8DCGMQABoMNjM3NDIzMTgzODA1IgyaS3i8PPfT3o3hLKgq3ANM2C9JQpkCDvF5%2FHVNYZqshFWhNKTuoTjbkp%2BFAiYcNi1EXWgdqPXOOU%2FaOV6F82QYRSrBF%2BfJYwbY9%2F8YO%2B4UHMH7ptoQztUz4HqTSbLlXNjIeQ5R4auaJbRS6CDgHRvrmhxUT9tkUneKt9MmRtVRjDzaXcuYtp5suEhSfe6yU7BVOalqeR%2BYdCfS0TrlMq%2Fboii1adZ8gbxwmWjPu9iIN3WXgDd0J5pvVR5ZWNb0h0GlUHmtLb5Vu5tDks9XyFgdGRIRwPrOO%2F6kiTpppn4jnqJEWs9m4CPvoJ5UqxFN44MrMW6ZlAunkzCaxEncTIX7DKAdv4K7M%2FcKj%2BhTHZZDdjcpLU9%2B4dkLcaZ6yAffJ6slRPoCPCtnp2B3b07Fhnm4J9Y6OhVrniDvpLqjA3yrMla5q4i8Ay%2B7fETm%2FPrzFDYXONkP6LiDnTWiXNctmCCHlgmJ4vnuqDg3Rb%2Bh6AKgQ1hPcwtL%2BhfhP2bMNz8JDw41TOMgJOLAsbUzr8kluhe9lU6x3t4Iadv0EYkojP%2F6pg9HyhdbWpG2CZXyIeLYLQFnnuGR681QuufCxxnZAelXG9FiiPC0jFi08DqPmmiDx3wcKyCoG1EBhc4i%2BBzetvVg9I0SAdVHiWqhNzDcro7NBjqkAc09QHqghDlG45oNqZR9AhKkA4SiNvUes4siJhvPanl4C6dOumPkyK9kWJyQGnpiJUd51caOPxGwPi11Y0bxUPXi0u7CtlEzHTu%2FgZhtMRlwjGm6OZfpiu6q%2FRgU%2BIUI8iy6WmQOEmgvXUzV7x649bDy%2Fs43%2BEgAOq6huwEcUGlLgYK1nj%2Fw1Ub9JZJgTIseO9l%2FQ6Aah4Q5S2L3rL96rtvrzGlX&X-Amz-Signature=57dc97c91fcb72adefb75c6708f4bd4c337ec5fdc0b524e5d6fd328cab10425e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD4FTCV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz2bgHJ%2Fsas56Vk%2BkvWjqtQC0On%2Bq8eELMWfEGgD1XsgIhAOkbcZMeHDgo%2BggRVGuy7WfRbDKcCbVTdkdIXwDGX15vKv8DCGMQABoMNjM3NDIzMTgzODA1IgyaS3i8PPfT3o3hLKgq3ANM2C9JQpkCDvF5%2FHVNYZqshFWhNKTuoTjbkp%2BFAiYcNi1EXWgdqPXOOU%2FaOV6F82QYRSrBF%2BfJYwbY9%2F8YO%2B4UHMH7ptoQztUz4HqTSbLlXNjIeQ5R4auaJbRS6CDgHRvrmhxUT9tkUneKt9MmRtVRjDzaXcuYtp5suEhSfe6yU7BVOalqeR%2BYdCfS0TrlMq%2Fboii1adZ8gbxwmWjPu9iIN3WXgDd0J5pvVR5ZWNb0h0GlUHmtLb5Vu5tDks9XyFgdGRIRwPrOO%2F6kiTpppn4jnqJEWs9m4CPvoJ5UqxFN44MrMW6ZlAunkzCaxEncTIX7DKAdv4K7M%2FcKj%2BhTHZZDdjcpLU9%2B4dkLcaZ6yAffJ6slRPoCPCtnp2B3b07Fhnm4J9Y6OhVrniDvpLqjA3yrMla5q4i8Ay%2B7fETm%2FPrzFDYXONkP6LiDnTWiXNctmCCHlgmJ4vnuqDg3Rb%2Bh6AKgQ1hPcwtL%2BhfhP2bMNz8JDw41TOMgJOLAsbUzr8kluhe9lU6x3t4Iadv0EYkojP%2F6pg9HyhdbWpG2CZXyIeLYLQFnnuGR681QuufCxxnZAelXG9FiiPC0jFi08DqPmmiDx3wcKyCoG1EBhc4i%2BBzetvVg9I0SAdVHiWqhNzDcro7NBjqkAc09QHqghDlG45oNqZR9AhKkA4SiNvUes4siJhvPanl4C6dOumPkyK9kWJyQGnpiJUd51caOPxGwPi11Y0bxUPXi0u7CtlEzHTu%2FgZhtMRlwjGm6OZfpiu6q%2FRgU%2BIUI8iy6WmQOEmgvXUzV7x649bDy%2Fs43%2BEgAOq6huwEcUGlLgYK1nj%2Fw1Ub9JZJgTIseO9l%2FQ6Aah4Q5S2L3rL96rtvrzGlX&X-Amz-Signature=4d885cbcfc9989f87fcbc773b288abd0ba1eb3879b98b975d581f483129aa781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
