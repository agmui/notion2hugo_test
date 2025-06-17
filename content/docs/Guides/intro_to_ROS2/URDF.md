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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIBPKE3K%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRsB2GY0%2FpaBZ%2FVApPNx0iWJPJPwLdqfxUR9fLKM%2F2HAiABEf7KWy%2Bm7%2Bxs3qRsngneu0TpOUkoukIMyYnm37OaiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMtcCTeDxDHMyBxskpKtwDADAQf4M8PDhCkB1jYaqT1Mo%2FpLNWBR5GrXXOjF4FJ1V%2Fx%2B9DxchHEZmj%2FwUumpjAYGvKIKkzIvUQKBf5jRfHfil4U%2FBGmLHRNg5WV6OJY%2FauUOWnK3g3ICJ7HcmM%2F6veqapBHeyVnW9bzQKq6qzvMPbHl3F%2FjrEWtnnugiRq1%2Bz9kCwX8EzxHrd%2F8FE237TzS836qA%2F1MbceqKYr0IXRyl4g7RzYyZfWG15Y2f%2FMvtRkaOqX9b%2BXdFRIq%2F%2BEKrYyIDMNkDXvneWqMTgmPivWVi6NfzuyU9AzvdoJjI7FwzRlrQsrNSGQTk62Pw49rt0quQff7rCsZtxG6UwwhH3GMkt%2FWZuVxD04nIOZPWmQU%2F0Ueby0%2FZze07Z8hfBHOKy%2BYRe5%2FGFGgY2yXuK2bK2AXdN4DBPPTkZb9UZJ0tGuT7WUGEnVIHVsityZYLmfCrEm3eTmwLvGUAvvJ5sNC%2FWt3JP38iUIGCgyvEJneLlsLONM6iw9Wk05BMS%2B%2FeLMS7aOb0mq0EJjxz5%2BCrci2MM8%2BipT5RRiSODW3ogbnYbfSdZGteYsc0KDTlpQrLqxWtPGmCQdKcHdAb0VYwWg7RKj1cnw6qHxF4e%2BBEcFiZci%2B%2B4H77J3H7rfOAN4lB8w2vPEwgY6pgGUPYORH7jWrR8o3Mar77XS2z%2FZLvA0kA7Pw7tUqVKRfqyXT10At32h68umTUolCUv56P0ndtLoRbc8VL7%2FDzU67nzjHmHKtPJK%2BL1V1OOkcgZ69%2B9NvNB0sRSdn5KyAXsv7PmHf3BYZhOf2FeKaTTqlFMXa6cR1GF5QXNLyaVBoQah8dPsuXEpmr0xCEo2Q51b2rsJWx4ZMlEa%2F%2ByUKtjfH2Rsi4WJ&X-Amz-Signature=592ece02bb00fc7a45aa24df45ef1b6e48c6405254641855e26fd25356169f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIBPKE3K%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRsB2GY0%2FpaBZ%2FVApPNx0iWJPJPwLdqfxUR9fLKM%2F2HAiABEf7KWy%2Bm7%2Bxs3qRsngneu0TpOUkoukIMyYnm37OaiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMtcCTeDxDHMyBxskpKtwDADAQf4M8PDhCkB1jYaqT1Mo%2FpLNWBR5GrXXOjF4FJ1V%2Fx%2B9DxchHEZmj%2FwUumpjAYGvKIKkzIvUQKBf5jRfHfil4U%2FBGmLHRNg5WV6OJY%2FauUOWnK3g3ICJ7HcmM%2F6veqapBHeyVnW9bzQKq6qzvMPbHl3F%2FjrEWtnnugiRq1%2Bz9kCwX8EzxHrd%2F8FE237TzS836qA%2F1MbceqKYr0IXRyl4g7RzYyZfWG15Y2f%2FMvtRkaOqX9b%2BXdFRIq%2F%2BEKrYyIDMNkDXvneWqMTgmPivWVi6NfzuyU9AzvdoJjI7FwzRlrQsrNSGQTk62Pw49rt0quQff7rCsZtxG6UwwhH3GMkt%2FWZuVxD04nIOZPWmQU%2F0Ueby0%2FZze07Z8hfBHOKy%2BYRe5%2FGFGgY2yXuK2bK2AXdN4DBPPTkZb9UZJ0tGuT7WUGEnVIHVsityZYLmfCrEm3eTmwLvGUAvvJ5sNC%2FWt3JP38iUIGCgyvEJneLlsLONM6iw9Wk05BMS%2B%2FeLMS7aOb0mq0EJjxz5%2BCrci2MM8%2BipT5RRiSODW3ogbnYbfSdZGteYsc0KDTlpQrLqxWtPGmCQdKcHdAb0VYwWg7RKj1cnw6qHxF4e%2BBEcFiZci%2B%2B4H77J3H7rfOAN4lB8w2vPEwgY6pgGUPYORH7jWrR8o3Mar77XS2z%2FZLvA0kA7Pw7tUqVKRfqyXT10At32h68umTUolCUv56P0ndtLoRbc8VL7%2FDzU67nzjHmHKtPJK%2BL1V1OOkcgZ69%2B9NvNB0sRSdn5KyAXsv7PmHf3BYZhOf2FeKaTTqlFMXa6cR1GF5QXNLyaVBoQah8dPsuXEpmr0xCEo2Q51b2rsJWx4ZMlEa%2F%2ByUKtjfH2Rsi4WJ&X-Amz-Signature=15e4c8ae2a3138963fb569cb69d8b795e1b9dd71bd55ee028fc0f6831669765a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
