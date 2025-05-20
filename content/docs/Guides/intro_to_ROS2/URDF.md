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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA2JRRN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbkqCetmRdc3X76qrrcJtD0MvSDQcK0NsboBev0RtHkgIhAOCB7odhyrh8j55LpGMboZ%2BOw%2FecfXZFgmKM3iBHiEJUKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr0iButLLhu%2Bn49Dgq3AOtaeofyf%2FKpzdQ6aVMHEqIHewLWdVA4z9eGAwxbRxhWRZeRBp0vouh68AfmSH6MicGY7KYU6hkTofZbqBESHI6Ba5DgvHztSNW3d3W7E0mIve48z3civVXmFUCKh4aTa3%2FpgQqILv3lwNh%2FbvGmT%2BXMHLQ7PwAsE4bW4mZTCyBHoSKSZK%2Baj2GP%2Ffdlj3vfORYRwtHKAsWFJNh1dL5tKFMo%2B1%2BEpBbP0tSljDplNWi06qYKYMeSbSMF8qTR3g4sHCKmJkFYoTka2m6WefIs8HWt73e4Px3POgZeeI34VwlnVdV2Yhdr30YzbEVXSNTqiKn%2F80uWhMIukxzIPLokHi6J1YqpNI1vVM50gMvVj%2F78BRmNjL6ffOBk7Aa%2FUfK%2F%2BpOjVC%2F2ritWP8PYaJGM5BdDldS3Zu%2BipCUEV6DyUs7rI%2Bxc91fwWwPVm7NX8AFbUvSodjz8ZOGuVL25jAnHmjj2k%2BgZTqUUXoDuVGqcM2ysasRezVuaECI%2BAqAdDLSuuYCUoEFDhCm28X18Nmyt10%2BFi9OLTLRSMkXRN7QcsrPwC41%2BR0RkdOwKaW%2FW%2F0mZsnK%2BMIUwWwp924SZTo3H4p6AZ8g5q%2F4EztC564G6YCj2D0iHyALvVEnZXx%2FpDCPm6%2FBBjqkAUDppfS9qUuccK8a0UT708QXKBnAJyYHpJdqYIS0d6i2BgFbvu%2FNnzUUT5VtoUW7zxYSwDlf2aIPdjxeFNj9mWzRBU8DU1jzKCffdgCBJZGubH2OuvOotoOKOomMQ6b%2Fyz6PkGqNXUQUO5Nurc0H1tyfTJ8g%2BaJe2Ck0bK9Lx1FPqXK1wC59QesC7sP6jhhV%2FHqn0VOJkV%2Bxwzifs7HA8NHVE0aR&X-Amz-Signature=93e6e2de4423bf021f59865b1937cd3e14cb960e573c9097c18ae9f4b828ab50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA2JRRN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbkqCetmRdc3X76qrrcJtD0MvSDQcK0NsboBev0RtHkgIhAOCB7odhyrh8j55LpGMboZ%2BOw%2FecfXZFgmKM3iBHiEJUKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr0iButLLhu%2Bn49Dgq3AOtaeofyf%2FKpzdQ6aVMHEqIHewLWdVA4z9eGAwxbRxhWRZeRBp0vouh68AfmSH6MicGY7KYU6hkTofZbqBESHI6Ba5DgvHztSNW3d3W7E0mIve48z3civVXmFUCKh4aTa3%2FpgQqILv3lwNh%2FbvGmT%2BXMHLQ7PwAsE4bW4mZTCyBHoSKSZK%2Baj2GP%2Ffdlj3vfORYRwtHKAsWFJNh1dL5tKFMo%2B1%2BEpBbP0tSljDplNWi06qYKYMeSbSMF8qTR3g4sHCKmJkFYoTka2m6WefIs8HWt73e4Px3POgZeeI34VwlnVdV2Yhdr30YzbEVXSNTqiKn%2F80uWhMIukxzIPLokHi6J1YqpNI1vVM50gMvVj%2F78BRmNjL6ffOBk7Aa%2FUfK%2F%2BpOjVC%2F2ritWP8PYaJGM5BdDldS3Zu%2BipCUEV6DyUs7rI%2Bxc91fwWwPVm7NX8AFbUvSodjz8ZOGuVL25jAnHmjj2k%2BgZTqUUXoDuVGqcM2ysasRezVuaECI%2BAqAdDLSuuYCUoEFDhCm28X18Nmyt10%2BFi9OLTLRSMkXRN7QcsrPwC41%2BR0RkdOwKaW%2FW%2F0mZsnK%2BMIUwWwp924SZTo3H4p6AZ8g5q%2F4EztC564G6YCj2D0iHyALvVEnZXx%2FpDCPm6%2FBBjqkAUDppfS9qUuccK8a0UT708QXKBnAJyYHpJdqYIS0d6i2BgFbvu%2FNnzUUT5VtoUW7zxYSwDlf2aIPdjxeFNj9mWzRBU8DU1jzKCffdgCBJZGubH2OuvOotoOKOomMQ6b%2Fyz6PkGqNXUQUO5Nurc0H1tyfTJ8g%2BaJe2Ck0bK9Lx1FPqXK1wC59QesC7sP6jhhV%2FHqn0VOJkV%2Bxwzifs7HA8NHVE0aR&X-Amz-Signature=0804473bcede085bbd94e33c3ad1f31d91e7128c1fabf49d0f4f3879714d38ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
