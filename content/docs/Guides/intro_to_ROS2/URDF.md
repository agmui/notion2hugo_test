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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQK5LKK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEPeEJrR62LdnCIE2znHGOZjhK2vwCoAkxzZHGvyH%2BTkAiEA2lLAYdZFZ3uykNcQSKIw7OA1YlsHg6mCTrFg11BP3n0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKj82VH7H7DNLPmmISrcAzZd6QKEUUcaEFWNy64fJtUfdz41uE356MKv345loTXHYTMQ0uQYyc4WwWbN2A%2FO%2B%2BDS8ImeYLQIgZ1Tc0n5GnJUREAZxrATHMyHN9U5MLDs0J%2FwCRxCWcKdbfjCsFCgmFidOFgN5y9KnvFlbcuGowDPLASDqFPzzbQLbWfiTL8gi4Gs36hU7JpKu7A6rXjlIXMa56Eg4lGhgbgfbTKBJsxBd2VNEhB0d%2FKTdtrQ%2FWrRb5wOpl48khIYfX5CO1eiRz6il2zFSgyE9yYAUXezElZnq88ukWmLutt26c7K%2Fp1ZRzeCggfKW7hxPcxaHwoFN1UbYjeFU%2F8Ft6EFQI4z0lynK7FWayIeKakhrEDlc4WQ3gOEycG7uKJ4Gk2qT%2FwgzzGZgrLxrOmXhEuVV19T1q1%2FHvK%2Bp10Hi5uGBCZeO09Bb8m8rLCKcSKTcn%2FOdQtng2wJRQ91DQPU0m73jTqTdyr96eFOnQA8%2BSHoKiUZuQDgRb8rrmf7tdim2ojQwdE%2Ft0fBW1TgsoCrCfl6w%2F9VPSGCtlLETV2gGy4Os8Rsh60pAw5e2qFPGTzxZXyyHKSDjwaSL34yZzb1ls1dnc80mgZC9%2B4P7C93qwPjGWG2lW2ecn9714fzBg08Zl0ZMOaAmcQGOqUB3L0tCJD8Gcht0U2BmIzzxmvch6oFa7FLiHeQ1vJujhkKJkl3BfBb3p6ORraEimEhu1%2F7e4t5%2Boro%2FIDCdV52vMD%2FgrRZZUfiuJCIlz9o4xlgWl8T8OSzBs%2BBsPuCB1CJROcQlsPNMRcIni1TAsDG6jsTAhEJjOLZQ%2BY96bQQmOD%2BLxcRSrydwz32e5X%2FFGD7H1GW%2Fw5mhw7X0Ktcdv%2BDMTaKMe7Q&X-Amz-Signature=a26c74b671d1e1344c0aaf62f1aef801d819abdd3b63758e047702d9748b1a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQK5LKK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEPeEJrR62LdnCIE2znHGOZjhK2vwCoAkxzZHGvyH%2BTkAiEA2lLAYdZFZ3uykNcQSKIw7OA1YlsHg6mCTrFg11BP3n0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKj82VH7H7DNLPmmISrcAzZd6QKEUUcaEFWNy64fJtUfdz41uE356MKv345loTXHYTMQ0uQYyc4WwWbN2A%2FO%2B%2BDS8ImeYLQIgZ1Tc0n5GnJUREAZxrATHMyHN9U5MLDs0J%2FwCRxCWcKdbfjCsFCgmFidOFgN5y9KnvFlbcuGowDPLASDqFPzzbQLbWfiTL8gi4Gs36hU7JpKu7A6rXjlIXMa56Eg4lGhgbgfbTKBJsxBd2VNEhB0d%2FKTdtrQ%2FWrRb5wOpl48khIYfX5CO1eiRz6il2zFSgyE9yYAUXezElZnq88ukWmLutt26c7K%2Fp1ZRzeCggfKW7hxPcxaHwoFN1UbYjeFU%2F8Ft6EFQI4z0lynK7FWayIeKakhrEDlc4WQ3gOEycG7uKJ4Gk2qT%2FwgzzGZgrLxrOmXhEuVV19T1q1%2FHvK%2Bp10Hi5uGBCZeO09Bb8m8rLCKcSKTcn%2FOdQtng2wJRQ91DQPU0m73jTqTdyr96eFOnQA8%2BSHoKiUZuQDgRb8rrmf7tdim2ojQwdE%2Ft0fBW1TgsoCrCfl6w%2F9VPSGCtlLETV2gGy4Os8Rsh60pAw5e2qFPGTzxZXyyHKSDjwaSL34yZzb1ls1dnc80mgZC9%2B4P7C93qwPjGWG2lW2ecn9714fzBg08Zl0ZMOaAmcQGOqUB3L0tCJD8Gcht0U2BmIzzxmvch6oFa7FLiHeQ1vJujhkKJkl3BfBb3p6ORraEimEhu1%2F7e4t5%2Boro%2FIDCdV52vMD%2FgrRZZUfiuJCIlz9o4xlgWl8T8OSzBs%2BBsPuCB1CJROcQlsPNMRcIni1TAsDG6jsTAhEJjOLZQ%2BY96bQQmOD%2BLxcRSrydwz32e5X%2FFGD7H1GW%2Fw5mhw7X0Ktcdv%2BDMTaKMe7Q&X-Amz-Signature=93875868d078c0ea1d3d6ac43bd77cabf12f4fb2cac0bd14cb777de1131ec41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
