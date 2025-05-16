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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG66BC26%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6Emuof%2FEp%2FliGJ0LfpwEDeDPy1FuMVxLXlrfPkJpcgIgdoI6Snhs8kuDxpUI1dnlLazTfELT1wjZTK23T3eArVkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMX6DqUGRuHHkvMp3yrcAzdPEr4uKlJOjcSNJNeD%2F5qSZN2etKKBjq1CPB1OlHyC1XSVO2QqXEKS6J6pLEjHBZbdGg0qAjNOUCq16pDaDONQsHA5kYmH4jgKyQqXbftacOeUkiq0lcPSn3f4A48uDDz9EfUFeKJIHkXD0xUEEtHoeFwHIkptAq176YJj44VbvtEB4q8JOMKh2fPvZ8gTY6YNptIsrs%2FvFLLqkik7Qe4%2Bk%2F%2Bi5IpblhenT25VDRzsZs0i7G%2BwsuDwzTscbJHCmpT%2FkLgExJwI2O1XNszi2O1aMxXh3Sar7qv7j3S7foOjpO9vTNqCpONeZAYM%2BlcFZ2wTtwGKW%2FuS0dtOISvMZiYBVpMZ3bIef7ouaSbl%2Fx8A5TCVoTZn83t%2ByMzCKSJjHgxGDyD0yMRVC%2BhC8jvH8t3Ub%2F%2Bp15GWY0TlBI%2BB62rBuMG9hgL%2BMDeG28Pwqh9Z%2BLq1pUgbUC4ZtAVQk0wxeroAtTWb6Vn7WiPt4VOHNmHazF75dmZJ%2FrygcvjoH51x4NE9iaFX%2FMEk5alb1YNrMFaTPXCqxtIIUFtNwjQFfL%2FObSUiPq5X2INEJAzdfM92JeRixVDsbodJHpqjbd44DJsn1qt9SU44dufPib3UqLOsgotJGspqSHJ2dGDqMMjum8EGOqUBKXnO0Lb0MGzy19aKKkHc5w2yEM%2F0pSsSpw2EJ65wBLYoYiAGoMPcJ%2F50E3kxmTBzRiinH%2B9NqgacuyzmGODHWgkbpxans%2B945CT%2F%2BG971WhLdUYqj9K%2F09kcPgwcQUnxWNbANwokC6wMc3NiI5yg30JIIh4E0oKPR7mRfkiZBt0j5CXZ5komkRkLdx2gNAfyJw5cwtIz00ZGj7UeGKRhztzMrX6D&X-Amz-Signature=cf3ef53f64547b21d322ad75420d02390454981ea48e2a1460612cd0fc73ce2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG66BC26%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6Emuof%2FEp%2FliGJ0LfpwEDeDPy1FuMVxLXlrfPkJpcgIgdoI6Snhs8kuDxpUI1dnlLazTfELT1wjZTK23T3eArVkq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMX6DqUGRuHHkvMp3yrcAzdPEr4uKlJOjcSNJNeD%2F5qSZN2etKKBjq1CPB1OlHyC1XSVO2QqXEKS6J6pLEjHBZbdGg0qAjNOUCq16pDaDONQsHA5kYmH4jgKyQqXbftacOeUkiq0lcPSn3f4A48uDDz9EfUFeKJIHkXD0xUEEtHoeFwHIkptAq176YJj44VbvtEB4q8JOMKh2fPvZ8gTY6YNptIsrs%2FvFLLqkik7Qe4%2Bk%2F%2Bi5IpblhenT25VDRzsZs0i7G%2BwsuDwzTscbJHCmpT%2FkLgExJwI2O1XNszi2O1aMxXh3Sar7qv7j3S7foOjpO9vTNqCpONeZAYM%2BlcFZ2wTtwGKW%2FuS0dtOISvMZiYBVpMZ3bIef7ouaSbl%2Fx8A5TCVoTZn83t%2ByMzCKSJjHgxGDyD0yMRVC%2BhC8jvH8t3Ub%2F%2Bp15GWY0TlBI%2BB62rBuMG9hgL%2BMDeG28Pwqh9Z%2BLq1pUgbUC4ZtAVQk0wxeroAtTWb6Vn7WiPt4VOHNmHazF75dmZJ%2FrygcvjoH51x4NE9iaFX%2FMEk5alb1YNrMFaTPXCqxtIIUFtNwjQFfL%2FObSUiPq5X2INEJAzdfM92JeRixVDsbodJHpqjbd44DJsn1qt9SU44dufPib3UqLOsgotJGspqSHJ2dGDqMMjum8EGOqUBKXnO0Lb0MGzy19aKKkHc5w2yEM%2F0pSsSpw2EJ65wBLYoYiAGoMPcJ%2F50E3kxmTBzRiinH%2B9NqgacuyzmGODHWgkbpxans%2B945CT%2F%2BG971WhLdUYqj9K%2F09kcPgwcQUnxWNbANwokC6wMc3NiI5yg30JIIh4E0oKPR7mRfkiZBt0j5CXZ5komkRkLdx2gNAfyJw5cwtIz00ZGj7UeGKRhztzMrX6D&X-Amz-Signature=6ee85b9c3a98b95a9a68d91036da1dc77c28fb9ee5ad7d60e6c1fe3043d93a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
