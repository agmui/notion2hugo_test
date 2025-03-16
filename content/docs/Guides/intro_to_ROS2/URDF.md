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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJ3CQD2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BCDjUqQXXMK2rhK0UQ6QZHmttRASr8KXE1FcqfaqRwIhAPdadLj5Xy16InRYAoSQSlPmLph7ya%2BETXkb7g7mnM2MKv8DCDEQABoMNjM3NDIzMTgzODA1Igw3ucxxej%2BHVtVi6rMq3APShXYAmJ1CHvMnqJHeFXrMwY%2Bwg32da1XlnyYptzHzHuIjmQOJxXZR4tP0%2F3FBSUfSAHaCRFW%2BPjlo8Agv4gFcu1JlIAGGXkyJ1aSV%2F9G08tZOxM%2B9wfIDW2iE6oO9dAumcXgE61N7dHEefHNEcbcs1ugnJ7PmC4kx1i9BmdCiVZ0o5047SnMs3HMKyNZM7LRMW%2BlW%2BKA6g2guHphxWPprFwWlpXLK2FOGv3tlYmNFRzkEv9Yq1V1Wd%2FccYW1r9tA1dEv9oJjcLYDjj8pv8kA0ZcJyVhoJCRxvKL5h0ShwREE%2BuvfC6WfbRP1qWeObaNe0fZXQp5l8DgqW6usLmTGgrD0xw%2Fo7ONE4%2F%2BhDZhndS97P0y%2FGqpRTbE3yePeg8Hih2cop0GppiPORBwesTix%2Bk0FAR7avSWEhucl1qsOtFamUnCoYtPsSg4DvwObwtKvJOIxhRzJYDzvdPaaTct6O4arVePZ%2BL0pIrFav0Tgbt%2BhiMtDYhDbNMB%2FtPLlCij9DmyXjaFc0QudlEfiQGZPY6XqsBxmIisHFnVpJMQJI1BZaiWHF01wmGE0u7qZ6haofgkUpTMQCUtpU6%2Bfv2wHzOuuY0twlp7eLixupeuDG4f%2F5LTaafSy6K19ltTCu3tu%2BBjqkAYdvHEp3T2dShanu9Y6hwLjcu7xMdqW%2FHz%2F%2FcvM1%2FRixH2oa6BppQahK0MJsnzAGPSoqRbJkgt5V6HP7MmyKrpLf8wDBHuaaBQdb7%2BJfa3xRkwZJ0cVzoXWJQuzJ%2FDF7OoPV8Vs40kMwCbY6G6gCF2pIS%2B%2FS9M1KCiFHmiGmGVzBQPKxkwTG5IjJZ5YKDPDK92YfRobN6pFauhJVq46T5YMN1bnM&X-Amz-Signature=fabe295ae50cc593365f3ba9c28433c3128dace80712bd60a656922fcee73f26&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJ3CQD2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BCDjUqQXXMK2rhK0UQ6QZHmttRASr8KXE1FcqfaqRwIhAPdadLj5Xy16InRYAoSQSlPmLph7ya%2BETXkb7g7mnM2MKv8DCDEQABoMNjM3NDIzMTgzODA1Igw3ucxxej%2BHVtVi6rMq3APShXYAmJ1CHvMnqJHeFXrMwY%2Bwg32da1XlnyYptzHzHuIjmQOJxXZR4tP0%2F3FBSUfSAHaCRFW%2BPjlo8Agv4gFcu1JlIAGGXkyJ1aSV%2F9G08tZOxM%2B9wfIDW2iE6oO9dAumcXgE61N7dHEefHNEcbcs1ugnJ7PmC4kx1i9BmdCiVZ0o5047SnMs3HMKyNZM7LRMW%2BlW%2BKA6g2guHphxWPprFwWlpXLK2FOGv3tlYmNFRzkEv9Yq1V1Wd%2FccYW1r9tA1dEv9oJjcLYDjj8pv8kA0ZcJyVhoJCRxvKL5h0ShwREE%2BuvfC6WfbRP1qWeObaNe0fZXQp5l8DgqW6usLmTGgrD0xw%2Fo7ONE4%2F%2BhDZhndS97P0y%2FGqpRTbE3yePeg8Hih2cop0GppiPORBwesTix%2Bk0FAR7avSWEhucl1qsOtFamUnCoYtPsSg4DvwObwtKvJOIxhRzJYDzvdPaaTct6O4arVePZ%2BL0pIrFav0Tgbt%2BhiMtDYhDbNMB%2FtPLlCij9DmyXjaFc0QudlEfiQGZPY6XqsBxmIisHFnVpJMQJI1BZaiWHF01wmGE0u7qZ6haofgkUpTMQCUtpU6%2Bfv2wHzOuuY0twlp7eLixupeuDG4f%2F5LTaafSy6K19ltTCu3tu%2BBjqkAYdvHEp3T2dShanu9Y6hwLjcu7xMdqW%2FHz%2F%2FcvM1%2FRixH2oa6BppQahK0MJsnzAGPSoqRbJkgt5V6HP7MmyKrpLf8wDBHuaaBQdb7%2BJfa3xRkwZJ0cVzoXWJQuzJ%2FDF7OoPV8Vs40kMwCbY6G6gCF2pIS%2B%2FS9M1KCiFHmiGmGVzBQPKxkwTG5IjJZ5YKDPDK92YfRobN6pFauhJVq46T5YMN1bnM&X-Amz-Signature=a5f936842576ca377a0b0e22d2852558549edbae25a77a8cb3b2e42039961ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
