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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SR7FPT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDjh6wwIE2Cx4rKhomDm2hHaXXpoFZsfuHwnYc3Zue2SAIhAIaiEI1w1rUAq%2B%2FIEjSRTPoorivZKvWMLu2yFvEc%2BHeWKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9abR1V6lcFh8h6QIq3AN9GpZwEp3BkSJV7cPmxWeEFq8UJIV6gzjuGlJII52C%2Bor%2FenJfstIHmVanVQ21cAuZeHlPEquEhGYcXPn3Q9CCyh88BUsD8OudKklQ%2FNnd3WmRCpW%2F0SnnxXfLTGtmO7DMEtY5Mt9yKZHgPVdJS0AI8T70TQyzOKds5B%2BL7XAHLkHvw1OwvijTGYmWDcLJvf2dKqrqOZo4bafBEytH5JaGL87yBXhSyhP4qsUhOECtvMqvIGUxlvSbsj1KdevZ%2Br7d8ijdL8Kx09H%2FA7O729MQHbe2pnhJIC4kbrOq2hksy0ONpLlfHNp%2FKYMa5D2tQt8QhSlU0hpszaP1tbr0J8QvAxG995xKWZYeAZV1AnczIZmzSRbNrQxG5VdK%2FDtmm9nR%2Fao8dp1Gm9kW9I%2B%2BLedvgQumo0DnvUy5aOX0Hjvu%2FXfSw44UOe9VxsrwLyjV5cLw5DY0yzAg2KeYGGMEBLMH2Ooy6LQJ%2Buuzq1bIwN75lZ6MeyhK6%2B9%2FDqVzhRwjYPIhQfmrl%2BtdZivtR2e0YvbXFivAfQqCrat9WjO1oH3r99c%2BEk23Smf54FilIS3KJ6BZYhJGFmdymb5qxmBAX8PmglB%2FWdczzCti2wJEnuu5DKPr%2Fz13FGiE9VBowTDi7ebCBjqkAWW%2Fr9lxt0W0xXMLxdl%2BfAEwmMOjbafs%2BIoKiu%2FpdpwDQf2cBW4gBfj5GDsDqkOjAz0TXujb70tcw0GhuJgqW9e7SXlmcm7CY72bOXStgzDOZTTU86Ovxdp6Zx5XWtplVX2uyok3U%2BKet3YaTIOgtUeDA4Qs2tJ2%2F%2FwtEvHxFLw%2BZ1ssnDxPt2wJIS5n9A%2BPTxKPJ6NU5cPTEZE0dUoPkXdDey9n&X-Amz-Signature=1e13fc61c1dcf9ee43e7756cf4695ecb0b6b892d4812e51bae4a1813835d0f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SR7FPT%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDjh6wwIE2Cx4rKhomDm2hHaXXpoFZsfuHwnYc3Zue2SAIhAIaiEI1w1rUAq%2B%2FIEjSRTPoorivZKvWMLu2yFvEc%2BHeWKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9abR1V6lcFh8h6QIq3AN9GpZwEp3BkSJV7cPmxWeEFq8UJIV6gzjuGlJII52C%2Bor%2FenJfstIHmVanVQ21cAuZeHlPEquEhGYcXPn3Q9CCyh88BUsD8OudKklQ%2FNnd3WmRCpW%2F0SnnxXfLTGtmO7DMEtY5Mt9yKZHgPVdJS0AI8T70TQyzOKds5B%2BL7XAHLkHvw1OwvijTGYmWDcLJvf2dKqrqOZo4bafBEytH5JaGL87yBXhSyhP4qsUhOECtvMqvIGUxlvSbsj1KdevZ%2Br7d8ijdL8Kx09H%2FA7O729MQHbe2pnhJIC4kbrOq2hksy0ONpLlfHNp%2FKYMa5D2tQt8QhSlU0hpszaP1tbr0J8QvAxG995xKWZYeAZV1AnczIZmzSRbNrQxG5VdK%2FDtmm9nR%2Fao8dp1Gm9kW9I%2B%2BLedvgQumo0DnvUy5aOX0Hjvu%2FXfSw44UOe9VxsrwLyjV5cLw5DY0yzAg2KeYGGMEBLMH2Ooy6LQJ%2Buuzq1bIwN75lZ6MeyhK6%2B9%2FDqVzhRwjYPIhQfmrl%2BtdZivtR2e0YvbXFivAfQqCrat9WjO1oH3r99c%2BEk23Smf54FilIS3KJ6BZYhJGFmdymb5qxmBAX8PmglB%2FWdczzCti2wJEnuu5DKPr%2Fz13FGiE9VBowTDi7ebCBjqkAWW%2Fr9lxt0W0xXMLxdl%2BfAEwmMOjbafs%2BIoKiu%2FpdpwDQf2cBW4gBfj5GDsDqkOjAz0TXujb70tcw0GhuJgqW9e7SXlmcm7CY72bOXStgzDOZTTU86Ovxdp6Zx5XWtplVX2uyok3U%2BKet3YaTIOgtUeDA4Qs2tJ2%2F%2FwtEvHxFLw%2BZ1ssnDxPt2wJIS5n9A%2BPTxKPJ6NU5cPTEZE0dUoPkXdDey9n&X-Amz-Signature=e5de640713022a6370a4ace6cd52ec61c50a912f78216b7ba8e4f312168ebf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
