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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ASA7XR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMuxk99LMhEb3GeR%2B%2B%2BvSy0%2BpOd0GZ0C6kAhOV4XtSAIgd2uhE8O1BcVhmu3iJbX1DaYtGBjTk20fCpQiU1NEQ50qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOeJPEdXjwHE3qeDyrcAzqB%2B1sbTl6u2%2BESieE%2BWOfAoDmp2uDOWQTextOZrklPULEdXiqfcRtBOPZ1vUNBhPtZ1PsWzcIC2KiXASDO5qBJErgl1YA%2FYO0y%2FbePCivEGk2b5w6662zzEwcv%2BwtMRUVdSm0X%2F12Z%2FZLCOaPopUJDmVmWzVvmuI%2BmZRKd3liQba2tkfwmk%2BU594BdSur9lsP%2FvCrSiOuvdCA9wHLxwH7kF3m42O8ro6C3ko8tLhspZSesKX04lM4YlwWO2ZES%2FdzyxpAdtElKK3%2B4XsKQKm3DVN7ZMd8YJaN1aDwJ5NKTjFdb3CTmO%2Bz84HhtvEQUF%2BTwzvk%2BqQpmKtaSvl%2B%2FPaE%2FukRSLzmofhzOlQUPzQVlPGVx0Wdr62fF2SYVVjVF412hbUa6OT6mqRm9pSOvqPl00CjzdBpW3k1j65p8N2KwV3dIQE34imKyUZPWornEVuyFfTYd9a5hOQNumwXS0x5nYlxun2%2Fv6cqOG2xq570tJJqu3pVJy5%2FzgZyQx6iYuxVapj623DCT%2F%2B4Fzg%2FZrTIue%2BMmEvHzzcMaKRd5OR1MFVpYF0pShCImTIsUiibek7Fk4a3BoKJ3zDxyKkiQgI1AzExbtltZqyEt%2BQ2A72ESSINMuEzJJ91pX%2BodMM%2BN3r0GOqUBwbOKf61Gj%2BIRC80JZ4L2%2F5TKRUDd0Rocwj10%2F%2BX3dHzRqL9sWZ%2FuuohGhNgTvrYcXta%2B0YO0mj%2FQ6%2FOiPZYKXZPpQV16I%2F7ng%2B0OISG39q57nv2hRkUYJiSaxTCQdtABsbyvgcCGpo7DLg%2BU4uz7WEpPChuBQpvy4OQLaRZd9%2BS09H2G1BtAvEKjWbuS0jWBYVw4KWtNcVvz7QGl6vtn8KXfPey8&X-Amz-Signature=fac93230ad612e9dad24758638afdd1b93bbf449f67aa621e45f853bc6751a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ASA7XR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMuxk99LMhEb3GeR%2B%2B%2BvSy0%2BpOd0GZ0C6kAhOV4XtSAIgd2uhE8O1BcVhmu3iJbX1DaYtGBjTk20fCpQiU1NEQ50qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOeJPEdXjwHE3qeDyrcAzqB%2B1sbTl6u2%2BESieE%2BWOfAoDmp2uDOWQTextOZrklPULEdXiqfcRtBOPZ1vUNBhPtZ1PsWzcIC2KiXASDO5qBJErgl1YA%2FYO0y%2FbePCivEGk2b5w6662zzEwcv%2BwtMRUVdSm0X%2F12Z%2FZLCOaPopUJDmVmWzVvmuI%2BmZRKd3liQba2tkfwmk%2BU594BdSur9lsP%2FvCrSiOuvdCA9wHLxwH7kF3m42O8ro6C3ko8tLhspZSesKX04lM4YlwWO2ZES%2FdzyxpAdtElKK3%2B4XsKQKm3DVN7ZMd8YJaN1aDwJ5NKTjFdb3CTmO%2Bz84HhtvEQUF%2BTwzvk%2BqQpmKtaSvl%2B%2FPaE%2FukRSLzmofhzOlQUPzQVlPGVx0Wdr62fF2SYVVjVF412hbUa6OT6mqRm9pSOvqPl00CjzdBpW3k1j65p8N2KwV3dIQE34imKyUZPWornEVuyFfTYd9a5hOQNumwXS0x5nYlxun2%2Fv6cqOG2xq570tJJqu3pVJy5%2FzgZyQx6iYuxVapj623DCT%2F%2B4Fzg%2FZrTIue%2BMmEvHzzcMaKRd5OR1MFVpYF0pShCImTIsUiibek7Fk4a3BoKJ3zDxyKkiQgI1AzExbtltZqyEt%2BQ2A72ESSINMuEzJJ91pX%2BodMM%2BN3r0GOqUBwbOKf61Gj%2BIRC80JZ4L2%2F5TKRUDd0Rocwj10%2F%2BX3dHzRqL9sWZ%2FuuohGhNgTvrYcXta%2B0YO0mj%2FQ6%2FOiPZYKXZPpQV16I%2F7ng%2B0OISG39q57nv2hRkUYJiSaxTCQdtABsbyvgcCGpo7DLg%2BU4uz7WEpPChuBQpvy4OQLaRZd9%2BS09H2G1BtAvEKjWbuS0jWBYVw4KWtNcVvz7QGl6vtn8KXfPey8&X-Amz-Signature=f97857a789becac7fca677dfbb7190286e229271b3ae7c0868d70d566bc1ce27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
