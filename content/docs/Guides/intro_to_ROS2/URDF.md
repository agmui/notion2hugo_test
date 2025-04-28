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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTCRHMV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdslCLOv61fWvGMr%2Fie3DnamYnFlL0tx0AyILfSl3KPwIhAP%2FJ1AfCuAnfSCIKUyJJT4Qioaib5cqIPLo%2Flfm7ziW9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzEFVf%2FC2Mj6OVL7EUq3APh%2BBRt6aWJZra%2BsF6SJTYm0qmoqRr59hSpt1pJonVcaFSjNjEuKjVJNaS9IgszBfZ5rYa%2B4qp%2F3WVf9H4xqV13bDia4vmQGsJE7XNexkEeSDNkmD0vZLG7R5ZUZ0AUphDcIcmd4ZhO%2B7lF1phBSwlmF10Jxb367vyo9huTKT9HyJsGG80JkbOZW82hn%2B6PPM2SFWH81HcIKWEDl8xRtEU4q6IX%2BAp5AordoPHKXkHy7y2WsNipVwO5SN2Gkz4knqSf3x0QNKZvp6F0ARqOJAff%2FvfuJea1oVz%2FnpYikc1Jp%2BXc1wZzggyNi45MnYua%2BPAMBNNcbLIvRD%2FAShGgzpF6luMsHvYyHB6EREvpE%2F8zRlfYq3b%2BCjKxqcC%2BzyuEtWvKm3CG%2B%2FfkDKyE4YMjVX8SlosT7%2Bs53Ve0FtEWLMJ1Nseo3wg715oppcv7O%2FzHN0yUJSh9Nyy21qisTVzN0nxDBoBzVEvyqD3OizEVLNNzwGNk4whxFqrGw%2BaLfb6kt1E2jdRhvKfKKhO%2F4bWtfTXnlmfJxSxAGncQvLH8rKGmOZI78YZ3PCpDVxsnmco4d7zULpGx5HeP1f800l0oJzb71mpn3OKN4ckjpHD%2Fp%2F3wipzOnm4V7A9W2fzs1TD0obvABjqkAYlB7%2FTaMCmd78TtsD0s96de5Csa%2Ff%2BkK5s0guApnbDYIeRt0%2FsR%2FBWfZwVrArlbHSAUjNpGb35zDHrlpmdpI0SDsfctB47igMwKR%2BQ6ivjqRVflDx4a8BW%2FMnOgV6nMz7f7rMfG4%2BiaQ0P96ItALcOBRihNTi%2BS75cW67mJ0D2vpBJsZmjiiLi7cFlXyrFwNO1iReOAWN4lbxaqR0d1Es2t7t0e&X-Amz-Signature=dc6201069eb4b2ea3dfed99da3887d7b38bcccaaab3c59ebfef6a40e7f1bff5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTCRHMV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdslCLOv61fWvGMr%2Fie3DnamYnFlL0tx0AyILfSl3KPwIhAP%2FJ1AfCuAnfSCIKUyJJT4Qioaib5cqIPLo%2Flfm7ziW9Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzEFVf%2FC2Mj6OVL7EUq3APh%2BBRt6aWJZra%2BsF6SJTYm0qmoqRr59hSpt1pJonVcaFSjNjEuKjVJNaS9IgszBfZ5rYa%2B4qp%2F3WVf9H4xqV13bDia4vmQGsJE7XNexkEeSDNkmD0vZLG7R5ZUZ0AUphDcIcmd4ZhO%2B7lF1phBSwlmF10Jxb367vyo9huTKT9HyJsGG80JkbOZW82hn%2B6PPM2SFWH81HcIKWEDl8xRtEU4q6IX%2BAp5AordoPHKXkHy7y2WsNipVwO5SN2Gkz4knqSf3x0QNKZvp6F0ARqOJAff%2FvfuJea1oVz%2FnpYikc1Jp%2BXc1wZzggyNi45MnYua%2BPAMBNNcbLIvRD%2FAShGgzpF6luMsHvYyHB6EREvpE%2F8zRlfYq3b%2BCjKxqcC%2BzyuEtWvKm3CG%2B%2FfkDKyE4YMjVX8SlosT7%2Bs53Ve0FtEWLMJ1Nseo3wg715oppcv7O%2FzHN0yUJSh9Nyy21qisTVzN0nxDBoBzVEvyqD3OizEVLNNzwGNk4whxFqrGw%2BaLfb6kt1E2jdRhvKfKKhO%2F4bWtfTXnlmfJxSxAGncQvLH8rKGmOZI78YZ3PCpDVxsnmco4d7zULpGx5HeP1f800l0oJzb71mpn3OKN4ckjpHD%2Fp%2F3wipzOnm4V7A9W2fzs1TD0obvABjqkAYlB7%2FTaMCmd78TtsD0s96de5Csa%2Ff%2BkK5s0guApnbDYIeRt0%2FsR%2FBWfZwVrArlbHSAUjNpGb35zDHrlpmdpI0SDsfctB47igMwKR%2BQ6ivjqRVflDx4a8BW%2FMnOgV6nMz7f7rMfG4%2BiaQ0P96ItALcOBRihNTi%2BS75cW67mJ0D2vpBJsZmjiiLi7cFlXyrFwNO1iReOAWN4lbxaqR0d1Es2t7t0e&X-Amz-Signature=20e0a455efd537e98fa3c4ad3326392e577af99e1ead207b10d2aa6bb82820fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
