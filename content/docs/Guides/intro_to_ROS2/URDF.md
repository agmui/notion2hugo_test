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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBFH225%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1TPAgpJ4aa8TSUixbtBJoEp4cFU0bTmd9FYfD9xsUEAiABft2mwQcOkRueYeTXK4OdB8FZhcEaTCiEK%2Br5dcPEnyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMXK7n7CL%2B%2FDi86parKtwD6%2FG3xnAeClcHQ%2BFR%2BEwLbCXsmTb%2FoDKXzURD8eIgOTj19dAuUN2PGjy%2FofI1casPrdoXEtEbNjIr71HGJobvJQEaSO6WQaZvtfl58u%2BPoSquRsWacxUM0QpPaWD76hJZ9%2BL3yN29SYBCQYlEOtujnWSdPvEMjPunNcN3X01ouq1c0UkxwxOS2mAs0I4Qvj9e0tFq1EruyKABtnKs184hMJIaoj2LdD4lOTiraQjR%2FvzHMgCAR4e4p9X9kK0phZMIpiQCQpx5FEVuyRGuWbVYg%2FTanEwZLZ5gULiWAE98mDgT3HvQpY4xME5jcycZWnKVpsdX2knEwOzRidUoCN%2FkpOeGKsUxADxqry97Y%2By392uBDbCVvRHKz2jWKNWzrB9BPP36Z5rMd1sljJmgshp%2FQ%2BzOsO041b3SdEtKe8C%2BTlhmd5QCvI5TELTAb5m2YN4gL%2FBtSiw7IHUkLwjgJVtabfB2jI7RMemv4p%2FLgKO%2BJ3MaP80xlXQJIhq3GoSVn3QDDJu7mwLugXY95W7OuUKyxHJqmfA7e%2FRFytYTvtAZhEGrH8CnDSUFPiA6Ch3DFGjSHiCOAXhF49s1LyFLcDE%2FNHucEe86FfUT6SrdaNBnvrKW2mr2sMpJdrgWaNQwk4y4wAY6pgEAMOYk8b3f%2FyBWCurlXXbqOhftKBPcVLC8rXBSgJ2qLEjWJAIfqm%2BBbNzUlHTDhsz22O8YJWCSWcn41supb7BRrCBi3SRaSEt1P%2BQ3scr7nj%2BJjcV9xhZrVoiRgv2Rx58aeWJjGrtLzx5LhrO1ACC8HI2v67SbkuEp8BstoAzo3CCKkerpe3e2XzdFAP78ip5EbwBNu8sJx1u2s9XR34vnfRuXOGz4&X-Amz-Signature=23af5d6f7c05dff55a1185e91ab8bb37ddc0cad44fe2000d18f7cc23220b3172&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBFH225%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1TPAgpJ4aa8TSUixbtBJoEp4cFU0bTmd9FYfD9xsUEAiABft2mwQcOkRueYeTXK4OdB8FZhcEaTCiEK%2Br5dcPEnyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMXK7n7CL%2B%2FDi86parKtwD6%2FG3xnAeClcHQ%2BFR%2BEwLbCXsmTb%2FoDKXzURD8eIgOTj19dAuUN2PGjy%2FofI1casPrdoXEtEbNjIr71HGJobvJQEaSO6WQaZvtfl58u%2BPoSquRsWacxUM0QpPaWD76hJZ9%2BL3yN29SYBCQYlEOtujnWSdPvEMjPunNcN3X01ouq1c0UkxwxOS2mAs0I4Qvj9e0tFq1EruyKABtnKs184hMJIaoj2LdD4lOTiraQjR%2FvzHMgCAR4e4p9X9kK0phZMIpiQCQpx5FEVuyRGuWbVYg%2FTanEwZLZ5gULiWAE98mDgT3HvQpY4xME5jcycZWnKVpsdX2knEwOzRidUoCN%2FkpOeGKsUxADxqry97Y%2By392uBDbCVvRHKz2jWKNWzrB9BPP36Z5rMd1sljJmgshp%2FQ%2BzOsO041b3SdEtKe8C%2BTlhmd5QCvI5TELTAb5m2YN4gL%2FBtSiw7IHUkLwjgJVtabfB2jI7RMemv4p%2FLgKO%2BJ3MaP80xlXQJIhq3GoSVn3QDDJu7mwLugXY95W7OuUKyxHJqmfA7e%2FRFytYTvtAZhEGrH8CnDSUFPiA6Ch3DFGjSHiCOAXhF49s1LyFLcDE%2FNHucEe86FfUT6SrdaNBnvrKW2mr2sMpJdrgWaNQwk4y4wAY6pgEAMOYk8b3f%2FyBWCurlXXbqOhftKBPcVLC8rXBSgJ2qLEjWJAIfqm%2BBbNzUlHTDhsz22O8YJWCSWcn41supb7BRrCBi3SRaSEt1P%2BQ3scr7nj%2BJjcV9xhZrVoiRgv2Rx58aeWJjGrtLzx5LhrO1ACC8HI2v67SbkuEp8BstoAzo3CCKkerpe3e2XzdFAP78ip5EbwBNu8sJx1u2s9XR34vnfRuXOGz4&X-Amz-Signature=840f4502f99ba9c935a5a087acd45cfc8af176d5782eca5271d506402aaee591&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
