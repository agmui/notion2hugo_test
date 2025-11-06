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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYIN6TI%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXkPpAmmEvj63BYhSBqKmwCOAvEmVSyyCZ40Q1aCONdwIhANEZwnkyvIViMIuDFA%2BIIX3kn%2BfwzRGn8fpiLH8fTJe2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJMc2zfW%2BKnj1rPQkq3AMPxi1vKMJxsXycLeu956bYQciWXk6r8JYJ7pI%2ByvALkN%2B%2F3ZVhhMgrFwmnPqxfq4%2B2TnMGcjGf4Y1iMaCHPWOZnRhjetD%2Baxghqj01ofjoLrNd6%2FsJ6gtVy3jz0U6gmmkqL48r%2FNwlCK1cQU7h9hWDPTZ9OE8afCnHfwRG1lDZ%2FhKDVUePHIWl01OqluIH57w7q0Vohj6mCpwhw%2F7gZVaYQDeorsHXWiCoYlRQGvWQEPoj7Z2MpT%2FpKGrIloc%2FscAbIh6JQroBLzemYsbTrdxl9ghfCISfCQ4k2RtCDMU2f39V7vakYuxhbBnnBeyCd0I%2FIDpqfbSDYBgxQnO0RQC2Joepzh96Dv6oG38efbjwlqmxfn3hcFN6srRk%2FQs2CFX828yMPOQeD9CIeuxXcRdH14twF33S1kR4g05Vrjh5U3dgndLXThdPbMh5A%2BSUJlFEkWpWs75CS7OFK4F2yEkYQ%2BYJbQKHu4lLNO3r6ET%2B%2FwYzcCNm7uduLguqzabX8dThSvnXKw5m0%2FiQOCQr2h6FKuEQdHTdG3JvwJmLk4%2FkxOKwMOt5%2F7vY1V2cibwFFdEGJzh4UPngcVK5Epm%2F5C1AHiDBkcG4Pbx7KhLqn31Nh6BKnyKtzsphMs2DnDCQ8K%2FIBjqkAdR%2BrPzsIWMV%2FLKdjsPsZ5Lq19Hc8%2BHXFQrPMon%2FSLyV%2BzuvR0wzDTBIdyGYolFUZF41SEkganJIlmuk9FOgVZAAQWSz2y58uoWSiBt7YsWltVrd8Ugy%2FmNgtHcnYr6ZfmP41qiApYdstH7%2ByZD0crvBOmaE1q4i4rNyHHGpLHrNjryc5TtAmtuNdpRGkuLTID5X%2BB%2FnRORQTnjd6WTSSCuySAqv&X-Amz-Signature=b9018eea44f5b7cb76697ee50e06b2a5802e1de24c796244edd66b29b33e89a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYIN6TI%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXkPpAmmEvj63BYhSBqKmwCOAvEmVSyyCZ40Q1aCONdwIhANEZwnkyvIViMIuDFA%2BIIX3kn%2BfwzRGn8fpiLH8fTJe2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJMc2zfW%2BKnj1rPQkq3AMPxi1vKMJxsXycLeu956bYQciWXk6r8JYJ7pI%2ByvALkN%2B%2F3ZVhhMgrFwmnPqxfq4%2B2TnMGcjGf4Y1iMaCHPWOZnRhjetD%2Baxghqj01ofjoLrNd6%2FsJ6gtVy3jz0U6gmmkqL48r%2FNwlCK1cQU7h9hWDPTZ9OE8afCnHfwRG1lDZ%2FhKDVUePHIWl01OqluIH57w7q0Vohj6mCpwhw%2F7gZVaYQDeorsHXWiCoYlRQGvWQEPoj7Z2MpT%2FpKGrIloc%2FscAbIh6JQroBLzemYsbTrdxl9ghfCISfCQ4k2RtCDMU2f39V7vakYuxhbBnnBeyCd0I%2FIDpqfbSDYBgxQnO0RQC2Joepzh96Dv6oG38efbjwlqmxfn3hcFN6srRk%2FQs2CFX828yMPOQeD9CIeuxXcRdH14twF33S1kR4g05Vrjh5U3dgndLXThdPbMh5A%2BSUJlFEkWpWs75CS7OFK4F2yEkYQ%2BYJbQKHu4lLNO3r6ET%2B%2FwYzcCNm7uduLguqzabX8dThSvnXKw5m0%2FiQOCQr2h6FKuEQdHTdG3JvwJmLk4%2FkxOKwMOt5%2F7vY1V2cibwFFdEGJzh4UPngcVK5Epm%2F5C1AHiDBkcG4Pbx7KhLqn31Nh6BKnyKtzsphMs2DnDCQ8K%2FIBjqkAdR%2BrPzsIWMV%2FLKdjsPsZ5Lq19Hc8%2BHXFQrPMon%2FSLyV%2BzuvR0wzDTBIdyGYolFUZF41SEkganJIlmuk9FOgVZAAQWSz2y58uoWSiBt7YsWltVrd8Ugy%2FmNgtHcnYr6ZfmP41qiApYdstH7%2ByZD0crvBOmaE1q4i4rNyHHGpLHrNjryc5TtAmtuNdpRGkuLTID5X%2BB%2FnRORQTnjd6WTSSCuySAqv&X-Amz-Signature=1cbef4fb937e1fe384585a833a06419dc9ab15181d67eacd60ca22cea50c2865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
