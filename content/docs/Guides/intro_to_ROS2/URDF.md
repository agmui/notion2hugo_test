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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAYIEYH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtR3583q9oz0qyFyO5mxQ1vJNep92kAfrI9U09im38YAiEA3JX%2BWMSXs8M4yatW6R%2Fifq3bckBaP7znBdaHsSyT4eoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05mNLa4EiOaq5RHSrcA7VYkM7IaWvLfIJJYWKsbqD1PvrZ42C%2BfWQyWXsSyQbMS7cQ3LeBFZAsp8rNYs1%2FL4jHd1GK7w4D3zqahsNX3fzW1oB%2FL5bCJVaO84diE09G3hqw2tZ2BWq3rpFKMDtirDNMNngH7xFAhtgC72A7WwPUvF8y1RivAbg6yoCmiVUncZp5r0%2FWg0P77Shz0Jdt8FgsRhcTtDphq2vucMzmXf27oRIkSIivGo1hXk6pZwbE7TPbPmDgBQuUMqi%2FYJhxmkp0U1m%2BNgiApNz1jgaQjRFlV4ERulyCziu8m7v3YDUhujxm9rXUImr6zDkaOn6lVpbsh08cMel2B6AmCEdWbgTtG6U7GD2neBVAdQOavk7iJIq1xKGLhqqO%2F1X5CRxJlx3vnpbtXAciHRU5u6z9ljRh9Fu5StapJWkt6O55vzGxOTk0apEjGpU%2FMKuzS6t5FAvMLMHO7XCLqp5TNjdo91c3dx%2F4hs09eo6NOhFU8emucUkOUbYyQyfY8wA3Ccn5b8RhA%2Bmz5Q%2B4B5wfFUEi8fInu4SkH1a65s%2BNxdQlVRRhdCA5QQ2IVY5PnezO9tXTq5RvCrvOsZBjD8lvtS6Xv7NB1feCR%2FkNtABzx053mrmvwhZdTi0cZldLwKS3MIjkob0GOqUBxuBQ%2FkpAb%2FLO9zkkcfklr8A%2FgTGGs0GCwqAfyg0sIGeEG5SCwQ%2FJ1H43ZcBa9kWgaq8vOESIyjLXlgw5MeFjKpF%2BpWfEnKulNwJ4elSZ1wTebrn8IPNLF3%2Fs7EZMitmblAsj5h2omuyWQTn5OSX2io1nuFET0vb87ulmcrtpDVEJXG8%2F7vZdkSgZ7S6fSkGzLKal2%2BwsvmA2ywzvDyLgFfnbwXsX&X-Amz-Signature=02ec278fd388251ed90a11f1f63115a4d1246283c4d564aa7654838a1b5380db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAYIEYH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtR3583q9oz0qyFyO5mxQ1vJNep92kAfrI9U09im38YAiEA3JX%2BWMSXs8M4yatW6R%2Fifq3bckBaP7znBdaHsSyT4eoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK05mNLa4EiOaq5RHSrcA7VYkM7IaWvLfIJJYWKsbqD1PvrZ42C%2BfWQyWXsSyQbMS7cQ3LeBFZAsp8rNYs1%2FL4jHd1GK7w4D3zqahsNX3fzW1oB%2FL5bCJVaO84diE09G3hqw2tZ2BWq3rpFKMDtirDNMNngH7xFAhtgC72A7WwPUvF8y1RivAbg6yoCmiVUncZp5r0%2FWg0P77Shz0Jdt8FgsRhcTtDphq2vucMzmXf27oRIkSIivGo1hXk6pZwbE7TPbPmDgBQuUMqi%2FYJhxmkp0U1m%2BNgiApNz1jgaQjRFlV4ERulyCziu8m7v3YDUhujxm9rXUImr6zDkaOn6lVpbsh08cMel2B6AmCEdWbgTtG6U7GD2neBVAdQOavk7iJIq1xKGLhqqO%2F1X5CRxJlx3vnpbtXAciHRU5u6z9ljRh9Fu5StapJWkt6O55vzGxOTk0apEjGpU%2FMKuzS6t5FAvMLMHO7XCLqp5TNjdo91c3dx%2F4hs09eo6NOhFU8emucUkOUbYyQyfY8wA3Ccn5b8RhA%2Bmz5Q%2B4B5wfFUEi8fInu4SkH1a65s%2BNxdQlVRRhdCA5QQ2IVY5PnezO9tXTq5RvCrvOsZBjD8lvtS6Xv7NB1feCR%2FkNtABzx053mrmvwhZdTi0cZldLwKS3MIjkob0GOqUBxuBQ%2FkpAb%2FLO9zkkcfklr8A%2FgTGGs0GCwqAfyg0sIGeEG5SCwQ%2FJ1H43ZcBa9kWgaq8vOESIyjLXlgw5MeFjKpF%2BpWfEnKulNwJ4elSZ1wTebrn8IPNLF3%2Fs7EZMitmblAsj5h2omuyWQTn5OSX2io1nuFET0vb87ulmcrtpDVEJXG8%2F7vZdkSgZ7S6fSkGzLKal2%2BwsvmA2ywzvDyLgFfnbwXsX&X-Amz-Signature=99161a096680828843c165ab2b402af1cf610681f5d33df0fadb86df82b7f52d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
