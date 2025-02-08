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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMGWB6I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDMbFX%2B%2FO%2B2et1Z%2FsnvXoxEk2YB0JRHJgZmv%2B3u9XqsVgIhANw9j2ohYRxjablR8sBFUEWn6hmFfyJl8SiMiCfxm%2BiWKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMa4F9D6mgOrnBdCsq3AOajfoOvflG0KTxHDXpp%2B4xU%2BxYL6J%2FuyVEnhbNtNKgNJtM84alsPWVmYRPDSD%2B8nMn4pgNW8dpA5%2BmnE%2F2wAKEQjOIegPz2khOYvgGmFM2KgyJOzWpFFOGLj9P8QDsVxUn%2FAObK17DvkazGGevsR7qTYEETBnPBIz8qHrJJNeUpqzLWvBrrpejh%2BUXM6T%2FpVEaulBIMEN%2BHe36RgJ2e%2BVVEs5V4sToPM3dXaKbSOm4RYectMQKEE6dcFl49a%2F9kY3nbhNc4sEm62IQnKuqr3RH36QYexJklxUEny9SJ58UeYU5GdtHOtktYHxoU8NILQFvVgf%2BMcutFNrgwVEXgRfvHpPOHlN6QkH2Wm1u0o5GPONQss%2BI6%2B2vLDT%2FsoZlzqgtMhknSfavQYHSNdE%2Brce9Fczto%2FUdCZDe%2Fm2RzrmG3OpPlnH3V6tSzUmtCw3OBDCfD8RzjTx%2FmKw7s%2BQbAcRIqGZ1LAEwEm58iujtISeogJ%2FS0%2FmDqfaSFolJLV4xeTMvYt1bzb3P0IKhJqU7MfE3DTYrNqv7ZIxJWG4JMp8Meb6oaYSHy%2BMrDB3%2Fp0jI3D8feNJywRoB0GA%2BhDaFmqkTuNTy6AVHR%2BK7Srt6ovxKIATBZFAGyR%2BwTP1yOzCyh529BjqkAVZEYDMz96t%2FuaAKhf%2BpEPKAf7ZHGfa10fGc9oNHIhuTsaxzcn3gxGgM76SZ3rwokGol83BNYAwIeCzvD4j%2BAKWlhOkj4COBm6YbEqsM7O8MmNB36SRQjyaa5q8cJmr0tz4Zuhm02%2BxZfhhC7Ut4B4kZv6e3Yh3NAN1Nu%2BtSSBQsXf56UBg55Qbi9AZcy8vlsErMr2yfm6U2Sq40lZ06GsfMQ9ij&X-Amz-Signature=2ba7eaada0e5bd051ca3fe828121990048a2fabead02d717ce4cba678e225203&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMGWB6I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDMbFX%2B%2FO%2B2et1Z%2FsnvXoxEk2YB0JRHJgZmv%2B3u9XqsVgIhANw9j2ohYRxjablR8sBFUEWn6hmFfyJl8SiMiCfxm%2BiWKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMa4F9D6mgOrnBdCsq3AOajfoOvflG0KTxHDXpp%2B4xU%2BxYL6J%2FuyVEnhbNtNKgNJtM84alsPWVmYRPDSD%2B8nMn4pgNW8dpA5%2BmnE%2F2wAKEQjOIegPz2khOYvgGmFM2KgyJOzWpFFOGLj9P8QDsVxUn%2FAObK17DvkazGGevsR7qTYEETBnPBIz8qHrJJNeUpqzLWvBrrpejh%2BUXM6T%2FpVEaulBIMEN%2BHe36RgJ2e%2BVVEs5V4sToPM3dXaKbSOm4RYectMQKEE6dcFl49a%2F9kY3nbhNc4sEm62IQnKuqr3RH36QYexJklxUEny9SJ58UeYU5GdtHOtktYHxoU8NILQFvVgf%2BMcutFNrgwVEXgRfvHpPOHlN6QkH2Wm1u0o5GPONQss%2BI6%2B2vLDT%2FsoZlzqgtMhknSfavQYHSNdE%2Brce9Fczto%2FUdCZDe%2Fm2RzrmG3OpPlnH3V6tSzUmtCw3OBDCfD8RzjTx%2FmKw7s%2BQbAcRIqGZ1LAEwEm58iujtISeogJ%2FS0%2FmDqfaSFolJLV4xeTMvYt1bzb3P0IKhJqU7MfE3DTYrNqv7ZIxJWG4JMp8Meb6oaYSHy%2BMrDB3%2Fp0jI3D8feNJywRoB0GA%2BhDaFmqkTuNTy6AVHR%2BK7Srt6ovxKIATBZFAGyR%2BwTP1yOzCyh529BjqkAVZEYDMz96t%2FuaAKhf%2BpEPKAf7ZHGfa10fGc9oNHIhuTsaxzcn3gxGgM76SZ3rwokGol83BNYAwIeCzvD4j%2BAKWlhOkj4COBm6YbEqsM7O8MmNB36SRQjyaa5q8cJmr0tz4Zuhm02%2BxZfhhC7Ut4B4kZv6e3Yh3NAN1Nu%2BtSSBQsXf56UBg55Qbi9AZcy8vlsErMr2yfm6U2Sq40lZ06GsfMQ9ij&X-Amz-Signature=a038065d42c73b6ceec271bb8dad7af6bcd26fe0e5917c4064ff16b88e875a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
