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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAZ3HZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqKkkWqgpWmOijRQY0%2Bf7cXbBTXD0vZ2gfDSs3nEUwjAiBej785%2BtrrNrAyON0%2Bha0nx%2FYyc6AF%2BMilC61HMV44MSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMbA5%2FAS%2FNE4FGpXMgKtwDC%2BLy1B8OZ9ft9X2eRO4%2Bwb1R64K2SjflB60L4AMkwPQk9Itt91zLHnRRfzfLB23nnG0lX%2FAtbxKler75YqmuIC3WYCoqjzbu2Gl6qphPFhxr4HBEZUmZypzbB0sggVYLP5tMF1gyWpUKrcWJB5gEqFN6UISMfqZNdqzeTwKkn2NAP24twWG98QVUZ3VxGAvDru51caZnEf4jzkc1Pyk%2F5bHGL4mV6WtauKfwUJhusPq3OEJLwZ6jrrK9phdj8T71GUapOpvHY4xPaSaQIqpEQUuNlTOTMKOqv8jX8X5cezjhvHi0c1M2DOwz8kswzpIVoN03WQvzRy8%2FHv28zaq3EzQ0GT%2B8b3LNDXq52ruIQA1aNx1t%2FQ1SEh8teEUlN6QDzIfwl0Aj2V8wwdmIWkj5oGxMd419syDIcT5DFZaQZtl2J2juCyKhQNU%2F3zKQTJGDc20LmMRh3tLVcbcWqiLp0oP99hcCBh%2BknfwjDR%2BuQTOUQ1wsJQFYfKDn7EKiwuxvuH2rWY4cwjAW7IhO02hGeJt%2FzNdVpG7o%2BHB5%2FyejLSTSk99X8q3UGo6x9jKEmoQx6%2FAuMg%2Frfmjmf7mUlPqHqgGAG2Qd7KTT8X%2Fbuq6omIverqI37eYsA8ddLcYwm7OxvgY6pgH4o2lNf4b9h1JJwfTeL47BnFqmBcyjJwChO63x7VkxMWy8Zy18JxiS%2BXvZZrxiz%2FWhvoS3ZeIykW45giBzWN8jarSYRmDnhTv4WtkjvmZSG76JucAfIffUqBDmyVf2cysdOPs%2B538WrET2yvVVGpAPJtiOOsYGfRGHvyjF%2FAeXT2cC5PLjmKzvCjloMDvrMc%2F3IsTeydkPIPdT9z5fAF3ifHh9XolV&X-Amz-Signature=35f3d98a68df97ef85a59864c4c24042547c443d3ed5a62fea91cc762d7619b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZAZ3HZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqKkkWqgpWmOijRQY0%2Bf7cXbBTXD0vZ2gfDSs3nEUwjAiBej785%2BtrrNrAyON0%2Bha0nx%2FYyc6AF%2BMilC61HMV44MSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMbA5%2FAS%2FNE4FGpXMgKtwDC%2BLy1B8OZ9ft9X2eRO4%2Bwb1R64K2SjflB60L4AMkwPQk9Itt91zLHnRRfzfLB23nnG0lX%2FAtbxKler75YqmuIC3WYCoqjzbu2Gl6qphPFhxr4HBEZUmZypzbB0sggVYLP5tMF1gyWpUKrcWJB5gEqFN6UISMfqZNdqzeTwKkn2NAP24twWG98QVUZ3VxGAvDru51caZnEf4jzkc1Pyk%2F5bHGL4mV6WtauKfwUJhusPq3OEJLwZ6jrrK9phdj8T71GUapOpvHY4xPaSaQIqpEQUuNlTOTMKOqv8jX8X5cezjhvHi0c1M2DOwz8kswzpIVoN03WQvzRy8%2FHv28zaq3EzQ0GT%2B8b3LNDXq52ruIQA1aNx1t%2FQ1SEh8teEUlN6QDzIfwl0Aj2V8wwdmIWkj5oGxMd419syDIcT5DFZaQZtl2J2juCyKhQNU%2F3zKQTJGDc20LmMRh3tLVcbcWqiLp0oP99hcCBh%2BknfwjDR%2BuQTOUQ1wsJQFYfKDn7EKiwuxvuH2rWY4cwjAW7IhO02hGeJt%2FzNdVpG7o%2BHB5%2FyejLSTSk99X8q3UGo6x9jKEmoQx6%2FAuMg%2Frfmjmf7mUlPqHqgGAG2Qd7KTT8X%2Fbuq6omIverqI37eYsA8ddLcYwm7OxvgY6pgH4o2lNf4b9h1JJwfTeL47BnFqmBcyjJwChO63x7VkxMWy8Zy18JxiS%2BXvZZrxiz%2FWhvoS3ZeIykW45giBzWN8jarSYRmDnhTv4WtkjvmZSG76JucAfIffUqBDmyVf2cysdOPs%2B538WrET2yvVVGpAPJtiOOsYGfRGHvyjF%2FAeXT2cC5PLjmKzvCjloMDvrMc%2F3IsTeydkPIPdT9z5fAF3ifHh9XolV&X-Amz-Signature=34f2484e817ebf89b9754cdd9357b08ddd6b3f7c4dc537a38c5f8ad3752dd4d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
