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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMF242XG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVahNoo%2B5K%2FWKANDRYevTuw2BF%2FAEysWIherwP2ZwMnAiBlbB2Lhg3iOgeI5X8fize5SR7SrmgxPOoyuZiwv%2BpGSir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMT%2F2WaFR6Kbo0FHARKtwDd0cYzIc3kpdJSTFn9fvcjgrxwSfWmAoSaTJIddv5xsJJFCi8NHgaOtHwEkGo3fI6sg7c0AZd4fnW8yjfYTwPDSZ1L9OsY9mgJt0dTJzHUubr4Z0UzlZXw4u%2FnSaf98JU%2Frt1V3rL4%2FRaXZQGn3YzYih5lYGA9NCwVG9VJgmKK7k1DC6yaOCsaNLAoMRjcjuz1i%2BvKM82OlRQgEOHLmG3YX%2B8LvSmzoUielNzo7BqP2ovH8sEk5uJY9qCWj%2BbA9O9oSB34GP2V4e8o0Eyj8UPHM8BikfAWlHPEDnzYGV6ZeEWqp1JV3Iog0U7CyeuWS6LJovhyfV0oZdiaK4pNIqb6IUx%2BPS073pCJ07ogqcCnWKGBYMepe8K70dmD0E1Uoqfrld%2Bo8d%2B64PFWseRD50FSAYD%2BVJHLcBYVoq0oED7W0Tw4emSwD2bVjPxupSSYWU85ivQSBwRHyRX18VQ9MKL4Az%2BWdYp9%2BizjjK4oFcloN%2Fiyzo2ZlUkIvRXoMaPzqunU%2FbsDEoP73snIcdcB1F9UjzQRe60aZ9ZlToke%2BM3SY%2BBRhWZxBw8L1BNWTvRWeQQaBLS8KdprjIr0fVsK2959ZYg%2BUvdtsAbW%2FfDyTRpt87hl%2FHhSCkX%2FPZV4fIwotmBvQY6pgEjeWj5G0vQIvchTdtuLdsMrmrtv6dCEuPKGdEOyZj56jZ%2FnFl7OPE%2FBEBpghG6Q9Es7ejhoN5307MKKgvASgpEw3L18%2BF97VNeppK5cjRGBYE13%2BSzSLIYCBGo2MAdmaUaGO4wQ62%2FJB4%2BQz4ybEoEEvPAPqgDhoghOC%2B3cJI3Wamg7k3wWwLWH%2BsK6UKAXFo3tDGq3H208%2Fg8xYIQ%2B%2FJwcminjs3g&X-Amz-Signature=038d4725bf2823953e3acbed132ed43d40a85adf8679ae2839cd9073f77f0abb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMF242XG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVahNoo%2B5K%2FWKANDRYevTuw2BF%2FAEysWIherwP2ZwMnAiBlbB2Lhg3iOgeI5X8fize5SR7SrmgxPOoyuZiwv%2BpGSir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMT%2F2WaFR6Kbo0FHARKtwDd0cYzIc3kpdJSTFn9fvcjgrxwSfWmAoSaTJIddv5xsJJFCi8NHgaOtHwEkGo3fI6sg7c0AZd4fnW8yjfYTwPDSZ1L9OsY9mgJt0dTJzHUubr4Z0UzlZXw4u%2FnSaf98JU%2Frt1V3rL4%2FRaXZQGn3YzYih5lYGA9NCwVG9VJgmKK7k1DC6yaOCsaNLAoMRjcjuz1i%2BvKM82OlRQgEOHLmG3YX%2B8LvSmzoUielNzo7BqP2ovH8sEk5uJY9qCWj%2BbA9O9oSB34GP2V4e8o0Eyj8UPHM8BikfAWlHPEDnzYGV6ZeEWqp1JV3Iog0U7CyeuWS6LJovhyfV0oZdiaK4pNIqb6IUx%2BPS073pCJ07ogqcCnWKGBYMepe8K70dmD0E1Uoqfrld%2Bo8d%2B64PFWseRD50FSAYD%2BVJHLcBYVoq0oED7W0Tw4emSwD2bVjPxupSSYWU85ivQSBwRHyRX18VQ9MKL4Az%2BWdYp9%2BizjjK4oFcloN%2Fiyzo2ZlUkIvRXoMaPzqunU%2FbsDEoP73snIcdcB1F9UjzQRe60aZ9ZlToke%2BM3SY%2BBRhWZxBw8L1BNWTvRWeQQaBLS8KdprjIr0fVsK2959ZYg%2BUvdtsAbW%2FfDyTRpt87hl%2FHhSCkX%2FPZV4fIwotmBvQY6pgEjeWj5G0vQIvchTdtuLdsMrmrtv6dCEuPKGdEOyZj56jZ%2FnFl7OPE%2FBEBpghG6Q9Es7ejhoN5307MKKgvASgpEw3L18%2BF97VNeppK5cjRGBYE13%2BSzSLIYCBGo2MAdmaUaGO4wQ62%2FJB4%2BQz4ybEoEEvPAPqgDhoghOC%2B3cJI3Wamg7k3wWwLWH%2BsK6UKAXFo3tDGq3H208%2Fg8xYIQ%2B%2FJwcminjs3g&X-Amz-Signature=861df6777826dff8ef36d776f8491b3b284fc241affef9a7582727a86ff5ba85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
