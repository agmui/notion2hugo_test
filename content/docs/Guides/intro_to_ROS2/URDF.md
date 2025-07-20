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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHQYSAZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxoHdeBY8eTgIFrEnziFusWixd%2BuZE9%2By1N6OhhLMbAIhAN5FKtFQhxrWh33SqOw6GEIHn%2BArfwT8K0ZkBQsBcfcSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZd4Jo%2FBkvoRNGv0sq3AOlY0vp%2FHTlNsWWuktZtbfmHPmUYprNQQjAxCUrHEnf2tTT0Pr4MpoToS9YQBew3wowc6bXPBeSrTQjQOG1zNwJxaXKp6%2BWTGZ0Z8eJBUFCZlhueqHQ4z5yoAW1K%2FmfqJCc5vDgwLcrX7%2B1lSY3bYtK01JjeTK7KOEEyjzZyQUPPXKksomivVTQMPla5ME4iFdfs3VkSCwdi7FEA5kFQhfXrsfkE2zVtRUtVvVXZD%2FWSuCDUjOf8PoVB6SUh4IlK0u0V8dKr2Ajq648pcK2KgYpqTId0k7OCWh8MUGTxgyTnt%2FPwQbDTeQfGeq3YyfS68unwTyixGL8VjC%2BncspwQ%2FHU9dFTWV2nLmZzSHfzrGUq8rT%2FASNrHl0J1B9TyF94xyMAm0%2BVEu5Tkyd4mADM67hUeMwtPfvwVQbhfdHpSKhU9fWqG%2BGcIXkdEMsGn6CtiwGdTM2ImbtSSrSNDDmVWdEShxl9gjNjJcgW6dchXjH7PoH56gQ7IszC3CDXmjN0Vo%2BEMVjAoDRA3tyq8n2bpGSpS9NtOjzGRO5ciZO%2B%2B6bi4vIWbQu5%2FR4e%2FztOym2GlARO1oUquc0TcP%2FXP%2FMhNfZ9pPSDz5r9ygyufIyWcpAOhKXPbhJqONXAnbz%2FzDU9%2FTDBjqkAUQy9iZySWEm0B9I4zU54tYab81i3uiYBvMyDYJ9ipQ83KsltUfiwg%2FPZS6jzS0GQlnjZp%2B23%2BZ7sQh8M%2FD9P0kfahJFMqU3NcyLd%2BlFoiLnjGwwOA%2BDb%2B0xgeIp3XKk9E2uUgbg4des%2BK%2FG%2BhpT13z26kyVAxACKq2jUklYaHlbGM%2FE0fMH2Se%2F7O0T849Prd01jKXyGDt%2BOGyrUcr88N1QVdfb&X-Amz-Signature=49b465bbe5af3c3d5f6e6f03a21007de192a6efb4c15ae2142844e939b6ea294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHQYSAZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxoHdeBY8eTgIFrEnziFusWixd%2BuZE9%2By1N6OhhLMbAIhAN5FKtFQhxrWh33SqOw6GEIHn%2BArfwT8K0ZkBQsBcfcSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZd4Jo%2FBkvoRNGv0sq3AOlY0vp%2FHTlNsWWuktZtbfmHPmUYprNQQjAxCUrHEnf2tTT0Pr4MpoToS9YQBew3wowc6bXPBeSrTQjQOG1zNwJxaXKp6%2BWTGZ0Z8eJBUFCZlhueqHQ4z5yoAW1K%2FmfqJCc5vDgwLcrX7%2B1lSY3bYtK01JjeTK7KOEEyjzZyQUPPXKksomivVTQMPla5ME4iFdfs3VkSCwdi7FEA5kFQhfXrsfkE2zVtRUtVvVXZD%2FWSuCDUjOf8PoVB6SUh4IlK0u0V8dKr2Ajq648pcK2KgYpqTId0k7OCWh8MUGTxgyTnt%2FPwQbDTeQfGeq3YyfS68unwTyixGL8VjC%2BncspwQ%2FHU9dFTWV2nLmZzSHfzrGUq8rT%2FASNrHl0J1B9TyF94xyMAm0%2BVEu5Tkyd4mADM67hUeMwtPfvwVQbhfdHpSKhU9fWqG%2BGcIXkdEMsGn6CtiwGdTM2ImbtSSrSNDDmVWdEShxl9gjNjJcgW6dchXjH7PoH56gQ7IszC3CDXmjN0Vo%2BEMVjAoDRA3tyq8n2bpGSpS9NtOjzGRO5ciZO%2B%2B6bi4vIWbQu5%2FR4e%2FztOym2GlARO1oUquc0TcP%2FXP%2FMhNfZ9pPSDz5r9ygyufIyWcpAOhKXPbhJqONXAnbz%2FzDU9%2FTDBjqkAUQy9iZySWEm0B9I4zU54tYab81i3uiYBvMyDYJ9ipQ83KsltUfiwg%2FPZS6jzS0GQlnjZp%2B23%2BZ7sQh8M%2FD9P0kfahJFMqU3NcyLd%2BlFoiLnjGwwOA%2BDb%2B0xgeIp3XKk9E2uUgbg4des%2BK%2FG%2BhpT13z26kyVAxACKq2jUklYaHlbGM%2FE0fMH2Se%2F7O0T849Prd01jKXyGDt%2BOGyrUcr88N1QVdfb&X-Amz-Signature=0f1623f756810dcbe90b6ba736eebbcbe2072df2c37170ea668c19cbb370efff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
