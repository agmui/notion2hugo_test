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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTUR7A3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFujjT59IhX325kAc8DcYBeGJYmO6ehhRduFH5bJQmGPAiEA37wb%2BQ6c4prqiWMvXGk6SHYXFYcNzZs7Q%2F6nZgIFSYEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw1JID%2BxUE9s8JNWyrcA1elaN7U4sTCokfoXE0a1xQeSkvJofPqEv3PwNLpskM%2BjhNT5N6157waxRidOdLCprvD0XHScfnkE%2BxZT3hxmV5UNFT%2FxU4S6%2FGqKQoW5djQh94WGrCaQRXfiWSJ7w7J4lb0TSNm%2Bjdybwas8pn2uVG0vCro2BEYxdHoyEHG1h1MzAAeBtODWwrvSKwDVzigltYRJl5vno%2F6N3%2B60J4nK4vCnFvLCSEXKokkUD1Qh8yhUA62IHv5O1Dt1ErrvoNhviEdyv2SIXpVJR8okOKGJ93Juz0MeRyBjNAwENg1xCPisGPOo2FaQfenHTDwUYmwClh7412A6%2FV%2BKnOLvogZH8cQ1gmFuEtX8ULJykC4dNU2OWirDPeYt5o5r1NhJHD9hHdsNSjJcj%2FKTf7oWfPwAsk%2BNQiZbTCv3FARd5fzVfZrsX6Yrj%2BMuahjDkgiL9oLlLyzjxFGOblQUH7KuSDnekGyhHhs6aZfLJTS16xNr8mTcqyzCGq%2BXvQ%2FnRNJ71Uy4gKQfs%2BK3Lv7HkqyDrPxPCbALwpin5JKipeAVymj6EFxMueS6EbIsnzMlkf2oY2SL7uMWE1UKUQijc%2FanAapRaMTlJWR8Tle5LOE%2F8UNTOB7nJ3JwmpXUxZlYVUpMPn88cEGOqUBoOMo3xKwSLAA2phdl4Y%2BPLqPmfhyjEqZaqYkZZpJvTW6D6xPBt0jKtYQIdMhs4gCOIeKt6Tz%2FhCRS5iUJHc36s5fV8P88U8Xw1DJnw5QqFWFRAzWGv5vTOtLu%2FmEjgSfd44bFMG7GmRuByUZeOIH3Pr2Bm1pHZGJnzX44bRoXPQOvQsfJywii74TDWwfaUN3PjcHdslvGcAd33sB0%2Bfs510tCp%2Bt&X-Amz-Signature=8baa05c90e3fc03e7aafb536a3b716cac985774cd131f468ba2cd1bf3ee371ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTUR7A3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFujjT59IhX325kAc8DcYBeGJYmO6ehhRduFH5bJQmGPAiEA37wb%2BQ6c4prqiWMvXGk6SHYXFYcNzZs7Q%2F6nZgIFSYEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw1JID%2BxUE9s8JNWyrcA1elaN7U4sTCokfoXE0a1xQeSkvJofPqEv3PwNLpskM%2BjhNT5N6157waxRidOdLCprvD0XHScfnkE%2BxZT3hxmV5UNFT%2FxU4S6%2FGqKQoW5djQh94WGrCaQRXfiWSJ7w7J4lb0TSNm%2Bjdybwas8pn2uVG0vCro2BEYxdHoyEHG1h1MzAAeBtODWwrvSKwDVzigltYRJl5vno%2F6N3%2B60J4nK4vCnFvLCSEXKokkUD1Qh8yhUA62IHv5O1Dt1ErrvoNhviEdyv2SIXpVJR8okOKGJ93Juz0MeRyBjNAwENg1xCPisGPOo2FaQfenHTDwUYmwClh7412A6%2FV%2BKnOLvogZH8cQ1gmFuEtX8ULJykC4dNU2OWirDPeYt5o5r1NhJHD9hHdsNSjJcj%2FKTf7oWfPwAsk%2BNQiZbTCv3FARd5fzVfZrsX6Yrj%2BMuahjDkgiL9oLlLyzjxFGOblQUH7KuSDnekGyhHhs6aZfLJTS16xNr8mTcqyzCGq%2BXvQ%2FnRNJ71Uy4gKQfs%2BK3Lv7HkqyDrPxPCbALwpin5JKipeAVymj6EFxMueS6EbIsnzMlkf2oY2SL7uMWE1UKUQijc%2FanAapRaMTlJWR8Tle5LOE%2F8UNTOB7nJ3JwmpXUxZlYVUpMPn88cEGOqUBoOMo3xKwSLAA2phdl4Y%2BPLqPmfhyjEqZaqYkZZpJvTW6D6xPBt0jKtYQIdMhs4gCOIeKt6Tz%2FhCRS5iUJHc36s5fV8P88U8Xw1DJnw5QqFWFRAzWGv5vTOtLu%2FmEjgSfd44bFMG7GmRuByUZeOIH3Pr2Bm1pHZGJnzX44bRoXPQOvQsfJywii74TDWwfaUN3PjcHdslvGcAd33sB0%2Bfs510tCp%2Bt&X-Amz-Signature=81bfc3647eb0fd2feee12caf4205d783822f00b6e48357eea8e1568f4f45dff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
