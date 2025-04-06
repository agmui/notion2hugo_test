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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWMWSMA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcHBGXWgkPydEaZtOc1TTi8xzOnRk%2Btki%2FliB3gCINQIhAOZ8qqeYqoi9y7XbEAss%2F4Do9LRDOL4h%2F%2B49XnLYpSzgKv8DCEAQABoMNjM3NDIzMTgzODA1IgxdDxBL39xc7z%2B4qT8q3AOg15a26Kq3RWGefIb6QXGqPRALvsbExJyC%2FbcAteZD1Pju65IAIddMFa%2BsgpmCXv8eJIcaN%2FtJKZsKyGrRXwI8os46mdrPMzswOMi235YjxfOI8VQWpNKIqklcT0j7P1LsuuhvKghmui0AlJdu810XPG5J90CqjN6kfqMmn1TcXhDg1ZoKuPjH%2BYybxDYPfwBTvQGL7minWf2nVvmIaD%2F9y8N46jx4AwtFzkuZ5Y5a%2BuenqrvlLcZLpuBq8N98CvasESWDJX4JudT15kYVDIu7N76eWk%2FfGVBvCdDXoeQJwrIK%2FLwG1Kagh0Iqj4WTLRaEe8GdegWdXuZTPFwihE4xccUOLVr%2F%2FjPQ9a4aVwG3e0SeYlhBEP8Yjw323Ir6ORKwzTHgq2ufkUdFQQjWjr2YvMy91Q%2BTdh5zf8%2FvQt9CaAy2IcwwiOPLQppH8odExmD0fbeslWsZ9152crjs4EXCnGHFBOEDRyQ4X5Nf9uanivMx8cY%2BwnjNiJGRX1aYBZrfVN%2B4ogBrKybKlMWT2mUq97W99hiuVe%2B1Ae5HzU4jqODsnqklrtawsOuBLIQNahC1qREc%2FwJn5RCx4qIf9xnIL0eJVyFiHt9v9VuM1iT9ngjgVrFUiWsSSUvHmzDGwMi%2FBjqkAW32fmedikUJriMD08K91DQiI9dI7YwB6x1aazyMHrfN6uIydyHOJLAgjFtp6A73EeIMffAXm%2FwJIRSceWhT86I0KVFQAZ852cxEQLmbp81Drk%2BqPEO7BV0ebwQ84mDWM9CPCgr8bms9APw89gGuFGOIvGsfPDhR1K0EknLUU2kpJYDQXmhMwH9g8FdAyCFf0td7Ez4Hxkk7KNI%2F4DhxyEXCB6C7&X-Amz-Signature=cfb13ccbf1d35f548c4324cdd917a45f13e33f2ed85dca70d844b7d99941760e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWMWSMA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcHBGXWgkPydEaZtOc1TTi8xzOnRk%2Btki%2FliB3gCINQIhAOZ8qqeYqoi9y7XbEAss%2F4Do9LRDOL4h%2F%2B49XnLYpSzgKv8DCEAQABoMNjM3NDIzMTgzODA1IgxdDxBL39xc7z%2B4qT8q3AOg15a26Kq3RWGefIb6QXGqPRALvsbExJyC%2FbcAteZD1Pju65IAIddMFa%2BsgpmCXv8eJIcaN%2FtJKZsKyGrRXwI8os46mdrPMzswOMi235YjxfOI8VQWpNKIqklcT0j7P1LsuuhvKghmui0AlJdu810XPG5J90CqjN6kfqMmn1TcXhDg1ZoKuPjH%2BYybxDYPfwBTvQGL7minWf2nVvmIaD%2F9y8N46jx4AwtFzkuZ5Y5a%2BuenqrvlLcZLpuBq8N98CvasESWDJX4JudT15kYVDIu7N76eWk%2FfGVBvCdDXoeQJwrIK%2FLwG1Kagh0Iqj4WTLRaEe8GdegWdXuZTPFwihE4xccUOLVr%2F%2FjPQ9a4aVwG3e0SeYlhBEP8Yjw323Ir6ORKwzTHgq2ufkUdFQQjWjr2YvMy91Q%2BTdh5zf8%2FvQt9CaAy2IcwwiOPLQppH8odExmD0fbeslWsZ9152crjs4EXCnGHFBOEDRyQ4X5Nf9uanivMx8cY%2BwnjNiJGRX1aYBZrfVN%2B4ogBrKybKlMWT2mUq97W99hiuVe%2B1Ae5HzU4jqODsnqklrtawsOuBLIQNahC1qREc%2FwJn5RCx4qIf9xnIL0eJVyFiHt9v9VuM1iT9ngjgVrFUiWsSSUvHmzDGwMi%2FBjqkAW32fmedikUJriMD08K91DQiI9dI7YwB6x1aazyMHrfN6uIydyHOJLAgjFtp6A73EeIMffAXm%2FwJIRSceWhT86I0KVFQAZ852cxEQLmbp81Drk%2BqPEO7BV0ebwQ84mDWM9CPCgr8bms9APw89gGuFGOIvGsfPDhR1K0EknLUU2kpJYDQXmhMwH9g8FdAyCFf0td7Ez4Hxkk7KNI%2F4DhxyEXCB6C7&X-Amz-Signature=cc3791809d014fdae1745e3550161d0b292a4f1c99e82fc2a60ab0783dc2b582&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
