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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZTI7TFG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIASL2%2FHNCTSbSVvrP3Jy%2Bhx8%2BKsiEd%2FqrwyEt3PRL0e9AiEA0wtTQLd6FcDBI1CSAiM2o%2BOQleu3zxcp3v27eB7ADa4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9jhbYBRCzqpElnYSrcAzN%2FqwnvBXVVLr449kZtt83%2FHwlTa3WZp1docw8m1BgiwCqOIZ%2BFWzQZDwIbHWxB4vcK%2BpcFZaoQ%2B2s4dT9wPtLEgIuyUrrhOPtjLlwUpzBUhMPSJZJWJF7C5PRG0TbXmuKV0%2BQ5w7SRtjx3GE8VIc6RTfIThRVtaEfEk5VVRHeBJXwiX4Clw04adcJPfJnj2jhizh7WqRW5%2FXA5ukWIcqtjBF6Q44AMRf0%2FzejayJhj9kNtaGQC%2BhIAyzGQ317sYsInRecpiYQTVc8qZwLO5bp9uUQDfQnZFA7CAfeBe%2F82PRCJxJJ7p7DoEiC0kWttkYifa%2Fy4a6OsVKwrTTPJ1zpk8uYE5kg4V8oGoKkD2eSGNXUXhE4iFZ3YzMA9%2BkbfjUbgtMklmAkCqEHp5lT2Ve8WmNx9TF5AwTyjIKjzMAPS9Z%2FcAnvZAeBJzwEHGqnaqpgg3HlOKe56qhDhMG4%2BrL49KCcSm1JQZeOEW0i2kLhbLNY4wzc%2BW6vOgQEeoww3gCkFPgDtK5sDY8C7gpdjmgSA4tc%2FrUW%2BAmiaNqmzhHbSI28mwOOr7LEA5qWzjoub5mnrEGizCVtdBK51EDYUHCzIHqQeDTF1Spm2mGltzfPhxsqSlmOWxWq5ndwLMN%2FGgNMGOqUBS3%2BKShhyB16XjoZW7J5LWCy7buTMUwaZtREhteLjQ5Jyo1ugzaVAQEYD%2Fue%2BolduuLmDqjX3NpWtvAfEDOlZhP4A6ZYTywxlDvxqu1OkoPd8hw%2BL9xI9k9KlUMa4z3eKhUE7VDvGfyg%2BjvUfK%2F9FcQFR3whqL8%2Fi%2F0sjrLpTwlbislVQUgdgMIXN%2FiTJ3l02QdUy8paFYAzNLNBPEe9XJwpCKNWy&X-Amz-Signature=4df1307a9867a69ed5ad75c9fe91fa3932592b3f9703080049111c85da89c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZTI7TFG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIASL2%2FHNCTSbSVvrP3Jy%2Bhx8%2BKsiEd%2FqrwyEt3PRL0e9AiEA0wtTQLd6FcDBI1CSAiM2o%2BOQleu3zxcp3v27eB7ADa4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9jhbYBRCzqpElnYSrcAzN%2FqwnvBXVVLr449kZtt83%2FHwlTa3WZp1docw8m1BgiwCqOIZ%2BFWzQZDwIbHWxB4vcK%2BpcFZaoQ%2B2s4dT9wPtLEgIuyUrrhOPtjLlwUpzBUhMPSJZJWJF7C5PRG0TbXmuKV0%2BQ5w7SRtjx3GE8VIc6RTfIThRVtaEfEk5VVRHeBJXwiX4Clw04adcJPfJnj2jhizh7WqRW5%2FXA5ukWIcqtjBF6Q44AMRf0%2FzejayJhj9kNtaGQC%2BhIAyzGQ317sYsInRecpiYQTVc8qZwLO5bp9uUQDfQnZFA7CAfeBe%2F82PRCJxJJ7p7DoEiC0kWttkYifa%2Fy4a6OsVKwrTTPJ1zpk8uYE5kg4V8oGoKkD2eSGNXUXhE4iFZ3YzMA9%2BkbfjUbgtMklmAkCqEHp5lT2Ve8WmNx9TF5AwTyjIKjzMAPS9Z%2FcAnvZAeBJzwEHGqnaqpgg3HlOKe56qhDhMG4%2BrL49KCcSm1JQZeOEW0i2kLhbLNY4wzc%2BW6vOgQEeoww3gCkFPgDtK5sDY8C7gpdjmgSA4tc%2FrUW%2BAmiaNqmzhHbSI28mwOOr7LEA5qWzjoub5mnrEGizCVtdBK51EDYUHCzIHqQeDTF1Spm2mGltzfPhxsqSlmOWxWq5ndwLMN%2FGgNMGOqUBS3%2BKShhyB16XjoZW7J5LWCy7buTMUwaZtREhteLjQ5Jyo1ugzaVAQEYD%2Fue%2BolduuLmDqjX3NpWtvAfEDOlZhP4A6ZYTywxlDvxqu1OkoPd8hw%2BL9xI9k9KlUMa4z3eKhUE7VDvGfyg%2BjvUfK%2F9FcQFR3whqL8%2Fi%2F0sjrLpTwlbislVQUgdgMIXN%2FiTJ3l02QdUy8paFYAzNLNBPEe9XJwpCKNWy&X-Amz-Signature=ed72f4474fdab5ba51ae297f21ede7ec9685f28ca3579a1245ed3b3f1881baad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
