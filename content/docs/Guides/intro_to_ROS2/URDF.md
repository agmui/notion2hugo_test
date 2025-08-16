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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDB2O2U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCXigYd%2FUOOwXDdwmzAX%2FJ9Oq7EBRS1NopHvP4GihKJ8AIhAKHgf8GT7cPExDX3e11t40azMtLe%2BgLRU48c%2FAoS%2Fr%2BLKv8DCGcQABoMNjM3NDIzMTgzODA1Igwbvzjf7MupbhBNHbIq3ANbACzHafk%2BzKg6n4%2BGwAxGyz40o0imwFKI7WyoGQ%2BLhkPXbxfn1bEiyz3qRMLcS0YSJhLxUgUjUW5LrtlO%2BRpgjbg9T3xh8ivNViXrvJKhSmUrLf9swHVoCskVZL45epDRzzowfXuG2GjjOL8UyMcIInrovKVeerAQZ2TveyvBZu%2FqFd8XxKCP5kgDjka7VpHeggn59Pqfc75eBZ7T%2FxOmcwo5%2Fba2RI5VI94%2BeTgDEJp7wKuPWIScAVX7NETAZXOu0JuM7m%2BQiu8qnfLjRVvFqBk3jqaASr%2FLzkFPTXWTCdMQyb30FccVaJUoDtc1Fm90%2FRG3xVuYg8M2gNPBHcdXPv3CuWvOGzHkzbGqlD6htfJvzBKYaQcGwPM9hHJsA0Qj4Ex1wz7fjygjStODx6Ti%2BuZXsrMDVU%2FSGZuj1B8To%2F5EuBXQ%2BEsmaLQLzrKjYelQZfg6Xel%2BLGFCrmu%2FfAS%2BhtSXU996tUBad8ZTvUR%2BvcoEEiPwIkn1Evwm1YqkJG7bbTSOZxKGjY9gPgVkAWC%2FjTNtPSCSb90QYottoBJ2Qpd3zTxiyy07xCCpCXt7%2FXK5CL3aFt6fcJTCJSpyGPAFF0HTuNxZdaUPajGf9icGr7OSH%2FsG%2BoEcP%2BcaPzCa2P7EBjqkATvA0OR1Lqoh6up7h1jBJ8n5sNYmVzDo1zOtbmf%2FQOpGS7VfbyxisYy1CqVSIbbJfR7ZUK3fp8hZDhHXTGuTwHRP3T%2Bbw70ep9%2FfHUj1OVl7p6Y7KV9KL02Rl9lYLJTnhm052NTa1qLV5mNfqWWr8Zicl%2FFsuiyKLAEEaawNxrjx27s3XRrL96Gkw8roMrdTLrc%2BOzPZmgIe2CytIWp90pEqkArF&X-Amz-Signature=763e50e479fc9b7e25b5892b2be3e89bbec0421ecde66be3d63ff30edebe2c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PDB2O2U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCXigYd%2FUOOwXDdwmzAX%2FJ9Oq7EBRS1NopHvP4GihKJ8AIhAKHgf8GT7cPExDX3e11t40azMtLe%2BgLRU48c%2FAoS%2Fr%2BLKv8DCGcQABoMNjM3NDIzMTgzODA1Igwbvzjf7MupbhBNHbIq3ANbACzHafk%2BzKg6n4%2BGwAxGyz40o0imwFKI7WyoGQ%2BLhkPXbxfn1bEiyz3qRMLcS0YSJhLxUgUjUW5LrtlO%2BRpgjbg9T3xh8ivNViXrvJKhSmUrLf9swHVoCskVZL45epDRzzowfXuG2GjjOL8UyMcIInrovKVeerAQZ2TveyvBZu%2FqFd8XxKCP5kgDjka7VpHeggn59Pqfc75eBZ7T%2FxOmcwo5%2Fba2RI5VI94%2BeTgDEJp7wKuPWIScAVX7NETAZXOu0JuM7m%2BQiu8qnfLjRVvFqBk3jqaASr%2FLzkFPTXWTCdMQyb30FccVaJUoDtc1Fm90%2FRG3xVuYg8M2gNPBHcdXPv3CuWvOGzHkzbGqlD6htfJvzBKYaQcGwPM9hHJsA0Qj4Ex1wz7fjygjStODx6Ti%2BuZXsrMDVU%2FSGZuj1B8To%2F5EuBXQ%2BEsmaLQLzrKjYelQZfg6Xel%2BLGFCrmu%2FfAS%2BhtSXU996tUBad8ZTvUR%2BvcoEEiPwIkn1Evwm1YqkJG7bbTSOZxKGjY9gPgVkAWC%2FjTNtPSCSb90QYottoBJ2Qpd3zTxiyy07xCCpCXt7%2FXK5CL3aFt6fcJTCJSpyGPAFF0HTuNxZdaUPajGf9icGr7OSH%2FsG%2BoEcP%2BcaPzCa2P7EBjqkATvA0OR1Lqoh6up7h1jBJ8n5sNYmVzDo1zOtbmf%2FQOpGS7VfbyxisYy1CqVSIbbJfR7ZUK3fp8hZDhHXTGuTwHRP3T%2Bbw70ep9%2FfHUj1OVl7p6Y7KV9KL02Rl9lYLJTnhm052NTa1qLV5mNfqWWr8Zicl%2FFsuiyKLAEEaawNxrjx27s3XRrL96Gkw8roMrdTLrc%2BOzPZmgIe2CytIWp90pEqkArF&X-Amz-Signature=372a959e85af4d21f8b270841e423a6e19d82154643e374ab3bde76adf17807f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
