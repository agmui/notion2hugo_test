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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCHHFAS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzoyxn6OXg32QKLKfoJMe5zz%2F5QUTlKmHfOrCH9unp8QIgQKth7vOT5MpQYvx5FrC6yIH%2BQVp%2B62fKtwGS%2BPSSj90q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIaYYi1X7wxlK%2Bh7iircAyGgg3BnH8ZZW7POHSrrCwZlAE5BOgyN0lmJcmQAySFQ7Fxg1lQ2K9IBeTWKARDjzGZ2nI2%2FiiE4%2FPmWZH5PzyzKj40Wr8iQp4NogXflQW0V1sD%2FAH4cdlXqf85ZEONq%2BbKDnXLQyG4jVW%2BGxoPRPF9ggfZeExQ6dWnENeteJ2EuTqBnwf3rkdKJVLKJCPFjGA%2BtA%2FIX53oYnz8m8m7uAhR1L%2FbHFCQ2JjsK7HtmufznxgAoQ1MewWHwq5HCToIy8Y6Tzxwkh200ql6PjuUj916B9utqzY1HJeILncA%2FdpWF8awfUJwhqHc64s65P9LbG%2BuuYaGPPjPXbPE9rS5csKF%2ByjIMZNMWjMQvYRDxct3pSPaqG%2FvOHKcdLFCmK0WbOe99EOH0jyhlsKqyQoaficLB%2FL550UqoL25gcG5WgeBdUAw2gVPV7r3aB1g%2F4ZsHt60In%2F%2BqnmI3tJJPEWwsA7DaDEdCVuUAmDwMpXLeXRtWny%2FatxgkuB10yMEFxKcR4KcnQpkOI6jJHnBWcsM5c%2BNAOi6AvASh97j6HH%2BNWTxlZLckDN50sl39t0%2BhjF5Nu05iMHAHO8L1sbffs9N5Wm6uOfh%2FiIrfU1pvNuOfRm0yx5ZyqGrF3MW%2FMmkCMMqptMAGOqUBofhTh4L8%2BOrRx6%2Fppi%2F2izl90VCnPP3zWQiZQGQz8TMBo46G9COWwPzg6j%2FmQAYBD05%2BONgEorEA5w%2BZ5qrSzwnWyauGmymCrKQivi%2F1276G822spaILKk5W%2BHjJeGMJyG7jE0YFwPotlBO2nH2q%2BCg7nc9YU4CiG%2BHGWmJPjYZjNwLIHWK1vEvfTIHBVAG32JK%2BVro3xU%2FRb1L5Al%2BVJzQULz8m&X-Amz-Signature=61ba2ba740580d86b8e6f71e506f91f253153878a8271a773a9594ad92327b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCHHFAS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzoyxn6OXg32QKLKfoJMe5zz%2F5QUTlKmHfOrCH9unp8QIgQKth7vOT5MpQYvx5FrC6yIH%2BQVp%2B62fKtwGS%2BPSSj90q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIaYYi1X7wxlK%2Bh7iircAyGgg3BnH8ZZW7POHSrrCwZlAE5BOgyN0lmJcmQAySFQ7Fxg1lQ2K9IBeTWKARDjzGZ2nI2%2FiiE4%2FPmWZH5PzyzKj40Wr8iQp4NogXflQW0V1sD%2FAH4cdlXqf85ZEONq%2BbKDnXLQyG4jVW%2BGxoPRPF9ggfZeExQ6dWnENeteJ2EuTqBnwf3rkdKJVLKJCPFjGA%2BtA%2FIX53oYnz8m8m7uAhR1L%2FbHFCQ2JjsK7HtmufznxgAoQ1MewWHwq5HCToIy8Y6Tzxwkh200ql6PjuUj916B9utqzY1HJeILncA%2FdpWF8awfUJwhqHc64s65P9LbG%2BuuYaGPPjPXbPE9rS5csKF%2ByjIMZNMWjMQvYRDxct3pSPaqG%2FvOHKcdLFCmK0WbOe99EOH0jyhlsKqyQoaficLB%2FL550UqoL25gcG5WgeBdUAw2gVPV7r3aB1g%2F4ZsHt60In%2F%2BqnmI3tJJPEWwsA7DaDEdCVuUAmDwMpXLeXRtWny%2FatxgkuB10yMEFxKcR4KcnQpkOI6jJHnBWcsM5c%2BNAOi6AvASh97j6HH%2BNWTxlZLckDN50sl39t0%2BhjF5Nu05iMHAHO8L1sbffs9N5Wm6uOfh%2FiIrfU1pvNuOfRm0yx5ZyqGrF3MW%2FMmkCMMqptMAGOqUBofhTh4L8%2BOrRx6%2Fppi%2F2izl90VCnPP3zWQiZQGQz8TMBo46G9COWwPzg6j%2FmQAYBD05%2BONgEorEA5w%2BZ5qrSzwnWyauGmymCrKQivi%2F1276G822spaILKk5W%2BHjJeGMJyG7jE0YFwPotlBO2nH2q%2BCg7nc9YU4CiG%2BHGWmJPjYZjNwLIHWK1vEvfTIHBVAG32JK%2BVro3xU%2FRb1L5Al%2BVJzQULz8m&X-Amz-Signature=fc96dab0e4b31ebd9af35e7b31a22822998e3717679ff24dea2a0e29ea218b14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
