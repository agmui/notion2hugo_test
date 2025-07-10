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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUXM3CY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7oQ2%2Fzu0JVy5iV1pstz8fE%2BzK4oLS7Pr1v8aBgI8soAiEA6n041lv52oOuT66CXbhGFs25AmqrC5ACkv18xfrsdDIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhyul8aKQr8kOYBJSrcA1rABB2acGFNiynASFk6%2BvhZJrzcAZl4bGFeV81TN4EZJ6Tm%2BlaGnwfhjjSoxrxPjR%2BgpWQclyp4b1TkXp5mgHj%2Foc25DN7icjlREqWbDwbk5Gj14tJCFMuuBjSUHENkJNiTIYdsSeFr9RryUgKi3as2ZVvKHwZI8c6pGRNeroBFtOjz3C%2BEZMoBhFMwsWzkInnhmqn82r6lY3c7jWA6Boz%2Fs0%2BVyqClpi0tYll0mEihJOG1drCA6OiHBL%2B77oWch3UddlRx4UG8LogiY0wnmYxkczQ7nk8hAEmLF4Y8ykfrvLmI5Zq2A3dTB6Dco20YkuHDVTI2qTqhllT2Az8Ixz5gqCC1mQ7%2BQhELgNekUqqkJ1HBlO4EOqaWw%2Bm%2F7%2F5dAk%2FhwfAz17mEAZoqrb53sCKWP6MxSL9ymJSnP3QVgWLq5wpbPbaoOi03CMzahiS6zERDhwqNP4Rb7%2FLyF6VKuYtF3XkNSIUJKrLnyVTz8cHF6jt%2BbI7O8KB8U9wgdbPuSa%2FHgoToRWPSAYnDk3GfouF3rYwNX%2ByX5L%2FklK5pPGJ9G%2FlI%2FXjpDG%2ByuxfRFfq4qqPRFbvK4Vvh8ReX6PR4i7dmdqBIDNDnMYLPyDLirs7xZI%2F7KGRbY8Vg8Rr7MJLRv8MGOqUBYD1Dqmdrv2paE8OqylC50FXoB4xPis3aOaoHRE%2BeWxaO%2FBw8%2FwyLu2OHiYv7oBVau7l1YTP2apM2JhIDuzPx5P1UEEc82IrVoj4JY3i20XiFgZQ23GkP41Rmi1B9ehT4Dcr9GWU2nzlGeuSjzhD1R6V5BPNVvKLMtIra4g73sjqDBv8b3lk%2Bwm2B%2F5fZHZt0ztfPYsEV%2FMnAUqwk0Fz%2FRf7AavMv&X-Amz-Signature=103ba372eaad476b2d6cfe56b135a6778bf908c04fb2bb30f4e5c9684e2f8d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUXM3CY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7oQ2%2Fzu0JVy5iV1pstz8fE%2BzK4oLS7Pr1v8aBgI8soAiEA6n041lv52oOuT66CXbhGFs25AmqrC5ACkv18xfrsdDIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhyul8aKQr8kOYBJSrcA1rABB2acGFNiynASFk6%2BvhZJrzcAZl4bGFeV81TN4EZJ6Tm%2BlaGnwfhjjSoxrxPjR%2BgpWQclyp4b1TkXp5mgHj%2Foc25DN7icjlREqWbDwbk5Gj14tJCFMuuBjSUHENkJNiTIYdsSeFr9RryUgKi3as2ZVvKHwZI8c6pGRNeroBFtOjz3C%2BEZMoBhFMwsWzkInnhmqn82r6lY3c7jWA6Boz%2Fs0%2BVyqClpi0tYll0mEihJOG1drCA6OiHBL%2B77oWch3UddlRx4UG8LogiY0wnmYxkczQ7nk8hAEmLF4Y8ykfrvLmI5Zq2A3dTB6Dco20YkuHDVTI2qTqhllT2Az8Ixz5gqCC1mQ7%2BQhELgNekUqqkJ1HBlO4EOqaWw%2Bm%2F7%2F5dAk%2FhwfAz17mEAZoqrb53sCKWP6MxSL9ymJSnP3QVgWLq5wpbPbaoOi03CMzahiS6zERDhwqNP4Rb7%2FLyF6VKuYtF3XkNSIUJKrLnyVTz8cHF6jt%2BbI7O8KB8U9wgdbPuSa%2FHgoToRWPSAYnDk3GfouF3rYwNX%2ByX5L%2FklK5pPGJ9G%2FlI%2FXjpDG%2ByuxfRFfq4qqPRFbvK4Vvh8ReX6PR4i7dmdqBIDNDnMYLPyDLirs7xZI%2F7KGRbY8Vg8Rr7MJLRv8MGOqUBYD1Dqmdrv2paE8OqylC50FXoB4xPis3aOaoHRE%2BeWxaO%2FBw8%2FwyLu2OHiYv7oBVau7l1YTP2apM2JhIDuzPx5P1UEEc82IrVoj4JY3i20XiFgZQ23GkP41Rmi1B9ehT4Dcr9GWU2nzlGeuSjzhD1R6V5BPNVvKLMtIra4g73sjqDBv8b3lk%2Bwm2B%2F5fZHZt0ztfPYsEV%2FMnAUqwk0Fz%2FRf7AavMv&X-Amz-Signature=47287506d8f5d32d2ee57f310bd94e6c2eeeb22e8547b0ccb67ff2ad55352cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
