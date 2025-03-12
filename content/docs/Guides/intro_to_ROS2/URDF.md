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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWKNPYB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDKsjt%2BZK5YFrqX%2FIP8KmfrNiOOBQRk4GIzHHID%2BrOaNwIgBnXz0pHgNoWXS3ZVHQ4ZE36T36skvAX4g0fc0AXTxI0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICZpT1FQ%2FRsSmtDSircAwq5G6L7YTsVG5vHl9J8uqqjVc8DkT0E9Kyxz7LzD2hOrGxoP7qSJN838xNonimIUWZZr%2FsJTeQFCSSFV5IPob5STxPtme3%2FjkxXxaKdoDtLPlCKFerlf00SRx5eGES6XNPCbwijkRs3%2BkXYhJl%2ByjYka5ok45p4B9qlwGTPoWZ8ADZ9coJLQmKTquvNumjmfp2uBZ2CYF4lz3gPmnBlN%2Fz8Rr%2BJKMQhe3bFRtQJJyr6X3ubfIisrQFNxthnWwQYBrxwih2ZIwFJW9dfgwp3h7HhB5HSekwThcI7bYQTrCvQglg4UN8ZSbD9d1O64k%2FUYJcLicGVlYsT74PiDaDMNXQ5EYqrTFObp%2B5EnWQ7hIkBNJf3YV2Yvy6JopjPPiHqvb940sIpdQrF77lNR7TON5Qwh4D3ax1aRsAREFqRJAd1SUOU%2B1W4WJr6GmX6as3K0dQuTrtzOFpx1e7cwOK7OcWn4Nn4Tph9I04RFZztB7rbOOGCQUATSy3zE%2FdmgGE9oof891ChcL56NE3V8oyKXCb1T9P0Vf9woHUia%2FK7x7w95DKKsHH7yzXqY3xqxIa1BXdEyP2k2fFqDPVtBKqmKnfKclhoEckW0cbAJ3K0UsDjrNHMSq9ufOmrD4OhMPqexr4GOqUBD61nf3Xz1qIwMMumful2Tfd1QR2jzoBETY3jPA%2B1Tg03yTu4LwrncSOfZ4aL2VqmK%2Fmhy2Mp8Z9KSrcMi%2FzG7SJDnlFCTuDn3R7QfyX7%2BhDf%2BHBfLwQk67Rucn%2F39pE7T6IcVuOnoSBS30sv192IfgmOwp6Bwe6g7ThEJaWHFfZ5VZ%2FvfJaEfVIjzK4DBdvj6ap55PsHU%2BZso8pGCTGT09VcWA9I&X-Amz-Signature=aee603aa787d5e7ea48dee4501a0b7af4a973cfb1cf613eaa19650f285865f51&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWKNPYB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDKsjt%2BZK5YFrqX%2FIP8KmfrNiOOBQRk4GIzHHID%2BrOaNwIgBnXz0pHgNoWXS3ZVHQ4ZE36T36skvAX4g0fc0AXTxI0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICZpT1FQ%2FRsSmtDSircAwq5G6L7YTsVG5vHl9J8uqqjVc8DkT0E9Kyxz7LzD2hOrGxoP7qSJN838xNonimIUWZZr%2FsJTeQFCSSFV5IPob5STxPtme3%2FjkxXxaKdoDtLPlCKFerlf00SRx5eGES6XNPCbwijkRs3%2BkXYhJl%2ByjYka5ok45p4B9qlwGTPoWZ8ADZ9coJLQmKTquvNumjmfp2uBZ2CYF4lz3gPmnBlN%2Fz8Rr%2BJKMQhe3bFRtQJJyr6X3ubfIisrQFNxthnWwQYBrxwih2ZIwFJW9dfgwp3h7HhB5HSekwThcI7bYQTrCvQglg4UN8ZSbD9d1O64k%2FUYJcLicGVlYsT74PiDaDMNXQ5EYqrTFObp%2B5EnWQ7hIkBNJf3YV2Yvy6JopjPPiHqvb940sIpdQrF77lNR7TON5Qwh4D3ax1aRsAREFqRJAd1SUOU%2B1W4WJr6GmX6as3K0dQuTrtzOFpx1e7cwOK7OcWn4Nn4Tph9I04RFZztB7rbOOGCQUATSy3zE%2FdmgGE9oof891ChcL56NE3V8oyKXCb1T9P0Vf9woHUia%2FK7x7w95DKKsHH7yzXqY3xqxIa1BXdEyP2k2fFqDPVtBKqmKnfKclhoEckW0cbAJ3K0UsDjrNHMSq9ufOmrD4OhMPqexr4GOqUBD61nf3Xz1qIwMMumful2Tfd1QR2jzoBETY3jPA%2B1Tg03yTu4LwrncSOfZ4aL2VqmK%2Fmhy2Mp8Z9KSrcMi%2FzG7SJDnlFCTuDn3R7QfyX7%2BhDf%2BHBfLwQk67Rucn%2F39pE7T6IcVuOnoSBS30sv192IfgmOwp6Bwe6g7ThEJaWHFfZ5VZ%2FvfJaEfVIjzK4DBdvj6ap55PsHU%2BZso8pGCTGT09VcWA9I&X-Amz-Signature=09c878bf7b92af4df16d0445aeecfd2e1e91e5581c49bf7270f4595c8c477768&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
