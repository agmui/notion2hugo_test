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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ54HFOL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcEB6O1XW8S25Nk2lzlwGJTXD3zwNvt2UyPgzrwFhPaAIgedNvx8FtIY6EC86%2Bl7wxEhZXtqViTjMYKNruKFj1DpAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVP63a6%2BgcHlzVOIircA3U2gv2R1jS%2FYmrQ9hjK4vu0ZBRYpxJPF%2Fhcn1PTT6wqQ4s%2BijnQXGemZ%2F4GWmJBTPbvla2%2B4sBTWsdF1NySH18kUi5ljHJjHLkgoTEZ5zPOd8iZSiWA1%2BXdKDhmga17p5x%2Fh3iLtVf16L4R0dJT72zMq4p2YJUaimonHO2R1rcEBDRaYREsl5tYHsruwzzaFP2s67y3EbSMDXdzTOj%2Bb6KEaqdqWgaIhtK68KfjNQlsgSPm7u2%2BFqXhKQw6J8Pbn%2BIdwr%2BS8mAisZxcxJBwPCWGtKM3eZCMqoH03gX8BlWNEvq5rJkeSdqCDhq2GNaZiBb8cxjYxQyJut6FOCrwtu8rMXlQM%2BRhueG0GpEh0xDw3IdbwRcIpBr003N0QksUwBPQW9kPjbbQuY%2Fdzkpc1aXEGaYxrQIF7d11cBmgJYP5eDrSIK2zAHVCuEJhMTcbS2Tv8e7vAj8jOIu7l1xeHkspNnv%2FttXMyGDj23Kue01eyghwqJ%2FLldu5amb8HqYN%2BgvmxHLJPKZdPSzn7sOkaN41g8GCSa7cfhwXzMZiBajs8dCxVkw0wsenvJDS3%2FVmMSBFY13LKfRbPqq8IWcz1xbqaO%2FnLSoPz%2BQ742fXxevtdBxZNY3Qf48g8u8cML3aksMGOqUBBiPzmhqa8NwNm09hnk3gsvXUfmpcqfaEThTKT%2BKung6oYbkgMzKS0EtEPNnC4EQFpjh1ejSfCaw%2FR7zpZoQgUAxFAI4hitn%2BKgB9lF3kQ2JallXGkfvMAcAIIFrRQvkZXb0GJorcnP9uDdt7Lv%2Bi1qTYZb0KWqdNPLUrGcnZfYxxFIVBSCmQ4x2vKAAwO6ttZiPNQa%2FhJgnVqB58hmLEcbBQgHmi&X-Amz-Signature=36c388a533c3d8b979482d0e5f2de6975d01a7fb6e4857bde49e97667951ae82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ54HFOL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcEB6O1XW8S25Nk2lzlwGJTXD3zwNvt2UyPgzrwFhPaAIgedNvx8FtIY6EC86%2Bl7wxEhZXtqViTjMYKNruKFj1DpAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVP63a6%2BgcHlzVOIircA3U2gv2R1jS%2FYmrQ9hjK4vu0ZBRYpxJPF%2Fhcn1PTT6wqQ4s%2BijnQXGemZ%2F4GWmJBTPbvla2%2B4sBTWsdF1NySH18kUi5ljHJjHLkgoTEZ5zPOd8iZSiWA1%2BXdKDhmga17p5x%2Fh3iLtVf16L4R0dJT72zMq4p2YJUaimonHO2R1rcEBDRaYREsl5tYHsruwzzaFP2s67y3EbSMDXdzTOj%2Bb6KEaqdqWgaIhtK68KfjNQlsgSPm7u2%2BFqXhKQw6J8Pbn%2BIdwr%2BS8mAisZxcxJBwPCWGtKM3eZCMqoH03gX8BlWNEvq5rJkeSdqCDhq2GNaZiBb8cxjYxQyJut6FOCrwtu8rMXlQM%2BRhueG0GpEh0xDw3IdbwRcIpBr003N0QksUwBPQW9kPjbbQuY%2Fdzkpc1aXEGaYxrQIF7d11cBmgJYP5eDrSIK2zAHVCuEJhMTcbS2Tv8e7vAj8jOIu7l1xeHkspNnv%2FttXMyGDj23Kue01eyghwqJ%2FLldu5amb8HqYN%2BgvmxHLJPKZdPSzn7sOkaN41g8GCSa7cfhwXzMZiBajs8dCxVkw0wsenvJDS3%2FVmMSBFY13LKfRbPqq8IWcz1xbqaO%2FnLSoPz%2BQ742fXxevtdBxZNY3Qf48g8u8cML3aksMGOqUBBiPzmhqa8NwNm09hnk3gsvXUfmpcqfaEThTKT%2BKung6oYbkgMzKS0EtEPNnC4EQFpjh1ejSfCaw%2FR7zpZoQgUAxFAI4hitn%2BKgB9lF3kQ2JallXGkfvMAcAIIFrRQvkZXb0GJorcnP9uDdt7Lv%2Bi1qTYZb0KWqdNPLUrGcnZfYxxFIVBSCmQ4x2vKAAwO6ttZiPNQa%2FhJgnVqB58hmLEcbBQgHmi&X-Amz-Signature=c4f1cb5bdc7d2c49990172c923b8fa3bcc84bb9f31f53053bf45619af51f8a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
