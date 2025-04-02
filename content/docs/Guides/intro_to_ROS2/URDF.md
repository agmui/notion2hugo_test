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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJCHN32%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVXhZT6iE%2FsKoImh%2BU6YehP4qwLdRq8r2DGojgzVi3aAIhAIM3j4noQqPbZKlnj6Tk0bz7RM13VNasFqkjHFd0H3sMKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrPwuqJNGYxQOOIrwq3APhJEnDU%2FCWhJaf%2FO731WCbKGf9AUoImHY0KMsmVOr39PH9w0TZnC40CQqyooA%2BqONhpPfFaIt6XP7rUNvjO5DifKiYX2na5mCxUOOp2I9Q4WGSgNHwpW5OJ%2FzEvHGLZRGvSMOUqLod1ikG1KQ7bAh0B6yn9opgZ5qBoFJ%2BS67Z%2Bzh5LqTNO4wnqDGXQR4Dlko14dOTGzcrhMisjxCGc09%2Fjm7SR1iuQn6do4Q4NhaQoEe%2BQOaC9npr6ibknnCvzNMrhqxqE%2BfABKHbl1YcVCahzG8XNLpQ9RMCMmPfFUHgMvMXtFE%2BhV%2BDvI%2BQDNjneBWL6QFST3Lqp37mQb02DJQhC7vwV67gs9qOWGrgzbUhtZTUrL7HJWTBJnBM4gt9h8hMJT3Yn7v9rOwJvhncacvVTAerYG4wrjRU4GEzJ9hQRlkzHr2gnwrQbTYzYpScZygYw9P4Vv%2FxY3mEH6qvOFoB34wJ6Wu88YoTkZ%2FJn2lonF%2F5xmuYHFx4%2F1jlScsK1pIbphqoUnwSvnuB7o2smI9M4WLSQaTvSWZoJV25POwLQ1TfpOwDvRW5KRciA15hXhcsOrsWlEuPqQWnTPhv800C4STPY89O2ThgYjTMOWZyS5YmKd32wtqtfEa%2FmTD1hbS%2FBjqkAaKBJ59v8mQfsdsDmO8wUzDfvQTmXGvojazORr8O0KP5P8p3J9GFbT3nConM9mqibud3ajS5noMxMep6iv98S3xq8SHW5mKnb48DwG747amAVqh81mplH0ie%2BQY5CqdKw4Hg5gITQCXb00OhUR4qvs5KUYsfvtzZwxWTWU9Ysp%2BwJnTG7sRMzCSMaiMgtkmyiGTXRFFCN5hIZ5KFVdzTxuWgpaNf&X-Amz-Signature=c7498a934c83e3ae098dcb87ca449f7b43c8cb7f3b54a1ca2953413bdffc3af8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJCHN32%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVXhZT6iE%2FsKoImh%2BU6YehP4qwLdRq8r2DGojgzVi3aAIhAIM3j4noQqPbZKlnj6Tk0bz7RM13VNasFqkjHFd0H3sMKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrPwuqJNGYxQOOIrwq3APhJEnDU%2FCWhJaf%2FO731WCbKGf9AUoImHY0KMsmVOr39PH9w0TZnC40CQqyooA%2BqONhpPfFaIt6XP7rUNvjO5DifKiYX2na5mCxUOOp2I9Q4WGSgNHwpW5OJ%2FzEvHGLZRGvSMOUqLod1ikG1KQ7bAh0B6yn9opgZ5qBoFJ%2BS67Z%2Bzh5LqTNO4wnqDGXQR4Dlko14dOTGzcrhMisjxCGc09%2Fjm7SR1iuQn6do4Q4NhaQoEe%2BQOaC9npr6ibknnCvzNMrhqxqE%2BfABKHbl1YcVCahzG8XNLpQ9RMCMmPfFUHgMvMXtFE%2BhV%2BDvI%2BQDNjneBWL6QFST3Lqp37mQb02DJQhC7vwV67gs9qOWGrgzbUhtZTUrL7HJWTBJnBM4gt9h8hMJT3Yn7v9rOwJvhncacvVTAerYG4wrjRU4GEzJ9hQRlkzHr2gnwrQbTYzYpScZygYw9P4Vv%2FxY3mEH6qvOFoB34wJ6Wu88YoTkZ%2FJn2lonF%2F5xmuYHFx4%2F1jlScsK1pIbphqoUnwSvnuB7o2smI9M4WLSQaTvSWZoJV25POwLQ1TfpOwDvRW5KRciA15hXhcsOrsWlEuPqQWnTPhv800C4STPY89O2ThgYjTMOWZyS5YmKd32wtqtfEa%2FmTD1hbS%2FBjqkAaKBJ59v8mQfsdsDmO8wUzDfvQTmXGvojazORr8O0KP5P8p3J9GFbT3nConM9mqibud3ajS5noMxMep6iv98S3xq8SHW5mKnb48DwG747amAVqh81mplH0ie%2BQY5CqdKw4Hg5gITQCXb00OhUR4qvs5KUYsfvtzZwxWTWU9Ysp%2BwJnTG7sRMzCSMaiMgtkmyiGTXRFFCN5hIZ5KFVdzTxuWgpaNf&X-Amz-Signature=e70c2a615c545bb601cb8f46e8aa92f14fda2414a4c5001b000f235625964cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
