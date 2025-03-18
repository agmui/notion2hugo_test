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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDRIRC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEhfevrX2DaXNA9lQqQcPRUcRf%2BRdTxJSVEpvq07K7NJAiEA%2FK1JXANTmxdMWxnpJw8R4nHtg6kcalwqkF79b05QvEgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI27yqRo8Fe84eCsESrcAzDknhygiV1V2b7NvVUoU91NGEp%2BZe0h4MK35K3sJwdzwxRXk1nnD%2BqFBSJKLJndmpZ1WlY4%2FAUUyhXoF3FUD31d%2FKgBIxhOnLL%2FrjuY%2BifdhQgceLp8ewjBu7umc5jT4gIkS4r2bdLppaEZmhyzEJ%2FPfBsE8tqbHFwhS6zNAWNdhoy63CMO%2FOGXp%2FdwpWJakNteBGqDenXk%2BXKPGHvB0Gifl77Nu8OGeICk5VpVDxSpZUs%2BmGuRgCRPgBGInerfjC3AKBym0LHbFypsq0YEl6q5NT0GCCJ%2BY9h5Gk6QhoLC488hFb%2Fhu6XmHkdbuxOIx%2B7MssgejD257nkLa9Eo%2BMV9JVjYpRFXKuNPsj38XPRYsQLOXcU7h8OmXXRNoiNc3MEb%2Br87g2xTE7uW%2Bd2YjE%2BWE3HnqPffGnAt3D65FepPjKl3MJ3YKr6ZseKQQgeGEx9HmNKC5szBMWcqWIOEthOIqzFIYpi%2Bp%2FXlH7VEAHs65KGUUp8TgoLx4nMEldmcOK63ySHK34Ie5ZsEE8rzFpP4FRwVAHU5ygKqCzBcrrzpVk7qVIqHp%2Fska%2B7xQMWzF3d1RVBPp9G2gJXKAMwx49hiYD8CEcimKvsIcMWb8E7Kqhz4z0lVD%2BO2ys6FMLrX5L4GOqUBrcNAnXFbsVytqfbscb9giWt7vIgenBpP3Yx9rcfQPzfOlOP7h%2FUJtcMKHFYN8uNklZliUrPRDW6nzqn4FSrjh59OkFshZ3RIILL9ArNzu%2BNOEq2If7mz0jkOJH9tSaTReXFhE0qwatWd4eA6wKV%2F1LFrb9UpJ4MkLTN1jJOMvK7itUSPDvYRqNRwF0NDZs6nEc5mQaMbfGTtjzVtUoqFOVRNbeGm&X-Amz-Signature=636fdc74c06d6fb34963ed31aabc2592ba5b557652b3569609052a7fa262f6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDRIRC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEhfevrX2DaXNA9lQqQcPRUcRf%2BRdTxJSVEpvq07K7NJAiEA%2FK1JXANTmxdMWxnpJw8R4nHtg6kcalwqkF79b05QvEgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI27yqRo8Fe84eCsESrcAzDknhygiV1V2b7NvVUoU91NGEp%2BZe0h4MK35K3sJwdzwxRXk1nnD%2BqFBSJKLJndmpZ1WlY4%2FAUUyhXoF3FUD31d%2FKgBIxhOnLL%2FrjuY%2BifdhQgceLp8ewjBu7umc5jT4gIkS4r2bdLppaEZmhyzEJ%2FPfBsE8tqbHFwhS6zNAWNdhoy63CMO%2FOGXp%2FdwpWJakNteBGqDenXk%2BXKPGHvB0Gifl77Nu8OGeICk5VpVDxSpZUs%2BmGuRgCRPgBGInerfjC3AKBym0LHbFypsq0YEl6q5NT0GCCJ%2BY9h5Gk6QhoLC488hFb%2Fhu6XmHkdbuxOIx%2B7MssgejD257nkLa9Eo%2BMV9JVjYpRFXKuNPsj38XPRYsQLOXcU7h8OmXXRNoiNc3MEb%2Br87g2xTE7uW%2Bd2YjE%2BWE3HnqPffGnAt3D65FepPjKl3MJ3YKr6ZseKQQgeGEx9HmNKC5szBMWcqWIOEthOIqzFIYpi%2Bp%2FXlH7VEAHs65KGUUp8TgoLx4nMEldmcOK63ySHK34Ie5ZsEE8rzFpP4FRwVAHU5ygKqCzBcrrzpVk7qVIqHp%2Fska%2B7xQMWzF3d1RVBPp9G2gJXKAMwx49hiYD8CEcimKvsIcMWb8E7Kqhz4z0lVD%2BO2ys6FMLrX5L4GOqUBrcNAnXFbsVytqfbscb9giWt7vIgenBpP3Yx9rcfQPzfOlOP7h%2FUJtcMKHFYN8uNklZliUrPRDW6nzqn4FSrjh59OkFshZ3RIILL9ArNzu%2BNOEq2If7mz0jkOJH9tSaTReXFhE0qwatWd4eA6wKV%2F1LFrb9UpJ4MkLTN1jJOMvK7itUSPDvYRqNRwF0NDZs6nEc5mQaMbfGTtjzVtUoqFOVRNbeGm&X-Amz-Signature=ba7adbe24e5ac7e627af77b8a806e99ed9368e643da4d2b8bb35e852fa36d8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
