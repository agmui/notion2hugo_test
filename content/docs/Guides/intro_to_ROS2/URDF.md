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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=6dfc98c12d212f4c6815a8b7899ee31c00ddf3b566cfe94dd65d422b44cd375e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=f0b2013d7a6e71fb4a2682d3ca356773151b04215981b140ab67a7ea39beb95c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
