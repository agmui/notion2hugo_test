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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJRODQV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGObU2A5CSsWyYvgTx82ygiTid1lREKYJkH37o%2BjYCxwIhANbSq5veuhaQrdaInldhmMVLIyxt%2Fri2s9otPLdOctzqKv8DCCsQABoMNjM3NDIzMTgzODA1Igz0mcknlkMPU38u21Aq3ANAG67oQn4zvAXFBDk601LShyRcE118QTRSM%2BvJjuhh55%2BhoS6Fn%2F0kpNIswSBBuq0svRF0s8KoEk4HoezybQwCMJVmV%2F5asShbA7c5qqbrmdTiLZIiYSV1GmtmwzIBSqAoAgDztcPhilz%2Bib8l6uvffH040BV3pUWBT8yS2weO6GpSQlnsFAMzmwnFY3h9JyGsh2hetpn8XiHdKC9Y9ZBiOWhL1SzbCMjNXuXPlB0ybhLnN%2BY0%2BhQ3An7A0gtGH7yCKuSH1ykFPap6DZJp7rSBB5FKcY0W0uAqMAUsShA1nzMZ6gynCk0eQm8rghKnt%2Be78mkhqZbQP1T1Yace1oWfi3f%2B9rn2olIdfrhi692SVG%2BrStXh%2FNtUGY5yxhQ51YxcLDUOwZSaVSFxj1CAj79sETj7Ln8t8VpiMlOoLfPsFg1c9e4H09v7cMuXNp4eE9%2FYyb7C%2BVgJV7gemLyhWXdq4Jfqa7m%2BSjwRQ3oSrNcX8p4VvFMekZevqadzsV0MHrTTDgGoP9UHwLDtMUB5lj%2FFd8UnGcwcmbrh9EC1%2FDSSuoBw5KoEWNX3y0R%2BK17TUWfF%2FIWtP8dKWz3T47pqRbr0OM8mUlzUBJpKe9aNWaDE%2BLQ7pyGHJI0MW2QXwDC5xvHEBjqkAQiR%2BVaXMYA2IpFbkOKy94TIDU7mgxHX0cO4gIP8iLoN3KruR9o%2F%2FwrY76bFR6gBgNA5Z%2FYC59IdFFdjGDPLLBMSCR2OslmmIQN7hM5tLv1RrwkqNCaeSzthey2SgY0JqNjS2h0PuhOrZxroEkE87MEAQ0KuKmsPJbR4dyicPOHBav4nziiyebWuUwYEYSBCvZPb%2BQOxBgEM%2BErj9p7XFLC4ahpb&X-Amz-Signature=163d0c320fc1e4f746f1dbaa40cb4c435e024ff8ac12230cc3286275780e6a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJRODQV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGObU2A5CSsWyYvgTx82ygiTid1lREKYJkH37o%2BjYCxwIhANbSq5veuhaQrdaInldhmMVLIyxt%2Fri2s9otPLdOctzqKv8DCCsQABoMNjM3NDIzMTgzODA1Igz0mcknlkMPU38u21Aq3ANAG67oQn4zvAXFBDk601LShyRcE118QTRSM%2BvJjuhh55%2BhoS6Fn%2F0kpNIswSBBuq0svRF0s8KoEk4HoezybQwCMJVmV%2F5asShbA7c5qqbrmdTiLZIiYSV1GmtmwzIBSqAoAgDztcPhilz%2Bib8l6uvffH040BV3pUWBT8yS2weO6GpSQlnsFAMzmwnFY3h9JyGsh2hetpn8XiHdKC9Y9ZBiOWhL1SzbCMjNXuXPlB0ybhLnN%2BY0%2BhQ3An7A0gtGH7yCKuSH1ykFPap6DZJp7rSBB5FKcY0W0uAqMAUsShA1nzMZ6gynCk0eQm8rghKnt%2Be78mkhqZbQP1T1Yace1oWfi3f%2B9rn2olIdfrhi692SVG%2BrStXh%2FNtUGY5yxhQ51YxcLDUOwZSaVSFxj1CAj79sETj7Ln8t8VpiMlOoLfPsFg1c9e4H09v7cMuXNp4eE9%2FYyb7C%2BVgJV7gemLyhWXdq4Jfqa7m%2BSjwRQ3oSrNcX8p4VvFMekZevqadzsV0MHrTTDgGoP9UHwLDtMUB5lj%2FFd8UnGcwcmbrh9EC1%2FDSSuoBw5KoEWNX3y0R%2BK17TUWfF%2FIWtP8dKWz3T47pqRbr0OM8mUlzUBJpKe9aNWaDE%2BLQ7pyGHJI0MW2QXwDC5xvHEBjqkAQiR%2BVaXMYA2IpFbkOKy94TIDU7mgxHX0cO4gIP8iLoN3KruR9o%2F%2FwrY76bFR6gBgNA5Z%2FYC59IdFFdjGDPLLBMSCR2OslmmIQN7hM5tLv1RrwkqNCaeSzthey2SgY0JqNjS2h0PuhOrZxroEkE87MEAQ0KuKmsPJbR4dyicPOHBav4nziiyebWuUwYEYSBCvZPb%2BQOxBgEM%2BErj9p7XFLC4ahpb&X-Amz-Signature=eeca5c41d2657466f294691877c9269425e76244d0ddd0785b823d92b329b99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
