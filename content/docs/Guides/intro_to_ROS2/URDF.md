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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3Z2ZXI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDqHzaIVeo1O9YJbIKHr6syenKlhbZOhcLUs0t7tmJU5QIhAPQjF1rvvAgKFSpVLWp2G1Cq4sLl1ZfcJqAMFjt%2B5rsiKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvdyn7nISaiix1Bj8q3AOxJN%2BGMJeAUR3x70PJvR1iFM%2BD5nHT3LhEzKjCT818nOGN1WGVuy1bLamZoqmWbw21DELHDecpcY0e2XFJgvC0F3uxHZZSrM%2BVEiNMwW6ZzbdDnT0g81TrEYHtWdzdB2gBT0vwgNOpq7GC8FjuNV25vAbtlOdIirlSzhEfdKkFgFz0jJZaNs5y4vK2YHK9Jv8YXqJKiqoSF%2B1XffQQ0WaqmeI7NiqpSVS8YUpjUrRhpZcfGCvJj9o6560nPxTvclwW3guaXqbG5vUPQKLNerjvdWfZO9GHM1Pr7H51zPxdRv04ZW45Io%2FjsHW8t%2BrSGigickyJO2jpsILfo%2F5akwgZHvghDqZvEW6QRfoa6%2BscvBrzA%2FnfgARjBB4xeJmNyQ7rVe4FMLE6baYnWqiNvh7EUmWP17fr%2BqiiiEVs3J3rmalX9aclDU3pQ%2Buiqa%2BoDAAx%2FXfxBMpbawEU2FC8L%2B5emaXOU8ptusaf%2BBQ40Z1cBzTR86xgo%2FDsaxXp48FIeF1youxSTo15sDT2t%2FhHQc6Gb%2FQVewC67uMp37Ln9%2BoAK2UyGo6WykWX9PWbiJsTdMkF4qY1qgU5NS%2FIrqt8EuXO40%2FaBrIgubGKi3LGKS73SzFw%2B4bTc4sdWxS0yjDJz%2BjDBjqkAZRL50RfP6djVCW%2BNnFCoNnSYsFMPZUPmz%2FKxXsOp0VFOKqFc%2F4zyP2jwTaunxy2yrF5FRkWjClfErOqI%2FewzaaafRvXJPaMWEQC9tNZNzkmFxEUL%2BMqS9%2B%2FSA5jTJQsba1l1kNvLQSrVW0%2BrCm1QxAedpFaNQyMmpDYKvhN63rg9%2BgFJw04HbQ%2BhgX89H10EZ1aO31anoWH%2Fg9hfSalpYBTf3KS&X-Amz-Signature=11628c762a80cd8a77bb2b2a1a13040e7c22ac16ed02ee67100e22a27223f0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3Z2ZXI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDqHzaIVeo1O9YJbIKHr6syenKlhbZOhcLUs0t7tmJU5QIhAPQjF1rvvAgKFSpVLWp2G1Cq4sLl1ZfcJqAMFjt%2B5rsiKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvdyn7nISaiix1Bj8q3AOxJN%2BGMJeAUR3x70PJvR1iFM%2BD5nHT3LhEzKjCT818nOGN1WGVuy1bLamZoqmWbw21DELHDecpcY0e2XFJgvC0F3uxHZZSrM%2BVEiNMwW6ZzbdDnT0g81TrEYHtWdzdB2gBT0vwgNOpq7GC8FjuNV25vAbtlOdIirlSzhEfdKkFgFz0jJZaNs5y4vK2YHK9Jv8YXqJKiqoSF%2B1XffQQ0WaqmeI7NiqpSVS8YUpjUrRhpZcfGCvJj9o6560nPxTvclwW3guaXqbG5vUPQKLNerjvdWfZO9GHM1Pr7H51zPxdRv04ZW45Io%2FjsHW8t%2BrSGigickyJO2jpsILfo%2F5akwgZHvghDqZvEW6QRfoa6%2BscvBrzA%2FnfgARjBB4xeJmNyQ7rVe4FMLE6baYnWqiNvh7EUmWP17fr%2BqiiiEVs3J3rmalX9aclDU3pQ%2Buiqa%2BoDAAx%2FXfxBMpbawEU2FC8L%2B5emaXOU8ptusaf%2BBQ40Z1cBzTR86xgo%2FDsaxXp48FIeF1youxSTo15sDT2t%2FhHQc6Gb%2FQVewC67uMp37Ln9%2BoAK2UyGo6WykWX9PWbiJsTdMkF4qY1qgU5NS%2FIrqt8EuXO40%2FaBrIgubGKi3LGKS73SzFw%2B4bTc4sdWxS0yjDJz%2BjDBjqkAZRL50RfP6djVCW%2BNnFCoNnSYsFMPZUPmz%2FKxXsOp0VFOKqFc%2F4zyP2jwTaunxy2yrF5FRkWjClfErOqI%2FewzaaafRvXJPaMWEQC9tNZNzkmFxEUL%2BMqS9%2B%2FSA5jTJQsba1l1kNvLQSrVW0%2BrCm1QxAedpFaNQyMmpDYKvhN63rg9%2BgFJw04HbQ%2BhgX89H10EZ1aO31anoWH%2Fg9hfSalpYBTf3KS&X-Amz-Signature=29ff165e87b5a72f9b8ce0915b14c11dddad274302f88e50ea3809398e5e464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
