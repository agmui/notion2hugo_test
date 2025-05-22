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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPKXJQX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDQ7%2FGzAVEHV4KTuOyOSJKHBeuzit8vsy4VB8om7NOt6wIgTS%2FUHLZHUynyghqTcTyiJ%2FvwTSQNwTnZ%2BaPwGY76nFcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDLAsobVZcub5rP8CrcAyvcpKtStooVypcqcFgnDAr2jeTM0yAxWOo0waT%2B3WifnY4H10ae1fOaYO07OAizjkhr6jOM3m8858iYCPida8jB6Ml9AAWxc3LDtwY2%2BFEGBpnXQhYwLP1jR2NFogNhaLsOr3hnAxJG0wiJlIYlEeoXjJuS5kVblBd35HbwnEZUl1ocK4jKUfXU1uGQOuY9u5PiI6M0kX%2FxRORNWCTULPm3xZJifF%2B%2Fgw09%2Fm3JkFiuKqLqAmf%2BQIq%2FCf%2BQMjLyaKoHnqnlKWlnKktLx%2BMuOdl7iG%2FbEd48hHDfHn8nwRALNob9nCgs3INWpIZrC68wz2WGqsOiFuoztNr4o5Y%2FbPYQIVthM8JS%2BadDjoQHxKVaVtlg0PDbuVLA8e5%2Fbsy9qD8AwCzndhbpx6pRf9RyrW2AnriAld04XZ4r1quyV%2FIRC%2FpodJuyGaa%2Bu%2BMHNhfBhkavRWsqLrqJBHL0jZFTuxgr6QLHPhlq0U%2BMQozQcqkhAVEiVwCDgZu2TBEWn%2FtRS1CPCw%2FAYu7e5DLbgTIxA2u87t9j5MXuDXUdL6%2Bl7nhlJ992B0M0BUEMi9ZvIBAUABGD6vgVSAOODx2t77QnnTVAybBHenc0zzeBC8dlkRnadIJPR18EXwBGIrZwMMfFvMEGOqUBMQdzqjE%2BTikZPH%2Bnv0fP28zC5cmq0WqBVFdG%2BFyhN8%2BJ7MyMHhrgalBMfLliOJMJWRERXTS%2Fitw7MeovK3Q9Jv6AtPBtcuKW5%2BGnRepR%2BCTX6KvptgyxoUg3N8XE3jK3Y01oEMYFv%2BsOmyL3N7vJvjrvGXJn5urIdovMvEw%2BLPWfa8X1iJjtzQpzSa1XCt5SabnYgKT3NJ6D%2FrJQI%2B0Yj%2BJz2aMG&X-Amz-Signature=0f024efb3524e455715306fd051314da48615851b0240ac72b6ea603429072c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPKXJQX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDQ7%2FGzAVEHV4KTuOyOSJKHBeuzit8vsy4VB8om7NOt6wIgTS%2FUHLZHUynyghqTcTyiJ%2FvwTSQNwTnZ%2BaPwGY76nFcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDLAsobVZcub5rP8CrcAyvcpKtStooVypcqcFgnDAr2jeTM0yAxWOo0waT%2B3WifnY4H10ae1fOaYO07OAizjkhr6jOM3m8858iYCPida8jB6Ml9AAWxc3LDtwY2%2BFEGBpnXQhYwLP1jR2NFogNhaLsOr3hnAxJG0wiJlIYlEeoXjJuS5kVblBd35HbwnEZUl1ocK4jKUfXU1uGQOuY9u5PiI6M0kX%2FxRORNWCTULPm3xZJifF%2B%2Fgw09%2Fm3JkFiuKqLqAmf%2BQIq%2FCf%2BQMjLyaKoHnqnlKWlnKktLx%2BMuOdl7iG%2FbEd48hHDfHn8nwRALNob9nCgs3INWpIZrC68wz2WGqsOiFuoztNr4o5Y%2FbPYQIVthM8JS%2BadDjoQHxKVaVtlg0PDbuVLA8e5%2Fbsy9qD8AwCzndhbpx6pRf9RyrW2AnriAld04XZ4r1quyV%2FIRC%2FpodJuyGaa%2Bu%2BMHNhfBhkavRWsqLrqJBHL0jZFTuxgr6QLHPhlq0U%2BMQozQcqkhAVEiVwCDgZu2TBEWn%2FtRS1CPCw%2FAYu7e5DLbgTIxA2u87t9j5MXuDXUdL6%2Bl7nhlJ992B0M0BUEMi9ZvIBAUABGD6vgVSAOODx2t77QnnTVAybBHenc0zzeBC8dlkRnadIJPR18EXwBGIrZwMMfFvMEGOqUBMQdzqjE%2BTikZPH%2Bnv0fP28zC5cmq0WqBVFdG%2BFyhN8%2BJ7MyMHhrgalBMfLliOJMJWRERXTS%2Fitw7MeovK3Q9Jv6AtPBtcuKW5%2BGnRepR%2BCTX6KvptgyxoUg3N8XE3jK3Y01oEMYFv%2BsOmyL3N7vJvjrvGXJn5urIdovMvEw%2BLPWfa8X1iJjtzQpzSa1XCt5SabnYgKT3NJ6D%2FrJQI%2B0Yj%2BJz2aMG&X-Amz-Signature=805bdc85ee7bb74cdd6de5eb50296f048bc9d3a93d3dda6d98bea0e887b349e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
