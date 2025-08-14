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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCH2ZSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDDyaXYuClEH1iBuQs3nuMOM6XoI8Am%2BwLnIsiIe7y2%2BQIhAPPLGZd%2BaqL8lp084YhTT37TFj83zNKC%2BOzD%2BUUttLFvKv8DCE8QABoMNjM3NDIzMTgzODA1Igx5p%2B8IbJASWce3NGIq3AM1s%2F6oBz%2BBjK9Q6nkqsfRQKcF1USyR9Cp5TpS32kNBzMQBaLeiwzyg%2Bkahal0R%2BDmnPKnItN0GThePTxGv0JvxyfHzHslaGhvJcZ3m%2BBN8WKj8WNY325fcNocgU1Evak1J7WBNBqLg7qcL9B%2BVG85x6EVvZ8Pxl3uCzNiAaubRXOQ65EHhff82E3b62IB0C0cGxii4YhAZxVxXPYA8AsgW%2B%2BMAO6S9eWhZvQ2l7DIq0WWkgUPblZJRXc9oi4bQaU9r7YW3mgb2O%2FDgBL1JB%2BgLrsVYt1Xs0V4qDUqpclE5EopwZYvI916t076WkzefdJjh2dKvGYtkOuDNsLMUgfaYj71e0RExFpkFB8arQWaDlAdmzWeaV3ulFnU1EaLIBS%2BSR9KhCyEJTF159qmqFeEUUXT3%2Bsr6K3bgprQFsFuahB4LzRO1Oc3e02VULY6KTf%2BSdX88PJy7zSTHBxKwRQ2NpILaAzqDmI4T0V8fMq%2Bg2CETOL%2By49iNpoLwGU0Kp%2BbzDCG94mcYZv0GE6wFIul2%2FmIu%2BzQVO17Tv8FUectONHRxpDWL8MAklHmax%2FS0FHBmA3QIcaGzcVilxI9gG0RJXPDxJYxX8gtLv3CHiIA%2FY3Fntq7lCrhUcpXXhzDhsvnEBjqkAWfQwBXJB%2Bbn9wqOqEYHlBDJnGqLFObZcikracqeqdt7ijc9xR4XVZ%2B92aEAAOWELtvGdLJJslZAr8jF7QborZzzTaJw%2BvFDAFqpiuFcHaCuUONdQ1IQCr%2BHv3xamcDgpSmg3qfY6gM5cVyVV6%2BW4zay%2FtcGh38ualGDigg7mUbhRIWZO%2F8QFaPvmvmGDaK%2BOKSbYdnimEfSIzKjX6nZDpK%2Bt7tU&X-Amz-Signature=da89e137f3b86187f44f84dc4a37a81af9995e29e1828fa629efed28f73158c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCH2ZSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDDyaXYuClEH1iBuQs3nuMOM6XoI8Am%2BwLnIsiIe7y2%2BQIhAPPLGZd%2BaqL8lp084YhTT37TFj83zNKC%2BOzD%2BUUttLFvKv8DCE8QABoMNjM3NDIzMTgzODA1Igx5p%2B8IbJASWce3NGIq3AM1s%2F6oBz%2BBjK9Q6nkqsfRQKcF1USyR9Cp5TpS32kNBzMQBaLeiwzyg%2Bkahal0R%2BDmnPKnItN0GThePTxGv0JvxyfHzHslaGhvJcZ3m%2BBN8WKj8WNY325fcNocgU1Evak1J7WBNBqLg7qcL9B%2BVG85x6EVvZ8Pxl3uCzNiAaubRXOQ65EHhff82E3b62IB0C0cGxii4YhAZxVxXPYA8AsgW%2B%2BMAO6S9eWhZvQ2l7DIq0WWkgUPblZJRXc9oi4bQaU9r7YW3mgb2O%2FDgBL1JB%2BgLrsVYt1Xs0V4qDUqpclE5EopwZYvI916t076WkzefdJjh2dKvGYtkOuDNsLMUgfaYj71e0RExFpkFB8arQWaDlAdmzWeaV3ulFnU1EaLIBS%2BSR9KhCyEJTF159qmqFeEUUXT3%2Bsr6K3bgprQFsFuahB4LzRO1Oc3e02VULY6KTf%2BSdX88PJy7zSTHBxKwRQ2NpILaAzqDmI4T0V8fMq%2Bg2CETOL%2By49iNpoLwGU0Kp%2BbzDCG94mcYZv0GE6wFIul2%2FmIu%2BzQVO17Tv8FUectONHRxpDWL8MAklHmax%2FS0FHBmA3QIcaGzcVilxI9gG0RJXPDxJYxX8gtLv3CHiIA%2FY3Fntq7lCrhUcpXXhzDhsvnEBjqkAWfQwBXJB%2Bbn9wqOqEYHlBDJnGqLFObZcikracqeqdt7ijc9xR4XVZ%2B92aEAAOWELtvGdLJJslZAr8jF7QborZzzTaJw%2BvFDAFqpiuFcHaCuUONdQ1IQCr%2BHv3xamcDgpSmg3qfY6gM5cVyVV6%2BW4zay%2FtcGh38ualGDigg7mUbhRIWZO%2F8QFaPvmvmGDaK%2BOKSbYdnimEfSIzKjX6nZDpK%2Bt7tU&X-Amz-Signature=562ea95e0269cc433e73a4e3c2c9efd014713ea3b0085287f7dbcc55bb7762c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
