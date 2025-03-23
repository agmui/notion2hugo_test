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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ITA77G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAK5No%2FY4xB5FQE86R1aDZAfcteg69gGPAF0kOf36H2LAiEAmFCV7h%2B4XQCXjk%2F7edDwF37s8XDlt3E2E9CJe0vx7rQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF%2BSYsSn9HSQtBrBCrcAzKhsQO7yTPYDsR28fbEU3GLwm8Q3HIs8kBLHY0ib61%2BcgEN80JEHUNxHcj36RHVOBZcmVt9cH6EZ2laKJndPdWwuEmodQqakEi4PCSce10t7%2FJFttY436YDlugDYlLoEv5m%2FfxoUtK0ydIDU0yt5igf25IBqRio9ha4qp2k0kt03Ua%2FVsxkkjFAIGiTRaDFBbHVM%2FDDYz%2FVPR9BqWZace8IAZl2Ajt1tUP54Dmq%2Bomgp6SSvBWXzThfItGTLXa1PVIoKFHpLWqylEgP6HpDOOSLFX0wiHDcBFyC3eH3udsqRXmdkEuT7gOSOburRW%2FEacglNjH%2Bj%2BzAVCCA4ma3xKuQbUM0GevSEJfqGTcodzaCfl3X9z79QAlKCauhOWHLxhsCEjFClKemm%2F4BpLlpITjsCH9jwFMikj1ReKHNvNuAPT5uUT7jgSWqB1OMMR4bXn4z%2BXZKIUVJq9HhYAjMzTh5J9boGVCP8%2FsQEjR7RLn5Cw77n79yjjQqYohZcRUZwDDC9F%2FTyduDw91%2BDYpC4RKD3l9uYfaKhEBag8YSqNgXOY4ge9TL%2BEsadROdhZk4FmstTyz8Vrgt1ojCFa3qzY66MTQgiwViIsMKV3%2ByLl%2FbEQKRn6yWq3aYSvFlMInN%2F74GOqUBsowAaaZC%2BcDDUsrQdK7WOGYNzqLjm66s5skn%2FBj98Q%2B6REyVD7ZlrkBKJ%2B%2FVV%2BcPcirBBkQV8AaXvnNEwIj9O7dq8wn%2FAebugL6MEqxroIj5wZX1ewAVbwR%2F044svjz4MGTO%2FdzL8K%2BIUbASry7K52j%2FVHM0aQOK5FMX5hHTyPWDcR6AGFHJrG00BRUPY9YDqJF0CkYUbGG35LiAZprHuOFeSLMW&X-Amz-Signature=91e6193d52aa9e0ad1603381c32e6c130704c9edd77374e8fbfd16b386d37f39&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ITA77G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAK5No%2FY4xB5FQE86R1aDZAfcteg69gGPAF0kOf36H2LAiEAmFCV7h%2B4XQCXjk%2F7edDwF37s8XDlt3E2E9CJe0vx7rQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF%2BSYsSn9HSQtBrBCrcAzKhsQO7yTPYDsR28fbEU3GLwm8Q3HIs8kBLHY0ib61%2BcgEN80JEHUNxHcj36RHVOBZcmVt9cH6EZ2laKJndPdWwuEmodQqakEi4PCSce10t7%2FJFttY436YDlugDYlLoEv5m%2FfxoUtK0ydIDU0yt5igf25IBqRio9ha4qp2k0kt03Ua%2FVsxkkjFAIGiTRaDFBbHVM%2FDDYz%2FVPR9BqWZace8IAZl2Ajt1tUP54Dmq%2Bomgp6SSvBWXzThfItGTLXa1PVIoKFHpLWqylEgP6HpDOOSLFX0wiHDcBFyC3eH3udsqRXmdkEuT7gOSOburRW%2FEacglNjH%2Bj%2BzAVCCA4ma3xKuQbUM0GevSEJfqGTcodzaCfl3X9z79QAlKCauhOWHLxhsCEjFClKemm%2F4BpLlpITjsCH9jwFMikj1ReKHNvNuAPT5uUT7jgSWqB1OMMR4bXn4z%2BXZKIUVJq9HhYAjMzTh5J9boGVCP8%2FsQEjR7RLn5Cw77n79yjjQqYohZcRUZwDDC9F%2FTyduDw91%2BDYpC4RKD3l9uYfaKhEBag8YSqNgXOY4ge9TL%2BEsadROdhZk4FmstTyz8Vrgt1ojCFa3qzY66MTQgiwViIsMKV3%2ByLl%2FbEQKRn6yWq3aYSvFlMInN%2F74GOqUBsowAaaZC%2BcDDUsrQdK7WOGYNzqLjm66s5skn%2FBj98Q%2B6REyVD7ZlrkBKJ%2B%2FVV%2BcPcirBBkQV8AaXvnNEwIj9O7dq8wn%2FAebugL6MEqxroIj5wZX1ewAVbwR%2F044svjz4MGTO%2FdzL8K%2BIUbASry7K52j%2FVHM0aQOK5FMX5hHTyPWDcR6AGFHJrG00BRUPY9YDqJF0CkYUbGG35LiAZprHuOFeSLMW&X-Amz-Signature=412f5ddcb4ce21b75cfca9c785285bd50f683e322252bfa9b5afa7f6d6e9ac85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
