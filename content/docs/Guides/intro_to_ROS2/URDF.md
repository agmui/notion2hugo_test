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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22FCBHO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmV68HrEc3S07o3FBeG%2FGBy6phmSjrW2mSEVaRDC7lhAiEAznHXtH3Fg7nVBXIvOb7TeQusSWIYFzOKAxKy8oSg6jUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjDeKYaDz4UDtXETSrcA2qlGcyguKno6nKTGYgjnVfbQqwh1xWXhMcfRGMTn0nLQdOQFYLZJwQJb%2F67NpIZro7aL3Pn0Iu%2FRek4s%2Bq4tN9VbJYSjCNbV9xRZyGCyAOqaGJ04t%2BIxF8GrFNBvBImH47X%2BVlSAHK0OKCjuDIumzKvOWnsTwiu8KOrCiA63rgJgM6lhbJ0b8pD9GP8r%2BpOiAohqgt2ll8fYXKct2OU%2BH20JdPML5UCL9EmpgKF%2Bfc3QPd1D49K3ta7ryGzkRHfy%2F%2FLpG8NpXQxJlWhsUKSnqymCiddESZJgPryogEoitqD6dmi6i9rh5IoNUJQuDYMkrGKCbynBijGSPYGYdzC5QDnbAnLWfbXQtJMwvea34drkoMJZ0Nli%2FAt94AGNz8B0vLQxC7NBUgEwQ3HO%2FtUOFBX4OoDYWlrEnwlxQ5GhourZ2D8KSzh8iYxPjDekqfUAFLz%2FF1M55WJq7biBDaKlo%2Bzy8VVB8uPlUUX2o0xqLhZx36zJUS%2FQIFewVAHEWlFsTx5dwGxdo1de4va0ZWUQkz5V%2B9dBLbbWUODe%2B49DEvX8ATa1w89rCK8xpImSPqSncz75I9TG7r7gzyulMXi8mCwiGcONJNBCg5ygaOjbwUiW6Elnpoi9xX17Tl7MMPJn74GOqUBMDFfs3AiC1IjtEk3peq5JKmWkGrW%2BDv1Enn3T1PS088vlyHxeF9tWx3mtX3yDXpa9h3YI549Hys0fMZ2MTpaPnt6J3Xnvsm1ck%2B7wbfGuREOp5vhuwbfbbiTkAbWvnGyfQo6KHeIxorPPKPATcNB6r679OYilgUlFeQE%2FUE194M%2Bsk%2FLmvVTLAH8wNoO1UbZmHLP9F%2FYWNpUPSbj%2FurpWKmZJJoO&X-Amz-Signature=d66f15d03de608d379f303d72c1293dec35d727902ed4b55f2c46f8f00f41d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22FCBHO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmV68HrEc3S07o3FBeG%2FGBy6phmSjrW2mSEVaRDC7lhAiEAznHXtH3Fg7nVBXIvOb7TeQusSWIYFzOKAxKy8oSg6jUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjDeKYaDz4UDtXETSrcA2qlGcyguKno6nKTGYgjnVfbQqwh1xWXhMcfRGMTn0nLQdOQFYLZJwQJb%2F67NpIZro7aL3Pn0Iu%2FRek4s%2Bq4tN9VbJYSjCNbV9xRZyGCyAOqaGJ04t%2BIxF8GrFNBvBImH47X%2BVlSAHK0OKCjuDIumzKvOWnsTwiu8KOrCiA63rgJgM6lhbJ0b8pD9GP8r%2BpOiAohqgt2ll8fYXKct2OU%2BH20JdPML5UCL9EmpgKF%2Bfc3QPd1D49K3ta7ryGzkRHfy%2F%2FLpG8NpXQxJlWhsUKSnqymCiddESZJgPryogEoitqD6dmi6i9rh5IoNUJQuDYMkrGKCbynBijGSPYGYdzC5QDnbAnLWfbXQtJMwvea34drkoMJZ0Nli%2FAt94AGNz8B0vLQxC7NBUgEwQ3HO%2FtUOFBX4OoDYWlrEnwlxQ5GhourZ2D8KSzh8iYxPjDekqfUAFLz%2FF1M55WJq7biBDaKlo%2Bzy8VVB8uPlUUX2o0xqLhZx36zJUS%2FQIFewVAHEWlFsTx5dwGxdo1de4va0ZWUQkz5V%2B9dBLbbWUODe%2B49DEvX8ATa1w89rCK8xpImSPqSncz75I9TG7r7gzyulMXi8mCwiGcONJNBCg5ygaOjbwUiW6Elnpoi9xX17Tl7MMPJn74GOqUBMDFfs3AiC1IjtEk3peq5JKmWkGrW%2BDv1Enn3T1PS088vlyHxeF9tWx3mtX3yDXpa9h3YI549Hys0fMZ2MTpaPnt6J3Xnvsm1ck%2B7wbfGuREOp5vhuwbfbbiTkAbWvnGyfQo6KHeIxorPPKPATcNB6r679OYilgUlFeQE%2FUE194M%2Bsk%2FLmvVTLAH8wNoO1UbZmHLP9F%2FYWNpUPSbj%2FurpWKmZJJoO&X-Amz-Signature=8b88e3d58d0d459510dcdea250f5a7becef2f603abfd658fe2d1622e69c014af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
