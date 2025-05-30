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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRFEY2F%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2F%2BsDt8oyD9b7N56wyZ0BIS%2B9kzRT0C%2FrBigvltEQSAIgX4ethGs71BQP2jXhVGIsQdZwrRLuEnONL5CxecGwAm8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMk5zPLyJCP4hfcESrcA7rfyJUQ78qorqxfHxSqKZHKjGJq3sDzSUiBJhcq2wOx%2BRSsed2QQQbKKUllIztkYFXDsbdoaCk1Atj6ta6h0iEbBb7lGBQ%2F4blGmUrBLbWOLr6mBUpMgJ04dAKRNm5VtjsdyG2iYDhje1JztJHpWzrwi3aCVF0NweGqWV0KzlixLx30T7X%2F%2BOtKbpJmObYVauMQbIdp4JLYO%2B10b7Awp3h9H0xXH6LxdIMFp2c%2F9GIb%2B3tTjMLNai2Xhfjja5%2Babl4RafUla%2FW6M7jpCxjbeuI1mcGB1GnNvfEeLtu%2FO3tlPH%2FiMXMST8CKiGLBWl%2FvziR6Jse3klPHb0bvYdgejra%2Ba7CrUt08A4umE2Wa0B2KV55F9gAR%2Bkm4Bq3VXqvpv4QXVZ3WO55Txo6zZ8lQZ3RLCbFtuLQo0DAwxqDD432N4d3JWXSVGl514%2BWCeBLvWtjB5f9H4uO242fBX9CsCip%2BRZ7m6DpgL5Jwh5QacFR%2BSmPw76yrdiV4DxuudZNkk8UcrX6ffEPoSEB0XOAxZP%2FnngxP39of%2FulM0AqFOzDJu7gMf8ArZJqLKnukmBaHpOtjbHxt%2Bi4QSjob6gsfsGpZ6LN6Sjr4w1e2JzrL%2BvS27VupmVyJelW%2BPJUaMMz%2B5MEGOqUBejqZPM9extQxuTEETSiF7WhMUyc8fJ%2BzsrQXraARypTpjiCSH5MJ4KRPf7QSSIsZKq8c4xft%2F0D6ubr07W3hEsDp2tGa5CIipwBmmZNxGJcL4Z2E%2FLNywN%2Fqb9rcrJhMk1UHoaZKLUUYXKZO5uCqvtZo%2BnO4K7waO7bOcEIhgWTb%2FXhNuGcNtxQKWdclOIOM2gbNxUApBSdtM0JiMbY%2FtG7n4dpy&X-Amz-Signature=d255c07e7a6570ad7586a14677c198b6f26b16895cd922c6d697e6462bd242d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRFEY2F%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2F%2BsDt8oyD9b7N56wyZ0BIS%2B9kzRT0C%2FrBigvltEQSAIgX4ethGs71BQP2jXhVGIsQdZwrRLuEnONL5CxecGwAm8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMk5zPLyJCP4hfcESrcA7rfyJUQ78qorqxfHxSqKZHKjGJq3sDzSUiBJhcq2wOx%2BRSsed2QQQbKKUllIztkYFXDsbdoaCk1Atj6ta6h0iEbBb7lGBQ%2F4blGmUrBLbWOLr6mBUpMgJ04dAKRNm5VtjsdyG2iYDhje1JztJHpWzrwi3aCVF0NweGqWV0KzlixLx30T7X%2F%2BOtKbpJmObYVauMQbIdp4JLYO%2B10b7Awp3h9H0xXH6LxdIMFp2c%2F9GIb%2B3tTjMLNai2Xhfjja5%2Babl4RafUla%2FW6M7jpCxjbeuI1mcGB1GnNvfEeLtu%2FO3tlPH%2FiMXMST8CKiGLBWl%2FvziR6Jse3klPHb0bvYdgejra%2Ba7CrUt08A4umE2Wa0B2KV55F9gAR%2Bkm4Bq3VXqvpv4QXVZ3WO55Txo6zZ8lQZ3RLCbFtuLQo0DAwxqDD432N4d3JWXSVGl514%2BWCeBLvWtjB5f9H4uO242fBX9CsCip%2BRZ7m6DpgL5Jwh5QacFR%2BSmPw76yrdiV4DxuudZNkk8UcrX6ffEPoSEB0XOAxZP%2FnngxP39of%2FulM0AqFOzDJu7gMf8ArZJqLKnukmBaHpOtjbHxt%2Bi4QSjob6gsfsGpZ6LN6Sjr4w1e2JzrL%2BvS27VupmVyJelW%2BPJUaMMz%2B5MEGOqUBejqZPM9extQxuTEETSiF7WhMUyc8fJ%2BzsrQXraARypTpjiCSH5MJ4KRPf7QSSIsZKq8c4xft%2F0D6ubr07W3hEsDp2tGa5CIipwBmmZNxGJcL4Z2E%2FLNywN%2Fqb9rcrJhMk1UHoaZKLUUYXKZO5uCqvtZo%2BnO4K7waO7bOcEIhgWTb%2FXhNuGcNtxQKWdclOIOM2gbNxUApBSdtM0JiMbY%2FtG7n4dpy&X-Amz-Signature=c2588bc5038d6dca22b6c5de35447e308907497909ca928b5c801a4331dc90e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
