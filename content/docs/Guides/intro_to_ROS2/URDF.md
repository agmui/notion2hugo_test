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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPECRXZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtpPtnS8SHAEmgTaFyJ0WfTm2r3glP7%2BgKKqjfQ8Cc1gIgHZCMtqjpLG5XklijD2GpXLBQoTzyXGP4Ofko24XB04UqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfmbTa9Kv6cMIO6mircA2txRsRFtG032AsWk9iG823Q6dp1zhUqG3%2FSirNBV%2FzaXz6zbKPPE58GIS2BmQXetLwEnJTP55H4I4F6mTt%2BWTCHd89OQxJp1XLOWwIs92puDj7OkVbuQg02X5QCBdm4ZITPoUOSg%2Fq3%2BpN0sd95Vj5jiP8i88cuf13M6HKCcsUqWNLrbBeYQD8eoXZWoH%2BhWueL66OqClAgguFMJQfP%2B9RqS6g4Hjy3X3UX6%2FKy8yfAITDwl8yXZIOYdCmhl%2FsWxUuPXf3oA4ru5r8M5SjjZQvspniVTj%2FRigbWc21GnmZyWsMq2oDqNl%2Fgpzd2K5O%2BnDE8aDuPmXxRICgRPmsKinUDoodYGxNYqd%2BFDLwF2dPhmz%2F6kxjicUJDDuOwhLIXVYk3Qu6M5V12JgOipAlatLna8MuZHtmL610IhDWBw7U47JPtW1TLq8ObZWMIclPWXOKdzgctHnJy9aLurNdBQr0cuEW1nrXvnlj%2Fyy9jDMhDYwOrOxgPhA3%2FIQd8A3hMw2izqXJxIkkazxCvjMZA3AsvtIIWw9LeFRR6gDn4obIkX%2BfhG%2ByoRzgJ%2Fj8ZJiRltiDAagxxYS5VUHBi23HwgbEejN05XsBWwFwVku7tV6dpLUCWSUPA8JaJrhDvMPbpr70GOqUBhl7cwDNukly9vIhlExfgcUky4dOzTehmPlKKkZAJnc29G5g%2F%2F7mmqS8OXPNx6FaqJktwH1qSnT9Evyeoc0gIBsTyp51JDJ5WFFk05UINDdgVeA6kz9e2rPPXZ%2FCA0ejkK%2BHXbvWPHLi%2FLrR8kCiCMH%2BY60LZu2RR%2BtS0n5Igu6NS0NanTFtdk%2FrLuAxRKvuIgXozFTZbXCuW2jly2TvBQjkAM0W9&X-Amz-Signature=44cd212532e8343b80b50f911f8288534e223d2d62041a8949f048a9c428fd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPECRXZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtpPtnS8SHAEmgTaFyJ0WfTm2r3glP7%2BgKKqjfQ8Cc1gIgHZCMtqjpLG5XklijD2GpXLBQoTzyXGP4Ofko24XB04UqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfmbTa9Kv6cMIO6mircA2txRsRFtG032AsWk9iG823Q6dp1zhUqG3%2FSirNBV%2FzaXz6zbKPPE58GIS2BmQXetLwEnJTP55H4I4F6mTt%2BWTCHd89OQxJp1XLOWwIs92puDj7OkVbuQg02X5QCBdm4ZITPoUOSg%2Fq3%2BpN0sd95Vj5jiP8i88cuf13M6HKCcsUqWNLrbBeYQD8eoXZWoH%2BhWueL66OqClAgguFMJQfP%2B9RqS6g4Hjy3X3UX6%2FKy8yfAITDwl8yXZIOYdCmhl%2FsWxUuPXf3oA4ru5r8M5SjjZQvspniVTj%2FRigbWc21GnmZyWsMq2oDqNl%2Fgpzd2K5O%2BnDE8aDuPmXxRICgRPmsKinUDoodYGxNYqd%2BFDLwF2dPhmz%2F6kxjicUJDDuOwhLIXVYk3Qu6M5V12JgOipAlatLna8MuZHtmL610IhDWBw7U47JPtW1TLq8ObZWMIclPWXOKdzgctHnJy9aLurNdBQr0cuEW1nrXvnlj%2Fyy9jDMhDYwOrOxgPhA3%2FIQd8A3hMw2izqXJxIkkazxCvjMZA3AsvtIIWw9LeFRR6gDn4obIkX%2BfhG%2ByoRzgJ%2Fj8ZJiRltiDAagxxYS5VUHBi23HwgbEejN05XsBWwFwVku7tV6dpLUCWSUPA8JaJrhDvMPbpr70GOqUBhl7cwDNukly9vIhlExfgcUky4dOzTehmPlKKkZAJnc29G5g%2F%2F7mmqS8OXPNx6FaqJktwH1qSnT9Evyeoc0gIBsTyp51JDJ5WFFk05UINDdgVeA6kz9e2rPPXZ%2FCA0ejkK%2BHXbvWPHLi%2FLrR8kCiCMH%2BY60LZu2RR%2BtS0n5Igu6NS0NanTFtdk%2FrLuAxRKvuIgXozFTZbXCuW2jly2TvBQjkAM0W9&X-Amz-Signature=57b73023b3cc98d608b0bd460dcaeaade03919d11f9a841057d4a10bcab36da0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
