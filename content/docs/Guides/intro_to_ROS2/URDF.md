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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X26NDFL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDMDMzELSPriwu8C%2BaCnx43xrviR%2BSxJVQM1YQ%2BSJusPAiEAoFIQdwRPF0DK70Jh7hvKnSigJ3qJ6I%2FjThLX5LQH0QEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFTe%2Fcw7apkFa7JD6CrcA9UdRo%2FvNgESUCxL%2BmOL8sNhzELKvhctHXMKhMYV4BclBKDgWKktRIcA9IJYlDM7JJH035EKPe3gwima4CQJlknGbM%2B%2BT4dHteiiib0a12kAVemB1pN4kRpQYDIYX1HXWrxWD8hCy3kjuxmqblsDvAf4garP5U09XE415kj%2Frli445sowFJQ1anCnPj87BC6Z%2F7Wpm4urrOxKx1HoncPHT%2B6RkjZzJBfHCyWwWUV%2BF3PeaKD%2BSgeWVMJ%2Bnoq%2FN0mDEBCoDajhP1k05G2%2BRxxo6rX2i8bFZOgsMHebyoSRLJuoA%2FlT8ayh7W7CDllXlrfPPOOh7zo9u%2BQpYYwKh20ijbXGZmHZHa3NSuXgY8HEilmfuGhqJ%2BBVGE%2Ft%2BoEq%2BDX7lrI3AqcUvx4LT5IfnB6d%2BaHta%2BvKQKrcMkWJXv8W7KcLhTSxcJJk%2FQ3xAoBN1%2FaP3lw3blGE9AV8%2FKNkATQf4bGQvF3WrMuX1fLV2VGAoO7TPhyOAwRukmNRVbcG371PxtEkIcmKGxEVm2IOg9CKIOOlJ8%2BD24GzLrXfwcTGXJ8nvJ2YXmc0QtwPzMWY%2FbgO5dKoahuj2RBlIRNgK1IMdwt5XqgVr4r552GEwMY2KMumTZksJVIJUIZlM0kMN2Ewb0GOqUBIpwR3n0VEp2ISuoqzBh96zM0bCeiAL5ZUQ%2BMmbQ4xPmw2VexH8csWc2cIAKY7S%2F90IYYnN0TxH5GY0DyaHekkNJH47%2B1N0PitFSA8cZzjpW0%2BE8y1ZV%2FXJw%2BFemFCajTdzBCriYA33nBI3CA%2F9rRZATpjPgPcHaroI3fSBJ%2FjLOEnW3nOGJcJEIFRfGCzJaSM%2FMtm0IIw8nTVPZk7cVo04HuA07Z&X-Amz-Signature=1ec35247cebe2a81c5e2797d7602bbba5eff66c836cbf1ed36267c5ea04375b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X26NDFL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDMDMzELSPriwu8C%2BaCnx43xrviR%2BSxJVQM1YQ%2BSJusPAiEAoFIQdwRPF0DK70Jh7hvKnSigJ3qJ6I%2FjThLX5LQH0QEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFTe%2Fcw7apkFa7JD6CrcA9UdRo%2FvNgESUCxL%2BmOL8sNhzELKvhctHXMKhMYV4BclBKDgWKktRIcA9IJYlDM7JJH035EKPe3gwima4CQJlknGbM%2B%2BT4dHteiiib0a12kAVemB1pN4kRpQYDIYX1HXWrxWD8hCy3kjuxmqblsDvAf4garP5U09XE415kj%2Frli445sowFJQ1anCnPj87BC6Z%2F7Wpm4urrOxKx1HoncPHT%2B6RkjZzJBfHCyWwWUV%2BF3PeaKD%2BSgeWVMJ%2Bnoq%2FN0mDEBCoDajhP1k05G2%2BRxxo6rX2i8bFZOgsMHebyoSRLJuoA%2FlT8ayh7W7CDllXlrfPPOOh7zo9u%2BQpYYwKh20ijbXGZmHZHa3NSuXgY8HEilmfuGhqJ%2BBVGE%2Ft%2BoEq%2BDX7lrI3AqcUvx4LT5IfnB6d%2BaHta%2BvKQKrcMkWJXv8W7KcLhTSxcJJk%2FQ3xAoBN1%2FaP3lw3blGE9AV8%2FKNkATQf4bGQvF3WrMuX1fLV2VGAoO7TPhyOAwRukmNRVbcG371PxtEkIcmKGxEVm2IOg9CKIOOlJ8%2BD24GzLrXfwcTGXJ8nvJ2YXmc0QtwPzMWY%2FbgO5dKoahuj2RBlIRNgK1IMdwt5XqgVr4r552GEwMY2KMumTZksJVIJUIZlM0kMN2Ewb0GOqUBIpwR3n0VEp2ISuoqzBh96zM0bCeiAL5ZUQ%2BMmbQ4xPmw2VexH8csWc2cIAKY7S%2F90IYYnN0TxH5GY0DyaHekkNJH47%2B1N0PitFSA8cZzjpW0%2BE8y1ZV%2FXJw%2BFemFCajTdzBCriYA33nBI3CA%2F9rRZATpjPgPcHaroI3fSBJ%2FjLOEnW3nOGJcJEIFRfGCzJaSM%2FMtm0IIw8nTVPZk7cVo04HuA07Z&X-Amz-Signature=ee5b57ebefd92231d521dcc5d439ab76088f3f1c21a27ceede37444e88aa9336&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
