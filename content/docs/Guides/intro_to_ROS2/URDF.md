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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTWVO4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzZa7IHS81kBPiJJ0%2BFswE4uHtRGL%2Fg6vMKU6O%2BLeV%2BAiEAwnynanNcyICRw6zMBgyZzfjF%2BhuDt1jTzxw7wzg%2FbVIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLoByFyKE6EVqIqGhircA%2FwKAe0c7gWgJXuZO31kWsHePmbuc%2BKv2wviZbTJGNm0rMQH85x1h2seC8%2F%2F5gl56BISjH3sIQAuiGRFUx82px5N5hBP3X75SqfYe6qXjfTWYJcshfHtcKTdZ3mpaDJ5jrqSTCT3rXLKkCIs4QQEhfcKbG%2Brzu6vE%2F1I%2ByvRGkBRMu3tWF%2BlOYUtC%2BGJoKDSjfURuIpUQAslh0HHYC4uwvgo8WtCU%2Fc5%2FMSLN7m9C%2BLmLHaYH0G4QuDt9%2FhHJ6%2BOrBWA3H9LHrERo8fdhVXnELMHprtFIjcvWZDJFMzuzmG9FInearYEACRdUKclga%2B5TAgKAm9o1rExf45YGw9KW5QzIuhKLJvJHNGcTQO%2B0myBpuv3X%2FQS27HgKu%2BHDhtF%2BcI%2BCELxOnIx%2FqqusmGS%2FJn5sUxNhRFSITGCJBq9ZNhRx9Ce%2Fi7dN92dJ7cxavkoPcTblJ7fwhbt4RQSlyWXOCgXv93iDbLcNTL9%2Fo4w2JcW1VcyuHfwtrt7EHAdw9Bg1X2PU4%2BG%2FvXHa9orlpsP5%2FBIHvDLlp2EQlf2%2FNxvHaFrL1OaXdsWtxZvkrUOZgMNAESmUoss2TxkjMfzBzw9IzXl74aT9WsexAhCUnIYZ5SctpZ1qa2tfP3I8RlEMKW7vMQGOqUBOYjG15h5%2FIxUulTDRX9atZMnuGSRw8OYJV34JRDHnxokG22U0sY%2BZpAcE85kbYSAIY6jmgtvajCUtNng3Hbu9HZ4morPMALmzPB7o5X0y7mWe8zO5JambFiOc7vaEG3hbA%2BRAbcaKLLrA4Wf0RHahgeC4oTAZD8fI4d3UZVMWE8pfLVJ273eZmkKjkPmVS2B7rXjvuvf8bxtNRJ1VL0BTkgL%2BZ5u&X-Amz-Signature=101bb557a84f3b2de345273f71e274c6616317e11234c329b5c0a69691b61426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HTWVO4X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzZa7IHS81kBPiJJ0%2BFswE4uHtRGL%2Fg6vMKU6O%2BLeV%2BAiEAwnynanNcyICRw6zMBgyZzfjF%2BhuDt1jTzxw7wzg%2FbVIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLoByFyKE6EVqIqGhircA%2FwKAe0c7gWgJXuZO31kWsHePmbuc%2BKv2wviZbTJGNm0rMQH85x1h2seC8%2F%2F5gl56BISjH3sIQAuiGRFUx82px5N5hBP3X75SqfYe6qXjfTWYJcshfHtcKTdZ3mpaDJ5jrqSTCT3rXLKkCIs4QQEhfcKbG%2Brzu6vE%2F1I%2ByvRGkBRMu3tWF%2BlOYUtC%2BGJoKDSjfURuIpUQAslh0HHYC4uwvgo8WtCU%2Fc5%2FMSLN7m9C%2BLmLHaYH0G4QuDt9%2FhHJ6%2BOrBWA3H9LHrERo8fdhVXnELMHprtFIjcvWZDJFMzuzmG9FInearYEACRdUKclga%2B5TAgKAm9o1rExf45YGw9KW5QzIuhKLJvJHNGcTQO%2B0myBpuv3X%2FQS27HgKu%2BHDhtF%2BcI%2BCELxOnIx%2FqqusmGS%2FJn5sUxNhRFSITGCJBq9ZNhRx9Ce%2Fi7dN92dJ7cxavkoPcTblJ7fwhbt4RQSlyWXOCgXv93iDbLcNTL9%2Fo4w2JcW1VcyuHfwtrt7EHAdw9Bg1X2PU4%2BG%2FvXHa9orlpsP5%2FBIHvDLlp2EQlf2%2FNxvHaFrL1OaXdsWtxZvkrUOZgMNAESmUoss2TxkjMfzBzw9IzXl74aT9WsexAhCUnIYZ5SctpZ1qa2tfP3I8RlEMKW7vMQGOqUBOYjG15h5%2FIxUulTDRX9atZMnuGSRw8OYJV34JRDHnxokG22U0sY%2BZpAcE85kbYSAIY6jmgtvajCUtNng3Hbu9HZ4morPMALmzPB7o5X0y7mWe8zO5JambFiOc7vaEG3hbA%2BRAbcaKLLrA4Wf0RHahgeC4oTAZD8fI4d3UZVMWE8pfLVJ273eZmkKjkPmVS2B7rXjvuvf8bxtNRJ1VL0BTkgL%2BZ5u&X-Amz-Signature=f093b0386ae9323c90d699268868e54246d12ab1e24f547afaa3f919a97b457b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
