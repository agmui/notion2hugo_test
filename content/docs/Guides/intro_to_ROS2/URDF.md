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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSFEDMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDV5xqkGcoJYP7eR23VLmmBJEYnyALLDdKroMvBT1lC4AIgJdHFsAxN0Aad%2BUxJN5y9%2FdyqroNKVIub%2BQ2rDr9aKaMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJZ03ld40dSE%2BV853CrcA9jAOLh38VILN49qjjXMG1wNBQ44UrIzhXUKsDKS2gf0oeLQZop1vt%2B2iJKiaCV7wew2GH8gC1uRRo7mA%2FSfUcxTDNCn9IKcw66rVf6goM4CaC0bny%2Be4wVYxKbl5nqqB9zSuPqtBC16oM4mySigQ3Cf3BD09lTuNLj1nGYbDoCokske2OVEQV7NgKKOKGQXwE2sKQtqY62QB2PKf%2BlRAvS1MiUH%2Fd81857EhC71szY%2FVczlYvYMwzuns1feA4W6euG9aEmQRxBOv4C59elnYIj8YVxtCHEW6oEyKzBh6xvDoChbp5lRcT1%2FCA8wWqDIshVWPLyKQXV%2FBk%2FSR3RG6iImecnRO%2FRFrjRA9M1lUz4vRY6vjo%2BeKMwtQJiduD%2FS9YmYdy4ftbDR%2FYDaoOzxRpmpOxnRwEDV44lJPIYeWLU7B66a%2F1V372ZFSukeJZNphVu%2F5Sczh2Ls33r%2B%2FcXaIF1Z%2BzxCBq2%2FcFxRbRwTe0FNQgBAKYOokuMfHsVX54BWKvlk2zBCPZCYOSycPFiUkSjNhNbXLRk0Qez7R8Q67PVzkdg9OtCZFQaFDUmq9eWPKfDxHhCcWSfWT5pt8dlG1ptZhFumAzqneIFVpGLQb3P8Q5%2FEeEndKqpOMAMwMP%2Bc9cIGOqUBQ%2B1JOTb4UV0C5h7WhxrVcSaA9GH9DyHN8f4a7puoMfIiyboJbKfz6ZVf%2Fwe5sqgLC%2BV5qxLBPwy6dN0w5o19xHlF0bYx74V1UQ0Kot1xMXRz2nPsMyaPCPG3SXWNi011LRycI%2BwE6IM%2FBu7paUS52m2UoCuKtXfH3LCg9fta79mDpQUFR41%2BDH1bjBuL%2Be8F%2BHLArrnxXlNQKospSnBosoqUoK%2F8&X-Amz-Signature=6aa18a3407146fa5df819efc8a32fdfda0de1d0d496dcfe4cea75b6d9e288c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSFEDMG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDV5xqkGcoJYP7eR23VLmmBJEYnyALLDdKroMvBT1lC4AIgJdHFsAxN0Aad%2BUxJN5y9%2FdyqroNKVIub%2BQ2rDr9aKaMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJZ03ld40dSE%2BV853CrcA9jAOLh38VILN49qjjXMG1wNBQ44UrIzhXUKsDKS2gf0oeLQZop1vt%2B2iJKiaCV7wew2GH8gC1uRRo7mA%2FSfUcxTDNCn9IKcw66rVf6goM4CaC0bny%2Be4wVYxKbl5nqqB9zSuPqtBC16oM4mySigQ3Cf3BD09lTuNLj1nGYbDoCokske2OVEQV7NgKKOKGQXwE2sKQtqY62QB2PKf%2BlRAvS1MiUH%2Fd81857EhC71szY%2FVczlYvYMwzuns1feA4W6euG9aEmQRxBOv4C59elnYIj8YVxtCHEW6oEyKzBh6xvDoChbp5lRcT1%2FCA8wWqDIshVWPLyKQXV%2FBk%2FSR3RG6iImecnRO%2FRFrjRA9M1lUz4vRY6vjo%2BeKMwtQJiduD%2FS9YmYdy4ftbDR%2FYDaoOzxRpmpOxnRwEDV44lJPIYeWLU7B66a%2F1V372ZFSukeJZNphVu%2F5Sczh2Ls33r%2B%2FcXaIF1Z%2BzxCBq2%2FcFxRbRwTe0FNQgBAKYOokuMfHsVX54BWKvlk2zBCPZCYOSycPFiUkSjNhNbXLRk0Qez7R8Q67PVzkdg9OtCZFQaFDUmq9eWPKfDxHhCcWSfWT5pt8dlG1ptZhFumAzqneIFVpGLQb3P8Q5%2FEeEndKqpOMAMwMP%2Bc9cIGOqUBQ%2B1JOTb4UV0C5h7WhxrVcSaA9GH9DyHN8f4a7puoMfIiyboJbKfz6ZVf%2Fwe5sqgLC%2BV5qxLBPwy6dN0w5o19xHlF0bYx74V1UQ0Kot1xMXRz2nPsMyaPCPG3SXWNi011LRycI%2BwE6IM%2FBu7paUS52m2UoCuKtXfH3LCg9fta79mDpQUFR41%2BDH1bjBuL%2Be8F%2BHLArrnxXlNQKospSnBosoqUoK%2F8&X-Amz-Signature=58b821263c4b260f9067094fce4686a0d624312ae01e605d7035ab86d82ffdb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
