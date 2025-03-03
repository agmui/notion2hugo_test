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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHEQJLO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhXaMKQ8ciNJPeH1fhroJfUl8qrYHh9VCc55lNNxGBTAiEA5b0rZVBRRmXXZgcb%2FlQPJ57GT5WsUsw9tMZJcqJUo5sqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1R7DYLIQsSWe15kSrcA52RM2pqJZzUFLDG25JsnRj%2BM1yR34AM3UbrkyVmxQ3WsWnBmTEA%2FxNQxIybvpucf%2BjKv7FRpM1sbzwnQxC5nf8SMBn1%2F4AIeV9AX8VziUnbR%2F15iOVHK34xlSmSwhxgyWeD6nG80LBKBrGLr%2FWbv4sRe3cjLEgKJK8PnB1OTuYGsVeLRN3OXfRUzYs9NCHNjq7N0D%2FzH6io8IV943YVIaq%2BwNuoZhc4824s011LhQohlV8Yxct1T4TRqHEDsyOIxnDsLCT5XqtDUeKBDYaLvpnQ6SNu8uzcq1nCxlRjmoDnSdHGW27P3MfogCZfVEq9py8AAoAMIUhcuUrGgcl4%2B3Nk8c8tv1Ifjg0R2EqESMtm7Xw1v%2BQyzMYIrtZsRL0sKnFOUzpAhNPVo4xsz%2FJLhLmvv9H%2FpgxmBDv%2F3lZK1pITGmEFF4ECTqf7ttkbH56I%2BnPJzGoRtmpYyldu3e6ybwGUPNcyOdtlmtbXVLcHzMGdMgKBkBFIgM7dUzfmZbcwX1yVGZvS4GDIGbHWEmc56i5lK3ExbGrwYA4f9qT8QdC8%2BSmVkcLHT6W8CHWI4PA0BgUEFhUQr8%2BF8eerfYkgOxU3%2F%2F1CrSGKPnPimlBIKsY7bitHKFTt2%2FXvtXuQMJXZmL4GOqUBtFxIoyFRCwqq476lEetnyiIE%2B6ocrdE%2BcrxXZuVX%2Fsy2nTwR8OrCs1QLBXcYiozFBhPhJG%2FZUXXkdbUMjvRACUXuwAiI0BpWTdhKacvgsMO%2Bclo4ofRC3Xe8JbbbX02ECbvauytzyvIVWVmzoCHvSdjm5RPm8DAfc97WrELM307Zf9GIPUdqMyB%2Ffg98oZyOjE9RL3YRgDkkRWgru8imArcM9W8f&X-Amz-Signature=db5ddb7ba8b6ede4fd7c398236e071da5ecc92eef0d0e81e89463ef3b7b730a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIHEQJLO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhXaMKQ8ciNJPeH1fhroJfUl8qrYHh9VCc55lNNxGBTAiEA5b0rZVBRRmXXZgcb%2FlQPJ57GT5WsUsw9tMZJcqJUo5sqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1R7DYLIQsSWe15kSrcA52RM2pqJZzUFLDG25JsnRj%2BM1yR34AM3UbrkyVmxQ3WsWnBmTEA%2FxNQxIybvpucf%2BjKv7FRpM1sbzwnQxC5nf8SMBn1%2F4AIeV9AX8VziUnbR%2F15iOVHK34xlSmSwhxgyWeD6nG80LBKBrGLr%2FWbv4sRe3cjLEgKJK8PnB1OTuYGsVeLRN3OXfRUzYs9NCHNjq7N0D%2FzH6io8IV943YVIaq%2BwNuoZhc4824s011LhQohlV8Yxct1T4TRqHEDsyOIxnDsLCT5XqtDUeKBDYaLvpnQ6SNu8uzcq1nCxlRjmoDnSdHGW27P3MfogCZfVEq9py8AAoAMIUhcuUrGgcl4%2B3Nk8c8tv1Ifjg0R2EqESMtm7Xw1v%2BQyzMYIrtZsRL0sKnFOUzpAhNPVo4xsz%2FJLhLmvv9H%2FpgxmBDv%2F3lZK1pITGmEFF4ECTqf7ttkbH56I%2BnPJzGoRtmpYyldu3e6ybwGUPNcyOdtlmtbXVLcHzMGdMgKBkBFIgM7dUzfmZbcwX1yVGZvS4GDIGbHWEmc56i5lK3ExbGrwYA4f9qT8QdC8%2BSmVkcLHT6W8CHWI4PA0BgUEFhUQr8%2BF8eerfYkgOxU3%2F%2F1CrSGKPnPimlBIKsY7bitHKFTt2%2FXvtXuQMJXZmL4GOqUBtFxIoyFRCwqq476lEetnyiIE%2B6ocrdE%2BcrxXZuVX%2Fsy2nTwR8OrCs1QLBXcYiozFBhPhJG%2FZUXXkdbUMjvRACUXuwAiI0BpWTdhKacvgsMO%2Bclo4ofRC3Xe8JbbbX02ECbvauytzyvIVWVmzoCHvSdjm5RPm8DAfc97WrELM307Zf9GIPUdqMyB%2Ffg98oZyOjE9RL3YRgDkkRWgru8imArcM9W8f&X-Amz-Signature=1daccf933f4be1da1f8f53a4bccaab929c92d0cf1172d96c626b2a6ca555489f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
