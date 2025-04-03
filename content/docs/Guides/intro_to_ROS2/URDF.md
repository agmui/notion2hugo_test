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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJFV53C%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfdUKE5gyG1C4W8Ti9HGjC%2BryX5pub4%2B6PIwhcQqWWZQIhAIsVCBsmT9y4bs2GPzRXhU0lsdIoSaTEIZFJcUQDNZrQKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ynwTCdAgJJLNz0kq3APbahCy7syg7nUbR4khvayIOfFWIU1evjzEgCUaIIXtA%2B%2B%2FDanLqvcZqI2nFAOdhCP0x4ETuH%2BTSmGiZJrwpvJytBRIhj2YHlwYGah8vXQ%2FgBUyXZOdS%2BbyZ4dzNUdH4qRxarMaqXO7APHIe4DoiSlCDKsQvxmqmsxqZokKp1KXrhkqtFp4qpn9yECyqZFle2GwS7p0m9dPU1TSdGFbpAllCWKXEfebyCpC%2Bm5DDdwjuI%2BVyzqNF7IpUi%2Fy4At%2FeIPH%2BqJLqi9EUpEDkfr3XyEuy1FYscEpgz7z1hYdCD06FN97fTY0QIe06IVTaUSnpQ4GZyAZ6gDGG%2BT1uTmFkWn3v0yVsWZDS9RoukEdahVwM609kxVARVoO90OAGCKLizNqygE3aEBfkt%2FjY9ad%2BjjH1K1SmYLiQrblOMw43H6nNYXMbMtzFXUVYMr7zqxDawkb8MMYb9mCh%2Bfzaih2tfSgJJLwS2lbPi%2FSH4WlD9iOtz%2BkhUDL%2FKAajQhPUbH8cwi66vFe7U52I72leg99poYqcD%2BkPf2Yaj38ywbfqoRfTNE6jCWxIP9Zd2JFnGS7Wlzuha4buKpT0n2AHD97Gq92XsBk44xSbC6z%2F3zTFiskqVTWCugs0HVmHdOcvDCRl7m%2FBjqkAZ19kuj0efrpoaKM771jUZwDUPqsN%2BZOsOg5DNbnYMLhRLPnx8p3RylcMnxhbJ9uLk1KRTDFxbKzP3UwhOeNm5qp0lZjvn1SxCb8uY6C6FvQbPnlXOM%2BT%2FTrH4iZ5rR6azDPa6QFYlz0mxoHAsiZIjSAxlKlAJfPJ7x60FX7bJCBChQXKlH9XVwS2aVf0%2ByS%2BAdsl4d%2FdHZPLLd4u9M9rL8q%2FYu8&X-Amz-Signature=1d5e2e71bfe296e77e82405ad7008215dafbe9834dc8502eef9b73092480d8f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJFV53C%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfdUKE5gyG1C4W8Ti9HGjC%2BryX5pub4%2B6PIwhcQqWWZQIhAIsVCBsmT9y4bs2GPzRXhU0lsdIoSaTEIZFJcUQDNZrQKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ynwTCdAgJJLNz0kq3APbahCy7syg7nUbR4khvayIOfFWIU1evjzEgCUaIIXtA%2B%2B%2FDanLqvcZqI2nFAOdhCP0x4ETuH%2BTSmGiZJrwpvJytBRIhj2YHlwYGah8vXQ%2FgBUyXZOdS%2BbyZ4dzNUdH4qRxarMaqXO7APHIe4DoiSlCDKsQvxmqmsxqZokKp1KXrhkqtFp4qpn9yECyqZFle2GwS7p0m9dPU1TSdGFbpAllCWKXEfebyCpC%2Bm5DDdwjuI%2BVyzqNF7IpUi%2Fy4At%2FeIPH%2BqJLqi9EUpEDkfr3XyEuy1FYscEpgz7z1hYdCD06FN97fTY0QIe06IVTaUSnpQ4GZyAZ6gDGG%2BT1uTmFkWn3v0yVsWZDS9RoukEdahVwM609kxVARVoO90OAGCKLizNqygE3aEBfkt%2FjY9ad%2BjjH1K1SmYLiQrblOMw43H6nNYXMbMtzFXUVYMr7zqxDawkb8MMYb9mCh%2Bfzaih2tfSgJJLwS2lbPi%2FSH4WlD9iOtz%2BkhUDL%2FKAajQhPUbH8cwi66vFe7U52I72leg99poYqcD%2BkPf2Yaj38ywbfqoRfTNE6jCWxIP9Zd2JFnGS7Wlzuha4buKpT0n2AHD97Gq92XsBk44xSbC6z%2F3zTFiskqVTWCugs0HVmHdOcvDCRl7m%2FBjqkAZ19kuj0efrpoaKM771jUZwDUPqsN%2BZOsOg5DNbnYMLhRLPnx8p3RylcMnxhbJ9uLk1KRTDFxbKzP3UwhOeNm5qp0lZjvn1SxCb8uY6C6FvQbPnlXOM%2BT%2FTrH4iZ5rR6azDPa6QFYlz0mxoHAsiZIjSAxlKlAJfPJ7x60FX7bJCBChQXKlH9XVwS2aVf0%2ByS%2BAdsl4d%2FdHZPLLd4u9M9rL8q%2FYu8&X-Amz-Signature=acfae3a8f6ea9ff1d7aa643d6df3fa07ea612c02c556af106d5108fb776144df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
