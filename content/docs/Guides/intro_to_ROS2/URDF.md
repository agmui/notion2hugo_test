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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J4RPEN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDBjFsJLMdIl4Kf7JHeKJHVvIT5LOW1dg%2Bf%2BmwNlZ4YbAiBs8mYZF3EbKjW0Ha4qGt6QMd0%2BQ1U8O8c5Yl8mK0en1Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhIYCsiuy0YmHaunnKtwD0pWZK2Iswt3NzlEYfAIhZ71un1uAedsbZ0VG36eZdyR9P3JsIkO7tCBkDQ%2BZEpe25SAsrni9lUXSp4i7B67%2Fo%2B31rIrLM%2FOUexSVP0263f%2BVXrl0yB451WT6iAfN5V3PEEFu84Qi%2FH%2Bm1InwRZxte9qpUa8Hfd9tj%2F3Uau2JdwRCZag1HxucyKB5olHYC3WkJt0PMAlKfqHsZ2a%2By6oQUVqlY3THaFg9A4OC7ng1fbYGLxz68CQp4q2A75SyYCwO%2Bzaui14zWgdpXxepbeXv5oGh%2Fz9ctQm5YsgrYmDlwtvrTim9zG5dIWtjXW%2FHSW1saKDEtwCrvcQQuhsq69N1SA9Fw9pjvhuJ%2BGuDZB9wGZqj1hfiNsRUYlaoD8M6XosoUVkrbvksxnkzi%2FOuoqruJKcBTa%2BQ9hdtdRf%2F3DkG3O7AeKhxGX52Vv%2FA%2F6THOtKzJVL2vIltlFZScGvSb4s11%2FA6c1naOvWR8nmwFalcf1%2BGAG8jAduNC3l4vhK1MWLgMVK1n6pgStgZt0H8UvVbJI8vT17gQMsdO5gAxn2hz6WR%2BfFID%2B9KVe466LcNP%2BOrnBxWskPUjVx9%2FnVNI7zVgZ%2B38fyUNyzJg3FbAEwlyu6ZKiZPszdL6Nyil%2B0w%2Fd6cvwY6pgGiabI3tUl561aN73PvKwWoLKAZ4%2Bs82xA1%2FnJMt6NmLsMuJcH4oHuOQEgqzhev42bEww3LuQZMp7HxocCxR0P%2BZpwubm0sEeoiLqXl60lATJl4U5zSEWzW5dqJoev2uf%2FdAfADlQqk3%2B3sMnsgSkcehKvvp1WIsYoKcdfRePeva9%2B7u%2FFeZSjJAloCaKSH4DWWvc17mIbSTUTCbA9hJMumMpumbDSg&X-Amz-Signature=7107c3e8ceee009b327341c57242c2cb2eb817880f6639de243b483929f88462&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J4RPEN%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDBjFsJLMdIl4Kf7JHeKJHVvIT5LOW1dg%2Bf%2BmwNlZ4YbAiBs8mYZF3EbKjW0Ha4qGt6QMd0%2BQ1U8O8c5Yl8mK0en1Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMhIYCsiuy0YmHaunnKtwD0pWZK2Iswt3NzlEYfAIhZ71un1uAedsbZ0VG36eZdyR9P3JsIkO7tCBkDQ%2BZEpe25SAsrni9lUXSp4i7B67%2Fo%2B31rIrLM%2FOUexSVP0263f%2BVXrl0yB451WT6iAfN5V3PEEFu84Qi%2FH%2Bm1InwRZxte9qpUa8Hfd9tj%2F3Uau2JdwRCZag1HxucyKB5olHYC3WkJt0PMAlKfqHsZ2a%2By6oQUVqlY3THaFg9A4OC7ng1fbYGLxz68CQp4q2A75SyYCwO%2Bzaui14zWgdpXxepbeXv5oGh%2Fz9ctQm5YsgrYmDlwtvrTim9zG5dIWtjXW%2FHSW1saKDEtwCrvcQQuhsq69N1SA9Fw9pjvhuJ%2BGuDZB9wGZqj1hfiNsRUYlaoD8M6XosoUVkrbvksxnkzi%2FOuoqruJKcBTa%2BQ9hdtdRf%2F3DkG3O7AeKhxGX52Vv%2FA%2F6THOtKzJVL2vIltlFZScGvSb4s11%2FA6c1naOvWR8nmwFalcf1%2BGAG8jAduNC3l4vhK1MWLgMVK1n6pgStgZt0H8UvVbJI8vT17gQMsdO5gAxn2hz6WR%2BfFID%2B9KVe466LcNP%2BOrnBxWskPUjVx9%2FnVNI7zVgZ%2B38fyUNyzJg3FbAEwlyu6ZKiZPszdL6Nyil%2B0w%2Fd6cvwY6pgGiabI3tUl561aN73PvKwWoLKAZ4%2Bs82xA1%2FnJMt6NmLsMuJcH4oHuOQEgqzhev42bEww3LuQZMp7HxocCxR0P%2BZpwubm0sEeoiLqXl60lATJl4U5zSEWzW5dqJoev2uf%2FdAfADlQqk3%2B3sMnsgSkcehKvvp1WIsYoKcdfRePeva9%2B7u%2FFeZSjJAloCaKSH4DWWvc17mIbSTUTCbA9hJMumMpumbDSg&X-Amz-Signature=e704a7ed2bfcad73f235cf5c7b4e8c29c32c5d59e3f29167094813cbbb40a071&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
