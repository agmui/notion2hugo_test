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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HT3O7Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFkbtcjhZ%2BV7fvQn5bzsRtw3t6FO9I5tV1uZKgHBjvDAIhAKAg7IviNVgmhbRYweqY53sKfZQmdi1GcX1A27vxafbsKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA0rdOCU5ajURlgF4q3ANgOiFEGHwb0qLnwJp6C1i1IZnb2%2B1VzWipgkc4S75Q1wlXdnYgxzJ96evWXR6j0HLH8dCEadtB%2FWhOuT9KjfSpneHx3cgTKMoCEhVmBE0pJ3SqLQK6fk0Wmf%2B2Bgq0EeqNKzr%2BzlZ3aekwMeH0TCsuylTYg%2FzDdABpkAzVifDT5ehxp9%2FDRIC1R%2BxrYcXx3wguPiNzOXYVpIpzamtm%2BNz%2Fzyo2NTgtozqeCyxsCOR7YRnqjC3vnBz98usd%2BqDuKpJLu3oECqISYYNexgofdkxMFp7G%2Bn4ml31cj3ylYYJMlgcITtpSOKfj%2FsbQhQ6VU9myqHFg0MGgF8Gqczr4l6%2BfIHKFOX7wsgSO1eBJ4yZgw2PN7OEIuauLN5GcxTye%2BSn22AxqwKNqK%2By3oRQ9aKHyUlXn97tQ42zgCIoeDXn7%2BgbB2midz8f%2FQ1bGR1Ft6s4FZ%2Bi%2Bk3FM2azyv4dVw4mxqOifEltM4%2BKdVfoRpMFUfS2oz0IlejVZhkXAbmK0wR22vxLve3R5pg7UOBICpp19HCVVoFLCDcJdLuSEvaizSgUS%2BsAWEE%2BeVS6FRZYc9a33Tc3%2FECB1mrRAkbi1QH%2F0v4hkTdPCT9544047IY9RH6Bu4j7Nlv9HbCW%2BXDCAi%2Bi9BjqkATR7pmCjXU%2FOs%2BRTxaH7eKWzX9GbGXoD7kv9ZWXdh3UcGvuCmj8dnsIH45L5b8pJxl04UKYmVEEFH9ZAhhkWGhdgwz5uXB1MGiCurT98dfp7d3OQJph9esuXZ9mQZjRhk5voLNoPYG54XDvm9f8qrqFoQxVTo9o8AoPs08%2BaO4TmwsJdHh2qzBSaL6aleW9a28mIvjHifStf7vHNYdIROnowoeuW&X-Amz-Signature=f068f72a4ec7d089ecfd56102a71eae13b0269f97deec75c0c847a6376ae57f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HT3O7Y%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFkbtcjhZ%2BV7fvQn5bzsRtw3t6FO9I5tV1uZKgHBjvDAIhAKAg7IviNVgmhbRYweqY53sKfZQmdi1GcX1A27vxafbsKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA0rdOCU5ajURlgF4q3ANgOiFEGHwb0qLnwJp6C1i1IZnb2%2B1VzWipgkc4S75Q1wlXdnYgxzJ96evWXR6j0HLH8dCEadtB%2FWhOuT9KjfSpneHx3cgTKMoCEhVmBE0pJ3SqLQK6fk0Wmf%2B2Bgq0EeqNKzr%2BzlZ3aekwMeH0TCsuylTYg%2FzDdABpkAzVifDT5ehxp9%2FDRIC1R%2BxrYcXx3wguPiNzOXYVpIpzamtm%2BNz%2Fzyo2NTgtozqeCyxsCOR7YRnqjC3vnBz98usd%2BqDuKpJLu3oECqISYYNexgofdkxMFp7G%2Bn4ml31cj3ylYYJMlgcITtpSOKfj%2FsbQhQ6VU9myqHFg0MGgF8Gqczr4l6%2BfIHKFOX7wsgSO1eBJ4yZgw2PN7OEIuauLN5GcxTye%2BSn22AxqwKNqK%2By3oRQ9aKHyUlXn97tQ42zgCIoeDXn7%2BgbB2midz8f%2FQ1bGR1Ft6s4FZ%2Bi%2Bk3FM2azyv4dVw4mxqOifEltM4%2BKdVfoRpMFUfS2oz0IlejVZhkXAbmK0wR22vxLve3R5pg7UOBICpp19HCVVoFLCDcJdLuSEvaizSgUS%2BsAWEE%2BeVS6FRZYc9a33Tc3%2FECB1mrRAkbi1QH%2F0v4hkTdPCT9544047IY9RH6Bu4j7Nlv9HbCW%2BXDCAi%2Bi9BjqkATR7pmCjXU%2FOs%2BRTxaH7eKWzX9GbGXoD7kv9ZWXdh3UcGvuCmj8dnsIH45L5b8pJxl04UKYmVEEFH9ZAhhkWGhdgwz5uXB1MGiCurT98dfp7d3OQJph9esuXZ9mQZjRhk5voLNoPYG54XDvm9f8qrqFoQxVTo9o8AoPs08%2BaO4TmwsJdHh2qzBSaL6aleW9a28mIvjHifStf7vHNYdIROnowoeuW&X-Amz-Signature=648a405c3a15a1919d2eb864a7a95b29b2594a4b9e3b2a0c751f15842f7bb86b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
