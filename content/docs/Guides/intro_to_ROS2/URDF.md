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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3XZFXWS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIF8EgBJJMm1daMGuQ%2FDsVk0roSpYfcHfNlOD9W0CNbm7AiA7X%2F9QV4Ip0HTzljLMPpD3a7wreBz53O%2Fo8Yciv1k0XCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkZqbS8zBFPPUh1ktKtwDPezvcW7Rp7gAVnW9%2BRcRmwGjwhoVXyLM5AZGcqMPVjbHRJtedsMI2h7Ss%2BZpeqR5YXSIrRFj7XUvrWT9uFEPN3wHy4uxU8p7iPmVkdq42lgOgraFPn2UKBGq2pcCCuuro5sesY5DLT1dOmSeQmc%2BNGykIN04374%2B%2FbnxDpt0Y71on0x8XOxFbRtmtRM682aHHCPHh%2FJG1ADKH%2Bh1SlO6ZbbIVFLurC%2BuwKkiqfz2O7cMA6GkFr%2B7Ith5n7%2Ba%2Fn5Wtqm7P2DG7T8SNl%2BK7NhNDRZhDUpeOld3J0nFhS%2BHx3%2BX%2Bs7xhMJk8KSYckHAPvPYvZr6KXnh4zvKkLkdpBL4xobUSQjsapggnThurNpgjpEw4%2B9WE6j6CbIGtBpKM3AztfvCw7ta1ra9Lv2HAgbnT5a4TaHpG4yYZMwzLgnczH9EJ7X%2FucAz3qiIjR3tkPNsDWzq4sZnRpfXZl1BjB5YC397oLT83TD%2FqTcqZso1va6vEwRICVaHMse%2BpU9EZr5IYXO%2FKJHOalsGEMpz2DtUrSRwI8PKHZTiIe0HhsWUy0uUaONim5FpK6mrriCaZQ3LNSawaxuVFavAeJUtLQJqk%2Fyt9gV83mbwcCEGnZ6b3JbmSTkV44sfQVNL13QwgJS6wQY6pgHank0WEkS3SyhvR6XQOo4Y7HsWFwFbxumHh%2BG1XgV%2BVquuEyHwjL8P1u5BfPPljU0dPNoZfnRcJAg3n1nFRVPz%2FiYhKGbzMUky5vhvFmGH6LFm%2BK9i2NSxM2wu4tKcHV7Lg5v33vTn%2B4s6%2FLC2FsgMVT7fVx48abyb4kHE2WKpS9cLgoAJDKSDSkFHt2Q60LGBxNYFPX1n1nmH8CYpzn7ImTtEF0gn&X-Amz-Signature=919ee7e5285db9bfece690a23405926a3f0ed81c5dc25d200094d807ac68be8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3XZFXWS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIF8EgBJJMm1daMGuQ%2FDsVk0roSpYfcHfNlOD9W0CNbm7AiA7X%2F9QV4Ip0HTzljLMPpD3a7wreBz53O%2Fo8Yciv1k0XCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkZqbS8zBFPPUh1ktKtwDPezvcW7Rp7gAVnW9%2BRcRmwGjwhoVXyLM5AZGcqMPVjbHRJtedsMI2h7Ss%2BZpeqR5YXSIrRFj7XUvrWT9uFEPN3wHy4uxU8p7iPmVkdq42lgOgraFPn2UKBGq2pcCCuuro5sesY5DLT1dOmSeQmc%2BNGykIN04374%2B%2FbnxDpt0Y71on0x8XOxFbRtmtRM682aHHCPHh%2FJG1ADKH%2Bh1SlO6ZbbIVFLurC%2BuwKkiqfz2O7cMA6GkFr%2B7Ith5n7%2Ba%2Fn5Wtqm7P2DG7T8SNl%2BK7NhNDRZhDUpeOld3J0nFhS%2BHx3%2BX%2Bs7xhMJk8KSYckHAPvPYvZr6KXnh4zvKkLkdpBL4xobUSQjsapggnThurNpgjpEw4%2B9WE6j6CbIGtBpKM3AztfvCw7ta1ra9Lv2HAgbnT5a4TaHpG4yYZMwzLgnczH9EJ7X%2FucAz3qiIjR3tkPNsDWzq4sZnRpfXZl1BjB5YC397oLT83TD%2FqTcqZso1va6vEwRICVaHMse%2BpU9EZr5IYXO%2FKJHOalsGEMpz2DtUrSRwI8PKHZTiIe0HhsWUy0uUaONim5FpK6mrriCaZQ3LNSawaxuVFavAeJUtLQJqk%2Fyt9gV83mbwcCEGnZ6b3JbmSTkV44sfQVNL13QwgJS6wQY6pgHank0WEkS3SyhvR6XQOo4Y7HsWFwFbxumHh%2BG1XgV%2BVquuEyHwjL8P1u5BfPPljU0dPNoZfnRcJAg3n1nFRVPz%2FiYhKGbzMUky5vhvFmGH6LFm%2BK9i2NSxM2wu4tKcHV7Lg5v33vTn%2B4s6%2FLC2FsgMVT7fVx48abyb4kHE2WKpS9cLgoAJDKSDSkFHt2Q60LGBxNYFPX1n1nmH8CYpzn7ImTtEF0gn&X-Amz-Signature=388a467d70211ab5631f70a60798b4d1ab294035961883cb7809d9114dbe3225&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
