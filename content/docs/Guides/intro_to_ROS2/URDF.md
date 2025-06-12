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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFQIOUH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD4kHOj5jfTvnF5yKgvpNOzeWwnE5iOKtqjgxvkUS%2Fj3wIgFBqz4SxxdrneBqmEjt8VCh9H6V0kyLFSDnZtkptvLXsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ87a8KJYavIrYusrSrcA41BfvwL%2BNf0oOiVwJe8NqgAyAZtS3%2FK%2FddKiq%2FZSanyilFWKmUDoqg1%2FHg7TAoxGWdUaeC%2F5y6YYpNJq1XaBVwWK9Ivns7jurS8qMonQ0i0rwRCa0vPKJN0Brxhk5j4C9fPe%2FqJZCUOoy07Jaxws20qxcbeq7IST22OLVzoW1yaxlXGr9bpj1GVkmhwUxCLL6wNC8ZVLztCp1Oi0ZcWc770695tcXk%2FKz3zB0hnrPpb6LXTKixvcKLKac78J%2FksJXPikbjhj8eO%2FzDq%2BJSaqYtjdt4J%2FccBmZ1a1aFtndAxI5DkbNVP%2Bi6z2mYbU%2Bk3agzH1sp91wRjl0FYYLvuFmhDY6ixCK%2F0GT43gW2rne8jsVxShpK0hmqrBpsxFX%2BirPvk7iZGeGJ0dGjaTBwg2kwPkJ68eAahnI4SenZSPWCQ7TWawY09wRY785bYV%2BxJk6lJutgogKoBfqVTc%2BhkYVzHDjb7RkBNOpX1hgbq7bzl2lb%2F485Mq7OIpo1q%2B5PjvbXvCEP9v2c3fs%2Baewv5rwSWB3AswSQuuvDW4I8FGC3a7xybcqTPIPZIQPCrQEIMaehoQHDAvWMi7WNY2z3hO153GPpVpMMSQxQMs1DZlG2mKJQV1PsizAwoH1QLMIrWq8IGOqUBYbbJ341OXEkzEoiWwW5WVpTHRmYYdH%2BclEWrRX9aSJ6Ol9uZbQkdTwhKk53cvDsB5AWQZPCTLkRuauur8oOH8xc2qOMe8QTtwP15ajyRU3Sm%2FMzS%2BgEw140yhLRZOhmxzqXUy5AXrFkuYGNLqcFSW9Qs7exWjjgEikNWPfSS7zZ74I%2BPEplQUHzAXdIHqdn9s16hMAtxX0eX1uPFB%2F4V3%2FyKqryi&X-Amz-Signature=892e7b29f2b8710dd43e7e99fef29f3e3fbaa92f2d1c50a7769daae505806b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFQIOUH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD4kHOj5jfTvnF5yKgvpNOzeWwnE5iOKtqjgxvkUS%2Fj3wIgFBqz4SxxdrneBqmEjt8VCh9H6V0kyLFSDnZtkptvLXsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ87a8KJYavIrYusrSrcA41BfvwL%2BNf0oOiVwJe8NqgAyAZtS3%2FK%2FddKiq%2FZSanyilFWKmUDoqg1%2FHg7TAoxGWdUaeC%2F5y6YYpNJq1XaBVwWK9Ivns7jurS8qMonQ0i0rwRCa0vPKJN0Brxhk5j4C9fPe%2FqJZCUOoy07Jaxws20qxcbeq7IST22OLVzoW1yaxlXGr9bpj1GVkmhwUxCLL6wNC8ZVLztCp1Oi0ZcWc770695tcXk%2FKz3zB0hnrPpb6LXTKixvcKLKac78J%2FksJXPikbjhj8eO%2FzDq%2BJSaqYtjdt4J%2FccBmZ1a1aFtndAxI5DkbNVP%2Bi6z2mYbU%2Bk3agzH1sp91wRjl0FYYLvuFmhDY6ixCK%2F0GT43gW2rne8jsVxShpK0hmqrBpsxFX%2BirPvk7iZGeGJ0dGjaTBwg2kwPkJ68eAahnI4SenZSPWCQ7TWawY09wRY785bYV%2BxJk6lJutgogKoBfqVTc%2BhkYVzHDjb7RkBNOpX1hgbq7bzl2lb%2F485Mq7OIpo1q%2B5PjvbXvCEP9v2c3fs%2Baewv5rwSWB3AswSQuuvDW4I8FGC3a7xybcqTPIPZIQPCrQEIMaehoQHDAvWMi7WNY2z3hO153GPpVpMMSQxQMs1DZlG2mKJQV1PsizAwoH1QLMIrWq8IGOqUBYbbJ341OXEkzEoiWwW5WVpTHRmYYdH%2BclEWrRX9aSJ6Ol9uZbQkdTwhKk53cvDsB5AWQZPCTLkRuauur8oOH8xc2qOMe8QTtwP15ajyRU3Sm%2FMzS%2BgEw140yhLRZOhmxzqXUy5AXrFkuYGNLqcFSW9Qs7exWjjgEikNWPfSS7zZ74I%2BPEplQUHzAXdIHqdn9s16hMAtxX0eX1uPFB%2F4V3%2FyKqryi&X-Amz-Signature=d8f44e1df90df0abbbbef8818e28ebacba0bb5a33d10a49beb002e4ba8faf100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
