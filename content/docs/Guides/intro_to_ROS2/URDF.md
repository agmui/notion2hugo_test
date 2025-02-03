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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P545RU2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqS1Nh7%2Fy9E4zmFQIrRl3uApdJv1vFvABFh%2FFrLQ61AIhAJyc%2BeZHE6AzXMNlEAq21z9Hu4SH6SqfzBt3aJs77U6FKv8DCBUQABoMNjM3NDIzMTgzODA1IgwzayNYHAjnss1V%2FMMq3ANHEn8Gz86nnBbsqIgVd8AR43gN86nbo0VfGpgI5QaIWGXLPgDQFqxF9QfK1XDLzb%2BpNAnlo9BF3IZ0kRIMXfGQg2l1sxVuVNsZbbYUUh%2BuxNCnCBO1vBkxP7CdyBzzkSed5TYIdBeGnwrWE86t8U2HAXJ%2Bq%2BNPYL4l2zJslykFrg4PW5CxTDuF7psGn1nwAUPxWr36J%2Bwc6jmfs%2BYqV58fqjvejzX0JLDvmLTA2wL2RNQEEtJ8AnQHMwRGCHkBMn8FLOEJYJPoHBMLHNWXDY%2BqXYL2notK5KRLztNkzP3q1RpBQKAWCCFnhkpVLVpZKIbT5Y06p2vA7nB8Z%2F6EhfmAPS4vmyqskFzit2FYJCJ4jrz1s7WRXQtglO1nuMNJN95wSrq3hknuXOjemT9TjhwWuYq%2Fm9ibvNSRZDzVy5FAKk5Z0SYIje3mkGYw8bmw3hNjPDaAKiNmepsmN0q%2F2A5yc0xBWTQDHQ46QkbS5V4DVaKAhrgZ8lt6gwmCGgAQS9SYhCa5emsZ6vHWCfWMPrytlO8sLFeN%2BPUYkYiqA54mCPNpQk4glYqNH6KdyzIAu%2BK6mGdwoktZoj3QnQu7Ru0t5f5r8%2Fc7K9VoQ03IUdy4GSRaspWbW6QWKrMLZzCD1YK9BjqkAQbrXd9B95xFBa5JXFmaeoDTxfTBUyDkmDM9OW%2F3A%2BQRd%2F45jZZuG7Ft2rdFzJIk1GFj%2BtIwBooqCZFhMefXw5%2FxTyUzKspCfEtq%2BlH81%2FFHe9NpMS1w49SRYE7xzCB0HWoUKy5JTXxoAktpyFlp%2BbTELxRgghqJxiVlxZv15xYULsekukKRrUD0ONL18jg%2F3fqmpx0pR7bvNW7TFw5txFT5oG5b&X-Amz-Signature=313d90ebd441f3e56a3d756d18b1d7e3361ae193f8be0e3bc01152ee399970b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P545RU2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGqS1Nh7%2Fy9E4zmFQIrRl3uApdJv1vFvABFh%2FFrLQ61AIhAJyc%2BeZHE6AzXMNlEAq21z9Hu4SH6SqfzBt3aJs77U6FKv8DCBUQABoMNjM3NDIzMTgzODA1IgwzayNYHAjnss1V%2FMMq3ANHEn8Gz86nnBbsqIgVd8AR43gN86nbo0VfGpgI5QaIWGXLPgDQFqxF9QfK1XDLzb%2BpNAnlo9BF3IZ0kRIMXfGQg2l1sxVuVNsZbbYUUh%2BuxNCnCBO1vBkxP7CdyBzzkSed5TYIdBeGnwrWE86t8U2HAXJ%2Bq%2BNPYL4l2zJslykFrg4PW5CxTDuF7psGn1nwAUPxWr36J%2Bwc6jmfs%2BYqV58fqjvejzX0JLDvmLTA2wL2RNQEEtJ8AnQHMwRGCHkBMn8FLOEJYJPoHBMLHNWXDY%2BqXYL2notK5KRLztNkzP3q1RpBQKAWCCFnhkpVLVpZKIbT5Y06p2vA7nB8Z%2F6EhfmAPS4vmyqskFzit2FYJCJ4jrz1s7WRXQtglO1nuMNJN95wSrq3hknuXOjemT9TjhwWuYq%2Fm9ibvNSRZDzVy5FAKk5Z0SYIje3mkGYw8bmw3hNjPDaAKiNmepsmN0q%2F2A5yc0xBWTQDHQ46QkbS5V4DVaKAhrgZ8lt6gwmCGgAQS9SYhCa5emsZ6vHWCfWMPrytlO8sLFeN%2BPUYkYiqA54mCPNpQk4glYqNH6KdyzIAu%2BK6mGdwoktZoj3QnQu7Ru0t5f5r8%2Fc7K9VoQ03IUdy4GSRaspWbW6QWKrMLZzCD1YK9BjqkAQbrXd9B95xFBa5JXFmaeoDTxfTBUyDkmDM9OW%2F3A%2BQRd%2F45jZZuG7Ft2rdFzJIk1GFj%2BtIwBooqCZFhMefXw5%2FxTyUzKspCfEtq%2BlH81%2FFHe9NpMS1w49SRYE7xzCB0HWoUKy5JTXxoAktpyFlp%2BbTELxRgghqJxiVlxZv15xYULsekukKRrUD0ONL18jg%2F3fqmpx0pR7bvNW7TFw5txFT5oG5b&X-Amz-Signature=57d7f1bd1b35a01fb7db39e1018a4fab57dd7e3c1016eaeeb7783938cf1e5f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
