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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCWS63LZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1E5WLBL4WtxFRkLDF2witXd%2BQHiPK8KgHlO7CLBDhqgIhAKrZmJZ8zs4X2JJWOZ%2FdKNJV8jhAwMdda8z7ltY%2F%2BBIMKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwx%2BqIK8B0Q6zWW8q3AM4IQCSYIvJQ6Ktsg%2F%2BzqmkLrPU4dZB3w%2B1%2B91iI3ZxBV3AZ%2BLm8Qk%2Fd3phryBdKfrMF16Gxz0RiQnpsTj0u%2FHV9mWVFAc%2FZ6ZEExkuf9IG42rj%2FJQjylPQY505o8SuUeV7j07Y94pxtASMzWTUErHgClrce%2FYwwCABieoCX8hUprVPMmtXKfjUOqCEVp0Y9TfysVd7%2Fodn4MKrA%2B7aGZh2hBbDrrkCK2FBLR28%2FNYzvNkl3nsxsDktPbO5DGWFbNFomgJZLrgRtbH9uR5PCOEa6IfippT%2FYa%2FOey%2FZb3TzUkR2XWf1v%2FylJ7HhbkV1oyNfS7jx8RQk6Sw2vwKz7WLGCXThbNQ2lsJG6DG4XDuEQ08wN0T3lOv%2BXYyyFUA6O5uWEdCpByXVny%2FSvBUO3Cnz0RTT0XC5d5pjoKku587Tia0t%2BfHfHnhnxxWWRCGp%2BLDrIS5vRFOYNkcK6JOcTVQ5g9OD3U3DVEWVsyhVk2CDco%2F%2BAklfKHnr3IQxfOVm%2Bgfbsa4NvoAWhSkuAeX8EmlH3139f2UAtcXzUB3S%2Fdf%2F%2B5IO29UQeQH0Rt263gP0KbkILLJ6057XMqSImHrVUjzlH7PUdiJgRrxkI%2FyKrHfa5Y1Ya3lQExwDqoy07zDmhJu%2BBjqkAZPBK7Eboh077%2Bat%2Bw4RLJHx0%2FuZ98Duzo5J%2BPRZAqdRdLk7coelIXlYpI33J6PGOyxTXfYzZO4Vzq9uiE%2B6MIqleiwQp%2FY4%2FbmQd%2BUqkC8MgA6qFdONHO2rbU9TAJuHi7RVxK6ZLILKEU0Azg9jImMbzIht3x87%2FCvtYPgSf%2FG6lkyIP1FrqiWWsOOs%2FyCwl4lb6XqG8gcRdEJzfu0VZ58j%2FeWn&X-Amz-Signature=0083b159130cc1f7acdc822ca5cc13bd0b50f987fa9d4a71ea1ef02e169192f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCWS63LZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1E5WLBL4WtxFRkLDF2witXd%2BQHiPK8KgHlO7CLBDhqgIhAKrZmJZ8zs4X2JJWOZ%2FdKNJV8jhAwMdda8z7ltY%2F%2BBIMKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBwx%2BqIK8B0Q6zWW8q3AM4IQCSYIvJQ6Ktsg%2F%2BzqmkLrPU4dZB3w%2B1%2B91iI3ZxBV3AZ%2BLm8Qk%2Fd3phryBdKfrMF16Gxz0RiQnpsTj0u%2FHV9mWVFAc%2FZ6ZEExkuf9IG42rj%2FJQjylPQY505o8SuUeV7j07Y94pxtASMzWTUErHgClrce%2FYwwCABieoCX8hUprVPMmtXKfjUOqCEVp0Y9TfysVd7%2Fodn4MKrA%2B7aGZh2hBbDrrkCK2FBLR28%2FNYzvNkl3nsxsDktPbO5DGWFbNFomgJZLrgRtbH9uR5PCOEa6IfippT%2FYa%2FOey%2FZb3TzUkR2XWf1v%2FylJ7HhbkV1oyNfS7jx8RQk6Sw2vwKz7WLGCXThbNQ2lsJG6DG4XDuEQ08wN0T3lOv%2BXYyyFUA6O5uWEdCpByXVny%2FSvBUO3Cnz0RTT0XC5d5pjoKku587Tia0t%2BfHfHnhnxxWWRCGp%2BLDrIS5vRFOYNkcK6JOcTVQ5g9OD3U3DVEWVsyhVk2CDco%2F%2BAklfKHnr3IQxfOVm%2Bgfbsa4NvoAWhSkuAeX8EmlH3139f2UAtcXzUB3S%2Fdf%2F%2B5IO29UQeQH0Rt263gP0KbkILLJ6057XMqSImHrVUjzlH7PUdiJgRrxkI%2FyKrHfa5Y1Ya3lQExwDqoy07zDmhJu%2BBjqkAZPBK7Eboh077%2Bat%2Bw4RLJHx0%2FuZ98Duzo5J%2BPRZAqdRdLk7coelIXlYpI33J6PGOyxTXfYzZO4Vzq9uiE%2B6MIqleiwQp%2FY4%2FbmQd%2BUqkC8MgA6qFdONHO2rbU9TAJuHi7RVxK6ZLILKEU0Azg9jImMbzIht3x87%2FCvtYPgSf%2FG6lkyIP1FrqiWWsOOs%2FyCwl4lb6XqG8gcRdEJzfu0VZ58j%2FeWn&X-Amz-Signature=37a3f4e33bbaf4e93ec126aa85f1dc1db34f4456ed36c177b007d2629f2c72be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
