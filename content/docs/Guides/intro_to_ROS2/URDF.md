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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBY3EKZX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Di60ZS3sNsliQ45GZMeqOsmWvRHIbJbn154tMbLlFAiAy%2F7W32PtVXKs8uRGXMsNZ4lqFZ605GVd3krUiZlouBiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvCF8GuT01MeH8%2F1KtwDLCrdmlJSqM2kIluNCKdVaaEQLBWcYdUsRD5ch%2FsmxRcKT%2F%2BLdj8nsOlfOMc%2Fj9NPzEpDFXU6P1gjE5n3wWOMI4Y12C8%2BFsEo5KkheNoAvwuGoU%2FBdJqTVS4b27loyPxxhJtYVsPuMbuImgmaQ4kr8lbZ3MpV2nA1ANKYNgQFKnwhiBeOxYy9Nx%2FF2a0sV%2BIzhAvnP%2F%2FS5%2FYZlIVRx02V8qJBcejhFtdnizCS2v%2BjkGfVYPtbPBeWWLp%2BZYwmeAoa9GvEFvicbD%2FdqXZ2Pej8y9dsecLceLQss4EL8CNYI0HLpovzCtF%2Bc0imLYgD5IuRwvUAHoGnqd3GzdOs%2BRr0jUWq7jGgsrqPHDn2zRKW7Kf5GSmRkeh9N%2F%2FMb%2BGnE8HOaOpvdnFY3XgVgYB4q8y13XSSMD8w%2FMRV%2BEJjbMsuvXdTwmoV0pZ8tgiDY5WtXv%2BINJfnFJq8LqxSAEnNT1cP44MS9hu2%2FmGwEdRb%2BIezk93WrOjXzaMYGXNVjp2nVeetP7dnwsNFjxGctjcI2dP3MvyozQl6qE2htp2Oyz02Z9RxJzm4aN1PaHClm0fRifBWP7GaCvIURWMWjzSVKFyS5FMPzZfT5P%2B2I2xj4O3yNLol0s8B9LDt8at9jlIw6suwxAY6pgHqAvnJHqI92cZ%2F97YpQWbeyagfakV7DEoEUkc5EfMSuVn4J7NZDoKZ1EgA27Y9tEEMZdw7mPxdLaXUAkm91wdL1GwDArib3ADxHRxN99Ik7EfGVMor25LQKpz8dzimd%2B4qLoFnI%2Fkuak%2BHtV1%2FHaLOGUvAhVaYOz8xq5SLhBEDvS%2FpcdKQB%2BVSgJDZ%2F%2FwADggWRZly9oLXY9F6gVlyeYyQ6G48NeCf&X-Amz-Signature=81093e2b5d790040ad550feebb8f873a397c685e38170b4abe96d2bfe54614dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBY3EKZX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Di60ZS3sNsliQ45GZMeqOsmWvRHIbJbn154tMbLlFAiAy%2F7W32PtVXKs8uRGXMsNZ4lqFZ605GVd3krUiZlouBiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvCF8GuT01MeH8%2F1KtwDLCrdmlJSqM2kIluNCKdVaaEQLBWcYdUsRD5ch%2FsmxRcKT%2F%2BLdj8nsOlfOMc%2Fj9NPzEpDFXU6P1gjE5n3wWOMI4Y12C8%2BFsEo5KkheNoAvwuGoU%2FBdJqTVS4b27loyPxxhJtYVsPuMbuImgmaQ4kr8lbZ3MpV2nA1ANKYNgQFKnwhiBeOxYy9Nx%2FF2a0sV%2BIzhAvnP%2F%2FS5%2FYZlIVRx02V8qJBcejhFtdnizCS2v%2BjkGfVYPtbPBeWWLp%2BZYwmeAoa9GvEFvicbD%2FdqXZ2Pej8y9dsecLceLQss4EL8CNYI0HLpovzCtF%2Bc0imLYgD5IuRwvUAHoGnqd3GzdOs%2BRr0jUWq7jGgsrqPHDn2zRKW7Kf5GSmRkeh9N%2F%2FMb%2BGnE8HOaOpvdnFY3XgVgYB4q8y13XSSMD8w%2FMRV%2BEJjbMsuvXdTwmoV0pZ8tgiDY5WtXv%2BINJfnFJq8LqxSAEnNT1cP44MS9hu2%2FmGwEdRb%2BIezk93WrOjXzaMYGXNVjp2nVeetP7dnwsNFjxGctjcI2dP3MvyozQl6qE2htp2Oyz02Z9RxJzm4aN1PaHClm0fRifBWP7GaCvIURWMWjzSVKFyS5FMPzZfT5P%2B2I2xj4O3yNLol0s8B9LDt8at9jlIw6suwxAY6pgHqAvnJHqI92cZ%2F97YpQWbeyagfakV7DEoEUkc5EfMSuVn4J7NZDoKZ1EgA27Y9tEEMZdw7mPxdLaXUAkm91wdL1GwDArib3ADxHRxN99Ik7EfGVMor25LQKpz8dzimd%2B4qLoFnI%2Fkuak%2BHtV1%2FHaLOGUvAhVaYOz8xq5SLhBEDvS%2FpcdKQB%2BVSgJDZ%2F%2FwADggWRZly9oLXY9F6gVlyeYyQ6G48NeCf&X-Amz-Signature=708e82f041244b8757adf0fd480ce445c5c53052e6fdee70c42f9dc60854791f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
