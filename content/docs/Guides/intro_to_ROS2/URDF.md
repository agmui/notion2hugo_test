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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEOWML5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDchrIgoCwD%2Fz%2FPFCQVQLiUDM%2FHQ76QUX0coa0HZ%2BWIqgIgdJVRibqDYmnolQRV6XP80Os1DvttfiBIcXKm6kbv9HkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf3gZnmNBbJzuZ3uCrcA05f%2BFCQxZ0yLLSJN2pWYLNYL3%2FB%2FnSjtvSvUvXog%2F9qKtcPsiWQCabiv7WETcey6Hyfd5vmkYnihyqhY%2BNDciLKwDq7afPZ38Ch%2FG%2Fn7c6SunwNgH9Y5RkqgR2fYqLmOPudlx1k2QWTyH6STW5flAAI9NDd5sVIdMC1NJzKAMmqk53K3HvjnibOTKkpDCqPVBgxz0CZiEHsMn0xOq1I6rymrMekg5eqhhTpgPPOQBOzpGIddVVnntSTsTQDOCZiiQMR%2BqTv1C3ouO9KcTsxD0gFK1EgmtnYrmRaU3LNEMGCu%2BtVCgh760coMfs91cS37KTFo%2F8pudZFrCKID2rtM%2BaqGVRTTwkD6zECTF5PGZQtioWJK57OLLWTP3czXptcHtjqk7FQhH1GZWtW0ZZfVLVqqTlxM54nt1caU%2BFzt3onwXAHEHAJopkzGnSsVvEmT4RtN%2FoF%2BdQMMyO4mzsKSiOJPZ5FAYH7j1KwRpQwt4fa0uEEnP21RySJEsgRvJleLYuco%2Fwrc76Z9QesHpdrBMsRFI7f0YXvprgacIr4u6tSLhgAJ5R62CaprBJ9xRb7kYKILTuLwpcmIsnHw3uHmwPswiie4KZXHd3%2BQ6LH3TbrVSF4N3VMqpHWxRjEMMajnsQGOqUBiQcCtkWzMgmgANYJ6nySkF%2FkQBJyPAEwexJQ%2FsNPX53f8pRdWIzftNgEXeYiIt5Ug1xQgE2ZHQDk6Ujc6TFGOdFeBa9s7OZdrCb2djTEccNwsj2KENeeyYHHFNyIcw%2FPn%2Flj7mN%2F65A7fay9knEEuEFdjrvsZ6AFGSq%2F2ofo9T%2FseyMB7T4YkGU7ryPKHi9tcBQyua3Rng7GJsHh5Okvugui93DU&X-Amz-Signature=719328010afdc0349771027459c71d622b617f081bcf941d9d1b4aff44f1d94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEOWML5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDchrIgoCwD%2Fz%2FPFCQVQLiUDM%2FHQ76QUX0coa0HZ%2BWIqgIgdJVRibqDYmnolQRV6XP80Os1DvttfiBIcXKm6kbv9HkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCf3gZnmNBbJzuZ3uCrcA05f%2BFCQxZ0yLLSJN2pWYLNYL3%2FB%2FnSjtvSvUvXog%2F9qKtcPsiWQCabiv7WETcey6Hyfd5vmkYnihyqhY%2BNDciLKwDq7afPZ38Ch%2FG%2Fn7c6SunwNgH9Y5RkqgR2fYqLmOPudlx1k2QWTyH6STW5flAAI9NDd5sVIdMC1NJzKAMmqk53K3HvjnibOTKkpDCqPVBgxz0CZiEHsMn0xOq1I6rymrMekg5eqhhTpgPPOQBOzpGIddVVnntSTsTQDOCZiiQMR%2BqTv1C3ouO9KcTsxD0gFK1EgmtnYrmRaU3LNEMGCu%2BtVCgh760coMfs91cS37KTFo%2F8pudZFrCKID2rtM%2BaqGVRTTwkD6zECTF5PGZQtioWJK57OLLWTP3czXptcHtjqk7FQhH1GZWtW0ZZfVLVqqTlxM54nt1caU%2BFzt3onwXAHEHAJopkzGnSsVvEmT4RtN%2FoF%2BdQMMyO4mzsKSiOJPZ5FAYH7j1KwRpQwt4fa0uEEnP21RySJEsgRvJleLYuco%2Fwrc76Z9QesHpdrBMsRFI7f0YXvprgacIr4u6tSLhgAJ5R62CaprBJ9xRb7kYKILTuLwpcmIsnHw3uHmwPswiie4KZXHd3%2BQ6LH3TbrVSF4N3VMqpHWxRjEMMajnsQGOqUBiQcCtkWzMgmgANYJ6nySkF%2FkQBJyPAEwexJQ%2FsNPX53f8pRdWIzftNgEXeYiIt5Ug1xQgE2ZHQDk6Ujc6TFGOdFeBa9s7OZdrCb2djTEccNwsj2KENeeyYHHFNyIcw%2FPn%2Flj7mN%2F65A7fay9knEEuEFdjrvsZ6AFGSq%2F2ofo9T%2FseyMB7T4YkGU7ryPKHi9tcBQyua3Rng7GJsHh5Okvugui93DU&X-Amz-Signature=a0c6194dc8d0cd6655249b0d6a255f05b9dbeaa67d00512b4d68c7901e1c425e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
