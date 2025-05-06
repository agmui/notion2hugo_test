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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBG7O5GE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0qsZbulsWY86UYNoeI63eJlmTL4esG05b1LfKjCS3hAiEA%2FDwnUis6932J2w04gCz4ZqUPzfkGMuKy35NuIaFjbhgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK2Y%2B7t238BB8UElFircA6GuvTTJgdjyPXxdIWo5Gy1TFpoyjtiNKyef%2FiE%2Bo5OwhcLY4H7t6Yw4N%2FNVZLnsK9eut54IRzg1jenFhg6DhhXmH1g6zu1mY%2BRPwd1AhrdNd00k3VQQex4Qp0obxJWGh%2B3pZtGlZVBsjycWdiKGm5Xa27opoNskw0Q1VmfQoehZBpu0MK6GFweLFHClAWY1SV2a%2FJb6YwMXTGGl9rWdxlmbp3r2y1V5xkiRWkUgKqsQKee6vFu1Bk3mMkuA2Z%2By%2FiL6%2FM1lJSJWRT9ViljdKtmkQ%2B20vnxQXyl2F8%2FPmtUUvgSZwjhfSpDCYtQfe7ov2kmr8tpjRPPN8mNROCMA1aBoJ0k9Fm1dWHQYVku84jbnpBhDodDfoC8nP%2FewOdFWppaqcAJyp60GKxFXYe2BkJNw1dStehqmBwSNl1NKYSLOSsc8IXTNatuk2H%2F7FziFNCDkIkQK%2Bz%2BGXQo%2Fry2WD%2BIRcODlTHNZia6bwDog7jzpzwPTyKtlQPo%2FBcp4BEc%2B6CygZwjIMbVYTm1NJi2ueY7EWm6ruSHA0SLPMiX56Ta0Nuha%2F25d1fGgep9Su8PHyIeVzPnF%2BQTh49KUjF8Sx9o4OoCYhCS%2BtL8q092tDkYBiddA2JULkB1zvHmRMOSz6cAGOqUBttWXyhtv3EsWc9R77MGh8K3K%2Foo0BT7t1PAvok3rlcSGbk7z0OAFbckmYwm6004aUWgEj1IF5DICIDgNKh8cfXbh%2F88HmOWsU23Q8nz8b0coQrF8CUyN4YKAxJfcbtKpdA354EWyx%2FzLmEIL4o4hxXeixVELDxglHz9Fdy%2FloxLZw2yxB5ytZCamxys1u4%2BgbDDe%2BJ7h%2BDX0Un6%2ByVvH%2Fg9FXMO8&X-Amz-Signature=4d91892efe1a282a2db2256d1767eac079d78bb0d9844017af79ad121a3097b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBG7O5GE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0qsZbulsWY86UYNoeI63eJlmTL4esG05b1LfKjCS3hAiEA%2FDwnUis6932J2w04gCz4ZqUPzfkGMuKy35NuIaFjbhgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK2Y%2B7t238BB8UElFircA6GuvTTJgdjyPXxdIWo5Gy1TFpoyjtiNKyef%2FiE%2Bo5OwhcLY4H7t6Yw4N%2FNVZLnsK9eut54IRzg1jenFhg6DhhXmH1g6zu1mY%2BRPwd1AhrdNd00k3VQQex4Qp0obxJWGh%2B3pZtGlZVBsjycWdiKGm5Xa27opoNskw0Q1VmfQoehZBpu0MK6GFweLFHClAWY1SV2a%2FJb6YwMXTGGl9rWdxlmbp3r2y1V5xkiRWkUgKqsQKee6vFu1Bk3mMkuA2Z%2By%2FiL6%2FM1lJSJWRT9ViljdKtmkQ%2B20vnxQXyl2F8%2FPmtUUvgSZwjhfSpDCYtQfe7ov2kmr8tpjRPPN8mNROCMA1aBoJ0k9Fm1dWHQYVku84jbnpBhDodDfoC8nP%2FewOdFWppaqcAJyp60GKxFXYe2BkJNw1dStehqmBwSNl1NKYSLOSsc8IXTNatuk2H%2F7FziFNCDkIkQK%2Bz%2BGXQo%2Fry2WD%2BIRcODlTHNZia6bwDog7jzpzwPTyKtlQPo%2FBcp4BEc%2B6CygZwjIMbVYTm1NJi2ueY7EWm6ruSHA0SLPMiX56Ta0Nuha%2F25d1fGgep9Su8PHyIeVzPnF%2BQTh49KUjF8Sx9o4OoCYhCS%2BtL8q092tDkYBiddA2JULkB1zvHmRMOSz6cAGOqUBttWXyhtv3EsWc9R77MGh8K3K%2Foo0BT7t1PAvok3rlcSGbk7z0OAFbckmYwm6004aUWgEj1IF5DICIDgNKh8cfXbh%2F88HmOWsU23Q8nz8b0coQrF8CUyN4YKAxJfcbtKpdA354EWyx%2FzLmEIL4o4hxXeixVELDxglHz9Fdy%2FloxLZw2yxB5ytZCamxys1u4%2BgbDDe%2BJ7h%2BDX0Un6%2ByVvH%2Fg9FXMO8&X-Amz-Signature=538e86713d5a87812b87449e9d534a56041b1f538101479dd8770190637e87a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
