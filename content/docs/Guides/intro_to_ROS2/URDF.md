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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLEOMWP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFarZsECsmTEiRJCh68k5S0v03orulD5BM2lRPML0aogIhAPdgWr38MAU4up8nwju7ELnPlHvO%2B3oUrWztLHpFKfLnKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuFcSWtoSrOAlCAFIq3APrEvJgseYIrQQyWiZAM%2BZGnebqMm1WFG%2BXHryPU1qiUXt5IayTnQsRabtc8kpJTWFCVyP9QWVT1WlK1SWaLrgs5pAfmWrjiuaX20JNtU4k5iVVU0XqZGF3IPScvZPN0XtJtbpoXFnguUJReB5AEqnyOmYhoPa2SqTVvzEMZVfKTJuhtgL8mTluOc5FOqEfFFYkMNfCWbLBszM43Ef9bjYI%2Fd73t%2Btl99Rig4pNc3cSWPOsMN4DN52GX183fskJZva1nj4QGp1eZwP7SZF4ned1KF8nIg2d96rX8Z%2FW7EoVv2%2F6W4veaoYPuDY4muA%2B%2BcYXnItQWMZyCgiawV%2FlEoDw73g9QxiHPPknXWfe5Y52qBiSWnulIonXS9FgX5%2F4XIqiKnR%2Fnk76Oj6890ueZ4%2BZr2%2Br9kP%2BNgZ5TFqSDplvW7TCXHfgb1LBH%2B1MtBOh8UQf5T0cERYEIErTPZ3nfJ2H7ypdGdo3XCcgvBwuVacob%2B%2Fxcbph9xRXud7Itgo8gDucwT0yj%2Fl%2FokSWNQNvahAQFb2j2lhjWYhRZMW41C%2BXt0X4rht9TovCb7zJWnqhUMc%2B3L1oiKE9kDe7KEqTsicKGyZDcHPEH0%2FGJZPLR%2BUGy%2FlbBQ%2FQeh6vDMUfpDCbl8y%2BBjqkAUPrcUoPWkuJDiH2Ya1%2BHXXQ7rPvn8q%2FYvjygH6Dszf5cs9%2Fz3QXflf0XJq6s%2BbfEd6g9qp%2FV0ibHRzek2KxF7SFlYhqwGtv4bnIGF0wc5LSilyhfRec%2BQhFB4gvjaXaJRDF6cW2DmloiMw5b8DfjnJleyt4gAl1XrNajHuKzc0xRHokQshhibW8O%2BDDunpebdbtOTNRhU7LLSHHeNTSvT623Nig&X-Amz-Signature=7a61116b8581f599e4c44106a393516d6fa88d3b8696cfa2fce698abf2b86673&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YLEOMWP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFarZsECsmTEiRJCh68k5S0v03orulD5BM2lRPML0aogIhAPdgWr38MAU4up8nwju7ELnPlHvO%2B3oUrWztLHpFKfLnKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuFcSWtoSrOAlCAFIq3APrEvJgseYIrQQyWiZAM%2BZGnebqMm1WFG%2BXHryPU1qiUXt5IayTnQsRabtc8kpJTWFCVyP9QWVT1WlK1SWaLrgs5pAfmWrjiuaX20JNtU4k5iVVU0XqZGF3IPScvZPN0XtJtbpoXFnguUJReB5AEqnyOmYhoPa2SqTVvzEMZVfKTJuhtgL8mTluOc5FOqEfFFYkMNfCWbLBszM43Ef9bjYI%2Fd73t%2Btl99Rig4pNc3cSWPOsMN4DN52GX183fskJZva1nj4QGp1eZwP7SZF4ned1KF8nIg2d96rX8Z%2FW7EoVv2%2F6W4veaoYPuDY4muA%2B%2BcYXnItQWMZyCgiawV%2FlEoDw73g9QxiHPPknXWfe5Y52qBiSWnulIonXS9FgX5%2F4XIqiKnR%2Fnk76Oj6890ueZ4%2BZr2%2Br9kP%2BNgZ5TFqSDplvW7TCXHfgb1LBH%2B1MtBOh8UQf5T0cERYEIErTPZ3nfJ2H7ypdGdo3XCcgvBwuVacob%2B%2Fxcbph9xRXud7Itgo8gDucwT0yj%2Fl%2FokSWNQNvahAQFb2j2lhjWYhRZMW41C%2BXt0X4rht9TovCb7zJWnqhUMc%2B3L1oiKE9kDe7KEqTsicKGyZDcHPEH0%2FGJZPLR%2BUGy%2FlbBQ%2FQeh6vDMUfpDCbl8y%2BBjqkAUPrcUoPWkuJDiH2Ya1%2BHXXQ7rPvn8q%2FYvjygH6Dszf5cs9%2Fz3QXflf0XJq6s%2BbfEd6g9qp%2FV0ibHRzek2KxF7SFlYhqwGtv4bnIGF0wc5LSilyhfRec%2BQhFB4gvjaXaJRDF6cW2DmloiMw5b8DfjnJleyt4gAl1XrNajHuKzc0xRHokQshhibW8O%2BDDunpebdbtOTNRhU7LLSHHeNTSvT623Nig&X-Amz-Signature=27a4c372ffaae66ee3375dd8632c42c66a196b5e47b4261ec358557e11321807&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
