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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXDQQLW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFHSxWy2RISpfHJFM%2FRXVsIQnZVAhJ5XvhxouzQB3T4IAiB4WBfj%2F%2FxqO%2FfL6TyA%2FSwMHKlKXh8eDURlTPKzDuwBcyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM6oUxMum54r1QM2z8KtwDjiEldU4zUSgbHx8se%2FTD6f%2B94a%2BOIw6jTK1UaAICyU7JVdTHm29Sz2Pr0qd55iumMQJzARMrpyBeBFInrgpNL0aWxidtzscV67p0dXcIfjktHRh39cy%2By%2F5OhN%2FvlntMHcw4A2UEkdRPdBq863DWahk3aCsZFIocP1PGJm%2Bzj2qxa3kNA3NboDXJM7%2FXZmTAAFKWE1pcE2zZOKrxZqT%2BijR2jMFpIuThlDweo5otda5tmy4WQlqgpHfNlfLEjwNb3zxTUax8jiMWFQp0Ge0%2F%2F8L8ivB0peUlXQS5WRCSQ%2B5mSWg8ZlCKw0gozQQW6dRV9%2BUpo4Q0xEBvezxXI5V8pRyHSCSUNJySg9IUVHCmfq4jPCCxsTTPRKv4h410PRJKK92aOunMNk2Co8mADjrK%2FrPiRHXCjs1Z96rEaf6d5wy50YpAugYx%2BBwBDwoSu9mxtjo3twbMsNCCL5MAvwXaXJD8yefadq4%2FqwKwOo1hFS2zWQfDCNXBlF%2FTbbKwn42gPfbjHSPQGERBfNyIWpeUUBcxhpAIV0eGQG%2BMKa1K0vYGFGst9tp1DktaZuG7Y7rU2KWBQ1Wwd31hxqeQRDedjhVS0Ano7YSS3zbhgTTpS32i0%2BEd49OdxzFrX4owrIS8wgY6pgGb3u6IykLn0kaKzPyClSJPWYfNjId2F92pfW%2Fu2xTzYbMG3ubMVTDssSO3ehEGTKzjmIrGY7Z9gC%2BflXgsnQMxluKxVHNwIY1rrGjQLgdCDcJhS900VeCx1QEZRzmzKLek%2BSNZrUDoCOO2qrGPrbAHMAq0f9EreEtQwEBDxCnyvwUoyPHpQmHM1DYZ%2BAzb%2BK%2BvqOgEmN7EvBQD7QyWWcw3c%2F3bXNZf&X-Amz-Signature=1fc3946d380b0fa6bda4e4c296d1840319317d6ca43726aac10bf6cf65a23076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXDQQLW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFHSxWy2RISpfHJFM%2FRXVsIQnZVAhJ5XvhxouzQB3T4IAiB4WBfj%2F%2FxqO%2FfL6TyA%2FSwMHKlKXh8eDURlTPKzDuwBcyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM6oUxMum54r1QM2z8KtwDjiEldU4zUSgbHx8se%2FTD6f%2B94a%2BOIw6jTK1UaAICyU7JVdTHm29Sz2Pr0qd55iumMQJzARMrpyBeBFInrgpNL0aWxidtzscV67p0dXcIfjktHRh39cy%2By%2F5OhN%2FvlntMHcw4A2UEkdRPdBq863DWahk3aCsZFIocP1PGJm%2Bzj2qxa3kNA3NboDXJM7%2FXZmTAAFKWE1pcE2zZOKrxZqT%2BijR2jMFpIuThlDweo5otda5tmy4WQlqgpHfNlfLEjwNb3zxTUax8jiMWFQp0Ge0%2F%2F8L8ivB0peUlXQS5WRCSQ%2B5mSWg8ZlCKw0gozQQW6dRV9%2BUpo4Q0xEBvezxXI5V8pRyHSCSUNJySg9IUVHCmfq4jPCCxsTTPRKv4h410PRJKK92aOunMNk2Co8mADjrK%2FrPiRHXCjs1Z96rEaf6d5wy50YpAugYx%2BBwBDwoSu9mxtjo3twbMsNCCL5MAvwXaXJD8yefadq4%2FqwKwOo1hFS2zWQfDCNXBlF%2FTbbKwn42gPfbjHSPQGERBfNyIWpeUUBcxhpAIV0eGQG%2BMKa1K0vYGFGst9tp1DktaZuG7Y7rU2KWBQ1Wwd31hxqeQRDedjhVS0Ano7YSS3zbhgTTpS32i0%2BEd49OdxzFrX4owrIS8wgY6pgGb3u6IykLn0kaKzPyClSJPWYfNjId2F92pfW%2Fu2xTzYbMG3ubMVTDssSO3ehEGTKzjmIrGY7Z9gC%2BflXgsnQMxluKxVHNwIY1rrGjQLgdCDcJhS900VeCx1QEZRzmzKLek%2BSNZrUDoCOO2qrGPrbAHMAq0f9EreEtQwEBDxCnyvwUoyPHpQmHM1DYZ%2BAzb%2BK%2BvqOgEmN7EvBQD7QyWWcw3c%2F3bXNZf&X-Amz-Signature=f35b4166e15bf93640eb62185d954f1c9386bdc6f3add6b60470c3a881ff0643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
