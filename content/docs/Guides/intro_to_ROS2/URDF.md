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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VZNI53%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNHvI%2FQ0URhMYimTvKTWEcF2A1n34JcGyMZMQQ2VMJHgIhALC6OkBtR%2BgLY0OnmuCpMmfboCEIxEyh9%2F5seUJxDUGaKv8DCGwQABoMNjM3NDIzMTgzODA1IgwrChOVOgJHf0zv3Mkq3APORaWz2ZVs71aNhINrNKnJpnVbQs9n%2F5SNU6uQEPnnwEOpGtqP5XjSIViKyOKq4LDNGM7Y%2Fzdhrs3SLYZfGw5tl5mPSOmhiypedcEiUfFJ8OhR29aLeTQA56gKaYP2%2Fhpt80cbWNAaHP76jtNU14kfwTvh9aMNQ0NN%2BxGaWi4D33A%2FsMWP76P9T%2FjyoLF9B2RKLa%2B1Yn5sPVpuytztSCS2YeSTHBRiLMM8H6bYKaBxWNU3Iz1Qzz0F2ifiBC4S8tUrgTMtBR%2BrZtQsX%2FnV3dpnb31ccMQVxEjkc9HFFZgqBrefRgFMUSmNNPH%2FywRcESIHNhKgpvlfWJFBzbu1g8RVVrFIj2rFtDFkcSBIwXVRSx%2Bp4l0JLqJB1fPpct5yLhe8ZUyIQSWL7XFVglsYhzYvxUfPUraglo4ebwVe99Wb8CNodSd9fivhhPoBFxOUsU4MAfH0Knx5GKE0TuFV0SlF1pmJ17uBZX1NL986iYYrQ4ieOkcD29va%2F5emoepUNM4qSGaau28xBQNwu6iyy9yalFbeKG8yFs%2BCsAL5vMbyeNaGQ58YcCWCqTt2q4cz2mCdUOLrIMmCfSNp9xlrIGD3VOWL6SfOcS6dxCdTriRbA5mWgPmbkNe9uxiBPzCioKXBBjqkAcptGB0YdrI31GuQdm%2B12GArwmydZt2MV%2F1fisFUu5DIyZhE3%2FOlQD1fXtCaPqYbmr6uBK1fkJnyMi8mdbIQ7FVbTRbb7fCzTK2B4QB9a9FsIjpSFIA5W9KHwE9s%2BWMCIAc0edjC8supk0oI9wumWbJEi5Csa0%2BvKnTavEgLWOArY7w4a3kC%2FQ38ZVYfKgZQIiYHJQ0d7ELsjXQc87AMQM0RZPWH&X-Amz-Signature=570f73544c79edd7bc2918940b191687ab2b9fef9de09b7a6a8dcb27425404df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VZNI53%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNHvI%2FQ0URhMYimTvKTWEcF2A1n34JcGyMZMQQ2VMJHgIhALC6OkBtR%2BgLY0OnmuCpMmfboCEIxEyh9%2F5seUJxDUGaKv8DCGwQABoMNjM3NDIzMTgzODA1IgwrChOVOgJHf0zv3Mkq3APORaWz2ZVs71aNhINrNKnJpnVbQs9n%2F5SNU6uQEPnnwEOpGtqP5XjSIViKyOKq4LDNGM7Y%2Fzdhrs3SLYZfGw5tl5mPSOmhiypedcEiUfFJ8OhR29aLeTQA56gKaYP2%2Fhpt80cbWNAaHP76jtNU14kfwTvh9aMNQ0NN%2BxGaWi4D33A%2FsMWP76P9T%2FjyoLF9B2RKLa%2B1Yn5sPVpuytztSCS2YeSTHBRiLMM8H6bYKaBxWNU3Iz1Qzz0F2ifiBC4S8tUrgTMtBR%2BrZtQsX%2FnV3dpnb31ccMQVxEjkc9HFFZgqBrefRgFMUSmNNPH%2FywRcESIHNhKgpvlfWJFBzbu1g8RVVrFIj2rFtDFkcSBIwXVRSx%2Bp4l0JLqJB1fPpct5yLhe8ZUyIQSWL7XFVglsYhzYvxUfPUraglo4ebwVe99Wb8CNodSd9fivhhPoBFxOUsU4MAfH0Knx5GKE0TuFV0SlF1pmJ17uBZX1NL986iYYrQ4ieOkcD29va%2F5emoepUNM4qSGaau28xBQNwu6iyy9yalFbeKG8yFs%2BCsAL5vMbyeNaGQ58YcCWCqTt2q4cz2mCdUOLrIMmCfSNp9xlrIGD3VOWL6SfOcS6dxCdTriRbA5mWgPmbkNe9uxiBPzCioKXBBjqkAcptGB0YdrI31GuQdm%2B12GArwmydZt2MV%2F1fisFUu5DIyZhE3%2FOlQD1fXtCaPqYbmr6uBK1fkJnyMi8mdbIQ7FVbTRbb7fCzTK2B4QB9a9FsIjpSFIA5W9KHwE9s%2BWMCIAc0edjC8supk0oI9wumWbJEi5Csa0%2BvKnTavEgLWOArY7w4a3kC%2FQ38ZVYfKgZQIiYHJQ0d7ELsjXQc87AMQM0RZPWH&X-Amz-Signature=2b0059041cd10989c90f4a871be110db964b3c0ebe5403a49cf1b25e63ddc4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
