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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYUESGY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeFiDscpAlz5%2B0DUfADFQzdCHU%2BvtJuYcg6Z7CJtbdrAiEAyz3R8X8ih%2BKwjfbx2v6KGW6tTVMT0%2FwEBCRdIbAyLn0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV6S1kKHsbAOQlOPCrcAzl4xfS%2B4EbDdk%2BxXHQhGcEkMDdQMD%2Be4VbzY%2BJZihUn7CJ6TFdilQ2xsrYYqpG7brrpWV1zn3JFPc6XHcCH1lTrthZ6ae5qQnZJXSCSwD4sGJXoHydtvzIIZJ9iBnpU1uq2J%2FLozDAF27EANX%2FFOWHqMBhvr6d3mfOErFDS20BULwkY9O2oUOyqlFftbsJiac1Z2RbhC1VcMx4fRyLwZI%2F6bax8ZUIL%2Bwcmu1lSB%2FXNFSKspigBNnmMpyMCKwt8aUJ2ESp8Q%2B9KXQJwBKQWIo4BdZ1%2F86TWNag7QR2GmfGL2g0glrTaLtpUNXW71vXNV9rOAMm3LbgrP08pRj%2BGbjQ6%2BQtsaX4nw%2BIm7b3jxuun0pIoe%2BOEy0pwLhQ3aVw0P3k6QTazbRtWSKBt%2FWLtcK1n9zskZOPbbSshG4nRvhUUxeyl%2Flb8tHl0qc0pdaTpUhUaVScnCM0kB3oimf%2FUHZVb2VmTOSHilhusaaTuaHoVP98MlkFpxEScwbNXdEQB%2FlPqGb49zS7AOknpdDHdPTyH%2BHih3W8F3YCJj5gMqgMkj5mIPgNy1gEEH1Wt7QHrhyVOhtLpIvyjwktvxF7akpsmu2LXXYA4NVWJR%2FNFR49BnoI8OS9HfkLBpUYMMJG2ssQGOqUBheZe1FROX3SQcXYPqFGP0FwpjgzPgY7PsKazN8lhYUFXtdRI52ULiFzXHxQHwmLCcKpYUC6%2FcH%2BZEEHWcyKKm2h4E%2BPCPtf5sj%2B5vORGVnB8DlG5dY63K2%2B0BVwuMs2mm5PbReT7AN6xGSTZKSsNnR9zUwFG24%2Bg6CTltjT3c5whrM8n9AkmLp7iUGKHFkWj5AevHDZdba2AZnfmcLIWVWXhuxNu&X-Amz-Signature=ba45c1a196bed31e838175afcf9801ab70d466c9fd3d6e93851f0ecdeba8e1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWYUESGY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeFiDscpAlz5%2B0DUfADFQzdCHU%2BvtJuYcg6Z7CJtbdrAiEAyz3R8X8ih%2BKwjfbx2v6KGW6tTVMT0%2FwEBCRdIbAyLn0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV6S1kKHsbAOQlOPCrcAzl4xfS%2B4EbDdk%2BxXHQhGcEkMDdQMD%2Be4VbzY%2BJZihUn7CJ6TFdilQ2xsrYYqpG7brrpWV1zn3JFPc6XHcCH1lTrthZ6ae5qQnZJXSCSwD4sGJXoHydtvzIIZJ9iBnpU1uq2J%2FLozDAF27EANX%2FFOWHqMBhvr6d3mfOErFDS20BULwkY9O2oUOyqlFftbsJiac1Z2RbhC1VcMx4fRyLwZI%2F6bax8ZUIL%2Bwcmu1lSB%2FXNFSKspigBNnmMpyMCKwt8aUJ2ESp8Q%2B9KXQJwBKQWIo4BdZ1%2F86TWNag7QR2GmfGL2g0glrTaLtpUNXW71vXNV9rOAMm3LbgrP08pRj%2BGbjQ6%2BQtsaX4nw%2BIm7b3jxuun0pIoe%2BOEy0pwLhQ3aVw0P3k6QTazbRtWSKBt%2FWLtcK1n9zskZOPbbSshG4nRvhUUxeyl%2Flb8tHl0qc0pdaTpUhUaVScnCM0kB3oimf%2FUHZVb2VmTOSHilhusaaTuaHoVP98MlkFpxEScwbNXdEQB%2FlPqGb49zS7AOknpdDHdPTyH%2BHih3W8F3YCJj5gMqgMkj5mIPgNy1gEEH1Wt7QHrhyVOhtLpIvyjwktvxF7akpsmu2LXXYA4NVWJR%2FNFR49BnoI8OS9HfkLBpUYMMJG2ssQGOqUBheZe1FROX3SQcXYPqFGP0FwpjgzPgY7PsKazN8lhYUFXtdRI52ULiFzXHxQHwmLCcKpYUC6%2FcH%2BZEEHWcyKKm2h4E%2BPCPtf5sj%2B5vORGVnB8DlG5dY63K2%2B0BVwuMs2mm5PbReT7AN6xGSTZKSsNnR9zUwFG24%2Bg6CTltjT3c5whrM8n9AkmLp7iUGKHFkWj5AevHDZdba2AZnfmcLIWVWXhuxNu&X-Amz-Signature=0e8185555f54354ce6cb722bd7350ed560516352a505ff22f64eae79a837c0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
