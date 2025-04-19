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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGBOIAV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB%2Bn%2FmNzPFPUDMHZwnBTtltLRlaoi89WeAAIItnEWCZ0AiBtMxHTFdlBzMzan%2Fe1Givn0QW99Dp%2BOdNn%2FzAios9UQCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCUlQlxQXVbu5AfRKtwDPgJKtnREmOjej%2FjhnerJgo0cq4%2BalAe6s2c3Mt1FLHo8lrLC59WpFezJDD60Atngw%2B6ckDgp7VFLFcXAzwPxMEl8d2Qvgf%2BcVGh3AH%2BNIRQBkS9yAA9VN5H8HrDQ11CvoIo%2F2xcYJIDgy0BaT1fESn6WlYmG341a5DO6QhN1Ph8NVJQCnNevzcn1wd%2BYOMvA6jtKM9l1rx0FZ%2FhhkcB3VsMxKWOq4d2MT14VsebYXHDFfsm%2FOsC4MgZV9CbdhAt3zbO3zCY6lwtiRCUt2wAWVCs58hFyj6RxqKqbb4JhVmopR3Ss5VBQ2sSxUoaYVAF9aiXKLSzedbGTn0JNJOXjAwIpZ5dBRWshP8V5wD1LVoh%2F%2FI2rKpOszXf4Nqo8Mmzs0s0ZpaqTfM9Q1o8zmEq839KKmLQ7coUqQtWkwIznNYHOUDI4c7aji8STiOs20afO1fpusStZKmC1peLorCYQIHEfyhYAt1HTMUNHsHk8Hb6wN2%2FXUeJhLFwbijCdslofgDCfs8QO0twwTF2HBWjofJtVQYhP6ivsNg1MNmzZ3IMktCbKaDT5uHinaXHyDW2dN2njvhbcS3xwICqZCgN0JRukTPhp1isyEAMHdSTtffnk%2BIgibLVdu%2ByHGQ0wpKCPwAY6pgH9EiksEmQiEcST84DLt%2F9K64BSQkQqZrl6h%2F2J6IYOBk82ux2QbcHma4Fc8crIm09IRZ0sWVIPXhfWVI4Is6wQlUjLDPyLt1Gyd59fEVwpzaemjxbGKb6B7rJ25yIUjTEo3OkPbBAjqIYE24mCPjDJSMyRi8hidKjtHiz9eXexcLPzs9WYUmRZUOIzXbZbPHnqXC5EbPv5QteufW26XaBtqCFPaJB8&X-Amz-Signature=96c199bcf8e7aee88890b369c87260f0a998ecba39b778d52daf2f8e83afcf0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGBOIAV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB%2Bn%2FmNzPFPUDMHZwnBTtltLRlaoi89WeAAIItnEWCZ0AiBtMxHTFdlBzMzan%2Fe1Givn0QW99Dp%2BOdNn%2FzAios9UQCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCUlQlxQXVbu5AfRKtwDPgJKtnREmOjej%2FjhnerJgo0cq4%2BalAe6s2c3Mt1FLHo8lrLC59WpFezJDD60Atngw%2B6ckDgp7VFLFcXAzwPxMEl8d2Qvgf%2BcVGh3AH%2BNIRQBkS9yAA9VN5H8HrDQ11CvoIo%2F2xcYJIDgy0BaT1fESn6WlYmG341a5DO6QhN1Ph8NVJQCnNevzcn1wd%2BYOMvA6jtKM9l1rx0FZ%2FhhkcB3VsMxKWOq4d2MT14VsebYXHDFfsm%2FOsC4MgZV9CbdhAt3zbO3zCY6lwtiRCUt2wAWVCs58hFyj6RxqKqbb4JhVmopR3Ss5VBQ2sSxUoaYVAF9aiXKLSzedbGTn0JNJOXjAwIpZ5dBRWshP8V5wD1LVoh%2F%2FI2rKpOszXf4Nqo8Mmzs0s0ZpaqTfM9Q1o8zmEq839KKmLQ7coUqQtWkwIznNYHOUDI4c7aji8STiOs20afO1fpusStZKmC1peLorCYQIHEfyhYAt1HTMUNHsHk8Hb6wN2%2FXUeJhLFwbijCdslofgDCfs8QO0twwTF2HBWjofJtVQYhP6ivsNg1MNmzZ3IMktCbKaDT5uHinaXHyDW2dN2njvhbcS3xwICqZCgN0JRukTPhp1isyEAMHdSTtffnk%2BIgibLVdu%2ByHGQ0wpKCPwAY6pgH9EiksEmQiEcST84DLt%2F9K64BSQkQqZrl6h%2F2J6IYOBk82ux2QbcHma4Fc8crIm09IRZ0sWVIPXhfWVI4Is6wQlUjLDPyLt1Gyd59fEVwpzaemjxbGKb6B7rJ25yIUjTEo3OkPbBAjqIYE24mCPjDJSMyRi8hidKjtHiz9eXexcLPzs9WYUmRZUOIzXbZbPHnqXC5EbPv5QteufW26XaBtqCFPaJB8&X-Amz-Signature=0f5aeefe6d1926c02ca187040d5d037f7aefce66e472ef46db54048fdf1e18bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
