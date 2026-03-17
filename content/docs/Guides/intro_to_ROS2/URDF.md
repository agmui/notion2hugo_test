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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSTPWVLW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDpmaBgdrleOUqHWkG3VXS3wPiWMRQfuDy1Gb%2FIxGbGsAiEA3AbesIr%2F3ThN4LxqvNb0694s3SNyYTC1CQQhXS0Pc90qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvMOTTazIBy3aET%2FircA3kEJVMm%2Bu9ztIAFw0MU2hVlpxPecgaSb9Dx37rYWlIHpBt7y3Rn1Bm4RrbH6GFCuOmoZobnMA%2B3RJPKlMdLS3a0sjue9CrhFMNwmbzNVAbY3kEIIlWgdHv%2FuqrGCEPl6EinCOjDEUxZsbrL%2Baie1FmywIywQG%2FlJq%2BT%2FtZpNHvdcSYsyyQoQKN%2FmVLVqSqHZ1GwX0OACj1%2FwHsTT8cLJVoBE4qvnZJ9CuSp4gqfoNbGno0l9%2FeORjt6XdbWLzJC5h3bztMAIR6ue6nmGCDNWq9sff5NiHadOHx6s0sA%2FRFFfBHS4NMldLI3SfE9bJfy7BN%2FejzfLqqwdNSj2vPAs4HSsktLXeU%2BhyZ0%2BjP71IMc%2FaAEGwf4gasbQ%2F8jXHOpx6KpAfChQgNr5hpeOLVo%2FZ2SQQXWmDCVSpYZF6aw%2FabRJKIQfcIq%2FNbDd142LR9aRk8KWvmHv2XErYvQBoBR1lD2mqyitAIL7DqcHGvCdexSpIdQMaCVWsAdM%2B6EdvEB8Vl7q3UX4his6DRIVvsUabSBRKvm4prHxBRSWqmITjkAMuiARxW%2BMt74n17zU6EQUEaPnIRjZjIklzRzoUmWtzB0WGIQq5ONLABnLJXx3fgKjA6Fa7HzIm0v7advMKzo4s0GOqUBItFmuANwBdQ3Zav3lU3qcngVD6s29d%2FH3B0jmQfL2i0Vqe%2FlsAq6m%2BXzEb8%2BB6t3HnHVXDvRRl%2FgTJptpLDWi6nrfrRIuDSk7yWvhEAkC6FlVX2oBYlzjgKWPPOW8Sv4ERkHXgAVRb7QZrOUsF1nKAY6EcbcFC528g7KRQxIBe8Bxn2lZrRfVNbeqP5lfZvYMT%2BKOsIhE9Lp5eKFWpYmNt6ui23x&X-Amz-Signature=bb2b09371a64c56c9d52afa36de8eabfe0227fce8d9e54caeafaad7582a3bf54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSTPWVLW%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDpmaBgdrleOUqHWkG3VXS3wPiWMRQfuDy1Gb%2FIxGbGsAiEA3AbesIr%2F3ThN4LxqvNb0694s3SNyYTC1CQQhXS0Pc90qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvMOTTazIBy3aET%2FircA3kEJVMm%2Bu9ztIAFw0MU2hVlpxPecgaSb9Dx37rYWlIHpBt7y3Rn1Bm4RrbH6GFCuOmoZobnMA%2B3RJPKlMdLS3a0sjue9CrhFMNwmbzNVAbY3kEIIlWgdHv%2FuqrGCEPl6EinCOjDEUxZsbrL%2Baie1FmywIywQG%2FlJq%2BT%2FtZpNHvdcSYsyyQoQKN%2FmVLVqSqHZ1GwX0OACj1%2FwHsTT8cLJVoBE4qvnZJ9CuSp4gqfoNbGno0l9%2FeORjt6XdbWLzJC5h3bztMAIR6ue6nmGCDNWq9sff5NiHadOHx6s0sA%2FRFFfBHS4NMldLI3SfE9bJfy7BN%2FejzfLqqwdNSj2vPAs4HSsktLXeU%2BhyZ0%2BjP71IMc%2FaAEGwf4gasbQ%2F8jXHOpx6KpAfChQgNr5hpeOLVo%2FZ2SQQXWmDCVSpYZF6aw%2FabRJKIQfcIq%2FNbDd142LR9aRk8KWvmHv2XErYvQBoBR1lD2mqyitAIL7DqcHGvCdexSpIdQMaCVWsAdM%2B6EdvEB8Vl7q3UX4his6DRIVvsUabSBRKvm4prHxBRSWqmITjkAMuiARxW%2BMt74n17zU6EQUEaPnIRjZjIklzRzoUmWtzB0WGIQq5ONLABnLJXx3fgKjA6Fa7HzIm0v7advMKzo4s0GOqUBItFmuANwBdQ3Zav3lU3qcngVD6s29d%2FH3B0jmQfL2i0Vqe%2FlsAq6m%2BXzEb8%2BB6t3HnHVXDvRRl%2FgTJptpLDWi6nrfrRIuDSk7yWvhEAkC6FlVX2oBYlzjgKWPPOW8Sv4ERkHXgAVRb7QZrOUsF1nKAY6EcbcFC528g7KRQxIBe8Bxn2lZrRfVNbeqP5lfZvYMT%2BKOsIhE9Lp5eKFWpYmNt6ui23x&X-Amz-Signature=8c95043e636b2433e4989767df5b437c20588ce4872780166bd8a69704bcdd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
