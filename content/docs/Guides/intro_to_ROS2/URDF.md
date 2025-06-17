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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLK4HZP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAicVTY78fr82ruNTPWknOLxazf0pOdaZjfleyVsAA%2F4AiEA6NSVjBIOEnLIiTX6ARk8rc39Uye5CNjRZGMMFkw0NQkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHaeWWg%2FyhRZRhLxXCrcAzNQsoJCCEVuWX2%2FozRZVCsHd5a6K7MBIeKEm56KH8Dq8OntkAaZErYt8HrJUGorRKcZe70J7Zuv78k7UjRZ5F4plkWTCEcCuObC6qhTKUfgZDvAc86r4HMzct%2BSVUjt%2FUx3uw2lRgYj7YoRFxmtiLWyIghVkr3uIP%2FG2eKPBXkqGtY2fmb1DG2UjrTrnyvRdXdWouPWCrxSxar7mz3%2BxF4HnQUCtX9EN2jUf2dh2kYZTa4L0yHG06lLRZUa7IebLC91kNDE03hVa%2FDQTxMLOCa54wcaUBMyDsATLddGdWzGaIDxJo5j8WTXaky7fFOwAidgZ6PH6YxZUqUyXZm19pzjpjk4EC3AyFu4gL6dYL4epvlGaE2jBpXmdyUZT%2BOTsRoB8og0g%2FdV%2BSNFWPpzJW5HMbQvtMzBC9oj9%2B25yD8iGHUfyd4Ko9n0htN2puOnlBsqAsHwoaROEUipHu6VyF9Mi%2BHbYBDANdYO3%2FnEYHrZ5yWQ1TtnfcuYvfZSSUaJcbwkrq2YDqLAbzEgWvFY12QKwJRe%2FLrUdat71qd9PJDvDICI7iGrUoz2UlRTLtokmNvyjF0AbcI8YwZ7JLW8hoEySgBEasNZih5yf24m8t2XvdVIWJK7rp37%2BlB0MLPsw8IGOqUBaCOsbjtneiXVU09N6UTbZ12w6LReDmYPZ%2FYWblY29HN3ERrnvBLW5zM7E%2B5k9zcMNSHRNZKXDMt%2BAwN93saL5V5S2zSbhu1CJCRrvWWRb7kOfCjm7%2BtUrNgCxIjWKCtvDJe6M0iRu%2F2b92Homg%2BEcXYvwa6II70M8akT7m7U3aUNRGKc9u5u43JXf%2BSNKK9deih9pnWBSTy3GxQ%2BC9a5u9il1St8&X-Amz-Signature=248279b0b7a619968fe676105b7fcb7adfc6446272625bbb473f5abbdcd45670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLK4HZP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAicVTY78fr82ruNTPWknOLxazf0pOdaZjfleyVsAA%2F4AiEA6NSVjBIOEnLIiTX6ARk8rc39Uye5CNjRZGMMFkw0NQkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHaeWWg%2FyhRZRhLxXCrcAzNQsoJCCEVuWX2%2FozRZVCsHd5a6K7MBIeKEm56KH8Dq8OntkAaZErYt8HrJUGorRKcZe70J7Zuv78k7UjRZ5F4plkWTCEcCuObC6qhTKUfgZDvAc86r4HMzct%2BSVUjt%2FUx3uw2lRgYj7YoRFxmtiLWyIghVkr3uIP%2FG2eKPBXkqGtY2fmb1DG2UjrTrnyvRdXdWouPWCrxSxar7mz3%2BxF4HnQUCtX9EN2jUf2dh2kYZTa4L0yHG06lLRZUa7IebLC91kNDE03hVa%2FDQTxMLOCa54wcaUBMyDsATLddGdWzGaIDxJo5j8WTXaky7fFOwAidgZ6PH6YxZUqUyXZm19pzjpjk4EC3AyFu4gL6dYL4epvlGaE2jBpXmdyUZT%2BOTsRoB8og0g%2FdV%2BSNFWPpzJW5HMbQvtMzBC9oj9%2B25yD8iGHUfyd4Ko9n0htN2puOnlBsqAsHwoaROEUipHu6VyF9Mi%2BHbYBDANdYO3%2FnEYHrZ5yWQ1TtnfcuYvfZSSUaJcbwkrq2YDqLAbzEgWvFY12QKwJRe%2FLrUdat71qd9PJDvDICI7iGrUoz2UlRTLtokmNvyjF0AbcI8YwZ7JLW8hoEySgBEasNZih5yf24m8t2XvdVIWJK7rp37%2BlB0MLPsw8IGOqUBaCOsbjtneiXVU09N6UTbZ12w6LReDmYPZ%2FYWblY29HN3ERrnvBLW5zM7E%2B5k9zcMNSHRNZKXDMt%2BAwN93saL5V5S2zSbhu1CJCRrvWWRb7kOfCjm7%2BtUrNgCxIjWKCtvDJe6M0iRu%2F2b92Homg%2BEcXYvwa6II70M8akT7m7U3aUNRGKc9u5u43JXf%2BSNKK9deih9pnWBSTy3GxQ%2BC9a5u9il1St8&X-Amz-Signature=829233fd9eabad9dbff8ed1d7b051153d3845e73f027e4c41e8e584cf950208a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
