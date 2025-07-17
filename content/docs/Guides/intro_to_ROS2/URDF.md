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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTTVFJW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDytgBwUcaJJIlXFBidBT%2BOoALc8B6%2F7%2FyWXOJIA%2Fo2MAIgDqqK2%2Bl65rN3AjGhJI%2B%2F6M9ZmGOBWM4CCWuPDW5%2FCdcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFFpkFck5s9s%2FM%2BGISrcA9dY7nm3rAoxWmz%2BwwOiE0884Z1Y5BdhAN1FtBMFdw0TyYqTIwwrEoqDC5FkseRvoi8%2BKSeyF8XprxRAtDN89mk%2FTdSitFJbZvNO9%2BRjT9Q0lVAHOiYuQtalXjGuBLWk0WKJM5ZOedH0mxthOjHRT6WkbFvY%2FbFwdG6PcWF0rU9M0U7D6siGETcroCi9RUbzf15KLSp16m0xmYRYHY3SMledyAcEeXM8KdQ0t%2FzyH5UwSw0ngtgB1efRBdm3Om9Yt%2FsYI166%2BpcrhGlyM5kiSp%2BzaftNca6Mw%2FaqPfDTcfkTyhd85fOWfupkWa3TszPj9166gewBAh6BLq2UvpfbZPvj7tYLAGOC2t9fzNWaLXa%2B8A6fzJL85yZac5R3dN7QjL7BOUUiy7dllOVwUIbEP5SN53U3kVMERxjK45fkk2iWxdkAnMZd1UDfEoNNkBDJuLeklwxcPoRYWHXDmnWTi8WcXJJf2WErl%2F3QGYx9s5Sje8TYLJOM2MkpS%2Bd51W6cvxS55IS1TwVfRossR21qWGTvqeL0aiLSwQVSldG%2BSflBsCtsghVFok2c%2FSJ8H%2F7tQWCoihMKs8Eebt8K8Z83nJ%2BOMs77ELea8V%2FupoE4VfAhNrhZkyzOjakYM4P%2FMOLq4sMGOqUBXPfVsaY5VAq7j83RIE4YF8QjZ72jtX5c%2FXzfI5EONgFHYaa%2FUbO4XNPPsVQkF%2Fk1WKex3WcPKwFrj5Gj9J3qR87KzGjEyO9u6g1orNmt9yAhFpdhiYx2fDNnJbHDKDWzhwUDFh1VsUKRd1qkJMglkTOo0KPEUO6Gl%2BHNlQt4YX12FdqlGEkvv2MPVOEYWAuQPTyfxn%2FeO1P1z7tkxNedQT0wQzMG&X-Amz-Signature=4f252c5aec24f87c9ed414459683594694654597dad5386958bcb86eeeefc055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTTVFJW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDytgBwUcaJJIlXFBidBT%2BOoALc8B6%2F7%2FyWXOJIA%2Fo2MAIgDqqK2%2Bl65rN3AjGhJI%2B%2F6M9ZmGOBWM4CCWuPDW5%2FCdcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFFpkFck5s9s%2FM%2BGISrcA9dY7nm3rAoxWmz%2BwwOiE0884Z1Y5BdhAN1FtBMFdw0TyYqTIwwrEoqDC5FkseRvoi8%2BKSeyF8XprxRAtDN89mk%2FTdSitFJbZvNO9%2BRjT9Q0lVAHOiYuQtalXjGuBLWk0WKJM5ZOedH0mxthOjHRT6WkbFvY%2FbFwdG6PcWF0rU9M0U7D6siGETcroCi9RUbzf15KLSp16m0xmYRYHY3SMledyAcEeXM8KdQ0t%2FzyH5UwSw0ngtgB1efRBdm3Om9Yt%2FsYI166%2BpcrhGlyM5kiSp%2BzaftNca6Mw%2FaqPfDTcfkTyhd85fOWfupkWa3TszPj9166gewBAh6BLq2UvpfbZPvj7tYLAGOC2t9fzNWaLXa%2B8A6fzJL85yZac5R3dN7QjL7BOUUiy7dllOVwUIbEP5SN53U3kVMERxjK45fkk2iWxdkAnMZd1UDfEoNNkBDJuLeklwxcPoRYWHXDmnWTi8WcXJJf2WErl%2F3QGYx9s5Sje8TYLJOM2MkpS%2Bd51W6cvxS55IS1TwVfRossR21qWGTvqeL0aiLSwQVSldG%2BSflBsCtsghVFok2c%2FSJ8H%2F7tQWCoihMKs8Eebt8K8Z83nJ%2BOMs77ELea8V%2FupoE4VfAhNrhZkyzOjakYM4P%2FMOLq4sMGOqUBXPfVsaY5VAq7j83RIE4YF8QjZ72jtX5c%2FXzfI5EONgFHYaa%2FUbO4XNPPsVQkF%2Fk1WKex3WcPKwFrj5Gj9J3qR87KzGjEyO9u6g1orNmt9yAhFpdhiYx2fDNnJbHDKDWzhwUDFh1VsUKRd1qkJMglkTOo0KPEUO6Gl%2BHNlQt4YX12FdqlGEkvv2MPVOEYWAuQPTyfxn%2FeO1P1z7tkxNedQT0wQzMG&X-Amz-Signature=c67d2b4b84c374fd62a44f39a76d42b9f10df727d0b16f48434ac94ed28edfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
