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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y63T7BDN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2%2FJoIsmR2LbVDTtNU2meHdTNM09lzbtowYfsE60UmwIgAu3DXjiGiSuH6DL6DiB5XWOpLSLr2t9Au5t%2FsSGwX%2FAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKx6SxkF09dz%2FpBXeircA0rGkvk54ztqzIhpAUhRNzuEKu6Gps4DfUvVx3exbODixv0UfpuR3EnYbHf4asQOQh8U%2BJFARhYIKBgAbt0ep%2F89y7UIRhvYD7fh6ZJdHAxNp6cKJc7pg2%2B1cuifkOxiEH7t3UYkUQIeIJv1g7quK3gAE0Lrb%2BgOhG068uXQFurHXw8d41SP7hc2lZ503kBWZVOtBSUspjMs3e5CYrTjOHhIMGNyw%2BGwabL7oaRqqaYZCFyHjK1uVeLtvCULBzTuPrtZ%2BxyDE2N9J3DzZY%2Bg2PZ%2BRrd4BG2IwipDK5O43B59EZ2oJ7eNcwu9XJhvBpOvbjY39y4L9egEMwbID7tRlLnwucWi4mq%2BEZi1sMggUAarjrBwizCj83m6JGoIPkLLF2nNxGQ5INhN4yhVc5CZgupbvZQaEjyOjxDrykllkKQc4hhqqcCp%2BaTNT2gpTHhc1LZrk2lbkd%2FEfQkWslHCCgxRz21QWgLg1X1CwEMp6uEDJ59gSbzB%2Bof6pHly8TQQuVnVV3nameZ6vK1JcHlKc3D7RNe6OPrTTNnqrEO1qkFBIRYt5VCT0AGDwjEMLPkK2632%2FfVbgJBChHOUZZBLbcHlTG6zqxrRBEvvvy2jN6FLJKeKDmC8Pazu1cuwMP%2F%2Fx78GOqUByKkDzYXPMgmEL14sEPYp1lCGXwdJ2%2BV%2BzzzDCBECla5ZsiyxXf78PWyoVwNVoslWwN7U8ub3cIOVdCisaUWhlD3B3ptE8sxWKnxoa0jIE64R1VXuof4JDnNG%2FGQtuqo3967wzOcJuEWHEQVkyo7Gjjlxrdafv2aS9xQ0XileBePmgVJ6uFtqhnapYrUmjQHtJXdJg3VxUqzrWiV5m2o4RcPzzr%2Bn&X-Amz-Signature=af4ce659e5d3f094ffcf5afb1974ae0772fc0fd0c56011a58f657c2735a0f3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y63T7BDN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2%2FJoIsmR2LbVDTtNU2meHdTNM09lzbtowYfsE60UmwIgAu3DXjiGiSuH6DL6DiB5XWOpLSLr2t9Au5t%2FsSGwX%2FAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKx6SxkF09dz%2FpBXeircA0rGkvk54ztqzIhpAUhRNzuEKu6Gps4DfUvVx3exbODixv0UfpuR3EnYbHf4asQOQh8U%2BJFARhYIKBgAbt0ep%2F89y7UIRhvYD7fh6ZJdHAxNp6cKJc7pg2%2B1cuifkOxiEH7t3UYkUQIeIJv1g7quK3gAE0Lrb%2BgOhG068uXQFurHXw8d41SP7hc2lZ503kBWZVOtBSUspjMs3e5CYrTjOHhIMGNyw%2BGwabL7oaRqqaYZCFyHjK1uVeLtvCULBzTuPrtZ%2BxyDE2N9J3DzZY%2Bg2PZ%2BRrd4BG2IwipDK5O43B59EZ2oJ7eNcwu9XJhvBpOvbjY39y4L9egEMwbID7tRlLnwucWi4mq%2BEZi1sMggUAarjrBwizCj83m6JGoIPkLLF2nNxGQ5INhN4yhVc5CZgupbvZQaEjyOjxDrykllkKQc4hhqqcCp%2BaTNT2gpTHhc1LZrk2lbkd%2FEfQkWslHCCgxRz21QWgLg1X1CwEMp6uEDJ59gSbzB%2Bof6pHly8TQQuVnVV3nameZ6vK1JcHlKc3D7RNe6OPrTTNnqrEO1qkFBIRYt5VCT0AGDwjEMLPkK2632%2FfVbgJBChHOUZZBLbcHlTG6zqxrRBEvvvy2jN6FLJKeKDmC8Pazu1cuwMP%2F%2Fx78GOqUByKkDzYXPMgmEL14sEPYp1lCGXwdJ2%2BV%2BzzzDCBECla5ZsiyxXf78PWyoVwNVoslWwN7U8ub3cIOVdCisaUWhlD3B3ptE8sxWKnxoa0jIE64R1VXuof4JDnNG%2FGQtuqo3967wzOcJuEWHEQVkyo7Gjjlxrdafv2aS9xQ0XileBePmgVJ6uFtqhnapYrUmjQHtJXdJg3VxUqzrWiV5m2o4RcPzzr%2Bn&X-Amz-Signature=2f064c3d11b92df0d4ca81cca6324b0b2ed556db312cc909d0910181cd586652&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
