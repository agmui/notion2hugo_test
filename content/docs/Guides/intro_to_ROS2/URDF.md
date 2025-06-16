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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4Z5ICWK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBQVClQt3ilb60%2Bh2dxGzv7%2FEC6h2hCBfOmIvGTe6HNnAiEA%2F8WQxetBiZzBpBhBvRxhrMw5sh96lmRPoZ%2F%2B1hGroTAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIQZe3oZQMG2mjFZHSrcAxrpVuHfoOlrxT%2Frlvh67eakyX%2FxrPuog9%2BpSLtACNRlGWx7RiBkVMD2sli0E%2FOEW7OzclflZ%2BLHyMuc7VB1kohuwuUWTxlJWFcAk%2Bjowbg1uWPIddMztsPEYuDF7eIRZgcSjjBHN%2F7IQvYui9V6fhdpHGHkj1gzT1hQ8sBrOBB9eVGYrWbF8I3s5vXT24MV1zh0fPtRYrO5%2BZlWA%2FaGTmeQcCGtjvoWoOCaCZYR%2FVUcfBIvbIyozXjCvwMc%2BJw%2Fljx42FpJDPM5gqihZPCrQUD0onLSefv5WN%2B6yaJiYDG10gKD6L3cOYu9iLHG1fjxzV7EXYEy%2BUjVFiLLwEm5HMzs8tXBmm9OBAU3B6q3RhVmJo%2B7KRC%2Fw7A6Qi5uNR9Y%2BMygWiDk1PHrMbRZPeIuMl9ZppPisVJ7y4%2B3TSGBUcCpBLI0SsWhV6T4Rpk8OrX1MRHsQhjmztHmF1kGRCfaNtcgzaurBOPo4oxyPVclJi3TtlEJXMMViPLSaYlKREKaMirKTvC2JOMNdg6e0pdxckkMeeHJVu8rt9YvWgJR7m7x9JHhUumg7E%2FPPVxzCyGZF49O72ZvueZEIIHdtu3R4XdBojipHQaIVBiQCgsB6tQL5%2F%2BinG9yWZJQ49rwMIr%2FvcIGOqUBG%2Fq3lAiOpyEtmrmbd0SiUPOdBVqpNyOON5n5wuVf8I7ntaX5Ar8YtRtjlCj8o%2B6mfYLDX%2B8lKMNRNFIp5t4NhcisJYdDU9NxDCBLaatNk3W8GhivV5Yqtgun1qnVKBTJwzH0HIEb4WHWa%2FagMGvs24HJ2UY9mIKNWk6cyJmjKdB6dndZ7Lo89DuaY3Vhj5bqf4sWnIkqZITqcWpgMbCAaQRgg7XQ&X-Amz-Signature=13ac5f218731096d910f3094bd026e4bfbf1d626aa6ae48eb22fd5a388bba671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4Z5ICWK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBQVClQt3ilb60%2Bh2dxGzv7%2FEC6h2hCBfOmIvGTe6HNnAiEA%2F8WQxetBiZzBpBhBvRxhrMw5sh96lmRPoZ%2F%2B1hGroTAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIQZe3oZQMG2mjFZHSrcAxrpVuHfoOlrxT%2Frlvh67eakyX%2FxrPuog9%2BpSLtACNRlGWx7RiBkVMD2sli0E%2FOEW7OzclflZ%2BLHyMuc7VB1kohuwuUWTxlJWFcAk%2Bjowbg1uWPIddMztsPEYuDF7eIRZgcSjjBHN%2F7IQvYui9V6fhdpHGHkj1gzT1hQ8sBrOBB9eVGYrWbF8I3s5vXT24MV1zh0fPtRYrO5%2BZlWA%2FaGTmeQcCGtjvoWoOCaCZYR%2FVUcfBIvbIyozXjCvwMc%2BJw%2Fljx42FpJDPM5gqihZPCrQUD0onLSefv5WN%2B6yaJiYDG10gKD6L3cOYu9iLHG1fjxzV7EXYEy%2BUjVFiLLwEm5HMzs8tXBmm9OBAU3B6q3RhVmJo%2B7KRC%2Fw7A6Qi5uNR9Y%2BMygWiDk1PHrMbRZPeIuMl9ZppPisVJ7y4%2B3TSGBUcCpBLI0SsWhV6T4Rpk8OrX1MRHsQhjmztHmF1kGRCfaNtcgzaurBOPo4oxyPVclJi3TtlEJXMMViPLSaYlKREKaMirKTvC2JOMNdg6e0pdxckkMeeHJVu8rt9YvWgJR7m7x9JHhUumg7E%2FPPVxzCyGZF49O72ZvueZEIIHdtu3R4XdBojipHQaIVBiQCgsB6tQL5%2F%2BinG9yWZJQ49rwMIr%2FvcIGOqUBG%2Fq3lAiOpyEtmrmbd0SiUPOdBVqpNyOON5n5wuVf8I7ntaX5Ar8YtRtjlCj8o%2B6mfYLDX%2B8lKMNRNFIp5t4NhcisJYdDU9NxDCBLaatNk3W8GhivV5Yqtgun1qnVKBTJwzH0HIEb4WHWa%2FagMGvs24HJ2UY9mIKNWk6cyJmjKdB6dndZ7Lo89DuaY3Vhj5bqf4sWnIkqZITqcWpgMbCAaQRgg7XQ&X-Amz-Signature=d028141b23c502c41cedea75ef40caa6cd6c39a00d3013e3ffe6b6fbcc38f5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
