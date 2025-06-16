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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQWJDJO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCCHf%2FlL%2BppI2NB1jqY96zF5OH0tNTUBCEunkxCamidAwIhAIiwSZgvvFD3YfRohNLz6qQQCmOuLKXJSXR2ceQ7thUUKv8DCF0QABoMNjM3NDIzMTgzODA1Igwh%2B3jCUcnEOJOnf3Iq3AMFoerseXK3%2BE2sjAjVc3cv5wUQBF9wNSy7LMd%2FUY2WvIv1qfQT%2FQFjXzwon1uDzv75BtD7t8mKvEeDScbaDkDK7l8nv8u7DsbWN2u1eqAikC9yM4y5rXPDj6t4mhpa3hz%2Fwuwk5Np04ltt0ghzCJpBlQeIVKPF64jcAabSBtfDqVL5GtySC2%2BYbZDWrGifaX31u9b%2FGIcdr1i5p0SxeWG0ZnUuCzXwhSCn7pxe1iSKxO1jjSdZgzswsYWs0IVZ4WpKh2ZEI7tyCvD1DpuQ%2B9QIGJ2G3JTQcJ%2B16jIKInMraRfzTu9GsGIoWbRcCB0i6BrhQ1kPvXHm70gdGCq9M8nPMWstRgD8Vov7M132151mccYSN5YMXJN7fNwlEKG1xARp6Yie8DK6y%2BCUYZSJHZX%2BDtoMp3NUUqfGHjVdr0b%2FSITC%2Fk28z0P7mmK9SZ2Ti1VNRGFqqZ4KeUge9K53f21WMMCaOn6yhS1rB7M%2FMsdTRN0QzPXrbR%2F1g0jnADMXADwsE3ECroGVIZ4dM7LZC0YmDoFB8Q%2BgSdvAnpMvGFWuS5%2FqRVW5ecKGVDs%2F1Dfsl00U91rLHOb0r6ipjAuOFPSgTums5MpUN6qW012tDAxK41uXky4oniR9wNuFljC0m8DCBjqkAY2o9Gli8ki0w5OgH5VS1%2FQ9%2Bhb7lAwh3IQ4MQcvGyv6UV%2BOJDQ9OkpBNiXjjssw5tgJFJipI%2Fz8DmhH4yXNK9niCgLqjpc9DVS3m7vqI4nkM1VV0eK9lIyZbHpvNpnfI7BQnlgoXgG2P2JczCflMJ%2FpouF%2BTjzd4VgU2y%2BTxqurPA6%2F9WEWqkMQ5OcURa%2BiewWteRFeKisxlsV9c3qMKSZLXHIm&X-Amz-Signature=bd539ed6fd2d8858807f7ac469c7a5ba59a70c213b74fcddfab8e9d2efdd43ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQWJDJO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCCHf%2FlL%2BppI2NB1jqY96zF5OH0tNTUBCEunkxCamidAwIhAIiwSZgvvFD3YfRohNLz6qQQCmOuLKXJSXR2ceQ7thUUKv8DCF0QABoMNjM3NDIzMTgzODA1Igwh%2B3jCUcnEOJOnf3Iq3AMFoerseXK3%2BE2sjAjVc3cv5wUQBF9wNSy7LMd%2FUY2WvIv1qfQT%2FQFjXzwon1uDzv75BtD7t8mKvEeDScbaDkDK7l8nv8u7DsbWN2u1eqAikC9yM4y5rXPDj6t4mhpa3hz%2Fwuwk5Np04ltt0ghzCJpBlQeIVKPF64jcAabSBtfDqVL5GtySC2%2BYbZDWrGifaX31u9b%2FGIcdr1i5p0SxeWG0ZnUuCzXwhSCn7pxe1iSKxO1jjSdZgzswsYWs0IVZ4WpKh2ZEI7tyCvD1DpuQ%2B9QIGJ2G3JTQcJ%2B16jIKInMraRfzTu9GsGIoWbRcCB0i6BrhQ1kPvXHm70gdGCq9M8nPMWstRgD8Vov7M132151mccYSN5YMXJN7fNwlEKG1xARp6Yie8DK6y%2BCUYZSJHZX%2BDtoMp3NUUqfGHjVdr0b%2FSITC%2Fk28z0P7mmK9SZ2Ti1VNRGFqqZ4KeUge9K53f21WMMCaOn6yhS1rB7M%2FMsdTRN0QzPXrbR%2F1g0jnADMXADwsE3ECroGVIZ4dM7LZC0YmDoFB8Q%2BgSdvAnpMvGFWuS5%2FqRVW5ecKGVDs%2F1Dfsl00U91rLHOb0r6ipjAuOFPSgTums5MpUN6qW012tDAxK41uXky4oniR9wNuFljC0m8DCBjqkAY2o9Gli8ki0w5OgH5VS1%2FQ9%2Bhb7lAwh3IQ4MQcvGyv6UV%2BOJDQ9OkpBNiXjjssw5tgJFJipI%2Fz8DmhH4yXNK9niCgLqjpc9DVS3m7vqI4nkM1VV0eK9lIyZbHpvNpnfI7BQnlgoXgG2P2JczCflMJ%2FpouF%2BTjzd4VgU2y%2BTxqurPA6%2F9WEWqkMQ5OcURa%2BiewWteRFeKisxlsV9c3qMKSZLXHIm&X-Amz-Signature=c134e2aa8ae13ad01261e1c6c363407fbcefdc84cddc0fc3f60b80fd4276e20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
