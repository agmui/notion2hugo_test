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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKXHDWS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3smY6O4eDcpPg8ypP74fKUOsOoPKL1xCUcxHbjIy0bQIgckcHXAsdPdbinMyp7comtYCevNzru0PA6UXDueYOv84qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrX9LxbtZdfL3w4SrcA9iKMlqoke6GnLIhvlq%2FB5ILn5jAM6%2BmZ0b9ve0gKH94OXZcdQOU3WxWSjPjAsEuDJT0V%2FIBP%2FIOuugrSA%2FWrbxl1krHdGE85OMJKiN7URSHYD%2Ftd3sUOcrlsEkqm0Zd6PHuTy01rCduiKjm6Stmu%2FOoezMqsafiwRqPG7%2BG%2FEqXCq7V9yVFGEg5m6CYdq1ctOCHnLnI3C%2BIPrTdyge6gCsqqY1FIFi6QK66gJWGeIdkWT2jpaQuMN9LK6yBz0oPkjS5GMgV1%2B0qLBsgY9nvfb2PzxZkf5iQOIQrWDhyCctuj31TxLnpRtAQCCkHPxP6zwtdrvPky2bNCmEH%2FGWwhjFPMEqjpbNcJCnYjs5jlntcpbismBKle%2B8xCCW3QksQhHD%2F5f%2FYODao6YNNnE5cNQteyvZtJs7yDXyekSpF3Sb47NPJDce5hpBfTzywgr508WUueVDDTuoUHqMOq%2FO2Z0ORzwIh%2FGA0PaG8h%2F85N0xuk%2FcUHxEKkjmYTN6YtIyRiQ00FJcYsXwjPjIQSbV9EPMIkedXQyEpoEMjMoHdeibyyK4TEMkxAUMKoJ67T%2BppcyDTip%2Brt4cDn9jnCdHQmfo7Zdqc3UJGW37LIjK0x4XlpVeYsaKryFgrBQNiMMmX6cEGOqUBCHdnGq7A58%2B%2FZIsnLnWvfyn7ZRxNqCKKbajZf24VwFWftQ32Enuaf%2FsyU2IkYji2KhyYUGt%2BPlWovp8P9xKCqS4kmbYDNS3SlgjesXENsIV7gAs6nLG7ZFJrbKTDLC%2B2vBGZnH15lXgjAj0YHAGZT6qj8vuo44%2Bm0lUIU9wZrLeEt1jiusGcZiIu%2FpAp1gFvc3JXpDUqyMB2xb3fNYWHdAZKjv%2F2&X-Amz-Signature=82c213f6d8f585135759a1bda9639ef721ba113a0521fdb0682994694f9260a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKXHDWS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3smY6O4eDcpPg8ypP74fKUOsOoPKL1xCUcxHbjIy0bQIgckcHXAsdPdbinMyp7comtYCevNzru0PA6UXDueYOv84qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrX9LxbtZdfL3w4SrcA9iKMlqoke6GnLIhvlq%2FB5ILn5jAM6%2BmZ0b9ve0gKH94OXZcdQOU3WxWSjPjAsEuDJT0V%2FIBP%2FIOuugrSA%2FWrbxl1krHdGE85OMJKiN7URSHYD%2Ftd3sUOcrlsEkqm0Zd6PHuTy01rCduiKjm6Stmu%2FOoezMqsafiwRqPG7%2BG%2FEqXCq7V9yVFGEg5m6CYdq1ctOCHnLnI3C%2BIPrTdyge6gCsqqY1FIFi6QK66gJWGeIdkWT2jpaQuMN9LK6yBz0oPkjS5GMgV1%2B0qLBsgY9nvfb2PzxZkf5iQOIQrWDhyCctuj31TxLnpRtAQCCkHPxP6zwtdrvPky2bNCmEH%2FGWwhjFPMEqjpbNcJCnYjs5jlntcpbismBKle%2B8xCCW3QksQhHD%2F5f%2FYODao6YNNnE5cNQteyvZtJs7yDXyekSpF3Sb47NPJDce5hpBfTzywgr508WUueVDDTuoUHqMOq%2FO2Z0ORzwIh%2FGA0PaG8h%2F85N0xuk%2FcUHxEKkjmYTN6YtIyRiQ00FJcYsXwjPjIQSbV9EPMIkedXQyEpoEMjMoHdeibyyK4TEMkxAUMKoJ67T%2BppcyDTip%2Brt4cDn9jnCdHQmfo7Zdqc3UJGW37LIjK0x4XlpVeYsaKryFgrBQNiMMmX6cEGOqUBCHdnGq7A58%2B%2FZIsnLnWvfyn7ZRxNqCKKbajZf24VwFWftQ32Enuaf%2FsyU2IkYji2KhyYUGt%2BPlWovp8P9xKCqS4kmbYDNS3SlgjesXENsIV7gAs6nLG7ZFJrbKTDLC%2B2vBGZnH15lXgjAj0YHAGZT6qj8vuo44%2Bm0lUIU9wZrLeEt1jiusGcZiIu%2FpAp1gFvc3JXpDUqyMB2xb3fNYWHdAZKjv%2F2&X-Amz-Signature=63069a5bdb6e5209dd7ab13227dc71c06851de94d58fe624319b201cc42d4881&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
