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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZY3KDPD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5feTvNxfzIwhh9bYk9xZkYUdpLau6KOBwhrIVYCRx2AiEAxyy7KQlpGWz01bh3stVcEoaGA%2BW4W4NyJaCbuJhiNCwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuUTewQDGmcxxmBkircA8A6JzbS9CDRueWDCsW900SllWS0Cy2Px3AosbNO6U%2FSY4HSOPFQxExUWe1MmRHdhohULCZSLjWhiJ7RmiHvtt6DZUXnl1%2FWdW50GHylS9FMK2F%2Fa3YNO3VBSdFqNVomyDrvI6GE9pbljOnLH%2Bayp4%2FKb%2Fd0Y0UR4gUFFFtj4ZooFBMvpxcw%2BcAxwbv2Rf4qJ7DIyc8KNnLilcob%2FfIpuummh%2FRvkH%2FVstdBHCFsKKOpUuhCog8E5xKsjU1BuMGwA53V9vfeb465ULM3hsWw0maThpAjbgoh5Ck1IVxW7%2F%2BPRyXq99NwEoQkVZ3vAkn1M0khlUfV2u5VxdBpc9JFynR%2FNquHr9ycw1ZTSwvIaXA%2BPdVCQbxXKXt9WCOYDbHvuESnQ6lx1QV8L23XYbI5rv9h0hjwTZOOsjbPDNc8BHHBYUn4w8tMDV4FaXnISeTvambpcZ1KJ0OZOjwL1569V%2FwIu%2BozEOI8j8HU%2BGhefeCI60ZCqFk4hqvRag8E0JGMZV7thYT6a1QOMxGfcrXxWOFK1pbeLkZNuS5VPLyRlT4Wlg8iDf8yjTzd%2Fvjz6QnKaZSHbz0eT2kam1oLdrZtbpAcHbm1iB0CJG15pczEjStk5dBFi%2FnCi8qp3mh%2BMMyB470GOqUBzeHYoCBl9xlPlk8P3Ou4%2Bemejxn3fZTLROpGl7HwL3kyEAOZ5QwreabXGMj6TyI%2FssA%2FibvEzueG9JeV4hxC0UcOr9dCfewsqPrn5CptKSdE8yWcTH07yh9Ayn5sJBCYJMvCb8AsZWzG2FjSOhfL1UbwXtPTQ%2BlmS%2F6oh6nDLFcHa9iDHIbZHllF2SDfB4Kg5MxWTfeeWJccP2t%2BZdrmX2%2BvSY0d&X-Amz-Signature=e09948bf8c4804f333a7dc55b8cc3ebaefb0f7f81edbf20de8c57bc16adca37b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZY3KDPD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5feTvNxfzIwhh9bYk9xZkYUdpLau6KOBwhrIVYCRx2AiEAxyy7KQlpGWz01bh3stVcEoaGA%2BW4W4NyJaCbuJhiNCwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuUTewQDGmcxxmBkircA8A6JzbS9CDRueWDCsW900SllWS0Cy2Px3AosbNO6U%2FSY4HSOPFQxExUWe1MmRHdhohULCZSLjWhiJ7RmiHvtt6DZUXnl1%2FWdW50GHylS9FMK2F%2Fa3YNO3VBSdFqNVomyDrvI6GE9pbljOnLH%2Bayp4%2FKb%2Fd0Y0UR4gUFFFtj4ZooFBMvpxcw%2BcAxwbv2Rf4qJ7DIyc8KNnLilcob%2FfIpuummh%2FRvkH%2FVstdBHCFsKKOpUuhCog8E5xKsjU1BuMGwA53V9vfeb465ULM3hsWw0maThpAjbgoh5Ck1IVxW7%2F%2BPRyXq99NwEoQkVZ3vAkn1M0khlUfV2u5VxdBpc9JFynR%2FNquHr9ycw1ZTSwvIaXA%2BPdVCQbxXKXt9WCOYDbHvuESnQ6lx1QV8L23XYbI5rv9h0hjwTZOOsjbPDNc8BHHBYUn4w8tMDV4FaXnISeTvambpcZ1KJ0OZOjwL1569V%2FwIu%2BozEOI8j8HU%2BGhefeCI60ZCqFk4hqvRag8E0JGMZV7thYT6a1QOMxGfcrXxWOFK1pbeLkZNuS5VPLyRlT4Wlg8iDf8yjTzd%2Fvjz6QnKaZSHbz0eT2kam1oLdrZtbpAcHbm1iB0CJG15pczEjStk5dBFi%2FnCi8qp3mh%2BMMyB470GOqUBzeHYoCBl9xlPlk8P3Ou4%2Bemejxn3fZTLROpGl7HwL3kyEAOZ5QwreabXGMj6TyI%2FssA%2FibvEzueG9JeV4hxC0UcOr9dCfewsqPrn5CptKSdE8yWcTH07yh9Ayn5sJBCYJMvCb8AsZWzG2FjSOhfL1UbwXtPTQ%2BlmS%2F6oh6nDLFcHa9iDHIbZHllF2SDfB4Kg5MxWTfeeWJccP2t%2BZdrmX2%2BvSY0d&X-Amz-Signature=aeb9e257d64e31b331c4db9f34b8be6b71f828b7cfe004860d19af91caeb19bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
