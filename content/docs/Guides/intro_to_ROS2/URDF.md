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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TN4PR4W%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fc7aIZDO1nCOPJWlRlMp%2Bv1V0LbEy2MB8TBaiGBkLmwIhAJ1Z41p%2BZrqRPYCFR7p%2BKSXM3BeR%2ByR6wmkWDZnz77z9KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0D5GdHHWI6FYjiToq3ANiklXPKoIvf%2B66w3xKcL4Bv5Zd%2BBpnU5D8Da7uuBY3eMhoFg6Z6KSL9y%2FQ%2BxHCmho2dB%2BJNlUijAZBhiJozzoE%2FfpvumTyWwFkUrEaPJ04daHHTOdyMhQPA4%2F8j%2BuqW20pG8MbK3hfT%2FgMAp%2BewX7l9QgUIcYVbRM%2BQdp961iG4f19IY8n%2FH6LSYQ3dQ8C1kRfk2Mj5y1JL83o2Uk5SF%2BGtR%2B5brC5udbufqj11p0hVFf%2Feo2X%2Bu%2FpNqGjdIzw%2Bm583%2BIRTEiNnTYfP%2Fonxebcbf2DvznNXO7wSNpj%2BHAfU4yfUg0SrmVtEf5yLAw1NztS7eEMfg1UZ%2BUAmy%2BvAZY17614FDf6gecYBFHrUWNP2GxJTIByOzyotCFaiU9FyXhaQkGpPkdFBGZKU4yzF9tovkMqxvpJuCk3lMv681QDY8U6QFlwX2amXeuZZawl4obEbQYlDPyCHe91aziSTNImBKFMPzqxD7tU3Fc1kGptGdDDWel6iUt1uzrndEWfe84hBoL35GPYmKuX%2FQXkMD3shqO%2FIffhnH5JwUMA%2BFdX0%2BKtouNqS1CtNHArE9amkAl80NCH6HERTtI1qKZmJZJK6q5DTmTW%2By0hfHmbVqui8r1IUhX9FfxZnMG1RjD2%2BaW9BjqkAZo1R9%2BgQ6b5WfWJ6AQRaSitsfyUAdaLVOGmh%2BGG0OITgHIFE8Uy3NgyVcgP76o3h5cL9PO9OgxQpUWfWhTvAhnxKBGZMp11QY%2FdbzJjb9DO03uxpwH%2BJvLnpsVCd%2F%2F%2BpkUZStwdYZmnP6gTE5oCpfyAfiM451H124foSf%2BBVzoN9ZZmXSR%2FWvmgRcbhz7omUwVtS66lE%2BeqpHsHI9hudYyY1umA&X-Amz-Signature=04b3f2b58e6570c7c0b9ad323d4faa33dc042be976e183f64088501f087780a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TN4PR4W%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fc7aIZDO1nCOPJWlRlMp%2Bv1V0LbEy2MB8TBaiGBkLmwIhAJ1Z41p%2BZrqRPYCFR7p%2BKSXM3BeR%2ByR6wmkWDZnz77z9KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0D5GdHHWI6FYjiToq3ANiklXPKoIvf%2B66w3xKcL4Bv5Zd%2BBpnU5D8Da7uuBY3eMhoFg6Z6KSL9y%2FQ%2BxHCmho2dB%2BJNlUijAZBhiJozzoE%2FfpvumTyWwFkUrEaPJ04daHHTOdyMhQPA4%2F8j%2BuqW20pG8MbK3hfT%2FgMAp%2BewX7l9QgUIcYVbRM%2BQdp961iG4f19IY8n%2FH6LSYQ3dQ8C1kRfk2Mj5y1JL83o2Uk5SF%2BGtR%2B5brC5udbufqj11p0hVFf%2Feo2X%2Bu%2FpNqGjdIzw%2Bm583%2BIRTEiNnTYfP%2Fonxebcbf2DvznNXO7wSNpj%2BHAfU4yfUg0SrmVtEf5yLAw1NztS7eEMfg1UZ%2BUAmy%2BvAZY17614FDf6gecYBFHrUWNP2GxJTIByOzyotCFaiU9FyXhaQkGpPkdFBGZKU4yzF9tovkMqxvpJuCk3lMv681QDY8U6QFlwX2amXeuZZawl4obEbQYlDPyCHe91aziSTNImBKFMPzqxD7tU3Fc1kGptGdDDWel6iUt1uzrndEWfe84hBoL35GPYmKuX%2FQXkMD3shqO%2FIffhnH5JwUMA%2BFdX0%2BKtouNqS1CtNHArE9amkAl80NCH6HERTtI1qKZmJZJK6q5DTmTW%2By0hfHmbVqui8r1IUhX9FfxZnMG1RjD2%2BaW9BjqkAZo1R9%2BgQ6b5WfWJ6AQRaSitsfyUAdaLVOGmh%2BGG0OITgHIFE8Uy3NgyVcgP76o3h5cL9PO9OgxQpUWfWhTvAhnxKBGZMp11QY%2FdbzJjb9DO03uxpwH%2BJvLnpsVCd%2F%2F%2BpkUZStwdYZmnP6gTE5oCpfyAfiM451H124foSf%2BBVzoN9ZZmXSR%2FWvmgRcbhz7omUwVtS66lE%2BeqpHsHI9hudYyY1umA&X-Amz-Signature=13e1f1ec44006797f9ab4bade4d69b622e5ff036a730d8bd38c6eff3e2ef13f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
