---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXWCXEW%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDJwNlmknCQ%2BaZUig7jzjK0lsc1grSW%2BQlhQIJUanQo0AiB90OBZ82fMqQmcLT6zZl92viUAYEvGvj08%2Btzn%2Fve8YCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMOTSjfvlTVto0Z2l4KtwDIGDfPGwOIX9cDZJPFXOqo41xyZuzvOlISSjWFsnE0%2BzH3hXRjOcAZzabqAp%2FhScaxTOxdgTMXCSwckaKlM2wq%2FuYW9xwk3iFH1l726lt7ZzgAS0liY6NYPtEEJQ3wW8yH229vbFvP2WrTMijPxl3QaVsXuTJGxhFcFcR2jpcFbVCkG9EWOD%2FTjEEHP0gAn4qKxsUgq4pK8IdubWsuD0if6GnPKpVpVkvAza7LHuj%2F5XvXl2vvnMqiReX7ywTQRkGWJSzUf3tIQTPFRhV0c51U7OvbmGD1cGxmxzEb018V64QOsLND7MKiqi5rBkw8FycOV53q4iVhgc0JRHwICSOUTZwWX1Z8N6k76Dwzl7A%2FoUAAd9EojJOLuLanMH5ETn%2FsSVmP%2Fg9I59oBBBuJIQ8%2FZEb1izJLGJpdXrxCFDOYeZdZug8RdhoX%2BBDAoQHw%2FpT90OiI1hRLwbBHt6SSpPQiUPtCDqspxkB3Gl%2BDYH7%2FhDq7iXHBvjo8iJqRnwWsSVLZxcfa58xkOlTEUMtR%2FSUWrGw6kbhy6Qg7I%2FpJ%2F9GEYlN2BgSAx1273FVf9eUXXW89HVNNUpahNv8T5Inxc%2FZG5Pfo%2FYkW6yiayjXVOBZ48OpBlDoIx7KETtNJuswtbCJyQY6pgEuUN6VF%2FB47uOIjq5i0t56DSoIEC6rDiiIEE9Fw94Ba6ZJOLqSw5savkee3XJuxKpyx91BjIs9JnEigl2Ef%2BcCKqt%2FzwzEFCndhTVEIU8EA8jRYFF1SaXAryk8ecxvVKEkjlPH96hEq8Mpn12Ys43DKqx%2FjK6OiTxJVjt8PYCDfkXdAIMvpJgZu6%2BC6toqS4kFn7TNOcDgPSOUeh38mh%2BRmuqu5ypC&X-Amz-Signature=6a0a615a0a3a3e56fd553b843fecb82693354a48afa3984349fb50435c1eaefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXWCXEW%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDJwNlmknCQ%2BaZUig7jzjK0lsc1grSW%2BQlhQIJUanQo0AiB90OBZ82fMqQmcLT6zZl92viUAYEvGvj08%2Btzn%2Fve8YCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMOTSjfvlTVto0Z2l4KtwDIGDfPGwOIX9cDZJPFXOqo41xyZuzvOlISSjWFsnE0%2BzH3hXRjOcAZzabqAp%2FhScaxTOxdgTMXCSwckaKlM2wq%2FuYW9xwk3iFH1l726lt7ZzgAS0liY6NYPtEEJQ3wW8yH229vbFvP2WrTMijPxl3QaVsXuTJGxhFcFcR2jpcFbVCkG9EWOD%2FTjEEHP0gAn4qKxsUgq4pK8IdubWsuD0if6GnPKpVpVkvAza7LHuj%2F5XvXl2vvnMqiReX7ywTQRkGWJSzUf3tIQTPFRhV0c51U7OvbmGD1cGxmxzEb018V64QOsLND7MKiqi5rBkw8FycOV53q4iVhgc0JRHwICSOUTZwWX1Z8N6k76Dwzl7A%2FoUAAd9EojJOLuLanMH5ETn%2FsSVmP%2Fg9I59oBBBuJIQ8%2FZEb1izJLGJpdXrxCFDOYeZdZug8RdhoX%2BBDAoQHw%2FpT90OiI1hRLwbBHt6SSpPQiUPtCDqspxkB3Gl%2BDYH7%2FhDq7iXHBvjo8iJqRnwWsSVLZxcfa58xkOlTEUMtR%2FSUWrGw6kbhy6Qg7I%2FpJ%2F9GEYlN2BgSAx1273FVf9eUXXW89HVNNUpahNv8T5Inxc%2FZG5Pfo%2FYkW6yiayjXVOBZ48OpBlDoIx7KETtNJuswtbCJyQY6pgEuUN6VF%2FB47uOIjq5i0t56DSoIEC6rDiiIEE9Fw94Ba6ZJOLqSw5savkee3XJuxKpyx91BjIs9JnEigl2Ef%2BcCKqt%2FzwzEFCndhTVEIU8EA8jRYFF1SaXAryk8ecxvVKEkjlPH96hEq8Mpn12Ys43DKqx%2FjK6OiTxJVjt8PYCDfkXdAIMvpJgZu6%2BC6toqS4kFn7TNOcDgPSOUeh38mh%2BRmuqu5ypC&X-Amz-Signature=88208a6ed25718e69cddb4f85723e516b4f5ab40470973ca28298c1cc01fc80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
