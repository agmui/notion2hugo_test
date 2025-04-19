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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR4ZSDP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRtdM%2Fir6dylb0FFUcf6LZIDON5Ad8pVfIb0pE2dDglAiEAq%2FchgZ1NxZgnCNGTjOttLD%2FSK9tvVAw0NM8qRTSLii8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNDsn6PUEJrHIAyircA0PgeAQvqQkAayBsiouhHlXH49MHdVe15d4jzz8gf6Te13vRtIYHtO0x6inLzLe6LFyG4kI8%2FDnCAfDXpp2Ls4Hu4HbmFo6unUEZo%2F0x4rUnuRWfKW2%2BpoAijHl7b4MGmW3gtONmhPW5i2cmH8HI1bfW0LnPBzFr4oiT5ZgXsXTFbukFo4l1UivAK%2F2xFo5CwLMrpOOuW5dYj659ZpKiKjVPzqYc1geMBYfcVw6Zk8iEoO2%2FsJvySe1WD%2FMM8LgXZDJqZlCbcVkQcnAlzhNzvR1wpae4IEcvs3jCb0B2PZjeCrzG3uYm4eQpK4UbZ119oTiAE4%2Bw3ydcxp96MUHWTH5fgp47pMs%2FylAaYwjkNduXilqsKHXiDMVr7KLtS3oTbPEl3g4fJkdtSBnb0J1QhRt8qHQwAoE6gA3Cn1L7%2FRW01MDzSePPq%2Fr2CsYbgQQdgfRBphBJW1SnxTR2IsLGTAhg5V7u3VpFsn9Gw751fhb0%2FPA1CxLZ4Pg%2B0iQ10%2BXJnnpEezu%2Bqzhpt8ZfxMwDBAq6sn8Zqx1eBh4ecY38p9KAEji30%2FGdVs0gdVh3RmM0Z6dDsDv4u5468f9VE1DgSlK1PytJ2Ix5AvRFJUo%2BaVshjqqrWjKafkc%2Fq%2B%2BvMKqijMAGOqUBzYtWzPhUZ72THuMB2bEX4yW6j1OBVenQ2Wd7L0E9BdN8Wzx0E9l9R5aBnDT6x889r3HNT01vpVMVSzsa%2BdRD99j4ImZJ2JWqEJdKZ9tyGN4Sw3nnG5WlaK4UpnGlSnfMsYeT3GNLjsJxVpcXdYCZ4TvpQayF55pC0KZgjqDWZoExc9WTQuPytIrg6Qf7MTdp7QrorVNspW06Rbz6yJuKJHI%2B20Ug&X-Amz-Signature=f3a0fab51eb7a1a88cef686b02388d19aa392ea5ce451dc48c436f79e7a040c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHR4ZSDP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRtdM%2Fir6dylb0FFUcf6LZIDON5Ad8pVfIb0pE2dDglAiEAq%2FchgZ1NxZgnCNGTjOttLD%2FSK9tvVAw0NM8qRTSLii8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNDsn6PUEJrHIAyircA0PgeAQvqQkAayBsiouhHlXH49MHdVe15d4jzz8gf6Te13vRtIYHtO0x6inLzLe6LFyG4kI8%2FDnCAfDXpp2Ls4Hu4HbmFo6unUEZo%2F0x4rUnuRWfKW2%2BpoAijHl7b4MGmW3gtONmhPW5i2cmH8HI1bfW0LnPBzFr4oiT5ZgXsXTFbukFo4l1UivAK%2F2xFo5CwLMrpOOuW5dYj659ZpKiKjVPzqYc1geMBYfcVw6Zk8iEoO2%2FsJvySe1WD%2FMM8LgXZDJqZlCbcVkQcnAlzhNzvR1wpae4IEcvs3jCb0B2PZjeCrzG3uYm4eQpK4UbZ119oTiAE4%2Bw3ydcxp96MUHWTH5fgp47pMs%2FylAaYwjkNduXilqsKHXiDMVr7KLtS3oTbPEl3g4fJkdtSBnb0J1QhRt8qHQwAoE6gA3Cn1L7%2FRW01MDzSePPq%2Fr2CsYbgQQdgfRBphBJW1SnxTR2IsLGTAhg5V7u3VpFsn9Gw751fhb0%2FPA1CxLZ4Pg%2B0iQ10%2BXJnnpEezu%2Bqzhpt8ZfxMwDBAq6sn8Zqx1eBh4ecY38p9KAEji30%2FGdVs0gdVh3RmM0Z6dDsDv4u5468f9VE1DgSlK1PytJ2Ix5AvRFJUo%2BaVshjqqrWjKafkc%2Fq%2B%2BvMKqijMAGOqUBzYtWzPhUZ72THuMB2bEX4yW6j1OBVenQ2Wd7L0E9BdN8Wzx0E9l9R5aBnDT6x889r3HNT01vpVMVSzsa%2BdRD99j4ImZJ2JWqEJdKZ9tyGN4Sw3nnG5WlaK4UpnGlSnfMsYeT3GNLjsJxVpcXdYCZ4TvpQayF55pC0KZgjqDWZoExc9WTQuPytIrg6Qf7MTdp7QrorVNspW06Rbz6yJuKJHI%2B20Ug&X-Amz-Signature=f0cba14f89f5fd01c60a9722b24e5b73763e9ecfcfddca767496b76f3dd7c7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
