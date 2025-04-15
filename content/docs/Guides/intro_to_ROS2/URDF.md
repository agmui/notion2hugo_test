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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=5717a07d8e5fa92dc4e897a41993b51747b27e0a12d38c96d595b17920c2e601&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=698c7b7180b477ec0b6fa56b276bb47360ac9fdfa83fce3fcdd0a0224ebef140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
