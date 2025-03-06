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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI2MGA5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKH5wnoJ8L1ns%2BZFiaAmfgP6tGua0ZJVdxrNujdb8AAIhANprXb7PLIxAEMAsY%2BIPtOid9NnjZG01X77M5ETQ%2Flv%2FKv8DCDMQABoMNjM3NDIzMTgzODA1IgxnN50kkv6%2B4imtI2Uq3APVIeRzJL8k5R4mzMAzzSm7Ig6iS%2FeRXQxfRyVcS0qqlZWH1rObCZXz%2BqWFnl7jsS%2B3iNriUiodxQtWGoWhHoStvxNtVlfetqxFKNwO6vxl2889RFmzLTe16cNXczzlKnMh6QW6eK6ZojaxIZrBzr%2BXLM48Hh8Z0zjSoa5aOpbJxL9WKNsz6sw2J2%2FOccR3s9EZVBKsMW9PB62g0XnY2OugU7IIyvyQVsEgSrwDewOoSC03OXllMtp9nZvBrTqM1EImayvhNjPthZfErJoSYPNgegSZe8f2iOqETShW6TZnx3sPMb0I7KjGY1lga517kboqccaDO8FRBk1ei8g4YQb6gtO8H%2FhaiLB060ZRdNgo0QpJ0nExKc5ZAfQRG4Ingga94EfZw7LDaATc4cgFm9MbgA5qNWjr4deHBtK2%2B3Oj5iJxJxHLSxY9MQIX5UYB475of3kxIqoVnmPxXURnkS0CeqUV7Yf4V%2F9kSRaAaluo5i2oUXxo7La24whcCMGiJFHtUo%2BsMVBWuPtZUOkQS%2BG0r%2FtqKJCbKokixgjR8xmZjyJ4%2F8DXFJT2NTXEeM2sfTmWNjNuJHCD1F0Hi0n87mgjTHqpQImoqGDIaalQ9J9m9PDdzYmGb5Gz9h25ZDD4zae%2BBjqkAdO0Dmu5fx9ZNCheeMqrhWU2%2Fr3ZxsgBur58%2BtU2DzN%2FrOJkm6FShOn78%2BMkee0zFgC2ULISew5IrMWJQty7jVLpIHv7ePblM5wfCGPYvwLXZxjJSyO8G5CKT%2Fo6CcClWvHtyK9YPfmMePkLxFIgg8MMkZGtFYZvGMYoTk3aCsQLwPLbIkomiMKVTFNVeHRanXwsmASW6DAJoQkOShQExh1lcV7o&X-Amz-Signature=95d6e7ce465cc0257e426fd5106dcb5a0b956ed6e1860e4eb6c25e5d163ef75f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WI2MGA5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWKH5wnoJ8L1ns%2BZFiaAmfgP6tGua0ZJVdxrNujdb8AAIhANprXb7PLIxAEMAsY%2BIPtOid9NnjZG01X77M5ETQ%2Flv%2FKv8DCDMQABoMNjM3NDIzMTgzODA1IgxnN50kkv6%2B4imtI2Uq3APVIeRzJL8k5R4mzMAzzSm7Ig6iS%2FeRXQxfRyVcS0qqlZWH1rObCZXz%2BqWFnl7jsS%2B3iNriUiodxQtWGoWhHoStvxNtVlfetqxFKNwO6vxl2889RFmzLTe16cNXczzlKnMh6QW6eK6ZojaxIZrBzr%2BXLM48Hh8Z0zjSoa5aOpbJxL9WKNsz6sw2J2%2FOccR3s9EZVBKsMW9PB62g0XnY2OugU7IIyvyQVsEgSrwDewOoSC03OXllMtp9nZvBrTqM1EImayvhNjPthZfErJoSYPNgegSZe8f2iOqETShW6TZnx3sPMb0I7KjGY1lga517kboqccaDO8FRBk1ei8g4YQb6gtO8H%2FhaiLB060ZRdNgo0QpJ0nExKc5ZAfQRG4Ingga94EfZw7LDaATc4cgFm9MbgA5qNWjr4deHBtK2%2B3Oj5iJxJxHLSxY9MQIX5UYB475of3kxIqoVnmPxXURnkS0CeqUV7Yf4V%2F9kSRaAaluo5i2oUXxo7La24whcCMGiJFHtUo%2BsMVBWuPtZUOkQS%2BG0r%2FtqKJCbKokixgjR8xmZjyJ4%2F8DXFJT2NTXEeM2sfTmWNjNuJHCD1F0Hi0n87mgjTHqpQImoqGDIaalQ9J9m9PDdzYmGb5Gz9h25ZDD4zae%2BBjqkAdO0Dmu5fx9ZNCheeMqrhWU2%2Fr3ZxsgBur58%2BtU2DzN%2FrOJkm6FShOn78%2BMkee0zFgC2ULISew5IrMWJQty7jVLpIHv7ePblM5wfCGPYvwLXZxjJSyO8G5CKT%2Fo6CcClWvHtyK9YPfmMePkLxFIgg8MMkZGtFYZvGMYoTk3aCsQLwPLbIkomiMKVTFNVeHRanXwsmASW6DAJoQkOShQExh1lcV7o&X-Amz-Signature=e4ab318e046d8a8554d56cc04d9b8e269b61317f024fcc3c826ba14c7fff61e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
