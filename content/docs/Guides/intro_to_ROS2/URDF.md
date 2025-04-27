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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRHWSYB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcnPaOXcYuGG%2F6%2BmhEzLAQUYQbbQ81uhojpZ1CJU56wIgWfCrgAvIEPk2z6Bvi%2B8S3ZjwJHh%2Bl2zl132ehcR1lwoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDlev4NuCA5zSb1xHSrcA8B0OdpWQ3%2F%2FPVa6EalPMFTRs0smFkXNQchLM6tw10J7KfuHZvk6yNa4apAi5W9quZ65AAotMVHpxFxP5Oe7D11XThxBBGOPznd3oplBJRZGXTCJ2tf5kRObVGy6nzVLIdT4GJb6RJ69SOlmlHVDHkKdDKNatTEP27gtNd1ME3uSyBU%2FMI9BcGK4O0JVn6lp8UomqXP2iXXhfaL6Acp2XF%2FuwIt2R2%2BN6QaQFXjlQ2tLnkVCnV%2Fhk2AjwtSmkYMxpVfLq9Ksj5fEgS2bPwKwWztGqBfwi%2BOSYPvgCrSN2iHerH6ZFXJiDxjXdlR9xgsyvrudDfYlpTbIBwpRGmDHwm0DwUJ7H0AdghIg45gp%2FrUA4%2FrQjtGblT9RJaTLpiNLbp0P5a%2F1kHGIZKgYm995d2HemdyEgt7hbM6l%2Fo%2F5jtV2u2gocc21Bq%2Fc0yPPVh6wghh8DBjVrD1moEj%2FfioLwqU2mKPWLqRtuQpdYI909EGR7Xul3HTpyM9eqvEUl0cWk9blV64pgfXjNKEJX6FQkv3X%2BV9hau9Dv1wGn7C0Hy5ufZPneM68jt6StN52t2LNbg6ardQSK1de6NSPwHAiXUbOqSVbc3bPtGaYUltN1CzJwR0YQHCPPiOV9iKfMMy%2FtcAGOqUBVd9xQNrL%2FZT6LVvgxSoTK1JRMT1sWvSkpMot5HjtaTW%2BrILiSYAMVSgU7KkaX7JRSEPEGnGB%2FLvAVJ2F2tK2aqyP5l6rwqbNhdbJ6VHOtIgQkO0p%2FAnRmxvp7%2BqAwFgTSIHxhKLQfaFuqGRImQ6Up5ymsUc%2BUT7FmeFVqaXj2VLETuKT72dRlL4R%2BJhCOAY2SxcTKeqCz03Ks6lnyJDwKFjikQjv&X-Amz-Signature=77322788e81f558914ecb52103e11c98cf5929e118c1df2de8eb3408188beb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRHWSYB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcnPaOXcYuGG%2F6%2BmhEzLAQUYQbbQ81uhojpZ1CJU56wIgWfCrgAvIEPk2z6Bvi%2B8S3ZjwJHh%2Bl2zl132ehcR1lwoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDlev4NuCA5zSb1xHSrcA8B0OdpWQ3%2F%2FPVa6EalPMFTRs0smFkXNQchLM6tw10J7KfuHZvk6yNa4apAi5W9quZ65AAotMVHpxFxP5Oe7D11XThxBBGOPznd3oplBJRZGXTCJ2tf5kRObVGy6nzVLIdT4GJb6RJ69SOlmlHVDHkKdDKNatTEP27gtNd1ME3uSyBU%2FMI9BcGK4O0JVn6lp8UomqXP2iXXhfaL6Acp2XF%2FuwIt2R2%2BN6QaQFXjlQ2tLnkVCnV%2Fhk2AjwtSmkYMxpVfLq9Ksj5fEgS2bPwKwWztGqBfwi%2BOSYPvgCrSN2iHerH6ZFXJiDxjXdlR9xgsyvrudDfYlpTbIBwpRGmDHwm0DwUJ7H0AdghIg45gp%2FrUA4%2FrQjtGblT9RJaTLpiNLbp0P5a%2F1kHGIZKgYm995d2HemdyEgt7hbM6l%2Fo%2F5jtV2u2gocc21Bq%2Fc0yPPVh6wghh8DBjVrD1moEj%2FfioLwqU2mKPWLqRtuQpdYI909EGR7Xul3HTpyM9eqvEUl0cWk9blV64pgfXjNKEJX6FQkv3X%2BV9hau9Dv1wGn7C0Hy5ufZPneM68jt6StN52t2LNbg6ardQSK1de6NSPwHAiXUbOqSVbc3bPtGaYUltN1CzJwR0YQHCPPiOV9iKfMMy%2FtcAGOqUBVd9xQNrL%2FZT6LVvgxSoTK1JRMT1sWvSkpMot5HjtaTW%2BrILiSYAMVSgU7KkaX7JRSEPEGnGB%2FLvAVJ2F2tK2aqyP5l6rwqbNhdbJ6VHOtIgQkO0p%2FAnRmxvp7%2BqAwFgTSIHxhKLQfaFuqGRImQ6Up5ymsUc%2BUT7FmeFVqaXj2VLETuKT72dRlL4R%2BJhCOAY2SxcTKeqCz03Ks6lnyJDwKFjikQjv&X-Amz-Signature=a682f0c82d0473d791a3c4334284c9d8b161b25629a72929d2b119ec512781b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
