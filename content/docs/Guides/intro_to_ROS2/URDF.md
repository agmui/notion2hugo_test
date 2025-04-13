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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TWLNPA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqhIw3yyXCOsOVzOWFoDSU%2FdUL9iLQEMzvqkI5uj2FcgIgQZJEc3lDX6T5Ex2hOvRfT4tIXbdLiBSAH4oZunwAdJoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAT6ETu8EbTOFMNISrcA855rhrun2%2F9Pqz3wLODHjsM08B25XgYWdR%2F2zNKgSUn3cAXElPWn2CNiHeZShn5LzrGPJiDynd3HEkaweHJwxqgoMdZt4guxhBcyWINhvLobkRKdtCQd9CpMRGvkeht3GxJOVILnFGcealGc35VJJDol8TqpERkMq8W1bNY93xAzvtUM7ahzQkwA%2FGeUyeBJQo3nwTrUiV5kOudPIRxtNIIvrAajxWEg4BVkxCdb60jJZ6Dxh0vV8c1QNJXMbcVMBeleSchikpUMw9nNioe5BUkuSv7c4cugFNeveN912o%2BmIB2wn2JWlbSYdOLh1nJR59S6qmVurpBrp1IR2S%2FHZM1UIZ%2BhbbRG94TgD4uww3N%2B%2BKkNiGCDdOJ80GUttMz2W%2FXfcET%2B3Nswr4YNoWZAB%2Fl0RRCvRMTXbf6h7x4yh%2FQblkzHUwr0pGKgKrXvX64MRRznGaKjLoZKziW6lHizHHN77AsRQmK%2F6Em0al8LuZlrEIp6WyjkOB285fCInEimQIMaWgKBPjMDmypWSGr1L42Mw%2F7ReJQE0i0IfICAaeknvwOPPlkCH%2BXOI8PQBU4Ush67cMB%2BHA9VZOrbZnEjSirkvSJFv2IddD9tcEucRekqbkw0hmYPr%2B%2BJZ%2FNMLyw8L8GOqUBex6duz1GWZhN40eG6cgZmVicedpBaNJSDu6j%2FHCviEZy0bDAKj1tQq%2FVTRVTxeWVeXuf%2FBepEbwzngHIGCJiTLnJHtJJDC1YAOk0fY%2Bi%2BhVD6GUhu%2BNQHqF6UgIbRQAx3lYgesZfU1IX2Q7KWhQL4TiIIENDVJSaHPahU5v4kPc1v3xf9wS0rxKANC5j5teGIjCYHdfnVKTunZNBf8SBdTglMqKT&X-Amz-Signature=3127d341430c9756d64bd2325cb5468f1248ed67c01b37271dd45c4a84b7e500&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TWLNPA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqhIw3yyXCOsOVzOWFoDSU%2FdUL9iLQEMzvqkI5uj2FcgIgQZJEc3lDX6T5Ex2hOvRfT4tIXbdLiBSAH4oZunwAdJoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAT6ETu8EbTOFMNISrcA855rhrun2%2F9Pqz3wLODHjsM08B25XgYWdR%2F2zNKgSUn3cAXElPWn2CNiHeZShn5LzrGPJiDynd3HEkaweHJwxqgoMdZt4guxhBcyWINhvLobkRKdtCQd9CpMRGvkeht3GxJOVILnFGcealGc35VJJDol8TqpERkMq8W1bNY93xAzvtUM7ahzQkwA%2FGeUyeBJQo3nwTrUiV5kOudPIRxtNIIvrAajxWEg4BVkxCdb60jJZ6Dxh0vV8c1QNJXMbcVMBeleSchikpUMw9nNioe5BUkuSv7c4cugFNeveN912o%2BmIB2wn2JWlbSYdOLh1nJR59S6qmVurpBrp1IR2S%2FHZM1UIZ%2BhbbRG94TgD4uww3N%2B%2BKkNiGCDdOJ80GUttMz2W%2FXfcET%2B3Nswr4YNoWZAB%2Fl0RRCvRMTXbf6h7x4yh%2FQblkzHUwr0pGKgKrXvX64MRRznGaKjLoZKziW6lHizHHN77AsRQmK%2F6Em0al8LuZlrEIp6WyjkOB285fCInEimQIMaWgKBPjMDmypWSGr1L42Mw%2F7ReJQE0i0IfICAaeknvwOPPlkCH%2BXOI8PQBU4Ush67cMB%2BHA9VZOrbZnEjSirkvSJFv2IddD9tcEucRekqbkw0hmYPr%2B%2BJZ%2FNMLyw8L8GOqUBex6duz1GWZhN40eG6cgZmVicedpBaNJSDu6j%2FHCviEZy0bDAKj1tQq%2FVTRVTxeWVeXuf%2FBepEbwzngHIGCJiTLnJHtJJDC1YAOk0fY%2Bi%2BhVD6GUhu%2BNQHqF6UgIbRQAx3lYgesZfU1IX2Q7KWhQL4TiIIENDVJSaHPahU5v4kPc1v3xf9wS0rxKANC5j5teGIjCYHdfnVKTunZNBf8SBdTglMqKT&X-Amz-Signature=51a20918e612bcf3a38e884e955b6e4f0a075ede27bd9c5e4dcc9531bc29fb99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
