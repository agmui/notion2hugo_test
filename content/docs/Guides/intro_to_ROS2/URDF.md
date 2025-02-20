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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCCXYEE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqysyjUNfBFGzivkiz6pSEZyRhzUitgfuiliEVCJSbwQIgZK%2FM5AOlMqv9A1KeLhM%2Bxu5nN8Af0qqZ0lzbl1bzM1AqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxzvvXmC513Ul2XeCrcAw%2BkP3ArMfqSBIhWf0miEH%2F%2FQHRLOMaIbLyxrgpLP6g1LRFEpfDwB63xEeY%2FTvHs6o0SZQckkAO%2Bt3MDiAWVJaZDFrjHj63FLHL9eEpWLnc0saYR%2Bha8uYbiCHJdrCOvJYEy2q4ALIWSN4LyqC2vQWk37FIb5GHseTLevyv9nKF%2BFVyqOJ%2FPUuH6Ol8G3fV%2BzunS0I1SvxiOdXyl3DEfIRnHJnP%2BqkOI41QH306FRxRyRm%2Bw4xqPIRYKlzKHEx4oKxOSRwnn%2FmUw%2F%2Blk5%2BfJEJ0%2BGacm5ooc4GNbJzqUCrBFqR6cGFh8GXNrRTa7RXphnd39gCYLYLLWvWqqQmRn2tXL6jI7lqs3IaM61CMMnGSQ0rGD5xRX2kcERvK2M%2FsHhIoDKi0a4KYjNK0dyoFVOwEGYYTMy57iD5jFU3iPEo0dbI4WKApXsuyVrfpiJsDw%2BAKL58raa3KI20zmjK8Ugu68krte4SxXP8ouoMPBVDGZ10AHtfe%2FmME%2B4UlguAuG40yMYav4LSqv1IhPrFYTQxCYryvJ7H0%2B%2B5HsIsXDPZNUffbP69hFDHU21cA0xx4v5ZmeplkiMrA6Wxuhe5k1SajvsXVkltpxdWVLQ0WlXQXWihnj9cNXSlSz3TzDMNSc270GOqUBHJ9%2B9Vo8gAqBtwV4gmZ%2FzBJRUrilYm7f6emzp9dlD%2BnfNlQIx7Lty2tBwX0DxQQZp4obfuCaHrfI8lIvJUfEe80P%2FUzNJxMSxJDPJ9Zy7ZqNX1puUmO9pqyKSpVe5Xk006li%2FtKquRAbeAClT%2FfRzWAkRWgCyYyu4cJ2I0l9%2F45sz%2BkgJC1%2FK2ePqwN0mceYnxg4siSD8ONwa4S4yawafocNnsYY&X-Amz-Signature=4f72696844b4e3796a3de5ec13b64859cd086899b9655a69ef181049ec2f93bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCCXYEE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqysyjUNfBFGzivkiz6pSEZyRhzUitgfuiliEVCJSbwQIgZK%2FM5AOlMqv9A1KeLhM%2Bxu5nN8Af0qqZ0lzbl1bzM1AqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxzvvXmC513Ul2XeCrcAw%2BkP3ArMfqSBIhWf0miEH%2F%2FQHRLOMaIbLyxrgpLP6g1LRFEpfDwB63xEeY%2FTvHs6o0SZQckkAO%2Bt3MDiAWVJaZDFrjHj63FLHL9eEpWLnc0saYR%2Bha8uYbiCHJdrCOvJYEy2q4ALIWSN4LyqC2vQWk37FIb5GHseTLevyv9nKF%2BFVyqOJ%2FPUuH6Ol8G3fV%2BzunS0I1SvxiOdXyl3DEfIRnHJnP%2BqkOI41QH306FRxRyRm%2Bw4xqPIRYKlzKHEx4oKxOSRwnn%2FmUw%2F%2Blk5%2BfJEJ0%2BGacm5ooc4GNbJzqUCrBFqR6cGFh8GXNrRTa7RXphnd39gCYLYLLWvWqqQmRn2tXL6jI7lqs3IaM61CMMnGSQ0rGD5xRX2kcERvK2M%2FsHhIoDKi0a4KYjNK0dyoFVOwEGYYTMy57iD5jFU3iPEo0dbI4WKApXsuyVrfpiJsDw%2BAKL58raa3KI20zmjK8Ugu68krte4SxXP8ouoMPBVDGZ10AHtfe%2FmME%2B4UlguAuG40yMYav4LSqv1IhPrFYTQxCYryvJ7H0%2B%2B5HsIsXDPZNUffbP69hFDHU21cA0xx4v5ZmeplkiMrA6Wxuhe5k1SajvsXVkltpxdWVLQ0WlXQXWihnj9cNXSlSz3TzDMNSc270GOqUBHJ9%2B9Vo8gAqBtwV4gmZ%2FzBJRUrilYm7f6emzp9dlD%2BnfNlQIx7Lty2tBwX0DxQQZp4obfuCaHrfI8lIvJUfEe80P%2FUzNJxMSxJDPJ9Zy7ZqNX1puUmO9pqyKSpVe5Xk006li%2FtKquRAbeAClT%2FfRzWAkRWgCyYyu4cJ2I0l9%2F45sz%2BkgJC1%2FK2ePqwN0mceYnxg4siSD8ONwa4S4yawafocNnsYY&X-Amz-Signature=2da35c86a7589c44130518ed896f05938786ea28010a70ea5fd75d6e6a80a555&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
