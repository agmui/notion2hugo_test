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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2UQOAYS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKX9tEQhANfvRpohxHIX5EkrjMX%2FG%2BdYFom5o0%2Feii7wIhAPo%2BHu74dw0LQnGPCSvFhnIEXna%2FwDOsm9AuP7nHRYzWKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw9z1jqwZ%2Fl0FacI0q3AO7eC6BKBHHV4vUVhJZD8kFlD%2Be%2FUPv1KslFxvN9onFnsNKmjWl0d2h9O0qx0l6QNxGrLylDipqXWAUSU7BPE0HqU7Vv4RQnFF1m%2F%2B7mJFVJprjbBsDSQwykA4YhXFsXGnr%2BewUZToW4KTtnmLNOcH5sLYRfC3iV%2BLvV2YT6%2F1nd3WtgRJGExheOIE%2Fz%2Fa7Skec9fU4mnQlJxQfbCKLOYHzOVwRmy6MrWL370oOLrVHqPiRehVJ%2F4WfN2V5%2F6mRsDq1UOS8R%2B9kkyhg28W8yaGHY0lUhQPux%2FokWj6kAW0Lvd10VYCbSpf%2BafQOW4U82DpX8AiHgK6HoF4Zo%2BW5U2bfh5flvpjitAkz9%2BKeZ3nmdHyVNuNKnlOTj5SvKM2b4YBwyLw%2FTzVADTBfpANjnIEK6EZx002snBK%2B3flG6jUFroCBoX0rx09AK1q5qVpFsf5H6y%2Fxj%2FcwBcG7BqevBzkNTykMOGYzk%2B6yRw6Oq2Cr%2BmWgHN6iXuffqIFCpUDrUUq1EpuYLBCuIr0IjdlssmQ%2BS7NZLHcdV7M8CPzygy3Fk52j65bkul%2FLELo57pLjdWZcL8eXQaINYs6AR2jxo6pWqixzoR%2Bb8nD5TAYppDMj5pe2c7kWzyPMu4L8aTCC87O9BjqkAbwWwFFkxyfq6y5rTWJe6N3Yirb9fyOcxUL9jFhYOV3bD1ce2i2sEQJId7Xn890rNhYlehnXc8gCS2uagALysnAKSgJgF3qJhGhBqKUfTb0Pmizcr2G0Jnzhs3%2FLuXOMqxkKG6M%2FPOuQlRtEujmUfJikks8DFP7XJVT8%2F7CzvEmdXfYPyHYNyQgDVSDyn%2BefSL7OHQkyFV%2F1E2UuxnM1XdLXB96z&X-Amz-Signature=aa9f536565fe380a736a6bd76f36b3829b731ee11cc3ade9f2033b8492d3624a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2UQOAYS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKX9tEQhANfvRpohxHIX5EkrjMX%2FG%2BdYFom5o0%2Feii7wIhAPo%2BHu74dw0LQnGPCSvFhnIEXna%2FwDOsm9AuP7nHRYzWKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw9z1jqwZ%2Fl0FacI0q3AO7eC6BKBHHV4vUVhJZD8kFlD%2Be%2FUPv1KslFxvN9onFnsNKmjWl0d2h9O0qx0l6QNxGrLylDipqXWAUSU7BPE0HqU7Vv4RQnFF1m%2F%2B7mJFVJprjbBsDSQwykA4YhXFsXGnr%2BewUZToW4KTtnmLNOcH5sLYRfC3iV%2BLvV2YT6%2F1nd3WtgRJGExheOIE%2Fz%2Fa7Skec9fU4mnQlJxQfbCKLOYHzOVwRmy6MrWL370oOLrVHqPiRehVJ%2F4WfN2V5%2F6mRsDq1UOS8R%2B9kkyhg28W8yaGHY0lUhQPux%2FokWj6kAW0Lvd10VYCbSpf%2BafQOW4U82DpX8AiHgK6HoF4Zo%2BW5U2bfh5flvpjitAkz9%2BKeZ3nmdHyVNuNKnlOTj5SvKM2b4YBwyLw%2FTzVADTBfpANjnIEK6EZx002snBK%2B3flG6jUFroCBoX0rx09AK1q5qVpFsf5H6y%2Fxj%2FcwBcG7BqevBzkNTykMOGYzk%2B6yRw6Oq2Cr%2BmWgHN6iXuffqIFCpUDrUUq1EpuYLBCuIr0IjdlssmQ%2BS7NZLHcdV7M8CPzygy3Fk52j65bkul%2FLELo57pLjdWZcL8eXQaINYs6AR2jxo6pWqixzoR%2Bb8nD5TAYppDMj5pe2c7kWzyPMu4L8aTCC87O9BjqkAbwWwFFkxyfq6y5rTWJe6N3Yirb9fyOcxUL9jFhYOV3bD1ce2i2sEQJId7Xn890rNhYlehnXc8gCS2uagALysnAKSgJgF3qJhGhBqKUfTb0Pmizcr2G0Jnzhs3%2FLuXOMqxkKG6M%2FPOuQlRtEujmUfJikks8DFP7XJVT8%2F7CzvEmdXfYPyHYNyQgDVSDyn%2BefSL7OHQkyFV%2F1E2UuxnM1XdLXB96z&X-Amz-Signature=b0a4223f61b3a9d5990ecf96d2306339c1e229fd46740bfaeef8228ced6f594b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
