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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFQFHBU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDzyXOrlzLRD2fNpN5vQ1%2FaeORwHTgG8zWMpmfxEx58tgIgewdrx405NAx1SBKTSzzp27F0iT8kc6rjBYH6i2EQ4VIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD4Bp0ZAUPAEoFE6mircA8d3IPopROEc9P04oH0xRy4wazOXy1jgzTsP%2Bmn1OSBO9eJTEU7QjKXDhqwD8w9CSqvGyNgpsptUmG3hwHPJ3THSgHahXwTdQupcsG%2FV%2BhTvYoMbTD3cTioZ9Tg4eybZn6mVaMi8rEGF%2BBWJSU4WPOqM15qHIs4bU%2FpCHgNx2qNRdvu07XHj%2F10TCfIOKbRTyQKCGH2zQ9teXUzOJDyX2nkExe29LNHm2MyTdykQ%2FiZXLqGwRZUvbGyEnzs4K%2BnzAHWgwR1OstJC58TRZnHgLeUpIXifHyYWIFQKWhJxcXVTWthP6Dc%2FAi3PbtbItXGNxapPwe7hSgsGG0j0VlKhcDHsqFyvNuUeHe9opWcP83nXlpityxP0wJaXK8d5jY9mRDI5TvUaYl%2BlgfqzV47dhYGObuM0fv2bKISD4g0AAv2fwimJKKCtTC97XWOimazNoAwm26Q4Vi1CW4W1e92%2FOTrhMP0zGLwQV3cSnJNGTfw4hzVPIi6FJm0cxXyNdgJHQTcGqo29%2Fg1AotvqiQDhNIRPXlsNnoKJQtnGZb4Kg7YDSpWbl5O0p5F%2FfjQs7oo6OyhWbnlFDFOVJ6H5UwXGVjSfwLYvlut0x3ryU5SZCEs%2FBcNt%2BcpKv%2FSUEheAMOqk1cMGOqUByfU8sj8wTOy89RhEKQiD7s15s02qjtzOlAkrt2GMyw%2BbadTGxCxPtZAErqMX2rHfG5ec11wavzKozQe4v8nDhnLEUBEkzB55OqSSAmJwML1VcidqNKR31GGYnEcKGn8pIMWG0yzqGS90m11UqCnLWz2f0A2e91ia2edhtwwfznyeLZaSs6ZSpbznpguCeYB21Bm7rlOa2OHCsx2TfGq8NEBiWAIB&X-Amz-Signature=e7cb1cb7225b1b05283cae729888478e156fb3232a035fda5a9428bc97541433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRFQFHBU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDzyXOrlzLRD2fNpN5vQ1%2FaeORwHTgG8zWMpmfxEx58tgIgewdrx405NAx1SBKTSzzp27F0iT8kc6rjBYH6i2EQ4VIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDD4Bp0ZAUPAEoFE6mircA8d3IPopROEc9P04oH0xRy4wazOXy1jgzTsP%2Bmn1OSBO9eJTEU7QjKXDhqwD8w9CSqvGyNgpsptUmG3hwHPJ3THSgHahXwTdQupcsG%2FV%2BhTvYoMbTD3cTioZ9Tg4eybZn6mVaMi8rEGF%2BBWJSU4WPOqM15qHIs4bU%2FpCHgNx2qNRdvu07XHj%2F10TCfIOKbRTyQKCGH2zQ9teXUzOJDyX2nkExe29LNHm2MyTdykQ%2FiZXLqGwRZUvbGyEnzs4K%2BnzAHWgwR1OstJC58TRZnHgLeUpIXifHyYWIFQKWhJxcXVTWthP6Dc%2FAi3PbtbItXGNxapPwe7hSgsGG0j0VlKhcDHsqFyvNuUeHe9opWcP83nXlpityxP0wJaXK8d5jY9mRDI5TvUaYl%2BlgfqzV47dhYGObuM0fv2bKISD4g0AAv2fwimJKKCtTC97XWOimazNoAwm26Q4Vi1CW4W1e92%2FOTrhMP0zGLwQV3cSnJNGTfw4hzVPIi6FJm0cxXyNdgJHQTcGqo29%2Fg1AotvqiQDhNIRPXlsNnoKJQtnGZb4Kg7YDSpWbl5O0p5F%2FfjQs7oo6OyhWbnlFDFOVJ6H5UwXGVjSfwLYvlut0x3ryU5SZCEs%2FBcNt%2BcpKv%2FSUEheAMOqk1cMGOqUByfU8sj8wTOy89RhEKQiD7s15s02qjtzOlAkrt2GMyw%2BbadTGxCxPtZAErqMX2rHfG5ec11wavzKozQe4v8nDhnLEUBEkzB55OqSSAmJwML1VcidqNKR31GGYnEcKGn8pIMWG0yzqGS90m11UqCnLWz2f0A2e91ia2edhtwwfznyeLZaSs6ZSpbznpguCeYB21Bm7rlOa2OHCsx2TfGq8NEBiWAIB&X-Amz-Signature=99898ead80c6f0ac1a5d6c32a37f63b4330fc7a7dcec3ffde85e5633b533e975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
