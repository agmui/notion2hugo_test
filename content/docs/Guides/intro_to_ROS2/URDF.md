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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246PG3L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCu2XoRARwsxjfMzdKKSubFl1PJ7KASfStEf4Tjk2W4lgIgKgHt1KMufdL80lzVwWJHYpa0STHJcmxMc2m8vbO7dcUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDA%2Bt%2FGR1KfR1qYaFyrcA5P5EaN8k%2FVYwiDNVAVP%2F86JoiQRXQ8HolMfspS0aL02rqOpYuAMOd4ADA0meMYb%2FnuasXXBqByZuudF0Wo6Rj3tbPDg16Vg1kopvxn0PDicav8PJBAApi%2FbN0SDdTtqmyp4O%2FlJSZzzhGSihlkgU5uB6ADnAKCai6EpAf%2BXTYS05%2Fn0qEw0v67VywT2yZMKshyWTsQQkOJVYRB6OZmh5lbqDDS1wanBIpvuxmUAaTRjGUtnpvNqFLiXizizBeveJv40qV5guD%2BdSrlKyYq4%2BkoNrMbhff%2FwCASSmmAE%2FGkWOxR0V1xgBI%2FIrPWRK2NT1%2B%2FPne%2FeYDu0PvEOhfhvuWOHu7yIBDmc2WaMlI82qMUQwfePGlIOMOc%2BawK9Xw1N1rEPbBNzDzoSUb4jOhrVcQU48wZBsXoeF0d302D3mGpnC4Mmh3095InH1KvQkP69%2BY9jYAde%2BSsYK4oyZnboVl2EGBoexDrKKuJOd6OJU7WqE4HB0HA%2BSRDtVUmwmnRnir3mR3nl%2FGatn0pzfX%2FFEToYMU5CtiLF4mjsbiuJ33qLYQag3IjJuhKqVyQp9qbN5ADPpTRx69Hjd3sK7T3dhKneGrUzxE%2BVaA4Ulnyau4ViYNnxAmcJBNVKJstIMIOLtr4GOqUBSYodQb8dgzNLNqoxJRQeQ%2B1TtB0pnA7u0zzZaTwxUDYxXPfInH3IZsmbVC9YpUW0T4WPOAK2S%2BnxGz3sNAt0el1n55hgMVJbOBPUi900SJipujc6Qqps2XwIHXQ7Rx9VTNEyAz%2FT6g79qHehBvZ84xMXKw9HKEr27waVTZvJ%2FV3MmUukTmZY3c2Myzhu5ti3wO5uLO53rGwSsj%2FGiLb5HSCPDMWL&X-Amz-Signature=a4b23aca33b698fc382581bffee9f0b7bfcdb8e568dfa693e994297186144e29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246PG3L2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCu2XoRARwsxjfMzdKKSubFl1PJ7KASfStEf4Tjk2W4lgIgKgHt1KMufdL80lzVwWJHYpa0STHJcmxMc2m8vbO7dcUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDA%2Bt%2FGR1KfR1qYaFyrcA5P5EaN8k%2FVYwiDNVAVP%2F86JoiQRXQ8HolMfspS0aL02rqOpYuAMOd4ADA0meMYb%2FnuasXXBqByZuudF0Wo6Rj3tbPDg16Vg1kopvxn0PDicav8PJBAApi%2FbN0SDdTtqmyp4O%2FlJSZzzhGSihlkgU5uB6ADnAKCai6EpAf%2BXTYS05%2Fn0qEw0v67VywT2yZMKshyWTsQQkOJVYRB6OZmh5lbqDDS1wanBIpvuxmUAaTRjGUtnpvNqFLiXizizBeveJv40qV5guD%2BdSrlKyYq4%2BkoNrMbhff%2FwCASSmmAE%2FGkWOxR0V1xgBI%2FIrPWRK2NT1%2B%2FPne%2FeYDu0PvEOhfhvuWOHu7yIBDmc2WaMlI82qMUQwfePGlIOMOc%2BawK9Xw1N1rEPbBNzDzoSUb4jOhrVcQU48wZBsXoeF0d302D3mGpnC4Mmh3095InH1KvQkP69%2BY9jYAde%2BSsYK4oyZnboVl2EGBoexDrKKuJOd6OJU7WqE4HB0HA%2BSRDtVUmwmnRnir3mR3nl%2FGatn0pzfX%2FFEToYMU5CtiLF4mjsbiuJ33qLYQag3IjJuhKqVyQp9qbN5ADPpTRx69Hjd3sK7T3dhKneGrUzxE%2BVaA4Ulnyau4ViYNnxAmcJBNVKJstIMIOLtr4GOqUBSYodQb8dgzNLNqoxJRQeQ%2B1TtB0pnA7u0zzZaTwxUDYxXPfInH3IZsmbVC9YpUW0T4WPOAK2S%2BnxGz3sNAt0el1n55hgMVJbOBPUi900SJipujc6Qqps2XwIHXQ7Rx9VTNEyAz%2FT6g79qHehBvZ84xMXKw9HKEr27waVTZvJ%2FV3MmUukTmZY3c2Myzhu5ti3wO5uLO53rGwSsj%2FGiLb5HSCPDMWL&X-Amz-Signature=d998bf51fbae2e7fa39e1dd9a691f8b41c191e0e4228820152cebbebcc55c823&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
