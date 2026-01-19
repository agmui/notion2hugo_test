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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRDEURZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBESyudk%2FG6EQK%2BXB%2FMLY8R3ZcAi8yT9TIBHI8asDWgIgFQBKRbmzwpaWLdfTxXWItFnwI7rLsrCwTwVjJZG1SOgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSGul%2B2JfK%2BZBOiyrcA9ji4ZdP411Q6PJwNQgsnaTdF4x9dbGW%2Bzgj35lnFwY%2BC998aLdgGwj1S1vpgo74l53Jc9mpp2ZDAchnS%2BU4tbMJCdfnAOu7raJaPSD2ADHnmcq7BUiAdJMXyO3nCgn2TTA5LHE5ni9P5ZAGqhitgrH2HK4PaI0lyrkdZljvV1W6nfdJgSSghNcmoOlG9M5JRP46jWGq0tKXScX07z0UejGlArgP0iGzu0D3%2FzATxreLcFq3gzL4wVputaaBn6i3qvBCTTynYguxLLkr%2BUlyBbFLeL0crxRJsuDNkj4ALC3YjtBPEM09daY9aIigQKCm4qXwO7nlDzdbRQUE5YZnuQV2aSGVaOFBLh59JHYoRD0yqlbtD80Mk5dMBPPhr0PmJbR1SWokSzwXhJwjTCZ5B0Uy8Ktuh2sZAsf16ZpJs75XVj0N1PECqoWnM8MbntmTUljF9LuVsMuEyW3%2BU5rChfdqg%2B%2BP4p68SyFoHtRLUflQx2yhZoXNDbHy%2FpawolPSKrc1led2AQDezahQJkDx0mF%2F7c9xUqUH%2BUgMp0kFgOZTmqi0%2FtJRp4lRZ5U%2FOZsCKDp%2B%2Br9PhSGtSrSXDYXJLJb1e%2F98xmjXNS6q6AZHoZDLzHdg5VkAxk8xyNRoMLTdtcsGOqUBi3kYlzGdgmX0gMtIJdRDpq%2FymDQCJ6cCIq3%2BBhuZR38vTXDYStvKnmu8MQtnD%2FH4imKT7D1JPy1mWyUR0zo9uZV3Kagu3qY7ZTxrOp2%2FgrBA9Oyng1SLSkU6MFxQo2C6W%2F%2Fz4Bag7vt407rSTPiv0Wrofe%2FhkJ5Onrj%2B%2FuajMsis3%2FRw%2Fn7o65%2FbdGBao%2BAtT9P0qDGH5SEfIEyax3WA%2Bn09V21K&X-Amz-Signature=85a8da6eb45372f665d969ce946430cc8d2f2d578dfba27dd73fa57d3c80c3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWRDEURZ%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBESyudk%2FG6EQK%2BXB%2FMLY8R3ZcAi8yT9TIBHI8asDWgIgFQBKRbmzwpaWLdfTxXWItFnwI7rLsrCwTwVjJZG1SOgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjSGul%2B2JfK%2BZBOiyrcA9ji4ZdP411Q6PJwNQgsnaTdF4x9dbGW%2Bzgj35lnFwY%2BC998aLdgGwj1S1vpgo74l53Jc9mpp2ZDAchnS%2BU4tbMJCdfnAOu7raJaPSD2ADHnmcq7BUiAdJMXyO3nCgn2TTA5LHE5ni9P5ZAGqhitgrH2HK4PaI0lyrkdZljvV1W6nfdJgSSghNcmoOlG9M5JRP46jWGq0tKXScX07z0UejGlArgP0iGzu0D3%2FzATxreLcFq3gzL4wVputaaBn6i3qvBCTTynYguxLLkr%2BUlyBbFLeL0crxRJsuDNkj4ALC3YjtBPEM09daY9aIigQKCm4qXwO7nlDzdbRQUE5YZnuQV2aSGVaOFBLh59JHYoRD0yqlbtD80Mk5dMBPPhr0PmJbR1SWokSzwXhJwjTCZ5B0Uy8Ktuh2sZAsf16ZpJs75XVj0N1PECqoWnM8MbntmTUljF9LuVsMuEyW3%2BU5rChfdqg%2B%2BP4p68SyFoHtRLUflQx2yhZoXNDbHy%2FpawolPSKrc1led2AQDezahQJkDx0mF%2F7c9xUqUH%2BUgMp0kFgOZTmqi0%2FtJRp4lRZ5U%2FOZsCKDp%2B%2Br9PhSGtSrSXDYXJLJb1e%2F98xmjXNS6q6AZHoZDLzHdg5VkAxk8xyNRoMLTdtcsGOqUBi3kYlzGdgmX0gMtIJdRDpq%2FymDQCJ6cCIq3%2BBhuZR38vTXDYStvKnmu8MQtnD%2FH4imKT7D1JPy1mWyUR0zo9uZV3Kagu3qY7ZTxrOp2%2FgrBA9Oyng1SLSkU6MFxQo2C6W%2F%2Fz4Bag7vt407rSTPiv0Wrofe%2FhkJ5Onrj%2B%2FuajMsis3%2FRw%2Fn7o65%2FbdGBao%2BAtT9P0qDGH5SEfIEyax3WA%2Bn09V21K&X-Amz-Signature=9ba15956b93cf6355bcbd76f4ab1a683a52e08736a8d495863866620166f6faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
