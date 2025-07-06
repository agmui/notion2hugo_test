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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2XPAJU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB0jhmMxnIe%2BMjDUshMbvV06C9oO51jie42tdzxypzzyAiEAlkXrBAyVUtbUw4A1Ytkn6iDOVfYKqjSXbqOfgvspvZEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNNwLT946JVc%2B5xM0SrcAwj706LXFW88WyF7ceHLatialBfYCZwej5MLbfO6Vjc5CRqLmiEx%2FJ1dqVtBzONSSk%2B%2Bm74KL50sL1a80xY2FiR3u%2FUnplaOw1QGRXeR4xqCxHSw7rwWJOGEH2nXve78oHA%2Bs1spR2a%2FPxqJLEXxgH%2Bc9hi7aSvSJa%2F%2BnIf5fQAM2Q1ZU%2FoaScClm9QBho978SzbjjrmQfZNhhBcks3Ap8erQqRssQNjIoAeRZvpJ%2B48VcYp06wskkDlugL0Hx1NnInQYcBrFa3fsay%2FCAlicc5S2B%2BVfdzUMKbomwXGAcbXPjk%2F7TroNTnF%2FQPmWnhd9B3DSD1avJnyVO2CBjmnnQp2qb7I4%2FalQsrEXfE8ROB5xolRNOCyNYpIjnTDJJ%2F7VS9xNCaXn1iu7W4h8hmlB9T%2FpTjaMaMV%2BygrBitlJdedaqxiNlPBqKCmYK7rw2qmqxkC%2B29Q5qHQepSrJJzUufsFeacvX9BpXtZXHHIwTxDXWir5i8jZxwurdaiaqwihENB9hmqxbqr7%2Fvhv3IKoe%2BwzpzjoXOgVtW%2FUxTY%2F2cnqZYKf2kX%2BZEjM%2BNdgV497O9PrX2%2FPz3mNZNi7OlxfdbzIKFauiCoBLcZQvQ4xOxjTa6jUpRf3gNYWkbJIMIyvqMMGOqUBzHuPmCihcM%2B1G9odFlfl6xirt75Nzx6Q9ZWoCgvsJnZfXWRUZg3A3mh%2FWDHqMggZ%2BocGK8Jh9Je2J9oyXHfD5q5dX%2BgksUx7X3CVHxO3EDTrdQCJ0w4LIynMlk4vf%2F8rReceYhdhtdffbcyUDS%2FOLXw78OC3pR8p26qCGE%2B1HssA%2F8wFKo%2BvSQi5WKlPEh3mA14UT26nDzkeD7W54FTVD82ABxmS&X-Amz-Signature=acd6fdce9a20d37a2f637af98f4c066a734e349ccabab1ad9362bf6b3e83a89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S2XPAJU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIB0jhmMxnIe%2BMjDUshMbvV06C9oO51jie42tdzxypzzyAiEAlkXrBAyVUtbUw4A1Ytkn6iDOVfYKqjSXbqOfgvspvZEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNNwLT946JVc%2B5xM0SrcAwj706LXFW88WyF7ceHLatialBfYCZwej5MLbfO6Vjc5CRqLmiEx%2FJ1dqVtBzONSSk%2B%2Bm74KL50sL1a80xY2FiR3u%2FUnplaOw1QGRXeR4xqCxHSw7rwWJOGEH2nXve78oHA%2Bs1spR2a%2FPxqJLEXxgH%2Bc9hi7aSvSJa%2F%2BnIf5fQAM2Q1ZU%2FoaScClm9QBho978SzbjjrmQfZNhhBcks3Ap8erQqRssQNjIoAeRZvpJ%2B48VcYp06wskkDlugL0Hx1NnInQYcBrFa3fsay%2FCAlicc5S2B%2BVfdzUMKbomwXGAcbXPjk%2F7TroNTnF%2FQPmWnhd9B3DSD1avJnyVO2CBjmnnQp2qb7I4%2FalQsrEXfE8ROB5xolRNOCyNYpIjnTDJJ%2F7VS9xNCaXn1iu7W4h8hmlB9T%2FpTjaMaMV%2BygrBitlJdedaqxiNlPBqKCmYK7rw2qmqxkC%2B29Q5qHQepSrJJzUufsFeacvX9BpXtZXHHIwTxDXWir5i8jZxwurdaiaqwihENB9hmqxbqr7%2Fvhv3IKoe%2BwzpzjoXOgVtW%2FUxTY%2F2cnqZYKf2kX%2BZEjM%2BNdgV497O9PrX2%2FPz3mNZNi7OlxfdbzIKFauiCoBLcZQvQ4xOxjTa6jUpRf3gNYWkbJIMIyvqMMGOqUBzHuPmCihcM%2B1G9odFlfl6xirt75Nzx6Q9ZWoCgvsJnZfXWRUZg3A3mh%2FWDHqMggZ%2BocGK8Jh9Je2J9oyXHfD5q5dX%2BgksUx7X3CVHxO3EDTrdQCJ0w4LIynMlk4vf%2F8rReceYhdhtdffbcyUDS%2FOLXw78OC3pR8p26qCGE%2B1HssA%2F8wFKo%2BvSQi5WKlPEh3mA14UT26nDzkeD7W54FTVD82ABxmS&X-Amz-Signature=dd06374b244a53209f28f48ed4f578f21f3e7c6825f461af99283af7447a5425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
