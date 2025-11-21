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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24WM7JG%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHO7hq9hzHh%2F8vCqgqEw51C2mmdobEAeuTLQrJepMcDnAiBwynGUPMMF%2F6SCWEa0OIxFpuAdqWfCnBOIzND2wZwLyir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMDTzSm6AdBE7tv5JBKtwDNtw14qelEo4eKoDojNoNWdPiT8tmDUbUk30L5iHtR3mI9GdYqRTrDDXZL0el7tkDAIRAG7BDEqsvcdMj%2F1U5hHOR9oqk3v1lzEGmcRCOcl3YQq3Ch9CzQrMoG3PGlsApAPfg0XrXNL3Hh2nXlga08ULUrFadw%2BqtzGeHJdbXrqtNcgG3BuHLwhRVLKedT2jOJjQTDbUokh4ZUJNQI8VnYClkXGo6JV02Kixts0l%2BG9tf02Ek80xLzOsy%2FpviiqbkwRxfJcmxEEsEQXOIxk%2FpFSOyxbs%2BCWFG7nlGy5%2Bh%2FLtoDiIfMswOyniOQH2gsNpkcgWLoTIMTATIMVVHWGD3UwSLoTvh%2BoM8lm6QWA7vmOGkngaQmJmZ0xM25BEg86X5zED8%2BqqFDtcAiZF4QBcGv%2FCV60z7fMB%2BxiS%2BF4NYLGD9%2BwpKHfbP4b1kc2CV6yMKFsM%2FkLOxQLKoD%2Be8BOXKOWpPgO4ZhpWivVFnilSk14C7%2BiYgHIZ3%2BevNMd17r8Rk74UaBQJpTh7cIhVkqoGg7DwWDObhYlTAGJFXuN33KbAnCMOLNg8IP9IzTuGpuX1fCsxnE6huN3FtULNMDy5f5qvgAclhVUznLR4XFsN5ev%2F%2Fj7CbNqaRk9F2GqEw2oD%2FyAY6pgE9pkjhaTcP9oKakpFgwjPmbMViAWR7v%2F%2ByXoMBzRfyAiE4YsnJMXj2J3W51eJSZQ%2Bhlmw46w7iVCvXy0l3q%2FhGEFIpAU5mRW3WwPkMH6VFatIaxPExvQ1%2B0DXVa3sgiuHMHdzs2kRnakYvBB7aSJ1ujwBTqIlxhM2rc%2Bzi0ENLqvcGBkUHp12VQBZZn4Plv6sQ757YwTquLoOVMc373elxmyEdx3OU&X-Amz-Signature=84eefbbdfd5e5144deba86d3d5bf258b046de6730b6c40df88590ed80d9a8dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24WM7JG%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHO7hq9hzHh%2F8vCqgqEw51C2mmdobEAeuTLQrJepMcDnAiBwynGUPMMF%2F6SCWEa0OIxFpuAdqWfCnBOIzND2wZwLyir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMDTzSm6AdBE7tv5JBKtwDNtw14qelEo4eKoDojNoNWdPiT8tmDUbUk30L5iHtR3mI9GdYqRTrDDXZL0el7tkDAIRAG7BDEqsvcdMj%2F1U5hHOR9oqk3v1lzEGmcRCOcl3YQq3Ch9CzQrMoG3PGlsApAPfg0XrXNL3Hh2nXlga08ULUrFadw%2BqtzGeHJdbXrqtNcgG3BuHLwhRVLKedT2jOJjQTDbUokh4ZUJNQI8VnYClkXGo6JV02Kixts0l%2BG9tf02Ek80xLzOsy%2FpviiqbkwRxfJcmxEEsEQXOIxk%2FpFSOyxbs%2BCWFG7nlGy5%2Bh%2FLtoDiIfMswOyniOQH2gsNpkcgWLoTIMTATIMVVHWGD3UwSLoTvh%2BoM8lm6QWA7vmOGkngaQmJmZ0xM25BEg86X5zED8%2BqqFDtcAiZF4QBcGv%2FCV60z7fMB%2BxiS%2BF4NYLGD9%2BwpKHfbP4b1kc2CV6yMKFsM%2FkLOxQLKoD%2Be8BOXKOWpPgO4ZhpWivVFnilSk14C7%2BiYgHIZ3%2BevNMd17r8Rk74UaBQJpTh7cIhVkqoGg7DwWDObhYlTAGJFXuN33KbAnCMOLNg8IP9IzTuGpuX1fCsxnE6huN3FtULNMDy5f5qvgAclhVUznLR4XFsN5ev%2F%2Fj7CbNqaRk9F2GqEw2oD%2FyAY6pgE9pkjhaTcP9oKakpFgwjPmbMViAWR7v%2F%2ByXoMBzRfyAiE4YsnJMXj2J3W51eJSZQ%2Bhlmw46w7iVCvXy0l3q%2FhGEFIpAU5mRW3WwPkMH6VFatIaxPExvQ1%2B0DXVa3sgiuHMHdzs2kRnakYvBB7aSJ1ujwBTqIlxhM2rc%2Bzi0ENLqvcGBkUHp12VQBZZn4Plv6sQ757YwTquLoOVMc373elxmyEdx3OU&X-Amz-Signature=58d498255a941a8712038eb7ed7a994ae2e5a0df3fc63080b55de19924f46766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
