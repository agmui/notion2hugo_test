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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6SOJYT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC0Iwpblo8RcFapcfIxJ2clata5pYb%2FVOg3y8eJEQHICAiEArcXcVsnD5al37K1%2BwyXqCGGE%2BtBAdua%2BBaa5XrKUxQsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtc%2BZc9S6Rt20qFircA1i1jkyeVKWHXHPzkfAOHik9p0C1VdNKbQMupUk%2FSHcAnypG6xXIiSP2VseSfSwcTOdw5mSLbqr2hlUjw5LtC%2BzdrGfkvzV0WxuNolKpulFUwZaZcDxwojLEFf9U1lQwKNpZPrSU95StwaWyKzetsrABbz2Cp9GwgxYXXHniwgZwM2Q%2FlHgXE%2BuWT%2BxCh9FJp%2FHMkXz1ou7SKmGal35RpZqbtb6D%2Fjt9%2BfoJBPm0WOWg5yZOI%2B0BoQuNERyRSryYtgoekB5bo0R9WBrpV7eFAnkRBjgVNL4OtCloo8EnztIuvF3fSLbHUE5ABsqu%2Bdu2LF6Wdudmy0fxpR9ThICUbllIACIBKW5BqmB4nzcug%2FRhNMUzbOr1JZ72Ch4JfiHwQDULUt9hSu7j8ViFJdafp7dS8%2FMSh5y%2F7let7lH%2BfYcdjB%2Be%2F2EGaEK35%2FegWOGNTdLHJBAi81I5pJcteleeB%2F7W9DgirLemkDp0BCaXT6jjRxEELjPWK4itA8F%2BqffyF%2Bjc3XCB44D5ZmERFTkRiMLOexUId%2Fcolt4F2pD8TpTwaYfZ%2Be2SgqCwAveV6uZbYOYsL%2B9UIEqVrq0fCTec%2BZzrl7vHqrBQkgfEIke%2B1xTjGz8ITuo%2BRadJ1T%2FwMN3smcAGOqUByu0AD92Lkcct88CylfERotc6L%2F6hlXHmMxc4L5wdg%2FABKt3OC%2Bwb1gOAzZlF01pcKs%2FAJEVnfcWwhRI9WyPt0rNP8f9fOvBh36c3OlWkYcAu8kj%2Bx%2F0sO4nsx6YiS8g8%2BxgtLiUnAn%2BvbEJSkM%2BvAMAUf%2BP0n1FRcPVJJ%2BXbbx6oMHcPuOdDVRxYsbxTKZKZNb0MjQ0ffs1fLGChHHy85RV%2F9KWp&X-Amz-Signature=7f7fc54de146417aa472aca18b9621d2f52f9369dc243887fc4e02c3ced3b7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6SOJYT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIC0Iwpblo8RcFapcfIxJ2clata5pYb%2FVOg3y8eJEQHICAiEArcXcVsnD5al37K1%2BwyXqCGGE%2BtBAdua%2BBaa5XrKUxQsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUtc%2BZc9S6Rt20qFircA1i1jkyeVKWHXHPzkfAOHik9p0C1VdNKbQMupUk%2FSHcAnypG6xXIiSP2VseSfSwcTOdw5mSLbqr2hlUjw5LtC%2BzdrGfkvzV0WxuNolKpulFUwZaZcDxwojLEFf9U1lQwKNpZPrSU95StwaWyKzetsrABbz2Cp9GwgxYXXHniwgZwM2Q%2FlHgXE%2BuWT%2BxCh9FJp%2FHMkXz1ou7SKmGal35RpZqbtb6D%2Fjt9%2BfoJBPm0WOWg5yZOI%2B0BoQuNERyRSryYtgoekB5bo0R9WBrpV7eFAnkRBjgVNL4OtCloo8EnztIuvF3fSLbHUE5ABsqu%2Bdu2LF6Wdudmy0fxpR9ThICUbllIACIBKW5BqmB4nzcug%2FRhNMUzbOr1JZ72Ch4JfiHwQDULUt9hSu7j8ViFJdafp7dS8%2FMSh5y%2F7let7lH%2BfYcdjB%2Be%2F2EGaEK35%2FegWOGNTdLHJBAi81I5pJcteleeB%2F7W9DgirLemkDp0BCaXT6jjRxEELjPWK4itA8F%2BqffyF%2Bjc3XCB44D5ZmERFTkRiMLOexUId%2Fcolt4F2pD8TpTwaYfZ%2Be2SgqCwAveV6uZbYOYsL%2B9UIEqVrq0fCTec%2BZzrl7vHqrBQkgfEIke%2B1xTjGz8ITuo%2BRadJ1T%2FwMN3smcAGOqUByu0AD92Lkcct88CylfERotc6L%2F6hlXHmMxc4L5wdg%2FABKt3OC%2Bwb1gOAzZlF01pcKs%2FAJEVnfcWwhRI9WyPt0rNP8f9fOvBh36c3OlWkYcAu8kj%2Bx%2F0sO4nsx6YiS8g8%2BxgtLiUnAn%2BvbEJSkM%2BvAMAUf%2BP0n1FRcPVJJ%2BXbbx6oMHcPuOdDVRxYsbxTKZKZNb0MjQ0ffs1fLGChHHy85RV%2F9KWp&X-Amz-Signature=cf5fae94596c2d27760a7e09fca83c15f62fcf202b4d87baa7e52d5ebd3bea7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
