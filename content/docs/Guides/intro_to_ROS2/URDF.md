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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJQVWEZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBowk6pLOIyTcxc8l32upm3o6psd%2BCP%2B%2Bt04ukvAryCAIhAMRbjKhGwIpT5KF7h4oHJwjMiv6xSBAnWQNikJPbC9UtKv8DCCQQABoMNjM3NDIzMTgzODA1IgwEOBf369iM%2B8Acy00q3AMGePmOM%2BbPbGHmJEwNfa8kKG7Z5wJh9gVO59LqpfTsMHFqtIOo5B3b61dmIIPUpEt1oBw5Uw28ib0DFvfJBjpE8jXFZ6fV72%2ByqHHY2AOnSMerkOcYPjVStxB1cKqFeMzRqcBwL9lAvwc3qzoPwFm7CXI3zSg4titzYjJnVJK1Bu24biEMcbLwHUA1nG2v9Sq%2F1rbC%2B%2B4i%2FxzcmRkUQ3sN%2FAnBs6b3rc68gaEx%2FIvv1sPih9AHcFR9nQ7dnhNTlSOoKuTGMoUcBW%2FFmiQF3WSJbP31oFTMIJZ1yMuy5Qa5jN6d%2FmH2Fh3B2ZK6G08KWhBvCVHuCWj%2BwN%2Flmom0%2FfjMPO7A92Bo9PnKctx20xewMVxXdlGpfMTenjxSoKAVrMsnPy54IYa4yT6E%2Fpqk5sV6ErHrI%2FtEb%2FOtBUL5TrytxeOCuwWO2YXp4mt6tBmb7CgkQjjqAeOavbKQxTygAqNr1hThrMnowfnrrS%2BbnyKDvDSFpwPgS687SWaY9BWs%2BzH6uJylIXRKRCKnUUdfliprl0Dr%2F%2FRebxwl3EdyQmVecLUV2%2FLSk2Lalk6Ht%2BcH2EF04JCDKRXCr%2F3j1CtPga94icWi8yFHcRYuAmX28DXnC%2FY694dYYsm7BTmv7DDapbvEBjqkAVbD%2F1dQNGfNp%2FJ97c7xWKBbvppJRsg0PsLhDpZgF5GQrXtS9Mb7y4YMuJH7inL6GCs7TVHVhW63oEYtNSZgqTCVM%2FHqFOR%2BAClku7%2BofiA1PPUP2Ghx%2BZjaXT42qu5uzipFJRHxG1%2BQWzLnP2r%2FL%2FnrW0k0M3dPkABp1KQhaMPIClL17ibo7TteHCk8sC0JCdMfhrEzh48HGtJWC9L9VVydRNSY&X-Amz-Signature=66f93d82e504662b39e74d44049b65fa83ca764a3de289de8be7a90d4ae902d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJQVWEZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBowk6pLOIyTcxc8l32upm3o6psd%2BCP%2B%2Bt04ukvAryCAIhAMRbjKhGwIpT5KF7h4oHJwjMiv6xSBAnWQNikJPbC9UtKv8DCCQQABoMNjM3NDIzMTgzODA1IgwEOBf369iM%2B8Acy00q3AMGePmOM%2BbPbGHmJEwNfa8kKG7Z5wJh9gVO59LqpfTsMHFqtIOo5B3b61dmIIPUpEt1oBw5Uw28ib0DFvfJBjpE8jXFZ6fV72%2ByqHHY2AOnSMerkOcYPjVStxB1cKqFeMzRqcBwL9lAvwc3qzoPwFm7CXI3zSg4titzYjJnVJK1Bu24biEMcbLwHUA1nG2v9Sq%2F1rbC%2B%2B4i%2FxzcmRkUQ3sN%2FAnBs6b3rc68gaEx%2FIvv1sPih9AHcFR9nQ7dnhNTlSOoKuTGMoUcBW%2FFmiQF3WSJbP31oFTMIJZ1yMuy5Qa5jN6d%2FmH2Fh3B2ZK6G08KWhBvCVHuCWj%2BwN%2Flmom0%2FfjMPO7A92Bo9PnKctx20xewMVxXdlGpfMTenjxSoKAVrMsnPy54IYa4yT6E%2Fpqk5sV6ErHrI%2FtEb%2FOtBUL5TrytxeOCuwWO2YXp4mt6tBmb7CgkQjjqAeOavbKQxTygAqNr1hThrMnowfnrrS%2BbnyKDvDSFpwPgS687SWaY9BWs%2BzH6uJylIXRKRCKnUUdfliprl0Dr%2F%2FRebxwl3EdyQmVecLUV2%2FLSk2Lalk6Ht%2BcH2EF04JCDKRXCr%2F3j1CtPga94icWi8yFHcRYuAmX28DXnC%2FY694dYYsm7BTmv7DDapbvEBjqkAVbD%2F1dQNGfNp%2FJ97c7xWKBbvppJRsg0PsLhDpZgF5GQrXtS9Mb7y4YMuJH7inL6GCs7TVHVhW63oEYtNSZgqTCVM%2FHqFOR%2BAClku7%2BofiA1PPUP2Ghx%2BZjaXT42qu5uzipFJRHxG1%2BQWzLnP2r%2FL%2FnrW0k0M3dPkABp1KQhaMPIClL17ibo7TteHCk8sC0JCdMfhrEzh48HGtJWC9L9VVydRNSY&X-Amz-Signature=2a374f57396dacfe0379b55af2585015050b4761fc65e7ee77d3dfec74d905ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
