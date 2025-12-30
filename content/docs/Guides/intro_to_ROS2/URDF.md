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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJWSJIH%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPHcDU%2BtbE%2B5KAX8XvE8%2FcOvM%2B6bnZ7v%2BQlFbGq1nhPwIhANLag%2FD0mMAXdZUW91l%2FbLV6CUwnAOrzLirQOE6xS7FlKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9sPtZAMEaBuqEJMq3APhs8m4f54CkZfQnyFgT13%2BWwMs5IFa5vYD5S%2Fd3oVYmxyHmfF5IzxrNSd8RALNTDKBmpHWSPsibz5q0OL1rR9M%2BvCShYuYOsiSEfdR%2FnSluUvTbRTIRkwyVPVS4kpjP%2BIZf%2Fr9wSgrEqHtvMTFyto0150JNtP4c%2BMR%2BBHJItInHuCs%2B5loQOJQ9PaAgwAF0HhGO%2BuTrWPa6JKVZZw%2FhMqX5d%2Bi9F1z9FpZ%2B6g0dqSbWTXGYorKRIUQsQ9kULV0%2BEm6V8emy%2Bg4Z9IsazzTbQnwCgqOpVEA8216k1v9bZH5vSn9VQ1Tjqmdk3LpmjMtFDqjnhzP4dgjdB%2BcaHfGZgJIucS1aQkymqwctNlKdxu1P9q%2Fm24D0mangKGAXyP4XEkDRsmeZk2ZRt6K7zoROigaCbFZWVpgYfg%2FqHmFSmyHsmw1IJ6LyPjGEWE6OAKdm%2FRY91Oz9k8XRE4xrl4URHfkmMaAMlB%2F4%2FmU5hEY%2FeMDGKTs8jZB6x3tJTZ1Pko%2FrmzcJAHfkJ%2FOb1pIhL%2B0Gt7OyE7xGnh22ZRePNMnhKXD1tb0ke5q4JJ7G4sGIFh4z%2FFjJMB3oeiq2hy0EtCS5cV%2Fg%2Fjo5yfcQ1GgNSF5Oed5TOIMpBFlCMk0dtKaZTDI2szKBjqkAfVeSTJwUxD%2BwvTVIqRUsacDWYkute2mlySgnBsIJMz2MhrDnmoWSk%2FcuQ30bx%2FYB901mHtlLXAWHIhxA0FWxDZOGkajLxsczOyGg1cnT3KFktJ0p7FosR1OZLZUn3CmampN%2BvKsj9CDjuD8G1RIjHV4qIYjaAjHLC5kGTpJM0vuFpqW%2FyqO5MZGIoA5f0IRjK5U96Lr%2Fz02tzi7aOW%2FITjzhTQc&X-Amz-Signature=c1998542efce23958cfc38fb6ac85457ccc2a4bf14e33ec4282bc6f7381251ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJWSJIH%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPHcDU%2BtbE%2B5KAX8XvE8%2FcOvM%2B6bnZ7v%2BQlFbGq1nhPwIhANLag%2FD0mMAXdZUW91l%2FbLV6CUwnAOrzLirQOE6xS7FlKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9sPtZAMEaBuqEJMq3APhs8m4f54CkZfQnyFgT13%2BWwMs5IFa5vYD5S%2Fd3oVYmxyHmfF5IzxrNSd8RALNTDKBmpHWSPsibz5q0OL1rR9M%2BvCShYuYOsiSEfdR%2FnSluUvTbRTIRkwyVPVS4kpjP%2BIZf%2Fr9wSgrEqHtvMTFyto0150JNtP4c%2BMR%2BBHJItInHuCs%2B5loQOJQ9PaAgwAF0HhGO%2BuTrWPa6JKVZZw%2FhMqX5d%2Bi9F1z9FpZ%2B6g0dqSbWTXGYorKRIUQsQ9kULV0%2BEm6V8emy%2Bg4Z9IsazzTbQnwCgqOpVEA8216k1v9bZH5vSn9VQ1Tjqmdk3LpmjMtFDqjnhzP4dgjdB%2BcaHfGZgJIucS1aQkymqwctNlKdxu1P9q%2Fm24D0mangKGAXyP4XEkDRsmeZk2ZRt6K7zoROigaCbFZWVpgYfg%2FqHmFSmyHsmw1IJ6LyPjGEWE6OAKdm%2FRY91Oz9k8XRE4xrl4URHfkmMaAMlB%2F4%2FmU5hEY%2FeMDGKTs8jZB6x3tJTZ1Pko%2FrmzcJAHfkJ%2FOb1pIhL%2B0Gt7OyE7xGnh22ZRePNMnhKXD1tb0ke5q4JJ7G4sGIFh4z%2FFjJMB3oeiq2hy0EtCS5cV%2Fg%2Fjo5yfcQ1GgNSF5Oed5TOIMpBFlCMk0dtKaZTDI2szKBjqkAfVeSTJwUxD%2BwvTVIqRUsacDWYkute2mlySgnBsIJMz2MhrDnmoWSk%2FcuQ30bx%2FYB901mHtlLXAWHIhxA0FWxDZOGkajLxsczOyGg1cnT3KFktJ0p7FosR1OZLZUn3CmampN%2BvKsj9CDjuD8G1RIjHV4qIYjaAjHLC5kGTpJM0vuFpqW%2FyqO5MZGIoA5f0IRjK5U96Lr%2Fz02tzi7aOW%2FITjzhTQc&X-Amz-Signature=1659d1ca3653cbdf675e784555a18685f4f92052a3e31de9e9146f57758c31a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
