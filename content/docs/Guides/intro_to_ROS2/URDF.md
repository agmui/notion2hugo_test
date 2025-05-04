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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EPTGFY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnBfQxYB4%2F8Op80nuWF18cs5kr%2ByN9gAUL5lwPkVPXZwIgedzpJfwmh5SNASLtMvcVGPaCThWC2gufIbEgnG36bvMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDF4ZPCkjuUWGF6ppMyrcA90ZGNf7IpyKb%2Fqr%2Fbd9C7EEwdVIysLvNxtjjnrCmcV6fVrdFmw8gHdNzKvWBGqTeI1KcFYxpPaLyZzCJo7zFfkaY6XLdfyXlNIkrdsIhYwY07s6MfccwEfuhF%2F4LVsvUJKRX8puXmUMDzfEqX3ImmgkdDk1OFQUaA%2BtV1w0HecZzkoCiVbNiTKD2j4%2BjUk64xx2mnQnS7TWWlDRInct6ikmscPDw%2Fy%2BztVx%2B0BIWOiTDxNw6CXaizSxN4%2BXAqKXKzTGwwuOdkI%2Fy%2B0Viw8aRCXkomt6X%2FC2uc4%2Be7tqwNi3LouWgqeHhTwwoAbQKUfqRrkqw4VvvaYN7Q3uax3UOOAFVIJiC8taPUAgquPFAi2QyN36P6byGGxFC4Ol99A6965AJNXSDUOYKyMaCxKU75ulKBy5Vl3sxbI4p7rPF9xN9DLBBb%2Be7lD1R8QZFvtlDX%2FpMnReJMXrE1a7Ay9OQ4mepa4rm0MpzIkjBMUNxbzNY%2FmT1sEBdhbTpikVJO81f5cd4grS0Y7CZuCweaRXoNGDpGrc77lgx4kdV85E7fi%2BNdNBXAdcxmMtrEuspLK8iQpGlGWQJcvs0VwGQBqtf9%2Fw85VVYKOVzVWgkCi%2BZc%2F74cTSZT%2FFJdtXFIuhMJW73sAGOqUBRy%2B3nQ7nCjLVSFn%2FIZmzjvW8MOJSjv4UfutEWbZjkJhP2wpgPHFQyi6OEdf8%2F1wP7o6VBzkxOrmBvWb3R%2F1lIS1%2BPteTKGY9jb%2B%2BwA%2FuIIjjZOv1c%2BowjF9XtPdxYCZ71JCCAP3tuPLDSNdOZTgdMTHLWkWCHIruJZGI8TrUZLEE9ThQCYLZJO4zzsrJPjHuq9bfE5uW1%2B%2B7k0jjoklwSSsODZRH&X-Amz-Signature=0183efdd7be633c5269777f4664181fe734831c739bd16fc7ff92a02d1a735b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EPTGFY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDnBfQxYB4%2F8Op80nuWF18cs5kr%2ByN9gAUL5lwPkVPXZwIgedzpJfwmh5SNASLtMvcVGPaCThWC2gufIbEgnG36bvMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDF4ZPCkjuUWGF6ppMyrcA90ZGNf7IpyKb%2Fqr%2Fbd9C7EEwdVIysLvNxtjjnrCmcV6fVrdFmw8gHdNzKvWBGqTeI1KcFYxpPaLyZzCJo7zFfkaY6XLdfyXlNIkrdsIhYwY07s6MfccwEfuhF%2F4LVsvUJKRX8puXmUMDzfEqX3ImmgkdDk1OFQUaA%2BtV1w0HecZzkoCiVbNiTKD2j4%2BjUk64xx2mnQnS7TWWlDRInct6ikmscPDw%2Fy%2BztVx%2B0BIWOiTDxNw6CXaizSxN4%2BXAqKXKzTGwwuOdkI%2Fy%2B0Viw8aRCXkomt6X%2FC2uc4%2Be7tqwNi3LouWgqeHhTwwoAbQKUfqRrkqw4VvvaYN7Q3uax3UOOAFVIJiC8taPUAgquPFAi2QyN36P6byGGxFC4Ol99A6965AJNXSDUOYKyMaCxKU75ulKBy5Vl3sxbI4p7rPF9xN9DLBBb%2Be7lD1R8QZFvtlDX%2FpMnReJMXrE1a7Ay9OQ4mepa4rm0MpzIkjBMUNxbzNY%2FmT1sEBdhbTpikVJO81f5cd4grS0Y7CZuCweaRXoNGDpGrc77lgx4kdV85E7fi%2BNdNBXAdcxmMtrEuspLK8iQpGlGWQJcvs0VwGQBqtf9%2Fw85VVYKOVzVWgkCi%2BZc%2F74cTSZT%2FFJdtXFIuhMJW73sAGOqUBRy%2B3nQ7nCjLVSFn%2FIZmzjvW8MOJSjv4UfutEWbZjkJhP2wpgPHFQyi6OEdf8%2F1wP7o6VBzkxOrmBvWb3R%2F1lIS1%2BPteTKGY9jb%2B%2BwA%2FuIIjjZOv1c%2BowjF9XtPdxYCZ71JCCAP3tuPLDSNdOZTgdMTHLWkWCHIruJZGI8TrUZLEE9ThQCYLZJO4zzsrJPjHuq9bfE5uW1%2B%2B7k0jjoklwSSsODZRH&X-Amz-Signature=859534d40b793a5f814b1d7db64aeccdea6346e2627e2e82db590efdadc4349b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
