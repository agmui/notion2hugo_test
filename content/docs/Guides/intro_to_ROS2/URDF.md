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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBFBIKG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDTf256y9VJIiYliBkFmwrx7gN%2FZk95LLuukDY7E2CRVQIhAPBCuHQEByZcBsQ8nN2grxouDfg1I1xsggGWus8fPfFlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziHuX9Op86%2Fpcrx%2Fcq3AOe9y8Ny7NfmI21dT5AoxO809%2FyE1lX0E31lD42I1MqxKJWf%2BOYP5bpHRW1hQ8ns0BOtH2lOe%2FfmtOB8jQtYD38Ardnt4dYPt0S4lF5ISw%2BDAOkfEwYVreB1E%2FRaz5ZGS2qJMT32CQEjLH72zMBmMhC3Nw3kS%2FgOkzcvlMGVNA7bL2Mixd9eOjNjfNa3YtLt2%2FNae8IUVt5H2Rx8cMmLtD6n%2FlIelTcmpUHENUNVmxXtE26taXQXHUcsDiTqdNKqyHbbaVso8dYTxjxFkQLYdnPA%2BQXJXuWgFeMwncm%2BulzNm4sVrLGUots7%2B6vX4oEhVCuM5lKLD0dyiuWP6lP7SzTfpJXGDh5zOQ%2Bl9fFFioMXngb0kaIqWEJZZ5ys9c%2BGfqrUYZcs28uynqt2yow3A2vks7Vfn7rQiS4%2FT%2BkqpFveTkEy9taJgNHup67LJrJo7X2u1cYGiyCZ%2BShF3d9sklWZR3ICEsFAr51EzCzJJpMdcgpsAClvcYMFFiol1aLDeRCL2bnY9Kg7KqbeD%2FTbYt6VLF9%2Ft%2BYwoIrGo58ZzoKq5B8MBb1xVxQxiT%2Fn4wBh%2BLTHJ7KDv6UyToX0LjOQGkzFca9Ai5wVtuq7nMwF%2BMGf05BiLwaeCtC90gxbTC7i4i%2BBjqkASeOe4aMBRgJnxakpU1iTkSpTZPzdSgdjebRLrGsxlWTNe07k2gWpyoMJW11Id%2FTz9SxOT0%2BSHqJCMRc2AQb9RVQ736b8vbreINrk9Jr%2FKvRJWTj1%2F3UpsN6y%2Bt7mg0uWWEbFx3uFoWPpasDZBXa2RXZjTa%2FFXJSCUn9BLv3d9LZXZld8NW6XmRrPkcKbV83%2BmgLXUXP09ShnalMqXk6zbh8BA%2F3&X-Amz-Signature=ae516bf5e1cb58d0a8590e3c21fea27f15123037fbb9e05f09fd8c102c7d9499&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBFBIKG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDTf256y9VJIiYliBkFmwrx7gN%2FZk95LLuukDY7E2CRVQIhAPBCuHQEByZcBsQ8nN2grxouDfg1I1xsggGWus8fPfFlKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziHuX9Op86%2Fpcrx%2Fcq3AOe9y8Ny7NfmI21dT5AoxO809%2FyE1lX0E31lD42I1MqxKJWf%2BOYP5bpHRW1hQ8ns0BOtH2lOe%2FfmtOB8jQtYD38Ardnt4dYPt0S4lF5ISw%2BDAOkfEwYVreB1E%2FRaz5ZGS2qJMT32CQEjLH72zMBmMhC3Nw3kS%2FgOkzcvlMGVNA7bL2Mixd9eOjNjfNa3YtLt2%2FNae8IUVt5H2Rx8cMmLtD6n%2FlIelTcmpUHENUNVmxXtE26taXQXHUcsDiTqdNKqyHbbaVso8dYTxjxFkQLYdnPA%2BQXJXuWgFeMwncm%2BulzNm4sVrLGUots7%2B6vX4oEhVCuM5lKLD0dyiuWP6lP7SzTfpJXGDh5zOQ%2Bl9fFFioMXngb0kaIqWEJZZ5ys9c%2BGfqrUYZcs28uynqt2yow3A2vks7Vfn7rQiS4%2FT%2BkqpFveTkEy9taJgNHup67LJrJo7X2u1cYGiyCZ%2BShF3d9sklWZR3ICEsFAr51EzCzJJpMdcgpsAClvcYMFFiol1aLDeRCL2bnY9Kg7KqbeD%2FTbYt6VLF9%2Ft%2BYwoIrGo58ZzoKq5B8MBb1xVxQxiT%2Fn4wBh%2BLTHJ7KDv6UyToX0LjOQGkzFca9Ai5wVtuq7nMwF%2BMGf05BiLwaeCtC90gxbTC7i4i%2BBjqkASeOe4aMBRgJnxakpU1iTkSpTZPzdSgdjebRLrGsxlWTNe07k2gWpyoMJW11Id%2FTz9SxOT0%2BSHqJCMRc2AQb9RVQ736b8vbreINrk9Jr%2FKvRJWTj1%2F3UpsN6y%2Bt7mg0uWWEbFx3uFoWPpasDZBXa2RXZjTa%2FFXJSCUn9BLv3d9LZXZld8NW6XmRrPkcKbV83%2BmgLXUXP09ShnalMqXk6zbh8BA%2F3&X-Amz-Signature=4b65e4f282e1bec1b3a934bf2748c4bbed49045dcad0eb559dfc14ffb02e614d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
