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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXSQK7F%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdAiVg6corI9HUIhKZlCB73sLaOFm%2F2jjkVR3A33oEiAiEAt%2BwIcKy5NapH6yKsXq9QXW0Af6ik5FtAFRXTIaThLC4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbie3BgwXO9G3FTWCrcAxj3mcVmxwyxxaIXe4CoTuCFXj2GsHpnFEgVN0WrzH1eQsZJ9j%2B84%2FA5KnQbXYnhRyTYcGD9HFCHawlrI%2FYYDqebJu14L1OIJRcqJh9bWnHtdfU0faw34jWHY%2Bvwenl5kApB%2Flo2ywpm5oVWi3sT5XJR88hK7l7feLotsB3a9N%2BsySD69a1hpOnF2hPlEpHjmomxXEtefgkFQr12LOWdHaXnPmKfOXYwzuWhxGblKp0HHDVcx%2FrAubO89lmEPwnq0J2oyRPZNT4jYB4S93qk2k6Xo1NxIcZd1M%2Bxv1w5cx2pr4y3JFnckw1TLH0zOSduo7Q0z%2F6g9KO7matIh%2FzswIyUSs9mD94qI5zCUqlV7GSSHGY%2F%2FAuUgzJ2uOwHKS4EGd%2B44Vui0Ax0i46zG1noPqsGqxEw6rcj3cJaQIQfLLnOvW7IkCCv8GY%2FOkTMEu5vwE732Rkc3zEXJCv1JOLgRbw%2FHFZ2vQ7JZsTRXBsHGwtv5HBOOxX5kbBUMrrl3HcPzkF%2FQFkXSGzemg%2FlXAA2lFJ2vA9l4H3RJ8rTGfqnWqa14GdAQk8QDa8aqNfAwVcdwmJK7M%2FiDyyGWBHF6rtzdv8x4KVQ8EblTPxzG027pxZOboWdJ68ZlsJ3D7xRMOzttcEGOqUB6suPfrKNyoTgivLYNniWdRfW0HkMd4m3RGRjcTa3H4ie37HqnrOQoPekJR8O6mHJfnbZ%2BNVr4M8QLU9mbn9djpC8N2oK%2BegzLQDhkNTzrmAsG4MRCaah506MK3yfUIlhAjRJ8uhtu0vq01jZ48szLqG0%2B5MjXA8hMb78JUyJk6JpE8CkaJ7VXn40xdoQ5I5K3Q7FwKwB8uOI2BfcCGDH2w3ZIV5%2B&X-Amz-Signature=2d2e15ca27031a869c1fa45f12881a5ee12851d1efef4258c6e86fc4b3f1742f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXSQK7F%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdAiVg6corI9HUIhKZlCB73sLaOFm%2F2jjkVR3A33oEiAiEAt%2BwIcKy5NapH6yKsXq9QXW0Af6ik5FtAFRXTIaThLC4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbie3BgwXO9G3FTWCrcAxj3mcVmxwyxxaIXe4CoTuCFXj2GsHpnFEgVN0WrzH1eQsZJ9j%2B84%2FA5KnQbXYnhRyTYcGD9HFCHawlrI%2FYYDqebJu14L1OIJRcqJh9bWnHtdfU0faw34jWHY%2Bvwenl5kApB%2Flo2ywpm5oVWi3sT5XJR88hK7l7feLotsB3a9N%2BsySD69a1hpOnF2hPlEpHjmomxXEtefgkFQr12LOWdHaXnPmKfOXYwzuWhxGblKp0HHDVcx%2FrAubO89lmEPwnq0J2oyRPZNT4jYB4S93qk2k6Xo1NxIcZd1M%2Bxv1w5cx2pr4y3JFnckw1TLH0zOSduo7Q0z%2F6g9KO7matIh%2FzswIyUSs9mD94qI5zCUqlV7GSSHGY%2F%2FAuUgzJ2uOwHKS4EGd%2B44Vui0Ax0i46zG1noPqsGqxEw6rcj3cJaQIQfLLnOvW7IkCCv8GY%2FOkTMEu5vwE732Rkc3zEXJCv1JOLgRbw%2FHFZ2vQ7JZsTRXBsHGwtv5HBOOxX5kbBUMrrl3HcPzkF%2FQFkXSGzemg%2FlXAA2lFJ2vA9l4H3RJ8rTGfqnWqa14GdAQk8QDa8aqNfAwVcdwmJK7M%2FiDyyGWBHF6rtzdv8x4KVQ8EblTPxzG027pxZOboWdJ68ZlsJ3D7xRMOzttcEGOqUB6suPfrKNyoTgivLYNniWdRfW0HkMd4m3RGRjcTa3H4ie37HqnrOQoPekJR8O6mHJfnbZ%2BNVr4M8QLU9mbn9djpC8N2oK%2BegzLQDhkNTzrmAsG4MRCaah506MK3yfUIlhAjRJ8uhtu0vq01jZ48szLqG0%2B5MjXA8hMb78JUyJk6JpE8CkaJ7VXn40xdoQ5I5K3Q7FwKwB8uOI2BfcCGDH2w3ZIV5%2B&X-Amz-Signature=bdef6826cb15d7749019862d48524a49bdfb80ac6c1882b8cea7aab9bc9931c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
