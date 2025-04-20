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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUMDURB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCp%2Be3Qb%2FbitzFG3%2BpSfSF3w%2FzKtXT1u3nEfx%2BHaDDxaQIhAI0a2pb6%2FPp4t9L4c3pnHFMQRaSnPl%2Bkupp4xyYe36GmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzntU%2Flg6HXJibpvoq3AMpYXVapKFDMqZzLT34ljMB32nJDUBC3byEOwMfyfFIg03xHn5w1jS52EmLsVNnniBDiL%2Fj8nswyVBGHvn%2F59gJPjne%2FUV4kYNk64kL5skjY9TeYWua6i1H0szV8N8KbraW2trnDUddtOcnt9RhoIE82h%2BdZZ4jdQ%2Frem%2FOiDqds9s3lSWWu%2BBIqPgO4QR1YsC7mSYt%2FObl6krHbEMZYQawJLl77UstdfyCAU4vwgKT46dD6avuuhD9PxBBmu3S7E3TFp52ThfC%2FjxfOF%2BHRDDy3BB6Ji%2BdH3E4rYUKFnaUMrEtZE4P4d0Kd0ZnxRiDnKkV0uBxmFqMYmzPRn0rJ%2B2OvROg4qpQQU9eKSrzTzI11N1ZA%2FlkaHjp%2B8f5CYT87lkrzy5Udv%2Bx3DijtL1B%2BQhaduTZG2g0Ray5xM%2F670moI25xgOR6CbR%2B4YyJUedqsdGyJmG8pgSqEGGSFpoyf2h9ypQ0fXSWVlsJ0AVky3Oo6YGCSgzRbH%2FfuIMDMJHg%2FhZXhZmV1uVTAJG56o8hXWAuHbY7Q9LK877oKs6dWITxGpK9xAlTjDwVebWS6WlVkEGXWBwjY67eo7IYCRETL8hR%2FIDHoo1wXkS98GWsZt4oFD6%2BAa1XuYweaU2aXTDjypPABjqkAR7%2FpSB8XWYHrZjkOafa%2FtsWjtQcbKc1ygD6nlW%2FTs3yHpCmDyfoXg6DeTpLo5uXn3HiBhiverbMWEjsYu0WrdvoyGQtW3sMeYflnUJ9nkKwWE6imOCIUtpAvSZtcAw0c0X8qn14CVzHbxuYuDys2iz3N1tzq9PIDyw7tUHkbmcP3jqIsRKzrn77efWxSLBZldeGHXNCcWcpsjS%2ByjneWcyV5fr%2B&X-Amz-Signature=ed597b2f833e5047faf3bc0d549ff8586ab91b333fa3083c9fc7888cec2a4c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUMDURB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCp%2Be3Qb%2FbitzFG3%2BpSfSF3w%2FzKtXT1u3nEfx%2BHaDDxaQIhAI0a2pb6%2FPp4t9L4c3pnHFMQRaSnPl%2Bkupp4xyYe36GmKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzntU%2Flg6HXJibpvoq3AMpYXVapKFDMqZzLT34ljMB32nJDUBC3byEOwMfyfFIg03xHn5w1jS52EmLsVNnniBDiL%2Fj8nswyVBGHvn%2F59gJPjne%2FUV4kYNk64kL5skjY9TeYWua6i1H0szV8N8KbraW2trnDUddtOcnt9RhoIE82h%2BdZZ4jdQ%2Frem%2FOiDqds9s3lSWWu%2BBIqPgO4QR1YsC7mSYt%2FObl6krHbEMZYQawJLl77UstdfyCAU4vwgKT46dD6avuuhD9PxBBmu3S7E3TFp52ThfC%2FjxfOF%2BHRDDy3BB6Ji%2BdH3E4rYUKFnaUMrEtZE4P4d0Kd0ZnxRiDnKkV0uBxmFqMYmzPRn0rJ%2B2OvROg4qpQQU9eKSrzTzI11N1ZA%2FlkaHjp%2B8f5CYT87lkrzy5Udv%2Bx3DijtL1B%2BQhaduTZG2g0Ray5xM%2F670moI25xgOR6CbR%2B4YyJUedqsdGyJmG8pgSqEGGSFpoyf2h9ypQ0fXSWVlsJ0AVky3Oo6YGCSgzRbH%2FfuIMDMJHg%2FhZXhZmV1uVTAJG56o8hXWAuHbY7Q9LK877oKs6dWITxGpK9xAlTjDwVebWS6WlVkEGXWBwjY67eo7IYCRETL8hR%2FIDHoo1wXkS98GWsZt4oFD6%2BAa1XuYweaU2aXTDjypPABjqkAR7%2FpSB8XWYHrZjkOafa%2FtsWjtQcbKc1ygD6nlW%2FTs3yHpCmDyfoXg6DeTpLo5uXn3HiBhiverbMWEjsYu0WrdvoyGQtW3sMeYflnUJ9nkKwWE6imOCIUtpAvSZtcAw0c0X8qn14CVzHbxuYuDys2iz3N1tzq9PIDyw7tUHkbmcP3jqIsRKzrn77efWxSLBZldeGHXNCcWcpsjS%2ByjneWcyV5fr%2B&X-Amz-Signature=0b12677b831d778b62ed9479fd4b3853add94c0ea0b9954284ac015d16562413&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
