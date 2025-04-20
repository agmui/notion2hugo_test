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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O2ONT3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEqZIUZ9IFz8%2Fww0IqwNzMJrOwnuP1nrg%2BSzgAft9yFNAiEAnL7xPzWpMZKbH6JWydkLk8Fpv8RVhJxjGR7QttYMv7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu4t9uo45e2orQeLCrcA%2FRjlXTPTkdurXILus7cNDnYnSbCXfgrH0ev2LD4Ldv%2Fz9H35d7GX0mCvzrysZQEI3ae3RDoI2gZVKOAd%2Bpz2W%2Bj4kEFaizck8SwP2aXWHQWRmyW0f50lG9bmQxLlBzyCIR7ygVlg4fRhD7moA9JcSxo%2BblpKovbyuQxPtdl9ZZOkQs1xiHX2K2R1iGlfINqMdzkAfXq7NQC0XpgczhyYMblPTLqaktqNu%2FpTA1BPej2OEncTTIB6S8ldfiMG3pzalP17e1RBenvwWhBMmxAVT3HNMfTdoFbTdtlCEYaiCKmLdRNpQv1r1VsRXGZulLB%2Flg4f2y8Kr8e0vXs8UbUs7RUvb2pKgH%2B4dDogsoIUrndM51HmQ4sDj5uhzQyZl2R%2FNlfdWv5bz72WTNCAkEHohmBtW9OouH%2FgKvqx6Lu8Zn%2FEct0kZrOZwe%2B%2FjXUpXq%2FLVNsKxVzEGm14FQp1XNt1hse2NRERKaPuqJI4SNJvl2%2Fi%2F5Va9Nsq7mm8AeiWqLPVxRhw78MJ%2Fcw1U3f%2Fcmvrt0E5yr4K2%2FdUpFuBIRGhC6IW8tUsXgB1kbtKcnIN5UqZH2GascTNn4YwudOBhzuU7WE23RxsxWcHACWibIHeOhcyPAkaTxaOmJAflj5MOPklMAGOqUBjB4nl0FmH6eGO%2BRP%2FJu4OGQsVucXXoZuE6mbuXzxXLEc%2BjgLaGbXS4I00oqD3GHEuSmms3CDRzxzvaKthanm2NQZDLQyKkpCW7cBbB7K9azFxTSj4PXygILEYXs3iKa%2BEq5zFJWe3fq2j%2BVydIm0%2FI8v%2FB6BtdKU8exHD33J5dGxXQqMZ3DkQqIM94%2B%2F3LR6JB8qIll3yHk5xiBCJXKC8jsTC0Wy&X-Amz-Signature=a99d622342e1040c4a7a3d99e0ec22b86ee83506568201a4581338259d8497f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O2ONT3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEqZIUZ9IFz8%2Fww0IqwNzMJrOwnuP1nrg%2BSzgAft9yFNAiEAnL7xPzWpMZKbH6JWydkLk8Fpv8RVhJxjGR7QttYMv7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu4t9uo45e2orQeLCrcA%2FRjlXTPTkdurXILus7cNDnYnSbCXfgrH0ev2LD4Ldv%2Fz9H35d7GX0mCvzrysZQEI3ae3RDoI2gZVKOAd%2Bpz2W%2Bj4kEFaizck8SwP2aXWHQWRmyW0f50lG9bmQxLlBzyCIR7ygVlg4fRhD7moA9JcSxo%2BblpKovbyuQxPtdl9ZZOkQs1xiHX2K2R1iGlfINqMdzkAfXq7NQC0XpgczhyYMblPTLqaktqNu%2FpTA1BPej2OEncTTIB6S8ldfiMG3pzalP17e1RBenvwWhBMmxAVT3HNMfTdoFbTdtlCEYaiCKmLdRNpQv1r1VsRXGZulLB%2Flg4f2y8Kr8e0vXs8UbUs7RUvb2pKgH%2B4dDogsoIUrndM51HmQ4sDj5uhzQyZl2R%2FNlfdWv5bz72WTNCAkEHohmBtW9OouH%2FgKvqx6Lu8Zn%2FEct0kZrOZwe%2B%2FjXUpXq%2FLVNsKxVzEGm14FQp1XNt1hse2NRERKaPuqJI4SNJvl2%2Fi%2F5Va9Nsq7mm8AeiWqLPVxRhw78MJ%2Fcw1U3f%2Fcmvrt0E5yr4K2%2FdUpFuBIRGhC6IW8tUsXgB1kbtKcnIN5UqZH2GascTNn4YwudOBhzuU7WE23RxsxWcHACWibIHeOhcyPAkaTxaOmJAflj5MOPklMAGOqUBjB4nl0FmH6eGO%2BRP%2FJu4OGQsVucXXoZuE6mbuXzxXLEc%2BjgLaGbXS4I00oqD3GHEuSmms3CDRzxzvaKthanm2NQZDLQyKkpCW7cBbB7K9azFxTSj4PXygILEYXs3iKa%2BEq5zFJWe3fq2j%2BVydIm0%2FI8v%2FB6BtdKU8exHD33J5dGxXQqMZ3DkQqIM94%2B%2F3LR6JB8qIll3yHk5xiBCJXKC8jsTC0Wy&X-Amz-Signature=e56c0ee0bd0d9d366d960e265244d7054d6a9b0937e1e98714bbba5b54bf41b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
