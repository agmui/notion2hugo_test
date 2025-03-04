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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF53VDB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWSwYFz6c%2BG7ifZNynXTf%2BQ87A928qzdU9jNMbFKYcRAiEAmsVHrRFj6Su%2FIAUI%2F4Kt70aJxT3g7Xh%2B370EOQiEZggqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPHwDNSIB54GfRDoSrcA3JhiGC2yNUgfBjF84kyBkDDqBp6KICLHw1fWCTPpdOqEjjwj0hR6%2Bh5HMpbJDgCED7f5v4gTP49iSMICM%2FsuFA8zp5qKob6eYUMWn9BzJv9b%2F6YWlM%2BhBL37dfiw4NRtVo%2FQp8ct3R2rXjVcu%2FnmHmnsxORnjw3PTjSweynmJCCBWJfLTIfNpVLj%2FpvIFHTxxYqkXKLExLroM7Ciymo%2Bod%2Bplg9FccYugZGrm5IkArUODhULcrNCu8DRr9HGcQ%2FnWiYbOAvAFSAzphG%2FyUmglcJXsmTSZI7QXf%2BYr9FRR4PeU%2Bv7APpQhb9owebddfyW4LXtC09sjjihp1mnUOxA49wmJCDnbIe6E1pRPFHqpkBObviXobxrpDN3FpZx4jTHG4zprbzeaVgUlVA1TkDda1EeLTMbWqM6q65o3xKf2XyGlL9ccYbqpZTTtnhsRZDDrh7VBDUBIxkBf3svRvwsbciPhONtXWrsuWbF7P72a30IYNgJnqMNmAfTi8%2B9wevdS0dGWL6hMvR%2Fj2vSnWos598nKPTZHR0RGu62xBoDUhn8O3XmpxeqHOgqhHQkj6FrpiNmVblcncCowKTpxP%2BuOEx%2FrGlSiCXa%2FBLIJFBphKLMu4GuFMSqZOxUsJaMKHAmr4GOqUBCEuqwxvqW8klXEWIIvYAm3ua75ysbxv7THujsvnE0gw%2FxzWMwDA00555PPMM6FDIsExfyKyqXDyUWS4RCR2iLIGrokkqowoVb0EPhFYOUJ%2BZAcLWj5JlnJX%2FzbgXV5TgX83S9xfUDItlHtSUNE3JY%2BwzitMXV99rAQzvlCg9cLiUDwh3RY53OFo%2FPZpp0gVbt33bXl8qPZrfKi9mWxbEwwMd4uxQ&X-Amz-Signature=7d9c9290acaf69f8366ab28a84617b099dbb5afeddce93f3653d2103d742a903&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF53VDB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWSwYFz6c%2BG7ifZNynXTf%2BQ87A928qzdU9jNMbFKYcRAiEAmsVHrRFj6Su%2FIAUI%2F4Kt70aJxT3g7Xh%2B370EOQiEZggqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPHwDNSIB54GfRDoSrcA3JhiGC2yNUgfBjF84kyBkDDqBp6KICLHw1fWCTPpdOqEjjwj0hR6%2Bh5HMpbJDgCED7f5v4gTP49iSMICM%2FsuFA8zp5qKob6eYUMWn9BzJv9b%2F6YWlM%2BhBL37dfiw4NRtVo%2FQp8ct3R2rXjVcu%2FnmHmnsxORnjw3PTjSweynmJCCBWJfLTIfNpVLj%2FpvIFHTxxYqkXKLExLroM7Ciymo%2Bod%2Bplg9FccYugZGrm5IkArUODhULcrNCu8DRr9HGcQ%2FnWiYbOAvAFSAzphG%2FyUmglcJXsmTSZI7QXf%2BYr9FRR4PeU%2Bv7APpQhb9owebddfyW4LXtC09sjjihp1mnUOxA49wmJCDnbIe6E1pRPFHqpkBObviXobxrpDN3FpZx4jTHG4zprbzeaVgUlVA1TkDda1EeLTMbWqM6q65o3xKf2XyGlL9ccYbqpZTTtnhsRZDDrh7VBDUBIxkBf3svRvwsbciPhONtXWrsuWbF7P72a30IYNgJnqMNmAfTi8%2B9wevdS0dGWL6hMvR%2Fj2vSnWos598nKPTZHR0RGu62xBoDUhn8O3XmpxeqHOgqhHQkj6FrpiNmVblcncCowKTpxP%2BuOEx%2FrGlSiCXa%2FBLIJFBphKLMu4GuFMSqZOxUsJaMKHAmr4GOqUBCEuqwxvqW8klXEWIIvYAm3ua75ysbxv7THujsvnE0gw%2FxzWMwDA00555PPMM6FDIsExfyKyqXDyUWS4RCR2iLIGrokkqowoVb0EPhFYOUJ%2BZAcLWj5JlnJX%2FzbgXV5TgX83S9xfUDItlHtSUNE3JY%2BwzitMXV99rAQzvlCg9cLiUDwh3RY53OFo%2FPZpp0gVbt33bXl8qPZrfKi9mWxbEwwMd4uxQ&X-Amz-Signature=b8dd0fe4fc02e4faa6f029d17c497b3a900406217c057e0728201a146e71a9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
