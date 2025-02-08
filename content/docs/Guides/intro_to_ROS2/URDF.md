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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ICHXC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDJIDpb5gxkUjBtLqYKQZq8FyJBI6GL5NjHwcU%2B0WiAAQIhAPydjZEcMK5leAZKpx8Ik5me6gOavQVZreuCNGqnLd2FKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1kdgbCvHQdC2Cr4Eq3AMV79%2FayE60T9hTpk2h%2FgbmxGjDr6agcsEb%2BdOz1Rzq%2F8Qk1eBkGN7LUBDJgjlI%2BiNts4GDN2I4Inx%2FeWXDh7kCBu47jL9RCIf3sv3xXN%2FWQNSrq2t57MAMcsUVFDipplLEwFjm6%2FxaPcakjDdMK347QCdk3WOzKGVJJtmTMNnJgUPeyIpiCVHTyhgQLLYIqq2Hks5A%2BUWFuIlqI15h9VEL2i9KHkJQh5ylNAKsdXQ4wAHiG6woIhnY3YKbtWdmrB5%2FI2gxKhpvb6LbsHVqhDq01ndJM3NVNiPdGgk5d1fGpY5GQy5NAlYHvZhpEW2FIh5w%2FnXVHUsf%2FKMPUzwCplZeTSjYjn4XL2jBdE9UQnbX8j43v9Kvweab4kG7CboS%2F3jxVVSfv7CLbkdaLHQ%2FI7SsCTmVxboXQAsRSkgXM0mzUoPseHNWKW5ua0V5pvf4fLTFit7VkMqRudWaG5z9Rb7diBqm5AiXfhPjTo%2Fu6VXu6LyBXK%2BF5iLva78aP%2FaiUh70rfFNaeIaXeT3coJANpXJmo%2FxB6X7V7JOtyb7tfHkJGR7vWeQlo8%2B%2BhzVcuBM6q69wojtDPZExy1Inpq6CPX2VS9NXDaCEyxX%2F4WK1eCA%2FNOi0G9t1qOEQSqTnDCUh529BjqkAUvo19aaUH2OKrodE38Biq5j2kBRV%2FalZ5hYA%2FhaRDsw3KNNlZ%2F4DPZJzj%2BVpBxSXN7uR5FxfY9f9Q%2FGVFjBGgRCsRQb3%2BPbSatxdNJwFboc09xThLdllAoY6lJk89j%2Bv9B2CNiE363AYn9ElgDCl7XnKul7JCF4VAZkvE5oTRVcDKIHd%2FrTAFUgQHGZEdjVpxodi9ZhZ5lzYCp1YOekl2j67O7J&X-Amz-Signature=1807722f034a31dfa1eedcf4b5154e2514fcee4626cbbce803b2dab1a8d5f805&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ICHXC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDJIDpb5gxkUjBtLqYKQZq8FyJBI6GL5NjHwcU%2B0WiAAQIhAPydjZEcMK5leAZKpx8Ik5me6gOavQVZreuCNGqnLd2FKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1kdgbCvHQdC2Cr4Eq3AMV79%2FayE60T9hTpk2h%2FgbmxGjDr6agcsEb%2BdOz1Rzq%2F8Qk1eBkGN7LUBDJgjlI%2BiNts4GDN2I4Inx%2FeWXDh7kCBu47jL9RCIf3sv3xXN%2FWQNSrq2t57MAMcsUVFDipplLEwFjm6%2FxaPcakjDdMK347QCdk3WOzKGVJJtmTMNnJgUPeyIpiCVHTyhgQLLYIqq2Hks5A%2BUWFuIlqI15h9VEL2i9KHkJQh5ylNAKsdXQ4wAHiG6woIhnY3YKbtWdmrB5%2FI2gxKhpvb6LbsHVqhDq01ndJM3NVNiPdGgk5d1fGpY5GQy5NAlYHvZhpEW2FIh5w%2FnXVHUsf%2FKMPUzwCplZeTSjYjn4XL2jBdE9UQnbX8j43v9Kvweab4kG7CboS%2F3jxVVSfv7CLbkdaLHQ%2FI7SsCTmVxboXQAsRSkgXM0mzUoPseHNWKW5ua0V5pvf4fLTFit7VkMqRudWaG5z9Rb7diBqm5AiXfhPjTo%2Fu6VXu6LyBXK%2BF5iLva78aP%2FaiUh70rfFNaeIaXeT3coJANpXJmo%2FxB6X7V7JOtyb7tfHkJGR7vWeQlo8%2B%2BhzVcuBM6q69wojtDPZExy1Inpq6CPX2VS9NXDaCEyxX%2F4WK1eCA%2FNOi0G9t1qOEQSqTnDCUh529BjqkAUvo19aaUH2OKrodE38Biq5j2kBRV%2FalZ5hYA%2FhaRDsw3KNNlZ%2F4DPZJzj%2BVpBxSXN7uR5FxfY9f9Q%2FGVFjBGgRCsRQb3%2BPbSatxdNJwFboc09xThLdllAoY6lJk89j%2Bv9B2CNiE363AYn9ElgDCl7XnKul7JCF4VAZkvE5oTRVcDKIHd%2FrTAFUgQHGZEdjVpxodi9ZhZ5lzYCp1YOekl2j67O7J&X-Amz-Signature=3d062b0eda8ca0a3736d437950f98e9ab0984786060902fbeacaf79b6b460c01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
