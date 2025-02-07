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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2FFLOA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC3l5Xc3lb2X0GkTGopktTxm2ZS3xS3uPNmYtJUjIOY7QIhAOnElNbr1IJeWX3Lqctl8%2BjX1E2D1EN0SusWKCnesbf%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgygsHHqNXydpiGuN78q3AO%2FhNxtptC6tOciP%2BvXuT0uTkYYS5UOpasiDqOwFktV6cDqIg20C0uQigBXXyiRDDasMZ3xxcH%2BdpFCy96q3lD1bwu%2Fwu5xUDWb5eAcwpQPyozafQ87%2B1SSkHKXKy1K%2FwcXXlz%2FXVzEV%2FEnFWrl1F%2B4cQPNyz7xP0FMG4%2B7d2GhyRwMAa0dBg1z1rsu4mQdh14rczkQGYPn%2FCBKM6govMvNNWuAkLKZrNYwPup5ziaOUzmbTzmWMxvoS0ZHYPMFgBRbN01t0idFd5HqfPyHxUMXOlxNEHb79ik4r29e3%2FaFMtaEd%2FF0YHI106nfYoVrEtyRPCf4dwA8ZrjrrSpvfJlRVWvKIqE8CEml19Pcq%2BrR7lOHUNb95Dj7FkxlRxI4ecFtUr8dwhHDRsUXrD%2FWz5qkHZSgJ7hDWXnckW3lX43yC4eOaVEtVm2FXAq%2FlloZ8gLP%2Br2aD8AF0yUXEcbRi0UKdwYeMVI7hVT2xQnbvDFNX5fdSyjtQRsX4Qutk9e0iZ0OwhTCkoizF2%2B8Zb%2FwOVEtB8qTH8MlN%2BEfMyUYwKPAtuBrIWslQTjUp3BD8ikVlo9jOQqkvOeF%2BJ5diD%2BgWC7EzJe5rWpXQQoB%2BESeWP6xtW9GrJa3AnCgC8gG5DDLm5W9BjqkAeNpZem5hueE202IqizxupjZ%2BOVxUYtAtKrpYdSC2dBwiFn%2F%2FXxZowqUrJC6CvaLWu4xaIbFzL2Yw1Cg2wvfd9IZJ%2Bw5KyValzHDQ25hIW2M9f2y5qq3jwyWujGrLrRkH%2BKiMab5%2BU1rpMyyp%2BZYT1JL7rCscRXiLx9wdP%2BrvAdMcs%2BkJ3SidQdXm68a7PxU6Uw0Q4LdVRGvQQ9I6KnrlQgQNdTY&X-Amz-Signature=8a521fb1ce06af30f5e3a8a35c99000f382e5bded29389652505721a13827bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2FFLOA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC3l5Xc3lb2X0GkTGopktTxm2ZS3xS3uPNmYtJUjIOY7QIhAOnElNbr1IJeWX3Lqctl8%2BjX1E2D1EN0SusWKCnesbf%2FKv8DCGkQABoMNjM3NDIzMTgzODA1IgygsHHqNXydpiGuN78q3AO%2FhNxtptC6tOciP%2BvXuT0uTkYYS5UOpasiDqOwFktV6cDqIg20C0uQigBXXyiRDDasMZ3xxcH%2BdpFCy96q3lD1bwu%2Fwu5xUDWb5eAcwpQPyozafQ87%2B1SSkHKXKy1K%2FwcXXlz%2FXVzEV%2FEnFWrl1F%2B4cQPNyz7xP0FMG4%2B7d2GhyRwMAa0dBg1z1rsu4mQdh14rczkQGYPn%2FCBKM6govMvNNWuAkLKZrNYwPup5ziaOUzmbTzmWMxvoS0ZHYPMFgBRbN01t0idFd5HqfPyHxUMXOlxNEHb79ik4r29e3%2FaFMtaEd%2FF0YHI106nfYoVrEtyRPCf4dwA8ZrjrrSpvfJlRVWvKIqE8CEml19Pcq%2BrR7lOHUNb95Dj7FkxlRxI4ecFtUr8dwhHDRsUXrD%2FWz5qkHZSgJ7hDWXnckW3lX43yC4eOaVEtVm2FXAq%2FlloZ8gLP%2Br2aD8AF0yUXEcbRi0UKdwYeMVI7hVT2xQnbvDFNX5fdSyjtQRsX4Qutk9e0iZ0OwhTCkoizF2%2B8Zb%2FwOVEtB8qTH8MlN%2BEfMyUYwKPAtuBrIWslQTjUp3BD8ikVlo9jOQqkvOeF%2BJ5diD%2BgWC7EzJe5rWpXQQoB%2BESeWP6xtW9GrJa3AnCgC8gG5DDLm5W9BjqkAeNpZem5hueE202IqizxupjZ%2BOVxUYtAtKrpYdSC2dBwiFn%2F%2FXxZowqUrJC6CvaLWu4xaIbFzL2Yw1Cg2wvfd9IZJ%2Bw5KyValzHDQ25hIW2M9f2y5qq3jwyWujGrLrRkH%2BKiMab5%2BU1rpMyyp%2BZYT1JL7rCscRXiLx9wdP%2BrvAdMcs%2BkJ3SidQdXm68a7PxU6Uw0Q4LdVRGvQQ9I6KnrlQgQNdTY&X-Amz-Signature=73684e919031cf3815e50b7c4f2dea3364228dfc8026f87ff372258564b3bfd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
