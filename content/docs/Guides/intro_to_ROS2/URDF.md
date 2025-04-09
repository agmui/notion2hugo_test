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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXBR2IO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbh1VHS0S6DY3lYJnMvtrexCheE7%2FSkTBwn9VS84aKKwIhAJospZAr3YAM2kmlmnTaSN0U95V03KkqSYCk9gb8eTLIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0YVidQK7l6mt%2BKfMq3AMEy%2FEmoGXYR%2Fom%2FhWTDICty9S0%2BBa%2BuRVauodcoEIYsdWj9D5C6veQnuz2lK%2BOhOwf%2FiwTtWSdgdFxe7vOjS7nRQ7pLsVufwx8IrWYosOO3sHauivo7TyPCTJR0r8NW%2FIKqzIy0h6UsYUCNxtlZ1vXTaftsfvAGC3gCuAOicI3qxpFAkP1u0UjMcLh0xxvsdinMo2RRU4xpHmh0pmMXbMOYaiokz1evT%2FptQ9IlcDVL82cr%2BEqnsp5%2BYUT1fEelFNc3IAQTrqP3ybeQ1s26QCWFUhBNAPXF1KHpkirerd4d7G%2BHHcolXoohTcdDwnbDpUIxoZU7%2FLvovEXNqhCdvRMN0i9hrBhU7sfBnYMS%2F3LXJUfcuYtak2X5mUis035lBiORw7Af510Pmq0xNARHKJNVqGRMuSWgiTeQjkrlQN8CHIk1NcoI96gxOTTtKUTojytjQFzLL9f69RUXZQRwy1x6ZeZHWyaw5yoSRWPPUCw1tdnMPG%2ByNVX1Fgx1GFejEeGAmAc78esvxKNsODKRXiYibQSjirvSZkeDspQ1iYJrzE9KHGidxalj2E18JN457Iyo%2FtgX%2BxSHKpI6mZ%2FUY91UDjh4NJVkXZu0DVlkM5kSmSKjmD1EBmrERC4ITD2mNm%2FBjqkAchSmTe%2FDHyanS7hpNSzRDAAgb8r1aOEmhgSqOSdNry4pYiavndbOSmnGJ5jWxWYLIaGsDeEO5As6P8rY6qcNkIUMdVt3ExviWddyKSVj%2BVznn5dOMceh4yeZARiwiJSGyFrWXQm2zLtoxkQIvlF8zdlxIwDq%2F4Rv4rX%2BW58KzJkwKR5RBhKs3N4OaeMwURLGXQelFiHocHU%2Bp9Ry4eCyhSISOjg&X-Amz-Signature=f59b03bc70dd6a80f0a16fb0f441ed4974fb74d7c752fc92d7019ea2a9b3e17a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXBR2IO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbh1VHS0S6DY3lYJnMvtrexCheE7%2FSkTBwn9VS84aKKwIhAJospZAr3YAM2kmlmnTaSN0U95V03KkqSYCk9gb8eTLIKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0YVidQK7l6mt%2BKfMq3AMEy%2FEmoGXYR%2Fom%2FhWTDICty9S0%2BBa%2BuRVauodcoEIYsdWj9D5C6veQnuz2lK%2BOhOwf%2FiwTtWSdgdFxe7vOjS7nRQ7pLsVufwx8IrWYosOO3sHauivo7TyPCTJR0r8NW%2FIKqzIy0h6UsYUCNxtlZ1vXTaftsfvAGC3gCuAOicI3qxpFAkP1u0UjMcLh0xxvsdinMo2RRU4xpHmh0pmMXbMOYaiokz1evT%2FptQ9IlcDVL82cr%2BEqnsp5%2BYUT1fEelFNc3IAQTrqP3ybeQ1s26QCWFUhBNAPXF1KHpkirerd4d7G%2BHHcolXoohTcdDwnbDpUIxoZU7%2FLvovEXNqhCdvRMN0i9hrBhU7sfBnYMS%2F3LXJUfcuYtak2X5mUis035lBiORw7Af510Pmq0xNARHKJNVqGRMuSWgiTeQjkrlQN8CHIk1NcoI96gxOTTtKUTojytjQFzLL9f69RUXZQRwy1x6ZeZHWyaw5yoSRWPPUCw1tdnMPG%2ByNVX1Fgx1GFejEeGAmAc78esvxKNsODKRXiYibQSjirvSZkeDspQ1iYJrzE9KHGidxalj2E18JN457Iyo%2FtgX%2BxSHKpI6mZ%2FUY91UDjh4NJVkXZu0DVlkM5kSmSKjmD1EBmrERC4ITD2mNm%2FBjqkAchSmTe%2FDHyanS7hpNSzRDAAgb8r1aOEmhgSqOSdNry4pYiavndbOSmnGJ5jWxWYLIaGsDeEO5As6P8rY6qcNkIUMdVt3ExviWddyKSVj%2BVznn5dOMceh4yeZARiwiJSGyFrWXQm2zLtoxkQIvlF8zdlxIwDq%2F4Rv4rX%2BW58KzJkwKR5RBhKs3N4OaeMwURLGXQelFiHocHU%2Bp9Ry4eCyhSISOjg&X-Amz-Signature=724c9382548370710659b92cfcf33ecdf5d2f02934ae2b9674c42d1c1dc74ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
