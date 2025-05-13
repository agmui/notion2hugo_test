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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHGCAR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD4yNgZcx6A9g4CPC%2BtD%2BoPCSsXx%2Bau%2BP1p272CaOiBgwIgQkclFgxv%2BZdGXfRpnb3TAjH2EIe7DDXbn8nzqqx%2Fmj4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC%2BWhwRr7RQwYU9aircA9zSPjDlr1dzHI1ekegc7KhntDK3yf2RtoaUWFRasTNLRQtPa7y7LkPP8MR4HvKioUj3w4%2BimmL%2BsR%2FQbOYaevu3kGxvLXK3rvL3uc999MfheHDSSu%2Fk7CEqY1zHmooHIg0sgq4xM6c9z3DlnWBIqs5LICP%2FMFn%2F4g8BXyjWABu9qTy1Rdi06QnI9pHRiK9HlPKCU3PIF9vzjmKWURP7QaqZCoaJdBMmkPGnrpqALXzCZh3wNrvP2sO12Ep0NQJbk%2BFvmk9%2FG2aTwRngKE5GctMAUIYWUV64OWomKZCU%2BfWmVUnkL8Z9z8TBuLbROqyHijO%2FbenXsdag5BGCXLwG05wQL44SrsZXJr7aiFybjUmdDvy1nMgAezBwXS8rQnui8EUIyjvCWdEvhgsL8LExilh8jOm2SJ1YrndIUsoB3OmjEvS%2FZXej36OyS5X65KfDloZt%2Bi%2F3vxa3c5mcoUGpcr%2BkynDYwnQs5s7GxoJ3qTk2twnNlcRNRB3an9MUojMMQIZH%2FHGmAqMggE1EDqYaThhRyhB9iHK1ZsID9zJGHO6yAHs3ciHgs7JWwKth689Qdf6Va7Ek9DJCz0bHNV%2BYT62yPfnQqw7XbA5sqjZgVZzV9qiwXl%2FL9oIB7y7HMP%2BjjMEGOqUBYKpr73GkBckAb83STOZxLK8hBPW2QBNhnh%2F0Nxr8VD0eqqMj8feakpkVELh4mlqLi2hUMYoCbRV1xiWOirlCHVRHFxxuAoiteGV7F4sRCyR5IqwwApWw4WWZq9UFTQx3EuhPyJGrTmpgZleUDjwFQJqx1gYGjzrOSwiM4rAwItCUXr0O2bAW16AI2tclJN3n2OX%2B%2FxhYfKhEQPpvHMuyc6u4szRn&X-Amz-Signature=f11d2d5b5b2f56d632740cabc10aa99c8e97368a650a7a445da9e74c2718d114&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHGCAR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD4yNgZcx6A9g4CPC%2BtD%2BoPCSsXx%2Bau%2BP1p272CaOiBgwIgQkclFgxv%2BZdGXfRpnb3TAjH2EIe7DDXbn8nzqqx%2Fmj4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC%2BWhwRr7RQwYU9aircA9zSPjDlr1dzHI1ekegc7KhntDK3yf2RtoaUWFRasTNLRQtPa7y7LkPP8MR4HvKioUj3w4%2BimmL%2BsR%2FQbOYaevu3kGxvLXK3rvL3uc999MfheHDSSu%2Fk7CEqY1zHmooHIg0sgq4xM6c9z3DlnWBIqs5LICP%2FMFn%2F4g8BXyjWABu9qTy1Rdi06QnI9pHRiK9HlPKCU3PIF9vzjmKWURP7QaqZCoaJdBMmkPGnrpqALXzCZh3wNrvP2sO12Ep0NQJbk%2BFvmk9%2FG2aTwRngKE5GctMAUIYWUV64OWomKZCU%2BfWmVUnkL8Z9z8TBuLbROqyHijO%2FbenXsdag5BGCXLwG05wQL44SrsZXJr7aiFybjUmdDvy1nMgAezBwXS8rQnui8EUIyjvCWdEvhgsL8LExilh8jOm2SJ1YrndIUsoB3OmjEvS%2FZXej36OyS5X65KfDloZt%2Bi%2F3vxa3c5mcoUGpcr%2BkynDYwnQs5s7GxoJ3qTk2twnNlcRNRB3an9MUojMMQIZH%2FHGmAqMggE1EDqYaThhRyhB9iHK1ZsID9zJGHO6yAHs3ciHgs7JWwKth689Qdf6Va7Ek9DJCz0bHNV%2BYT62yPfnQqw7XbA5sqjZgVZzV9qiwXl%2FL9oIB7y7HMP%2BjjMEGOqUBYKpr73GkBckAb83STOZxLK8hBPW2QBNhnh%2F0Nxr8VD0eqqMj8feakpkVELh4mlqLi2hUMYoCbRV1xiWOirlCHVRHFxxuAoiteGV7F4sRCyR5IqwwApWw4WWZq9UFTQx3EuhPyJGrTmpgZleUDjwFQJqx1gYGjzrOSwiM4rAwItCUXr0O2bAW16AI2tclJN3n2OX%2B%2FxhYfKhEQPpvHMuyc6u4szRn&X-Amz-Signature=7540695279e2c0721512027fe4dcfeb382cdf908449d9f2762659ed0dbcf158c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
