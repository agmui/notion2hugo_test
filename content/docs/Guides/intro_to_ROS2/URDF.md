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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53VSFR5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHS2UgEHtl%2FBjnz2%2BAkEY9nVMRhpLiBVQORMxqPE4rXMAiEA%2FamEMpy0a5hoD9aUKGV1RRqss%2FOEW16mmPpCbfOqnvQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7JKHRWWACPCSvYSrcAxE5mvK%2Fza7tIq1lpjF4%2FBZiycTgzTfxKHavRZxBSHyJKEfSeDnx0LeQv6XPSH%2BWM3rVpnawKOKTLMxfQUCWGD2t5kuzg5%2BryA9JOA0KTx6CED0TdJ5ZjhTltSm8mHMbfCXAVEtuxU4cOk4jRCeI%2BJZwAaCGcgTDGytYSuuESKZ5tlw01hA5kHiMtC2rqKvNUkR%2FOwlytBGFY9Za1OV4kF%2BmTWAeHwzPUcr49DSosFWErswU%2FvADyMJMZs5KQFoHXFnoFk3lwEg%2BLH0l1vKy0q00vd7KoNMmoI3mmo9cWix0i%2FbJeL7iNGMpCx1IJzoW3cXorv8jl9NbOzr5PZaI4kaEIEgqjjcXelpqXh852%2F4UYy%2FSI2fQlZsiqbDBftnUMQqi9Z3uf%2BDYwlhjDEcOeGtZK%2Fd%2FBE%2B%2BKaO5HTCDUBJWToLQw1R%2BLa9t7D06fmy4e1pxvklRScE%2FMcG9T%2BsQzyARJB4h19LGJ4ip1cr1OxgWJDoB%2BTBgWKowiDu2DpvcWS6YLBYawCE5Dw1gM%2F9R8SfkAPFKCx6iKN%2F4ky2GLMf4eZCIAaZzL2hQUaQu1t156UiJEINv4cyigQ4Iy9aJalGdfiSLkgc1IYiS%2BrsH5nVomi0WqCIqyRqzpVVuMIPTmsAGOqUB9SGjJkRfFXvbA8Jd6UBApCjJLkEgVqYVSGrpTIsXz7oFUAlAT%2FimVWSI0%2FA7zfXNs%2Fgma9KTwts5S8O7gnLA2kDaxygmvop3MHBOn8i6AYNNQsrh2rEyX5YoCUhVF0773ehY9XSaH6epmo8vqrDRtvOBki4iS1%2FbsFdJ2tIYiY4OhLS%2BYlqe3Qu6vLnFzKXulq4KavGjAACIblzDjjPtoiaO1%2FuM&X-Amz-Signature=c5eac3cd78780a9b41870f24f122b694cd31ed04caeef460308897ddcec175a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53VSFR5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHS2UgEHtl%2FBjnz2%2BAkEY9nVMRhpLiBVQORMxqPE4rXMAiEA%2FamEMpy0a5hoD9aUKGV1RRqss%2FOEW16mmPpCbfOqnvQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7JKHRWWACPCSvYSrcAxE5mvK%2Fza7tIq1lpjF4%2FBZiycTgzTfxKHavRZxBSHyJKEfSeDnx0LeQv6XPSH%2BWM3rVpnawKOKTLMxfQUCWGD2t5kuzg5%2BryA9JOA0KTx6CED0TdJ5ZjhTltSm8mHMbfCXAVEtuxU4cOk4jRCeI%2BJZwAaCGcgTDGytYSuuESKZ5tlw01hA5kHiMtC2rqKvNUkR%2FOwlytBGFY9Za1OV4kF%2BmTWAeHwzPUcr49DSosFWErswU%2FvADyMJMZs5KQFoHXFnoFk3lwEg%2BLH0l1vKy0q00vd7KoNMmoI3mmo9cWix0i%2FbJeL7iNGMpCx1IJzoW3cXorv8jl9NbOzr5PZaI4kaEIEgqjjcXelpqXh852%2F4UYy%2FSI2fQlZsiqbDBftnUMQqi9Z3uf%2BDYwlhjDEcOeGtZK%2Fd%2FBE%2B%2BKaO5HTCDUBJWToLQw1R%2BLa9t7D06fmy4e1pxvklRScE%2FMcG9T%2BsQzyARJB4h19LGJ4ip1cr1OxgWJDoB%2BTBgWKowiDu2DpvcWS6YLBYawCE5Dw1gM%2F9R8SfkAPFKCx6iKN%2F4ky2GLMf4eZCIAaZzL2hQUaQu1t156UiJEINv4cyigQ4Iy9aJalGdfiSLkgc1IYiS%2BrsH5nVomi0WqCIqyRqzpVVuMIPTmsAGOqUB9SGjJkRfFXvbA8Jd6UBApCjJLkEgVqYVSGrpTIsXz7oFUAlAT%2FimVWSI0%2FA7zfXNs%2Fgma9KTwts5S8O7gnLA2kDaxygmvop3MHBOn8i6AYNNQsrh2rEyX5YoCUhVF0773ehY9XSaH6epmo8vqrDRtvOBki4iS1%2FbsFdJ2tIYiY4OhLS%2BYlqe3Qu6vLnFzKXulq4KavGjAACIblzDjjPtoiaO1%2FuM&X-Amz-Signature=c4107a0288b72b23d315230f1374dcc89463be143e01fd1b549e625791ea45f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
