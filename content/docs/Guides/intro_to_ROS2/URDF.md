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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YNZIRW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuEv549ztMLru%2F%2FJAf5AM0bEc1zGtfZMzLLrmbBTvP8AiEAmywTJ4TRyNYJSxwFo3FiZiVUi85ZDw1qCt2OEw3Mtkcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDINBE0Cy5bPvFCU%2B9SrcA4%2BpfLIXe5vnfKXJD7Zo4INziSGqWsSEBqlXcw13H9vDZaeXoJIgb%2FuqhqVimNaShwxZEK%2FgbFTNFvsmeH5%2FEqSGomHPz9rXzMyD7QjxwiKq3rxTBHBQcq6G6JitpOcJwsblSOqvW%2FNi9FLjM%2F4wHsPJmJoyZUqsBgD72kFGWwdg4zyIn0JWypYB4B4Y%2FYK9u6%2FcSDF5HsT6tAbZPEUmFDPxXItBAihGBFPC3T9KIC8lsnitI3ldPugUCvxmBmNShki2T8JhOlr6nfMPwZIkCVram1jyC9mmJIFN6es6LNyYDNCgWdZUcifWa7lFiHItErDmHAnLkDnzcJu1HUPiNaScTTw5C9fNAISVGsGIIDovLla4t7rEtHdGTMpR8xxUGfCTyYLZvjJE2KqA7ogtdYEGbBuOlIZsLGioFhncuNHFJ66bFTcOtI3qCIW83lxurxwIsFN%2BNqFH%2F8yGWF7ECyzJAfrgf7BBzO1rd%2Fmw6yE0edcARa7M449T4nT%2Bo1syLXHkIx%2BbaOL%2FZtnW1ulZpHYuELIwy0lgJ4TUn72hVaI6bMn7GnVNXjEhDYq1XtYZKYwMvqT%2BEIkTI5uYHQwLpE9bsAxUFWvc5qhT%2FfPmeKVMVxPlsuDy2GT3XK1YMIbXkL8GOqUBMjnBgRbQ4v7xrTPUHl%2Bthuml3EGz2eo56Q87jQM8FRKVTI4s0qRMZIq%2BnhvT1o06w8um7e2lAF37PMGPfipaz2VsUo4LePF3ey2IrvPRUyqXCAH7PRwJCyodILXE8EanT%2BUCd5HsEEe7CS3x%2BgjVQIVXJHqJ2izmTupGVKLgdZgiv%2FVNjOydMPW5tef93599tBtPSIPDtgwiCViF7nvi1lIIDrJ9&X-Amz-Signature=b27ce7e1892bccfe46a7890f71a37742283c1955eebdcdccf1987fb195fccfe4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YNZIRW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuEv549ztMLru%2F%2FJAf5AM0bEc1zGtfZMzLLrmbBTvP8AiEAmywTJ4TRyNYJSxwFo3FiZiVUi85ZDw1qCt2OEw3Mtkcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDINBE0Cy5bPvFCU%2B9SrcA4%2BpfLIXe5vnfKXJD7Zo4INziSGqWsSEBqlXcw13H9vDZaeXoJIgb%2FuqhqVimNaShwxZEK%2FgbFTNFvsmeH5%2FEqSGomHPz9rXzMyD7QjxwiKq3rxTBHBQcq6G6JitpOcJwsblSOqvW%2FNi9FLjM%2F4wHsPJmJoyZUqsBgD72kFGWwdg4zyIn0JWypYB4B4Y%2FYK9u6%2FcSDF5HsT6tAbZPEUmFDPxXItBAihGBFPC3T9KIC8lsnitI3ldPugUCvxmBmNShki2T8JhOlr6nfMPwZIkCVram1jyC9mmJIFN6es6LNyYDNCgWdZUcifWa7lFiHItErDmHAnLkDnzcJu1HUPiNaScTTw5C9fNAISVGsGIIDovLla4t7rEtHdGTMpR8xxUGfCTyYLZvjJE2KqA7ogtdYEGbBuOlIZsLGioFhncuNHFJ66bFTcOtI3qCIW83lxurxwIsFN%2BNqFH%2F8yGWF7ECyzJAfrgf7BBzO1rd%2Fmw6yE0edcARa7M449T4nT%2Bo1syLXHkIx%2BbaOL%2FZtnW1ulZpHYuELIwy0lgJ4TUn72hVaI6bMn7GnVNXjEhDYq1XtYZKYwMvqT%2BEIkTI5uYHQwLpE9bsAxUFWvc5qhT%2FfPmeKVMVxPlsuDy2GT3XK1YMIbXkL8GOqUBMjnBgRbQ4v7xrTPUHl%2Bthuml3EGz2eo56Q87jQM8FRKVTI4s0qRMZIq%2BnhvT1o06w8um7e2lAF37PMGPfipaz2VsUo4LePF3ey2IrvPRUyqXCAH7PRwJCyodILXE8EanT%2BUCd5HsEEe7CS3x%2BgjVQIVXJHqJ2izmTupGVKLgdZgiv%2FVNjOydMPW5tef93599tBtPSIPDtgwiCViF7nvi1lIIDrJ9&X-Amz-Signature=09880c21a40037c13e3b9ca0c135555edf1a8948d8c1cf2c8e026efbc6aa0490&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
