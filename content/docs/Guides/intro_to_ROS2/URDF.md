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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU33UPAJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ3vfpRlAb9mgBsJ3hx3M%2Fg5j9P01oP%2FCeXRCn4mNTCwIhAOX7LxooH2QxUvGER%2Fu5boom2U1dWlPF8L99BgXR32BBKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQTMLeIz6mj4ZlPn0q3AMw9BV0TZw3vU6JXe5BJIR4yGqese3HrHZi0b65frFEQq0eOyjJZ5euU8qO7MqmBe%2FOi%2F2TBVZpdLcyZ%2FDqucZIKzKK03uNefkjlFgD4oeBL8QH%2F2v6E%2F60MCNcd74ql%2BF6vgaIaqDkA9ZEio68QhJXdqN3NrIxsKD1bbi1UPU4bGGoHrh9pIBwuYiH%2ByRi76jgXeuEfJ%2BwrqCMIL%2B9ooUMEsgYiXzJw0P8rcnl598HooLyyKRl6PdnXBIcQw%2FwdLUhCYtaDiVmaYWlLY8LVxPPOEsjcgR7810Tipazf8N%2FfsxhXhw9RpK4ILv7zRnivjg5UDcYYWNhtkVglD3cQu22ZyovGmGHXk1nZuPfkDdKD9bRlSAV2dpyjMI5nHDBkl4JCPErynfxrxehJk3EVEXGbkoQagzApOjE9pcTMpm%2FVyKkUyfpBGm2h4cIwjJ%2FExAx%2F%2Bzch6KIEqIl1N7IxQkVcXzeccXQCzCuCuzXgiEbGXzdBNs%2BQ99aNS05RpNpSIv%2BZ4un7e8e%2F4rvIgNqAXxPQWl%2FCr1BlafHEugt6aUukdcgn29Cp4wWORIih%2F8yaKoaxKIaDIfBs3YK0irdPya4okmjOdSMOAQMnE2gUS9pylHE8Ny8Z1y9Q0Hx3DC8vqDCBjqkASpVg46Jcvnni6nK8iUPS5f2MpQgAgNNZL5RBA%2BBzQ8kZ%2F%2FhFg89RP6waYxb%2ByGSHB8ypHKAJ4bWs9IZoBX2C9ZohWbVZqTidaO%2BwcxtEI72bOjASxTbabt7LXa%2B5aKwBJgztyLhIYXtLvO9RokJtTTI3QgNMvSL%2BDqHkTM51564%2B9yzXAw%2BR623Exuw%2FTTQzL4alxMI41AR8BB4qeXJrcPELX%2Br&X-Amz-Signature=d8f379ea07e8dbdd58201213441000fbc3872e05ed1380a1f39e0155009aa8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU33UPAJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ3vfpRlAb9mgBsJ3hx3M%2Fg5j9P01oP%2FCeXRCn4mNTCwIhAOX7LxooH2QxUvGER%2Fu5boom2U1dWlPF8L99BgXR32BBKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQTMLeIz6mj4ZlPn0q3AMw9BV0TZw3vU6JXe5BJIR4yGqese3HrHZi0b65frFEQq0eOyjJZ5euU8qO7MqmBe%2FOi%2F2TBVZpdLcyZ%2FDqucZIKzKK03uNefkjlFgD4oeBL8QH%2F2v6E%2F60MCNcd74ql%2BF6vgaIaqDkA9ZEio68QhJXdqN3NrIxsKD1bbi1UPU4bGGoHrh9pIBwuYiH%2ByRi76jgXeuEfJ%2BwrqCMIL%2B9ooUMEsgYiXzJw0P8rcnl598HooLyyKRl6PdnXBIcQw%2FwdLUhCYtaDiVmaYWlLY8LVxPPOEsjcgR7810Tipazf8N%2FfsxhXhw9RpK4ILv7zRnivjg5UDcYYWNhtkVglD3cQu22ZyovGmGHXk1nZuPfkDdKD9bRlSAV2dpyjMI5nHDBkl4JCPErynfxrxehJk3EVEXGbkoQagzApOjE9pcTMpm%2FVyKkUyfpBGm2h4cIwjJ%2FExAx%2F%2Bzch6KIEqIl1N7IxQkVcXzeccXQCzCuCuzXgiEbGXzdBNs%2BQ99aNS05RpNpSIv%2BZ4un7e8e%2F4rvIgNqAXxPQWl%2FCr1BlafHEugt6aUukdcgn29Cp4wWORIih%2F8yaKoaxKIaDIfBs3YK0irdPya4okmjOdSMOAQMnE2gUS9pylHE8Ny8Z1y9Q0Hx3DC8vqDCBjqkASpVg46Jcvnni6nK8iUPS5f2MpQgAgNNZL5RBA%2BBzQ8kZ%2F%2FhFg89RP6waYxb%2ByGSHB8ypHKAJ4bWs9IZoBX2C9ZohWbVZqTidaO%2BwcxtEI72bOjASxTbabt7LXa%2B5aKwBJgztyLhIYXtLvO9RokJtTTI3QgNMvSL%2BDqHkTM51564%2B9yzXAw%2BR623Exuw%2FTTQzL4alxMI41AR8BB4qeXJrcPELX%2Br&X-Amz-Signature=ecfd767d33fd4a0c7c52045153ddc9e8d7774b21ff62a9b0306e12dfb7d1d2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
