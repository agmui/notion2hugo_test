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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQMWBO6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxqq76bA9FZVPeZonC90NlKmTwE2T5mumZ2zYLD0j3qQIgdfyNx7SLRmmoPJhkyf2j9MfyALA5h5XlDqf6AppuvpAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNaO4jSGsY4Xz0TcGircA2fsOTxgK%2BCKQSGcDWPLiQW%2FBQhKmtHTf%2BZ1fHXo5zwoKPDsDfufDSRwwDvNfRmhGxSw97%2BJtgPzFC0Rhfjk0OaVGqxZKcSUzb9rAkABRz2GcElnFQlja0oWcBdjRmrPn5FSXMCbDgMiTubCb6w0cSF9sZ9ftBtzvScVTcI3KkPK%2BcVNHlKgopEun2eQCtH4Ds1J1%2F80X05T0iIGiZ5ojCi0L6HYKmdWdjpIgRijIICrkxm7W9oQ9miOnsZOMIYoZouB05z6rK3jRlOxCCc2pxsxebklSOXgngJ8S11THZ7CLG1eLTf8MchtHHfg9Q7Vtbb86e2%2FzaaAI%2FOmBlRrUvvJyMpoqM%2B%2FK2oy0e%2BtpCt1NOmeC6QNdSFGCDao%2FjsarAR0MsV3sVU0FyYig8tmTbXOuqpKF%2BSEUrCAWYOp%2FVI1xRA2QwTyPkAageOX13DOICbUECBrWZwOT9ky2ZwaEJewxYtxlLhDyRpvHqSGysEk1hcDKMakA4G1b9A2a4SQYJFEbre%2FX4fA%2FTrZsQQyBtjQV5Mi3ht4kYCCWzDvk4Vm3Usp%2BrvXLJh%2BLXzolFu1WP%2BRzkjuwZnzgWD%2Bw%2ByuFxT1jV4e%2B7X7RURDq5QJTgHLJus0UywwPcJ4J6AVMIzLgsoGOqUBQCdGwo4%2F89zoiubSlSl5v%2BCfI7CrIg8dFucEPKbsH4%2FHfFgKXFgTwkCKy9%2F064S5TGeEki%2FYf905gvojy45Uew6r%2FJtRtMv%2FRIA1idGwQccENyo8nOT%2BHM4jnSEJ1fjFJ8l1pAn5eJ17J0Jl6cmiVIiXkOAk2n1%2FxsOZonK7cJIzbPLrLsCuecH%2BFlJpYVFSGmREafc8YcjsYgT4E9LhlqNuaGHn&X-Amz-Signature=3c6028446fc62becd8bad0f9925c302dde1590678560a3f2e22e67785fd35e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GQMWBO6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxqq76bA9FZVPeZonC90NlKmTwE2T5mumZ2zYLD0j3qQIgdfyNx7SLRmmoPJhkyf2j9MfyALA5h5XlDqf6AppuvpAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNaO4jSGsY4Xz0TcGircA2fsOTxgK%2BCKQSGcDWPLiQW%2FBQhKmtHTf%2BZ1fHXo5zwoKPDsDfufDSRwwDvNfRmhGxSw97%2BJtgPzFC0Rhfjk0OaVGqxZKcSUzb9rAkABRz2GcElnFQlja0oWcBdjRmrPn5FSXMCbDgMiTubCb6w0cSF9sZ9ftBtzvScVTcI3KkPK%2BcVNHlKgopEun2eQCtH4Ds1J1%2F80X05T0iIGiZ5ojCi0L6HYKmdWdjpIgRijIICrkxm7W9oQ9miOnsZOMIYoZouB05z6rK3jRlOxCCc2pxsxebklSOXgngJ8S11THZ7CLG1eLTf8MchtHHfg9Q7Vtbb86e2%2FzaaAI%2FOmBlRrUvvJyMpoqM%2B%2FK2oy0e%2BtpCt1NOmeC6QNdSFGCDao%2FjsarAR0MsV3sVU0FyYig8tmTbXOuqpKF%2BSEUrCAWYOp%2FVI1xRA2QwTyPkAageOX13DOICbUECBrWZwOT9ky2ZwaEJewxYtxlLhDyRpvHqSGysEk1hcDKMakA4G1b9A2a4SQYJFEbre%2FX4fA%2FTrZsQQyBtjQV5Mi3ht4kYCCWzDvk4Vm3Usp%2BrvXLJh%2BLXzolFu1WP%2BRzkjuwZnzgWD%2Bw%2ByuFxT1jV4e%2B7X7RURDq5QJTgHLJus0UywwPcJ4J6AVMIzLgsoGOqUBQCdGwo4%2F89zoiubSlSl5v%2BCfI7CrIg8dFucEPKbsH4%2FHfFgKXFgTwkCKy9%2F064S5TGeEki%2FYf905gvojy45Uew6r%2FJtRtMv%2FRIA1idGwQccENyo8nOT%2BHM4jnSEJ1fjFJ8l1pAn5eJ17J0Jl6cmiVIiXkOAk2n1%2FxsOZonK7cJIzbPLrLsCuecH%2BFlJpYVFSGmREafc8YcjsYgT4E9LhlqNuaGHn&X-Amz-Signature=b8ba1bbbfa76d9b118658757d2d61e0a670fc563a10f80bd68e616741cfacb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
