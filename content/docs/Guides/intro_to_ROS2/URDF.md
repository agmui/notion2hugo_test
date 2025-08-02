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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FANAHC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClslF0vOLwAgdfQCBIn7W%2F%2F3%2FzPqbzkPbj1kfd9kMVrQIgPmxEh74z6WWmmRKXMnLWHsjGCmDgKgphUvza0FXKivoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKNP4eC3ujCOiP77RCrcA581k4XuzFtpVt%2BIXwkNGH0%2F2u%2FnoDhI9Rl0Jv%2BZVbnvvHbDb%2Bm1L31WquxkuHj7JmHgoWp38ao8ORIxjVmiUcKaSQejjLQFZGktBeOgw5ThGIqQ4zRVvup9f7aLc9p7MswvENatRJzZa7gU3tIsaGXPssfTEJ4BUY6sB2xPcH6aOQyphWogmBM3hZo2bz94TkMUcIwrAGldp%2FP09gpnsMlf55jbO9j2EEEX6lAEoTR%2B4NHgn9m11ON%2BJOlTeNOIIQfP82iKHny%2Fkv8RKTFsAs9AMMkHTN2yColCkIgVj0atN9lbMd63dk6F9Vbm8moGf%2BOCpWsy6PdxRBAfYbl3pT1FYl77hbhW2EdRxVEGDV0s0WMIZbdPoJva4mxaVJan6FxG0a%2FxATSxK%2FkZnXIFJBCdsXvtmMqzBFnSHNaHqrdm2nxAfIRuzslCoZ3KVYmNbs2dnukQRYGwi7lU%2Boe6qKyEy%2BqThNGhzQgxt96ffDiRt2DdfEMeGWfwlPTXYXTBLUEYGCJkW%2BxXwG0I5iNw3H89L43i34I3bvDYAcQZOYleTTvzMEORySkiWwYJa1oeXl2gszkSzJWDD1skEzc6SnujApp%2Fry10STA0%2BNIyZpeTK%2FHaCqynpOXLVlINMJ%2BeucQGOqUB%2F8vfcBDIAkpQbC7vXU9uS5sDTQH4vypgalUT%2FmFOg%2BsLd7G1a8Xc2yx9P1iywsSfhKzpB0uNXKV8X13j04Qw5XpCiJPc88bHdf4Lz%2FtW0%2Fd6CPov%2FkNEVzQ%2B8Vi4GmPJ%2B2XwdU4k8VcqANz1wuBT64TYeJSIvuZTR9Y%2FfWL%2FIb8heNw1%2Bds4%2FMxUqFubMf8wskXOwPyg9jDyppfsdBMzd2t0pM3U&X-Amz-Signature=c58ff327b6ee3ea9fe07430e858c5c24140bdd8fef53aaa19662430a3c80142a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FANAHC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClslF0vOLwAgdfQCBIn7W%2F%2F3%2FzPqbzkPbj1kfd9kMVrQIgPmxEh74z6WWmmRKXMnLWHsjGCmDgKgphUvza0FXKivoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKNP4eC3ujCOiP77RCrcA581k4XuzFtpVt%2BIXwkNGH0%2F2u%2FnoDhI9Rl0Jv%2BZVbnvvHbDb%2Bm1L31WquxkuHj7JmHgoWp38ao8ORIxjVmiUcKaSQejjLQFZGktBeOgw5ThGIqQ4zRVvup9f7aLc9p7MswvENatRJzZa7gU3tIsaGXPssfTEJ4BUY6sB2xPcH6aOQyphWogmBM3hZo2bz94TkMUcIwrAGldp%2FP09gpnsMlf55jbO9j2EEEX6lAEoTR%2B4NHgn9m11ON%2BJOlTeNOIIQfP82iKHny%2Fkv8RKTFsAs9AMMkHTN2yColCkIgVj0atN9lbMd63dk6F9Vbm8moGf%2BOCpWsy6PdxRBAfYbl3pT1FYl77hbhW2EdRxVEGDV0s0WMIZbdPoJva4mxaVJan6FxG0a%2FxATSxK%2FkZnXIFJBCdsXvtmMqzBFnSHNaHqrdm2nxAfIRuzslCoZ3KVYmNbs2dnukQRYGwi7lU%2Boe6qKyEy%2BqThNGhzQgxt96ffDiRt2DdfEMeGWfwlPTXYXTBLUEYGCJkW%2BxXwG0I5iNw3H89L43i34I3bvDYAcQZOYleTTvzMEORySkiWwYJa1oeXl2gszkSzJWDD1skEzc6SnujApp%2Fry10STA0%2BNIyZpeTK%2FHaCqynpOXLVlINMJ%2BeucQGOqUB%2F8vfcBDIAkpQbC7vXU9uS5sDTQH4vypgalUT%2FmFOg%2BsLd7G1a8Xc2yx9P1iywsSfhKzpB0uNXKV8X13j04Qw5XpCiJPc88bHdf4Lz%2FtW0%2Fd6CPov%2FkNEVzQ%2B8Vi4GmPJ%2B2XwdU4k8VcqANz1wuBT64TYeJSIvuZTR9Y%2FfWL%2FIb8heNw1%2Bds4%2FMxUqFubMf8wskXOwPyg9jDyppfsdBMzd2t0pM3U&X-Amz-Signature=1fc00d305a800571235c4cbad4e5cc4384ac02eb03df159c7567ea39ed841514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
