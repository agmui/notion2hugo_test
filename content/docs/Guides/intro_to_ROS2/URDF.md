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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPZCHGG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3PZl%2BLce0zvV25TDrkij1w9gkrV%2F%2FAQ7CH7O1b5l%2BqAIhALKweQqbh0GZlHqUcUBRJOW7JFpuo%2Bc35P6ILULxs%2FflKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9e13%2FBYpgcN8smqYq3APPwWEEoDHF0st2j7JtlUtKlq2E0YTSBj1VQD7lvq83lgZrz0Ryzx6rDYjbwchLOMy53W7V4rVMcVpLKL8zuJg%2FTVFFJ%2BXbpzqg7MY9WxbA2Xfcb6RziNlSitixP1tMMUUzBGq9ZpKhv3QLz807GAT4saypzZhor2z0T1ilQuYtLcG31juJ0qCzFLx1YYwgiGvoK3zQz8mTu89A7%2B%2FKfCTkVZWsZEHEuCbFAnfa6lzEiAeIG0%2BOvm9G3%2FIwb4kSfTA58ecike6dzsWtnYdRYWOAloJkkRg%2BzJ8wEfwsKEwLEuJvWCo7Jnb0p%2B%2FqZ5XCgGClVtPfa2tvHGZeHQM6HB6XAoFyjpFtYTjH55wjdqdGS6E7Vxz4GMsRJqIYos66LA4v7f94rkBJbGcyw2vA6vrzgSBw%2Bfng5Kpp43HTgBN6a3A%2B70mpGzX1oaZ2yCXXt10N1Kt%2BWbUNyO5Y3cZhgkWD1HtJfNl3dVCSiqAkaMWazBECxk0dAJyirdWWMrMcqgQBXNSL%2BGxFB3Wb3e2JxrYKB0KKtrAJmkmxw94aoiHchCQv8PiFpjvxvEH17xz29plqB3N2%2Fa79CzhKs4ICsuknRk%2Bwwk9ceV2fDgnlvc2zvIuguD6kfVdoQY%2BygTDEkOPBBjqkAX5ykm3lUijDDESkNoFv9tEspQutlTDqnHJfMSa7HR3sBzHMOGml4WfM7HqH68zK6I7sSfjDMMQ8SQ5OGKfL0SGknyMr1Bg9628oK84Ve8Ti1Y0W%2BWBvrtGyLsmfiXSEdAwDP%2B0ghSH8wIK1%2BqfBuI0vz6dFu8c2iCpGzwhmaqhWfBwq99UlSuaNxNI2LACWJKCf5pBFqgeujEAJGuFQUIxRbKis&X-Amz-Signature=5223bb4ec9dc76e7488b3bbc8e5fbf0c11cf2a5b6fac3627e0607eeebbfc15dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSPZCHGG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3PZl%2BLce0zvV25TDrkij1w9gkrV%2F%2FAQ7CH7O1b5l%2BqAIhALKweQqbh0GZlHqUcUBRJOW7JFpuo%2Bc35P6ILULxs%2FflKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9e13%2FBYpgcN8smqYq3APPwWEEoDHF0st2j7JtlUtKlq2E0YTSBj1VQD7lvq83lgZrz0Ryzx6rDYjbwchLOMy53W7V4rVMcVpLKL8zuJg%2FTVFFJ%2BXbpzqg7MY9WxbA2Xfcb6RziNlSitixP1tMMUUzBGq9ZpKhv3QLz807GAT4saypzZhor2z0T1ilQuYtLcG31juJ0qCzFLx1YYwgiGvoK3zQz8mTu89A7%2B%2FKfCTkVZWsZEHEuCbFAnfa6lzEiAeIG0%2BOvm9G3%2FIwb4kSfTA58ecike6dzsWtnYdRYWOAloJkkRg%2BzJ8wEfwsKEwLEuJvWCo7Jnb0p%2B%2FqZ5XCgGClVtPfa2tvHGZeHQM6HB6XAoFyjpFtYTjH55wjdqdGS6E7Vxz4GMsRJqIYos66LA4v7f94rkBJbGcyw2vA6vrzgSBw%2Bfng5Kpp43HTgBN6a3A%2B70mpGzX1oaZ2yCXXt10N1Kt%2BWbUNyO5Y3cZhgkWD1HtJfNl3dVCSiqAkaMWazBECxk0dAJyirdWWMrMcqgQBXNSL%2BGxFB3Wb3e2JxrYKB0KKtrAJmkmxw94aoiHchCQv8PiFpjvxvEH17xz29plqB3N2%2Fa79CzhKs4ICsuknRk%2Bwwk9ceV2fDgnlvc2zvIuguD6kfVdoQY%2BygTDEkOPBBjqkAX5ykm3lUijDDESkNoFv9tEspQutlTDqnHJfMSa7HR3sBzHMOGml4WfM7HqH68zK6I7sSfjDMMQ8SQ5OGKfL0SGknyMr1Bg9628oK84Ve8Ti1Y0W%2BWBvrtGyLsmfiXSEdAwDP%2B0ghSH8wIK1%2BqfBuI0vz6dFu8c2iCpGzwhmaqhWfBwq99UlSuaNxNI2LACWJKCf5pBFqgeujEAJGuFQUIxRbKis&X-Amz-Signature=b7face8d4f2ad68ec7384311d0dfa56619770c6ce28cd7dc2e168e8291de1944&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
