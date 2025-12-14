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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ME4S2I6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCouR0juDHZiLMUo1ameQ%2FBhQn43C1ubKGfwX2qSuemAQIgDPEdD4BHkS9vX%2B0BE1Dq5PsUv18He7BihZxtQNy51YYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNNDjoEDUw7EEfszdyrcA6m46OO7rTaCagZV9jB88Vbuzh7vrZBPmm69a0%2FHmI2klNeJFlINU5Wmc3KqMEVFuB%2F0j3QobVOCetkp3HFhDx6p3TDVBKU3WDy0Q8FHs46W1iZzSoG6vuMsJ0JvoXFcGtP5AQ9wN7b1QtX21dByO2E2ALppIZBb%2Bqxk67eQGeM8jgAlrWCn5e%2BU3cbBYGNAkV8dAnifUCo8uqc8udp5IyERNaUclYfULs37zeAN3bWzy06d0trSTeyEacDZf6QPQwUPlbIbozYbCWNzptJmfLBaxS7dwkVVMvYaFK15nL5EBAJrGWuUEd6nvR5jWveeEY6iaZIraZhLvS18Q%2FsARc6HSiheJXg5%2BHwbMDyzAraqjOnMhSlX5wiwAQMsmjALaGTIhePnjZqqukSdJWKCLphWEaqusoszw%2F59ykqAqBKCOQZtDkbZUD0WMCt4cTz4H3XLONHs6b%2FkW5syh834ODxOkJex8wQGB4JN8oFoB7OdGIVNsUaGGnLWe8guLv1zauihjcN2pskaeR3iK4e64%2FT%2F%2BI4ilHPdB1siOjDeFmosPc3x0Gx0D3MUzeuCgT%2Bsj8zj2PQxc0b%2FIlABMneR1o0kFmjALc9Z7eeCD1a2dE5TFM8lXF2%2B5b%2Fnv5wCMKSW%2BMkGOqUBK4UWt0FOYVstDsNLm8tKnBstLOoRc4GMFgpEPL7OmOyV3r4DvCT3Z5BFb3M0ZlsKiOJr4feBn2BmffTTqPiY%2BAJ%2FLy7EVkSUL95fg%2FpqKPWImxQE611Kb7g%2BGR1YMAjhCy5Ge2LYgDHvo1nh7un6oDbSAXrXbUV1zeEA57BlBdcmaxDFhZKU9RKb930Haj3OsCRUKcDlfrKRN4dxgrd%2FAbb6yPWg&X-Amz-Signature=5090a7d22865199849434d3bc11fa3cfe09af2c046a918c4cc2ff96b32d154bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ME4S2I6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCouR0juDHZiLMUo1ameQ%2FBhQn43C1ubKGfwX2qSuemAQIgDPEdD4BHkS9vX%2B0BE1Dq5PsUv18He7BihZxtQNy51YYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNNDjoEDUw7EEfszdyrcA6m46OO7rTaCagZV9jB88Vbuzh7vrZBPmm69a0%2FHmI2klNeJFlINU5Wmc3KqMEVFuB%2F0j3QobVOCetkp3HFhDx6p3TDVBKU3WDy0Q8FHs46W1iZzSoG6vuMsJ0JvoXFcGtP5AQ9wN7b1QtX21dByO2E2ALppIZBb%2Bqxk67eQGeM8jgAlrWCn5e%2BU3cbBYGNAkV8dAnifUCo8uqc8udp5IyERNaUclYfULs37zeAN3bWzy06d0trSTeyEacDZf6QPQwUPlbIbozYbCWNzptJmfLBaxS7dwkVVMvYaFK15nL5EBAJrGWuUEd6nvR5jWveeEY6iaZIraZhLvS18Q%2FsARc6HSiheJXg5%2BHwbMDyzAraqjOnMhSlX5wiwAQMsmjALaGTIhePnjZqqukSdJWKCLphWEaqusoszw%2F59ykqAqBKCOQZtDkbZUD0WMCt4cTz4H3XLONHs6b%2FkW5syh834ODxOkJex8wQGB4JN8oFoB7OdGIVNsUaGGnLWe8guLv1zauihjcN2pskaeR3iK4e64%2FT%2F%2BI4ilHPdB1siOjDeFmosPc3x0Gx0D3MUzeuCgT%2Bsj8zj2PQxc0b%2FIlABMneR1o0kFmjALc9Z7eeCD1a2dE5TFM8lXF2%2B5b%2Fnv5wCMKSW%2BMkGOqUBK4UWt0FOYVstDsNLm8tKnBstLOoRc4GMFgpEPL7OmOyV3r4DvCT3Z5BFb3M0ZlsKiOJr4feBn2BmffTTqPiY%2BAJ%2FLy7EVkSUL95fg%2FpqKPWImxQE611Kb7g%2BGR1YMAjhCy5Ge2LYgDHvo1nh7un6oDbSAXrXbUV1zeEA57BlBdcmaxDFhZKU9RKb930Haj3OsCRUKcDlfrKRN4dxgrd%2FAbb6yPWg&X-Amz-Signature=10592ae9e2b0d5d4b67b3b4f753fab7545790bf9050ce2094c18979b4ce1bf1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
