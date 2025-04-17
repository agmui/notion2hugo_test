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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCINN3K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLI5OwmVOaEAvjzTpsFUV%2FmKlD%2FY%2F3KUylETBEHvPquAiAC0b2lQoklz0IK3TfenTKw8MmHb%2FaTiDT40CAeBm6%2FJCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMxXiseiVAEm131PlWKtwDtvKNBTJFM5%2FmuGO7tEgGHd3MDJp1zbHW9r5fuMVbDb6%2BGTq81HuYDlcSxFvLz5DOuUk%2BH2Y%2Bn3VX%2FivxrbDL5pA2myR7Y7jceLdvsDFktsX5mkvUPzZvYyfL68AS%2BLTbW5knvdHxDZ1zXL9%2FSD1fWMykcGaJTBX5huFgzUxNMpMsSKJatzSr8GtcFJMWkH64B3DBdQ7rRpEmiYia3FX2iCxKGg35r%2F4xcV7UPbitlbmp0%2F4p2kptQ%2BVR3EvAuWSThiNhXiR23JPIKSqA%2Bb1lH7TmLmWmU3DWfdeOQEgILgZmehhrSHP9%2BA69BMfyFmcsC5OpIQWSxp2qv6fYazc8kk7VP0KgNFHf1fyMsFHU1s6%2BS2fgAWNEU6fmtaMz%2BHNoFeR9FHR1Um5G0Alzbhhs59o08GJFErB4DWpc8D%2FxVE7U72HwIl1uhjnpqqmZCgR48J%2FT0PHjBGovTGZiSgN5UbY3E3wWGximz79Fq%2Fvwq2uPFo3ZflreRwAOpnWp4K1lL9aWbHRsDOAkwfwFG3KYOMBH886xNz%2FZ%2FscSXUZUyoFAOdhHMiXTzpEzpA3LhwSjOdjebsRtQgd4gyRkz4d12ZXsM6p9P8Jj6iEoZ5v4buJgPqbS3zKApRnBFpgwueOCwAY6pgEmsxUmS337%2F7SBjRmVB4W%2BmPOsFd0kyuvD7HBxGvQ%2BPcDUB6PuYkrkuIQwMAwvVoRtkr0U3B0jG90%2FJe9b3JlX9K2cVYeNzcwaZ1bepmOCkhKph8BI0ThUpSMGVRXIYSLYiqpYQUTqMZSwsogzXUkTfJXbeS%2B%2BvIilbDnwTBczFRvKjPU%2BGXUPMXUw8Gf9feD8j6jSLX%2BSDyEq0SI2BRcRL%2FfJfcSQ&X-Amz-Signature=3e3d30a518da6bc394d82bed4bc51e02d9d61051717753204ab52d3d4dbdd005&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCINN3K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLI5OwmVOaEAvjzTpsFUV%2FmKlD%2FY%2F3KUylETBEHvPquAiAC0b2lQoklz0IK3TfenTKw8MmHb%2FaTiDT40CAeBm6%2FJCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMxXiseiVAEm131PlWKtwDtvKNBTJFM5%2FmuGO7tEgGHd3MDJp1zbHW9r5fuMVbDb6%2BGTq81HuYDlcSxFvLz5DOuUk%2BH2Y%2Bn3VX%2FivxrbDL5pA2myR7Y7jceLdvsDFktsX5mkvUPzZvYyfL68AS%2BLTbW5knvdHxDZ1zXL9%2FSD1fWMykcGaJTBX5huFgzUxNMpMsSKJatzSr8GtcFJMWkH64B3DBdQ7rRpEmiYia3FX2iCxKGg35r%2F4xcV7UPbitlbmp0%2F4p2kptQ%2BVR3EvAuWSThiNhXiR23JPIKSqA%2Bb1lH7TmLmWmU3DWfdeOQEgILgZmehhrSHP9%2BA69BMfyFmcsC5OpIQWSxp2qv6fYazc8kk7VP0KgNFHf1fyMsFHU1s6%2BS2fgAWNEU6fmtaMz%2BHNoFeR9FHR1Um5G0Alzbhhs59o08GJFErB4DWpc8D%2FxVE7U72HwIl1uhjnpqqmZCgR48J%2FT0PHjBGovTGZiSgN5UbY3E3wWGximz79Fq%2Fvwq2uPFo3ZflreRwAOpnWp4K1lL9aWbHRsDOAkwfwFG3KYOMBH886xNz%2FZ%2FscSXUZUyoFAOdhHMiXTzpEzpA3LhwSjOdjebsRtQgd4gyRkz4d12ZXsM6p9P8Jj6iEoZ5v4buJgPqbS3zKApRnBFpgwueOCwAY6pgEmsxUmS337%2F7SBjRmVB4W%2BmPOsFd0kyuvD7HBxGvQ%2BPcDUB6PuYkrkuIQwMAwvVoRtkr0U3B0jG90%2FJe9b3JlX9K2cVYeNzcwaZ1bepmOCkhKph8BI0ThUpSMGVRXIYSLYiqpYQUTqMZSwsogzXUkTfJXbeS%2B%2BvIilbDnwTBczFRvKjPU%2BGXUPMXUw8Gf9feD8j6jSLX%2BSDyEq0SI2BRcRL%2FfJfcSQ&X-Amz-Signature=daf8a5f548da7cd08233d6eb196f0f6ea12c11181f2b06ec5a6679958634a1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
